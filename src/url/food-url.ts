const FoodUrl = {
    // 添加食物信息
    addFood: '/api/v1/addFood',
    // 添加种类信息
    addKindInfo: '/api/v1/saveKindInfo',
    // 分页获取种类信息
    getFoodKindByPage: '/api/v1/getkindDataBypage',
    // 根据商品种类的id下架商品
    deleteFoodKindById: '/api/v1/deleteFoodKind?id=',

    // 配置标题的信息
    saveTitleInfos: '/api/v1/titleInfos',

    // 获取标题的信息集合
    getTitle: '/api/v1/getTitle',

    // 根据id删除标题
    delelteTitleByid: '/api/v1/delteById?id='
}

export default FoodUrl;