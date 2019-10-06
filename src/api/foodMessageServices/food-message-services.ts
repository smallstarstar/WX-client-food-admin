import axios from 'axios';
import store from '../../store/index';
import FoodUrl from '../../url/food-url';

const commonBaseUrl = store.state.commonIp;
const foodServices = {
    // 添加食物信息
    async addFoodInfo(foodInfo: any) {
        const url = commonBaseUrl + FoodUrl.addFood;
        return await axios.post(url, foodInfo);
    }
}

export default foodServices;