<template>
	<div>
		<div class="header-body">
			<!-- 首页 -->
			<div class="header-firstPage">
				<h2>WX食品后台管理</h2>
			</div>
			<!-- 消息告知 -->
			<div class="header-message" v-show="newMessageSystem">
				<div class="xiaoxigaozhi">
					<div class="line"></div>
					<div class="circle">
						<!-- 填写数字 -->
					</div>
				</div>
			</div>
			<!-- 用户信息 -->
			<div class="userInfoMessage">
				<div class="userInfo">
					<div>{{userInfo.userName}}</div>
					<div>{{userInfo.userRole}}</div>
				</div>
			</div>
			<!-- 时间器 -->
			<div class="showTime">
				<div class="timeClass">
					<div>{{ timeShow.dayTime }}</div>
					<div>{{ timeShow.time }}</div>
				</div>
			</div>
			<!-- 查看借阅记录 -->
			<!-- 退出登陆 -->
			<div class="backSystem">
				<el-button @click="goOutSystem()">退出</el-button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import {
		Vue,
		Component
	} from "vue-property-decorator";
	import {
		registerUserInfo
	} from "../../models/register-userInfo";
	import {
		Getter,
		Action
	} from "vuex-class";
	import getTimeService from "../../common/getTime";

	@Component({
		components: {}
	})
	export default class Header extends Vue {
		@Getter("userInfoMessages") userInfoMessages!: any;

		@Action("setUserInfoMessage") setUserInfoMessage!: any;

		// 动画控制器
		private newMessageSystem: any = true;
		private userInfo: any = {};
		private timeShow: any = {};

		created() {
			this.userInfo = {
				userName: "shichaoxin",
				userRole: "1111"
			};
			console.log(this.userInfo);
			const time = getTimeService.timeFunService();
			this.timeShow.dayTime = time.slice(0, 11);
			this.timeShow.time = time.slice(11, 19);
			setInterval(() => {
				const time = getTimeService.timeFunService();
				this.timeShow.time = time.slice(11, 19);
				this.$forceUpdate();
			}, 1000);
		}
		goOutSystem() {
			this.$confirm("是否退出系统?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning"
			}).then(() => {
				// 清除token
				localStorage.removeItem("token");
				this.$router.push({
					path: "/"
				});
			}).catch(() => {
				return
			})
		}
	}
</script>

<style lang="less" scoped>
	@import "./food-header.less";
</style>
