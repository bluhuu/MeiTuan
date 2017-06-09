import __config from './HttpPathConfig'
class HttpBase {
    constructor(that) {
        this.that = that
        Object.assign(this, { $$basePath: __config.basePath })
        this.__init()
    }
    __init() {
        this.__initDefaults()
        this.__initMethods()
    }
    __initDefaults() {
        this.suffix = 'Fetch'
        this.instanceSource = { method: [ 'OPTIONS', 'GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'PATCH', 'CONNECT', ] }
    }
    __initMethods() {
        for(let key in this.instanceSource) {
            this.instanceSource[key].forEach((method, index) => {
                this[method.toLowerCase() + this.suffix] = (...args) => this.__defaultRequest(method, ...args)
            })
        }
    }
    __defaultRequest(method = '', url = '', params = {}, header = {}, cache = 'no-cache') {
        // const $$header = Object.assign({}, this.setHeaders(), header)
        const $$header = Object.assign({}, header)
        let $$url = this.setUrl(url)
        let $$config=[];
        const encodeparams = (params) => {
            let str = ''
            if(typeof params === 'object' && params){  
                Object.keys(params).forEach(function(val,idx){
                    if(idx){
                        str += '&' + val + '=' + encodeURIComponent(params[val])
                    }else{
                        str += val + '=' + encodeURIComponent(params[val])
                    }
                })  
            }  
            return str;
        }
        if (method !== 'GET') {
            $$config = [$$url,{ body: encodeparams(params), headers: $$header, method: method, credentials: 'include', cache:cache }]
        } else {
            if(typeof params ==='object' && params){
                $$url += "?" + encodeparams(params)
            }
            $$config = [$$url,{ headers: $$header, method: method, credentials: 'include', cache:cache }]
        }
        let requestInterceptors = []
        let responseInterceptors = []
        let reversedInterceptors = this.setInterceptors()
        reversedInterceptors.forEach((n, i) => {
            if (n.request || n.requestError) {
                requestInterceptors.push(n.request, n.requestError)
            }
            if (n.response || n.responseError) {
                responseInterceptors.unshift(n.response, n.responseError)
            }
        })
        const chainInterceptors = (promise, interceptors) => {
            for (let i = 0, ii = interceptors.length; i < ii;) {
                let thenFn = interceptors[i++]
                let rejectFn = interceptors[i++]
                promise = promise.then(thenFn, rejectFn)
            }
            return promise
        }
        console.log($$config);
        let promise = this.__resolve($$config)
        promise = chainInterceptors(promise, requestInterceptors)
        promise = promise.then(this.__http)
        promise = chainInterceptors(promise, responseInterceptors)
        promise = promise.then(res => res.data, err => err)
        return promise
    }
    __http(obj) {
        return fetch(...obj).then((response) => {
            if (response.status >= 200 && response.status < 300) {
                return response
            }
            reject(new Error(response.statusText))
        }).then((response) => {
            console.log(response);
            return response.json()
        })
    }
    __resolve(res) { return new Promise((resolve, reject) => { resolve(res) }) }
    setUrl(url) { return `${this.$$basePath}${this.$$prefix}${url}` }
    // setHeaders() { return { 'Cookie': 'JSESSIONID=' + wx.getStorageSync('token') + ';', } }
    setInterceptors() {
        return [{
            request: (request) => {
                // request.header = request.header || {}
                // request.requestTimestamp = new Date().getTime()
                // if (request.url.indexOf('/elink_scm_purchase') !== -1 && wx.getStorageSync('token')) {
                //     request.header.Cookie = 'JSESSIONID=' + wx.getStorageSync('token') + ";"
                // }
                return request
            },
            requestError: (requestError) => {
                // wx.hideToast()
                return requestError
            },
            response: (response) => {
                // response.responseTimestamp = new Date().getTime()
                // if(response.data.msg === "会话超时或未登录！") {
                //     wx.removeStorageSync('token')
                //     wx.redirectTo({ url: '/pages/login/index' })
                // }
                // let info ={id: 30938019, imageUrl: "http://p0.meituan.net/w.h/deal/d57d5f0644256a3013469edfc1406e8022163.jpg", title: "京八珍", subtitle: "[46店通用]50元代金券1张，可叠加", price: 43.6}
                this.that.props.navigation.navigate('Login')
                return response
            },
            responseError: (responseError) => {
                return responseError
            },
        }]
    }
}
export default HttpBase
