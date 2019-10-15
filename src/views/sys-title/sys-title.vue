<template>
    <div>
        <el-form :model="titleInfo" ref="titleInfo" :rules="rules">
            <el-row :gutter="24">
                <el-col :span="8">
                    <el-form-item label="标题名称" :prop="ruleName.titleName">
                        <el-input placeholder="请输入标题....." v-model="titleInfo.titleName"></el-input>
                    </el-form-item>
                </el-col>
                 <el-col :span="8">
                    <el-form-item label="索引位置">
                        <el-input placeholder="请输入标题....." v-model="titleInfo.index" disabled></el-input>
                    </el-form-item>
                </el-col>
                 <el-col :span="8">
                    <el-form-item label="操作">
                        <br>
                       <el-switch @change="chooseState($event)"
                            v-model="state"
                            active-color="#13ce66"
                            inactive-color="#ff4949"
                            active-text="启用"
                            inactive-text="禁用">
                        </el-switch>
                        <el-button class="buttonIndex" type="primary" @click="submit('titleInfo')">提 交</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <!-- table -->
           <el-table
    :data="titleData"
    border
    class="tableContent"
    style="width: 100%">
    <el-table-column
      prop="_id"
      label="ID"
      width="280">
    </el-table-column>
     <el-table-column
      prop="index"
      label="位置"
      width="130">
    </el-table-column>
    <el-table-column
      prop="titleName"
      label="名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="people"
      label="创建人"
      width="120">
    </el-table-column>
    <el-table-column
      prop="createdTime"
      label="创建时间"
      width="200">
    </el-table-column>
     <el-table-column
      prop="IsUse"
      label="启用/禁用"
      width="100">
      <template slot-scope="scope">
          <div v-if="scope.row.IsUse" style="color:green">启用</div>
          <div v-if="!scope.row.IsUse" style="color:red">禁用</div>
      </template>
    </el-table-column>
    <el-table-column
      label="操作"
      >
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="danger" size="small">删 除</el-button>
        <el-button type="primary" size="small">编 辑</el-button>
      </template>
    </el-table-column>
  </el-table>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { titleInfo } from "../../models/title-info";
import ValidatorRules from "../../utils/validator";
import { ValitorName } from "../../common/enums/valitor";
import foodServices from "../../api/foodMessageServices/food-message-services";
import getTimeService from "../../common/getTime";
import { Getter } from "vuex-class";

@Component({
  components: {}
})
export default class SysTitle extends Vue {
  @Getter("userInfoMessages") userInfo!: any;
  private titleInfo: any = new titleInfo();
  private rules: any = ValidatorRules;
  private ruleName: any = ValitorName;
  private titleData: any = [];
  private state: any = true;
  async created() {
    await this.getInitData();
  }
  chooseState(e) {
    this.titleInfo.IsUse = e;
  }

  submit(titleInfo: any) {
    (this.$refs[titleInfo] as any).validate(async valid => {
      if (valid) {
        this.titleInfo.createdTime = getTimeService.timeFunService();
        this.titleInfo.people = this.userInfo.userName;
        this.titleInfo.peopleId = this.userInfo._id;
        this.titleInfo.IsUse = this.state;
        const result = await foodServices.saveTitleInfoMessage(this.titleInfo);
        if (result) {
          await this.getInitData();
          this.titleInfo.titleName = "";
          this.state = true;
        }
      } else {
        return;
      }
    });
  }

  async getInitData() {
    const result: any = await foodServices.getTitleInfoMessage();
    console.log(result.length, "===========");
    this.titleInfo.index = result.length + 1;
    this.titleData = result;
    this.$forceUpdate();
  }
  async handleClick(e) {
    const data = await foodServices.deletetitleById(e._id);
    if (data) {
      await this.getInitData();
    }
  }
}
</script>

<style lang="less" scoped>
@import "./sys-title.less";
</style>
