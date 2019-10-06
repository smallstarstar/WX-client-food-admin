<template>
  <div>
  <el-dialog
        title="用户注册"
        :visible.sync="dialogVisible"
        width="50%"
        :before-close="beforeClose">
        <el-form :model="registerUserInfo" ref="registerUserInfo" :rules="rules">
           <el-row :gutter="20">
              <el-col :span="12">
              <el-form-item label="账号" :prop="rullesName.userName">
            <el-input placeholder="请输入...." v-model="registerUserInfo.userName"></el-input>
          </el-form-item>
          </el-col>
          <el-col :span="12">
             <el-form-item label="密码" :prop="rullesName.userPassword">
            <el-input type="password" placeholder="请输入...." v-model="registerUserInfo.userPassword"></el-input>
          </el-form-item>
          </el-col>
           </el-row>
           <el-row :gutter="20">
             <el-col :span="12">
                <el-form-item label="手机" :prop="rullesName.userPhone">
            <el-input placeholder="请输入...." v-model="registerUserInfo.userPhone"></el-input>
          </el-form-item>
             </el-col>
            <el-col :span="12">
               <el-form-item label="邮箱" :prop="rullesName.userEmail">
            <el-input placeholder="请输入...." v-model="registerUserInfo.userEmail"></el-input>
          </el-form-item>
            </el-col>
           </el-row>
           <el-row :gutter="20">
             <el-col :span="12">
                 <el-form-item label="地址" :prop="rullesName.userAddress">
            <el-input placeholder="请输入...." v-model="registerUserInfo.userAddress"></el-input>
          </el-form-item>
             </el-col>
            <el-col :span="12">
               <el-form-item label="角色" :prop="rullesName.userRole">
            <el-input placeholder="请输入...." v-model="registerUserInfo.userRole"></el-input>
          </el-form-item>
            </el-col>
           </el-row>
          <el-form-item>
            <div class="buttonGroup">
              <el-button type="primary" @click="registerSub('registerUserInfo')">登 陆</el-button>
              <el-button @click="cleanAll('registerUserInfo')">取 消</el-button>
            </div>
          </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { registerUserInfo } from "../../models/register-userInfo";
import getTimeService from "../../common/getTime";
import userInfoMessageServices from "../../api/useMessageServices";
import Pubsub from "pubsub-js";
import EventKeys from "../../common/eventKeys/user-event";
import ValidatorRules from "../../utils/validator";
import { ValitorName } from "../../common/enums/valitor";
import { LoginCode } from "../../common/enums/loginCode";

@Component({})
export default class Register extends Vue {
  private registerUserInfo: any = new registerUserInfo();
  private dialogVisible: any = false;
  private rules: any = ValidatorRules;
  private rullesName: any = ValitorName;
  mounted() {
    Pubsub.subscribe(EventKeys.registerOpen, (eventName, val) => {
      this.dialogVisible = val;
    });
  }
  cleanAll(registerUserInfo) {
    (this.$refs[registerUserInfo] as any).resetFields();
    this.dialogVisible = false;
  }
   registerSub(registerUserInfo) {
    (this.$refs[registerUserInfo] as any).validate(async val => {
      if (val) {
        this.registerUserInfo.userRegisterTime = getTimeService.timeFunService();
        const result: any = await userInfoMessageServices.userRegister(this.registerUserInfo);
        console.log(result);
        if(result.code = LoginCode.messageRegisterSuccess) {
          const messageIngfo: any = {
            type: "success",
            position: "bottom-right",
            title: result.message,
            duration: 3000
          };
          this.$notify(messageIngfo);
          this.dialogVisible = false;
        }
      } else {

      }
    });
  }
  beforeClose() {
    this.dialogVisible = true;
  }
}
</script>