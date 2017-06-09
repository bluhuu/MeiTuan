import HttpBase from './HttpBase'

class HttpService extends HttpBase {
    constructor(that) {
        super(that)
        this.$$prefix = ''
        this.$$path = {
            recommend    : '/recommend/homepage/city/1?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=mrUZYo7999nH8WgTicdfzaGjaSQ=&__skno=51156DC4-B59A-4108-8812-AD05BF227A47&__skts=1434530933.303717&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&ci=1&client=iphone&limit=40&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-06-17-14-50363&offset=0&position=39.983497,116.318042&userId=10086&userid=10086&utm_campaign=AgroupBgroupD100Fab_chunceshishuju__a__a___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_gxh_82__nostrategy__leftflow___ab_pindaoshenyang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_trip_yidizhoubianyou__b__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___ab_waimaizhanshi__b__b1___a20141120nanning__m1__leftflow___ab_pind',
            discount     : '/deal/topic/discount/city/1?ci=1&client=iphone&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-06-17-14-50363&userid=10086&utm_campaign=AgroupBgroupD100Fab_chunceshishuju__a__a___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_gxh_82__nostrategy__leftflow___ab_pindaoshenyang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_trip_yidizhoubianyou__b__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___ab_waimaizhanshi__b__b1___a20141120nanning__m1__leftflow___ab_pindaoquxincelue__a__leftflow___ab_i_group_5_5_onsite__b__b___ab_i_group_5_6_searchkuang__a__leftflow&utm_content=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&utm_medium=iphone&utm_source=AppStore&utm_term=5.7&uuid=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&version_name=5.7',
            wechatSignUp : '/user/wechat/sign/up',
            wechatSignIn : '/user/wechat/sign/in',
            decryptData  : '/user/wechat/decrypt/data',
            signIn       : '/mCenterAction/webLogin.do',
            signOut      : '/user/sign/out',
            classify     : '/classify',
            goods        : '/goods',
            members      : '/mMemberAction/query.do',
            search       : '/goods/search/all',
            cart         : '/mPurchaseAction/addCart.do',
            getCart      : '/mPurchaseAction/query.do',
            deleteCart   : '/mPurchaseAction/deleteCart.do',
            submitOrder  : '/mPurchaseAction/submitOrder.do',
            address      : '/address',
            order        : '/order',
            sendMsg      : '/mSmsAction/sendMsg.do',
            editInfo     : '/mMemberAction/editInfo.do',
        }
    }

    fetchRecommend(){
        console.log("fun recommend!---");
        return this.getFetch(url=this.$$path.recommend,null,null,cache='default')
    }
    fetchDiscount(){
        return this.getFetch(this.$$path.Discount)
    }
    wechatSignUp(params) {
        return this.postRequest(this.$$path.wechatSignUp, params)
    }

    wechatSignIn(params) {
        return this.postRequest(this.$$path.wechatSignIn, params)
    }

    submitOrder(params){
        return this.getRequest(this.$$path.submitOrder, params)
    }

    wechatDecryptData(params) {
        return this.postRequest(this.$$path.decryptData, params)
    }

    signIn(params) {
        return this.getRequest(this.$$path.signIn, params)
    }

    signOut() {
        return this.postRequest(this.$$path.signOut)
    }

    search(params) {
        return this.getRequest(this.$$path.search, params)
    }

    getGoods(params) {
        return this.getRequest(this.$$path.goods, params)
    }

    getMembers(params) {
        return this.getRequest(this.$$path.members, params)
    }

    getTelAuthenticode (params) {
        return this.getRequest(this.$$path.sendMsg, params)
    }

    setUserInfo(params) {
        return this.getRequest(this.$$path.editInfo, params)
    }

    getClassify(params) {
        return this.getRequest(this.$$path.classify, params)
    }

    getDetail(id) {
        return this.getRequest(`${this.$$path.goods}/${id}`)
    }

    getCart(params) {
        return this.getRequest(this.$$path.getCart,params)
    }

    addCart(params) {
        return this.getRequest(this.$$path.cart,params)
    }

    deleteCart(params) {
        return this.getRequest(this.$$path.deleteCart,params)
    }

    putCartByUser(id, params) {
        return this.putRequest(`${this.$$path.cart}/${id}`, params)
    }

    delCartByUser(id) {
        return this.deleteRequest(`${this.$$path.cart}/${id}`)
    }

    clearCartByUser() {
        return this.postRequest(`${this.$$path.cart}/clear`)
    }

    getAddressList(params) {
        return this.getRequest(this.$$path.address, params)
    }

    getAddressDetail(id) {
        return this.getRequest(`${this.$$path.address}/${id}`)
    }

    postAddress(params) {
        return this.postRequest(this.$$path.address, params)
    }

    putAddress(id, params) {
        return this.putRequest(`${this.$$path.address}/${id}`, params)
    }

    deleteAddress(id, params) {
        return this.deleteRequest(`${this.$$path.address}/${id}`)
    }

    getDefalutAddress() {
        return this.getRequest(`${this.$$path.address}/default`)
    }

    setDefalutAddress(id) {
        return this.postRequest(`${this.$$path.address}/default/${id}`)
    }

    getOrderList(params) {
        return this.getRequest(this.$$path.order, params)
    }

    getOrderDetail(id) {
        return this.getRequest(`${this.$$path.order}/${id}`)
    }

    postOrder(params) {
        return this.postRequest(this.$$path.order, params)
    }

    putOrder(id, params) {
        return this.putRequest(`${this.$$path.order}/${id}`, params)
    }

    deleteOrder(id, params) {
        return this.deleteRequest(`${this.$$path.order}/${id}`)
    }
}

export default HttpService
