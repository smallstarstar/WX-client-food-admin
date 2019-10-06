<template>
  <div>
    <el-col :span="24">
      <el-menu
        default-active="1-1"
        class="el-menu-vertical-demo"   
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>菜单食品</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">主菜系列</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class SideBar extends Vue {
   

  handleOpen(key, keyPath) {
    console.log(key, keyPath);
  }
  handleClose(key, keyPath) {
    console.log(key, keyPath);
  }
}
</script>
