<template>
	<div class="content_body">
		<div class="header">
			<Header></Header>
		</div>
		<div class="sideBar">
			<SideBar></SideBar>
		</div>
		<div class="container">
			<div class="header-body">
				<router-view></router-view>
			</div>
			<div class="timeSheet">
				<TimeSheet />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import {
		Vue,
		Component
	} from "vue-property-decorator";
	import Header from "../food-header/food-header.vue";
	import SideBar from "../food-side/food-side.vue";
	import TimeSheet from "../food-timeSheet/food-timesheet.vue";
	@Component({
		components: {
			Header,
			SideBar,
			TimeSheet
		}
	})
	export default class Home extends Vue {}
</script>

<style lang="less" scoped>
	@import "./home.less";
</style>
