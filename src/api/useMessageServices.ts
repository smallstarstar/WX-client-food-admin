import axios from 'axios';
import store from '../store/index';
import userInfoMessage from '../url/login-user';

const commonUrl = store.state.commonIp;

const userInfoMessageServices = {
    // 用户登陆
    async userLogin(userInfo: any) {
        const url = commonUrl + userInfoMessage.loginUser;
        return await axios.post(url, userInfo);
    },

    // 用户注册
    async userRegister(userInfo: any) {
        const url = commonUrl + userInfoMessage.registerUser;
        return await axios.post(url, userInfo);
    }
}

export default userInfoMessageServices;