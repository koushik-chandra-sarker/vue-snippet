<template>
<div class="container mx-auto mt-4">
  <div class="reset-tail">
    <h5 class="text-xl font-bold mb-4">{{post.title}}</h5>
    <p v-html="post.content"></p>
  </div>

</div>
</template>

<script>
import blogPostService from "@/services/bolgPost.service";
import toast from "@/services/utils/toast.service";

export default {
  name: "PostDetailsPage",
  data(){
    return{
      id:null,
      post:{}
    }
  },
  mounted() {
    this.id = this.$route.params.id
    blogPostService.getOne(this.id).then(response => {
      this.post = response
    }).catch(reason => {toast.error(reason)})
  }

}
</script>

<style scoped>

</style>