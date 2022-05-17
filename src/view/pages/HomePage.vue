<template>
  <div class="mt-4">
    <div class="flex gap-3 w-full px-4">
        <div v-for="post in posts" :key="post.id"
             class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
          <router-link :to="{ name: 'Post Details', params: { id: post.id }}">
          <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="">
          <h5 class="p-4 text-gray-900 font-bold text-xl text-left mb-2">{{ post.title }}</h5>
          </router-link>
        </div>
    </div>
  </div>


</template>

<script>
import blogPostService from "@/services/bolgPost.service";

export default {
  name: "HomePage",
  data() {
    return {
      posts: []
    }
  },
  methods: {},
  mounted() {
    blogPostService.getList().then(response => {
      this.posts = response
    })
  }
}
</script>

<style scoped>

</style>