import { Promise } from 'es6-promise'

const store = window.store;
const key = "nb_";

export default {
    name: "storage",
    cart: {
        name: key + 'cart',
        all: function(){
            return Promise.resolve(store.get(this.name))
        },
        add: function(kv){
            console.log(kv);
            this.all().then(d => {
                for(let k in kv){
                    d[k] = d[k]?d[k]+kv[k]:kv[k]
                }
                store.set(this.name, d);
                return Promise.resolve(d)
            })
        },
        get: function(k){
            this.all().then(d => {
                return Promise.resolve(d[k]?{k: d[k]}:{})
            })
        },
        del: function (k){
            this.all().then(d => {
                return Promise.resolve(delete d[k]?true:false)
            })
        },
        clear: function(){
            store.set(this.name, {});
            return Promise.resolve(true)
        },
        init: function(){
            store.get(this.name)?console.log("Not new"):this.clear()
        }
    }
}