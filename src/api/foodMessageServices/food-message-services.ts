import axios from 'axios';
import store from '../../store/index';
import FoodUrl from '../../url/food-url';
import router from '../../router';

const commonBaseUrl = store.state.commonIp;
const foodServices = {
    // 添加食物信息
    async addFoodInfo(foodInfo: any) {
        const url = commonBaseUrl + FoodUrl.addFood;
        return await axios.post(url, foodInfo);
    },

    // 添加食物种类信息
    async addFoodKindInfo(foodKindInfo: any) {
        const url = commonBaseUrl + FoodUrl.addKindInfo;
        return await axios.post(url, foodKindInfo);
    },

    // 分页获取食品种类的信息
    async getFoodKindInfoBypage(pageInfo: any) {
        const url = commonBaseUrl + FoodUrl.getFoodKindByPage;
        return await axios.post(url, pageInfo);
    },
    // 根据商品种类的id下架商品
    async deleteFoodKindById(id: any) {
        const url = commonBaseUrl + FoodUrl.deleteFoodKindById + id;
        return await axios.delete(url);
    }
}


export default foodServices;