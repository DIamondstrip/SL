const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')

module.exports = {
	// 服务端代理，解决跨域
	devServer: {
		proxy: {
			// 请求验证码接口
			'/sms': {
				target: 'http://fgserver.top', //代理的接口域名
				ws: true,
				changeOrigin: true //允许跨域
			},
			//登录注册，我的 接口
			'/user': {
				target: 'http://fgserver.top', //代理的接口域名
				ws: true,
				changeOrigin: true //允许跨域
			},
			// 编辑资料请求数据
			'/getUserInfo': {
				target: 'http://fgserver.top', //代理的接口域名
				ws: true,
				changeOrigin: true //允许跨域
			},
            '/user/visitor':{
                target: 'http://fgserver.top',//代理的接口域名
                ws: true,
                changeOrigin: true //允许跨域
            },
            // 搜索接口代理
            '/searchUsers':{
                target: 'http://fgserver.top',//代理的接口域名
                ws: true,
                changeOrigin: true //允许跨域
            },
			// '/uservisitor': {
			// 	target: 'http://fgserver.top', //代理的接口域名
			// 	ws: true,
			// 	changeOrigin: true //允许跨域
			// },
			// 头像发送上传
			'/file/imageupload': {
				target: 'http://fgserver.top', //代理的接口域名
				ws: true,
				changeOrigin: true //允许跨域
			},
			'/editUserInfo': {
				target: 'http://fgserver.top', //代理的接口域名
				ws: true,
				changeOrigin: true //允许跨域
			},
			'/gift/usergifts': {
				//我的礼物
				target: 'http://fgserver.top', //代理的接口域名
				ws: true,
				changeOrigin: true //允许跨域
			}
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
}
