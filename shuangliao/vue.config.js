const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
    // 服务端代理，解决跨域
    devServer: {
        proxy: {
            '/sms': {
                target: 'http://fgserver.top',//代理的接口域名
                ws: true,
                changeOrigin: true //允许跨域
            },
            '/user':{
                target: 'http://fgserver.top',//代理的接口域名
                ws: true,
                changeOrigin: true //允许跨域
            },
            '/home':{ // 首页 
                target: 'http://fgserver.top',//代理的接口域名
                ws: true,
                changeOrigin: true //允许跨域
            },
            '/searchUsers':{ // 搜索
                target:'/http://fgserver.top',
                ws:true,
                changeOrigin:true
            },
            '/user':{ // 个人详情页 
                target:'http://fgserver.top',
                ws:true,
                changeOrigin:true
            },
            '/fans':{ // 关注 or 取消关注
                target:'http://fgserver.top',
                ws:true,
                changeOrigin:true
            },
            '/showTaPhotos':{//详情页  TA人相册
                target:'http://fgserver.top',
                ws:true,
                changeOrigin:true
            },
            '/gift':{ // 详情页 底部弹出层 礼物
                target:'http://fgserver.top',
                ws:true,
                changeOrigin:true
            },
            
        }
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    pxtorem({
                        rootValue: 37.5,
                        propList: ['*'],
                        // 该项仅在使用 Circle 组件时需要
                        // 原因参见 https://github.com/youzan/vant/issues/1948
                        selectorBlackList: ['van-circle__layer']
                    })
                ]
            }
        }
    }
};
