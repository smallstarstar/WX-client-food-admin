<template>
  <div class="loginContent">
     <div class="userLogin">
       <div>
         <h1>后台管理中心</h1>
         <hr>
       </div>
        <el-form :model="userInfo" ref="userInfo" :rules="rules">
          <el-form-item label="账号" :prop="rullesName.userName">
            <el-input placeholder="请输入...." v-model="userInfo.userName"></el-input>
          </el-form-item>
          <el-form-item label="密码" :prop="rullesName.userPassword">
            <el-input type="password" placeholder="请输入...." v-model="userInfo.userPassword"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="buttonGroup">
              <el-button type="primary" @click="loginSuccess('userInfo')">登 陆</el-button>
              <el-button type="primary" @click="cleanAll('userInfo')">清 空</el-button>
              <el-button type="success" @click="register()">注 册</el-button>
            </div>
          </el-form-item>
      </el-form>
     </div>
     <!-- 注册组件 -->
     <RegisterForm @openDialog="openDialog()"></RegisterForm>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ValidatorRules from "../../utils/validator";
import { ValitorName } from "../../common/enums/valitor";
import userInfoMessageServices from "../../api/useMessageServices";
import { LoginCode } from "../../common/enums/loginCode";
import RegisterForm from "../registers/register.vue";
import Pubsub from "pubsub-js";
import EventKeys from "../../common/eventKeys/user-event";
import { Action } from "vuex-class";

@Component({
  components: {
    RegisterForm
  }
})
export default class LoginComponent extends Vue {
  @Action("setUserInfoMessage") setUserInfoMessage!: any;
  private userInfo: any = {
    userName: "",
    userPassword: ""
  };
  private rules: any = ValidatorRules;
  private rullesName: any = ValitorName;

  loginSuccess(useInfo: any) {
    (this.$refs[useInfo] as any).validate(async (valid: any) => {
      if (valid) {
        const data: any = await userInfoMessageServices.userLogin(
          this.userInfo
        );
        if (data.code === LoginCode.messageSuccess) {
          this.$message({ type: "success", message: data.message });
          // localStorage.setItem('userInfo',JSON.stringify(data.data));
          // const dd = JSON.parse(localStorage.getItem(useInfo));
          // 将数据存入共享数据层中
          this.setUserInfoMessage(data.data);
          this.$router.push({path:'/home/foodKind'})
        }
        // 用户不存在
        if (data.code === LoginCode.messageNotFound) {
          this.$message({ type: "error", message: data.message });
          this.cleanAll(useInfo);
        }
        // 信息错误
      } else {
      }
    });
  }
  cleanAll(userInfo: any) {
    (this.$refs[userInfo] as any).resetFields();
  }
  register() {
    Pubsub.publish(EventKeys.registerOpen, true);
  }
}
</script>
<style lang="less" scoped>
@import "login.less";
</style>

