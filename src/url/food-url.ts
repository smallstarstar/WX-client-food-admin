const FoodUrl = {
    // 添加食物信息
    addFood: '/api/v1/addFood',
    // 添加种类信息
    addKindInfo: '/api/v1/saveKindInfo',
    // 分页获取种类信息
    getFoodKindByPage: '/api/v1/getkindDataBypage',
    // 根据商品种类的id下架商品
    deleteFoodKindById:'/api/v1/deleteFoodKind?id='
}

export default FoodUrl;