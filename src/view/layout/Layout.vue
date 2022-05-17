<template>
  <page-header/>
  <router-view></router-view>
</template>

<script>
import PageHeader from "@/view/layout/Header";
export default {
  name: "page-layout",
  components: {PageHeader}
}
</script>

<style scoped>

</style>