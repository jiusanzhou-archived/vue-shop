import { Promise } from 'es6-promise'

const shop_data = {};

export default shop_data

shop_data.getGoodsList = (category, page) => {
    console.log('Fetch '+category+' on '+page)
    return new Promise((resolve, reject) => resolve({
        error: 0,
        data: {
            title: '最新上架',
            goods: [
                {
                    goods_id: 1111,
                    name: 'Swift开发指南',
                    thumb: 'http://res.niaobushi360.com/image/data/Clinie/1113/tu_1113_01.jpg',
                    price: '￥46',
                    old_price: '￥60'
                },
                {
                    goods_id: 1112,
                    name: '编程珠玑',
                    thumb: 'http://res.niaobushi360.com/image/data/Clinie/1113/tu_1113_01.jpg',
                    price: '￥30',
                    old_price: '￥42'
                },
                {
                    goods_id: 1113,
                    name: 'Flume日志采集系统',
                    thumb: 'http://res.niaobushi360.com/image/data/Clinie/1113/tu_1113_01.jpg',
                    price: '￥35',
                    old_price: '￥50'
                },
                {
                    goods_id: 1114,
                    name: 'C++语言入门',
                    thumb: 'http://res.niaobushi360.com/image/data/Clinie/1113/tu_1113_01.jpg',
                    price: '￥20',
                    old_price: '￥28'
                },
                {
                    goods_id: 1115,
                    name: '我不是教你诈（1-5册）',
                    thumb: 'http://res.niaobushi360.com/image/data/Clinie/1113/tu_1113_01.jpg',
                    price: '￥80',
                    old_price: '￥120'
                },
                {
                    goods_id: 1116,
                    name: '编程珠玑2',
                    thumb: 'http://res.niaobushi360.com/image/data/Clinie/1113/tu_1113_01.jpg',
                    price: '￥30',
                    old_price: '￥42'
                },
                {
                    goods_id: 1117,
                    name: 'Flume日志采集系统2',
                    thumb: 'http://res.niaobushi360.com/image/data/Clinie/1113/tu_1113_01.jpg',
                    price: '￥35',
                    old_price: '￥50'
                },
                {
                    goods_id: 1118,
                    name: 'C++语言入门2',
                    thumb: 'http://res.niaobushi360.com/image/data/Clinie/1113/tu_1113_01.jpg',
                    price: '￥20',
                    old_price: '￥28'
                },
                {
                    goods_id: 1119,
                    name: '我不是教你诈（1-5册）2',
                    thumb: 'http://res.niaobushi360.com/image/data/Clinie/1113/tu_1113_01.jpg',
                    price: '￥80',
                    old_price: '￥120'
                },
                {
                    goods_id: 1120,
                    name: '编程珠玑3',
                    thumb: 'http://res.niaobushi360.com/image/data/Clinie/1113/tu_1113_01.jpg',
                    price: '￥30',
                    old_price: '￥42'
                },
                {
                    goods_id: 1121,
                    name: 'Flume日志采集系统3',
                    thumb: 'http://res.niaobushi360.com/image/data/Clinie/1113/tu_1113_01.jpg',
                    price: '￥35',
                    old_price: '￥50'
                },
                {
                    goods_id: 1122,
                    name: 'C++语言入门3',
                    thumb: 'http://res.niaobushi360.com/image/data/Clinie/1113/tu_1113_01.jpg',
                    price: '￥20',
                    old_price: '￥28'
                },
                {
                    goods_id: 1123,
                    name: '我不是教你诈（1-5册）3',
                    thumb: 'http://res.niaobushi360.com/image/data/Clinie/1113/tu_1113_01.jpg',
                    price: '￥80',
                    old_price: '￥120'
                },
                {
                    goods_id: 1124,
                    name: '编程珠玑4',
                    thumb: 'http://res.niaobushi360.com/image/data/Clinie/1113/tu_1113_01.jpg',
                    price: '￥30',
                    old_price: '￥42'
                },
                {
                    goods_id: 1125,
                    name: 'Flume日志采集系统4',
                    thumb: 'http://res.niaobushi360.com/image/data/Clinie/1113/tu_1113_01.jpg',
                    price: '￥35',
                    old_price: '￥50'
                },
                {
                    goods_id: 1126,
                    name: 'C++语言入门4',
                    thumb: 'http://res.niaobushi360.com/image/data/Clinie/1113/tu_1113_01.jpg',
                    price: '￥20',
                    old_price: '￥28'
                },
                {
                    goods_id: 1127,
                    name: '我不是教你诈（1-5册）4',
                    thumb: 'http://res.niaobushi360.com/image/data/Clinie/1113/tu_1113_01.jpg',
                    price: '￥80',
                    old_price: '￥120'
                }
            ]
        }
    }))
}

shop_data.getGoodsOne = goods_id => {
    goods_id = goods_id ? goods_id : 1
    let rdata = {}

    return new Promise((resolve, reject) => resolve(
            shop_data.getGoodsList('', '')
                .then(function(d){
                    for(let i of d.data.goods){
                        if(''+i.goods_id==''+goods_id){
                            rdata = i
                        }
                    }
                    if (Object.keys(rdata).length == 0) {
                        rdata = {
                            goods_id: goods_id,
                            name: '虚拟商品，编号：' + goods_id,
                            thumb: 'http://res.niaobushi360.com/image/data/Clinie/1113/tu_1113_01.jpg',
                            price: '￥' + goods_id * 1,
                            old_price: '￥' + goods_id * 1.2,
                            detail: '这里是详情页面<a href="#">链接</a>',
                            comment: '这里是评论页面<a href="#">链接</a>',
                            info: '这里是相关参数页面<a href="#">链接</a>'
                        }
                    }
                    return {error: 0, data: rdata}
                })
        ))
}