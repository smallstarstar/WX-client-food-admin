import axios from 'axios';
import FoodUrl from '../../url/food-url';
import configBase from '../../config/connfig';


const baseUrl = configBase.baseUrl;

const foodServices = {
    // 添加食物信息
    async addFoodInfo(foodInfo: any) {
        const url = baseUrl + FoodUrl.addFood;
        return await axios.post(url, foodInfo);
    },

    // 添加食物种类信息
    async addFoodKindInfo(foodKindInfo: any) {
        const url = baseUrl + FoodUrl.addKindInfo;
        return await axios.post(url, foodKindInfo);
    },

    // 分页获取食品种类的信息
    async getFoodKindInfoBypage(pageInfo: any) {
        const url = baseUrl + FoodUrl.getFoodKindByPage;
        return await axios.post(url, pageInfo);
    },

    // 根据商品种类的id下架商品
    async deleteFoodKindById(id: any) {
        const url = baseUrl + FoodUrl.deleteFoodKindById + id;
        return await axios.delete(url);
    },

    // 保存标题信息
    async saveTitleInfoMessage(titleInfo: any) {
        const url = baseUrl + FoodUrl.saveTitleInfos;
        return await axios.post(url, titleInfo);
    },

    // 获取标题信息集合
    async getTitleInfoMessage() {
        const url = baseUrl + FoodUrl.getTitle;
        return await axios.get(url);
    },

    // 根据标题的Id删除标题
    async deletetitleById(id: any) {
        const url = baseUrl + FoodUrl.delelteTitleByid + id;
        return await axios.delete(url);
    },
}


export default foodServices;