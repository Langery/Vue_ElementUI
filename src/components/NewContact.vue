<template>
  <div class="newcontact">
    <el-row>
      <el-button type="success">1</el-button>
    </el-row>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value1: ''
    }
  }
}
</script>

<style lang="css">
</style>
