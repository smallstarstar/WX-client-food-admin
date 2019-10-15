<template>
    <div>
        <el-form :model="foodKindInfo" ref="foodKindInfo" :rules="rule">
          <el-row>
              <el-col :span="6">
                    <el-form-item label="种类名称" :prop="ruleName.foodKindName">
                <el-input placeholder="请输入名称...." v-model="foodKindInfo.foodKindName"></el-input>
            </el-form-item>
              </el-col>
                <el-col>
                  <el-form-item>
                      <el-button class="buttonPosition" type="primary" @click="submit('foodKindInfo')">提 交</el-button>
                  </el-form-item>
              </el-col>
          </el-row>
        </el-form>
        <div>
           <el-table
    :data="tableData"
    border
    class="tableContent"
    style="width: 100%">
    <el-table-column
      prop="_id"
      label="ID"
      width="280">
    </el-table-column>
    <el-table-column
      prop="foodKindName"
      label="名称"
      width="200">
    </el-table-column>
    <el-table-column
      prop="people"
      label="创建人"
      width="200">
    </el-table-column>
    <el-table-column
      prop="createdTime"
      label="创建时间"
      width="300">
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
   <el-pagination class="pageCurrent"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-size="size"
      layout="total, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ValidatorRules from "../../utils/validator";
import { ValitorName } from "../../common/enums/valitor";
import { FoodKindInfo } from "../../models/foodKind-info";
import { Getter } from "vuex-class";
import getTimeService from "../../common/getTime";
import foodServices from "../../api/foodMessageServices/food-message-services";
import { PageInfo } from "../../models/page-info";
@Component({
  components: {}
})
export default class FoodKind extends Vue {
  @Getter("userInfoMessages") userInfo!: any;
  private foodKindInfo: any = {};
  private rule: any = ValidatorRules;
  private ruleName: any = ValitorName;
  private page: any = 1;
  private size: any = 7;
  private total: any = 0;
  private tableData: any = [];
  private pageInfo: any = new PageInfo();
  async mounted() {
    await this.geInitData(this.pageInfo);
  }
  submit(foodKindInfo) {
    (this.$refs[foodKindInfo] as any).validate(async valid => {
      if (valid) {
        // todo
        const foodKindMessage = new FoodKindInfo();
        foodKindMessage.foodKindName = this.foodKindInfo.foodKindName;
        foodKindMessage.people = this.userInfo.userName;
        foodKindMessage.peopleid = this.userInfo._id;
        foodKindMessage.createdTime = getTimeService.timeFunService();
        const data = await foodServices.addFoodKindInfo(foodKindMessage);
        if (data) {
          this.$message({
            type: "success",
            message: "添加" + this.foodKindInfo.foodKindName + "成功"
          });
          this.foodKindInfo.foodKindName = "";
          await this.geInitData(this.pageInfo);
        }
      }
    });
  }
  handleClick(e) {
    this.$confirm("是否删除" + e.foodKindName, "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning"
    }).then(async () => {
      const result = await foodServices.deleteFoodKindById(e._id);
      if (result) {
        await this.geInitData(this.pageInfo);
      }
    }).catch(()=>{
      return
    })
  }
  handleSizeChange() {}
  async handleCurrentChange(val) {
    const pageInfo = new PageInfo();
    pageInfo.page = val;
    pageInfo.size = this.size;
    await this.geInitData(pageInfo);
  }

  async geInitData(pageInfo: PageInfo) {
    const data: any = await foodServices.getFoodKindInfoBypage(pageInfo);
    this.total = data.total;
    this.tableData = data.val.reverse();
  }
}
</script>
<style lang="less" scoped>
@import "./food-kind.less";
</style>