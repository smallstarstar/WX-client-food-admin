<template>
    <div>
        <div>
            <el-form :model="foodInfo" ref="foodInfo" :rules="rules">
                <el-row :gutter="20">
                    <el-col :span="8">
                       <el-form-item label="种类" :prop="rulusName.foodKind">
                        <el-input placeholder="请输入..." v-model="foodInfo.foodKind"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="名称" :prop="rulusName.foodName">
                        <el-input placeholder="请输入..." v-model="foodInfo.foodName"></el-input>
                    </el-form-item>
                </el-col>
                 <el-col :span="8">
                    <el-form-item label="价格" :prop="rulusName.foodPrice">
                        <el-input placeholder="请输入..." v-model="foodInfo.foodPrice"></el-input>
                    </el-form-item>
                </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                         <el-form-item label="描述" :prop="rulusName.foodDec">
                        <el-input rows="4" resize="none" type="textarea" placeholder="请输入..." v-model="foodInfo.foodDec"></el-input>
                    </el-form-item>
                    </el-col>
                </el-row>
                  <el-form-item>
            <div class="buttonGroup">
              <el-button type="info" :loading="isloading" @click="addFood('foodInfo')">添 加</el-button>
            </div>
          </el-form-item>
            </el-form>
            <div>
                <div>图片</div>
                 <el-upload
                   ref="upload"
                    class="upImg"
                    action
                   :auto-upload="false"
                    list-type="picture-card" 
                    :on-remove="handleRemove"
                    :on-change="changeImg"
                    multiple
                    :limit="1"
                ><i class="el-icon-plus"></i>
            </el-upload> 
            </div>
            <!-- 展示 -->
             <!-- <img v-if="imageUrl" :src="imageUrl" class="avatar"> -->
        </div>  
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { FoodInfo } from "../models/food-info";
import ValidatorRules from "../utils/validator";
import { ValitorName } from "../common/enums/valitor";
import getTimeService from "../common/getTime";
import { Getter } from "vuex-class";
import foodServices from '../api/foodMessageServices/food-message-services';


@Component({})
export default class FoodKind extends Vue {
  @Getter("userInfoMessages") userInfoMessages!: any;
  private foodInfo: any = new FoodInfo();
  private rules: any = ValidatorRules;
  private rulusName: any = ValitorName;
  private isloading: any = false;
  private imageUrl: any = '';

  changeImg(file: any) {
    this.foodInfo.foodPicture = URL.createObjectURL(file.raw);
  }
  mounted() {}

  changeUpload() {}
  handleRemove() {
  }
  addFood(foodInfo) {
    (this.$refs[foodInfo] as any).validate( async(val: any) => {
      if (val) {
          this.isloading = true;
          this.foodInfo.createdPeo = 'xiaozhang';
          this.foodInfo.createdId = '22222';
          this.foodInfo.foodTime = getTimeService.timeFunService();
          const data = await foodServices.addFoodInfo(this.foodInfo);
          if(data) {
              this.foodInfo = {};
              this.isloading = false;
              (this.$refs.upload as any).clearFiles();
          } else {
               this.foodInfo = {};
              this.isloading = false;

              this.$message({type:'error',message:'添加失败'})
          }
      }
    });
  }
}
</script>

<style lang="less" scoped>
@import "./food-kind.less";
</style>
