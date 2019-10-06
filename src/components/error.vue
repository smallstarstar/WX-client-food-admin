<template>
  <div>
    <div class="error">
      {{errorMessage}}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Getter, Action } from "vuex-class";
import { Component } from "vue-property-decorator"; 
@Component({
  components: {}
})
export default class Error extends Vue {
  private errorMessage = '404 Not Found';
}
</script>

<style scoped>
.error {
  position: relative;
  left:44%;
  top:100px;
  font-size: 30px;
  font-weight: 500;
}
</style>
