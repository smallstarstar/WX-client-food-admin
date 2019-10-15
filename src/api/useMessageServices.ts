import axios from 'axios';
import userInfoMessage from '../url/login-user';
import configBase from '../config/connfig';

const baseUrl = configBase.baseUrl;

const userInfoMessageServices = {
    // 用户登陆
    async userLogin(userInfo: any) {
        const url = baseUrl + userInfoMessage.loginUser;
        return await axios.post(url, userInfo);
    },

    // 用户注册
    async userRegister(userInfo: any) {
        const url = baseUrl + userInfoMessage.registerUser;
        return await axios.post(url, userInfo);
    }
}

export default userInfoMessageServices;