import myAxios from "@/network/myAxios";

// 注册
export async function registerApi(username,password){
    return await myAxios.get('/user/register',{
        params:{
            'name': username,
            'password': password
        }
    })
}

// 登录
export async function loginApi(username,password) {
    return await myAxios.get('/user/login',{
        params: {
            'name': username,
            'password': password
        }
    })
}

// 商品列表
export async function goodList(){
    return await myAxios.get('/goods/list')
}

// 添加商品到购物车
export async function addGood(userId,goodsId,num,price){
    return await myAxios.get('/cart/add',{
        params:{
            userId: userId,
            goodsId: goodsId,
            num: num,
            price: price
        }
    })
}


// 购物车列表
export async function cartListApi(userId){
    return await myAxios.get('cart/listByUser',{
        params: {
            userId: userId
        }
    })
}

// 删除购物车商品
export async function deleteCartGoodApi(userId,cartId){
    return await myAxios.get('/cart/deleteById',{
        params: {
            userId: userId,
            cartId: cartId
        }
    })
}

// 添加订单信息
export async function addOrderApi(userId,cartList){
    return await myAxios.get('/order/addCastOrder',{
        params:{
            userId: userId,
            cartList: cartList
        }
    })
}

// 订单列表
export async function orderList(userId){
    return await myAxios.get('/order/listByUser',{
        params: {
            userId: userId
        }
    })
}