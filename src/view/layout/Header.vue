<template>
  <nav v-show="isLoggedIn" class="relative select-none bg-gray-800 text-white lg:flex lg:items-stretch w-full px-4 py-2">
    <div class="flex flex-no-shrink items-stretch h-12">
      <a href="/" class="font-bold text-3xl flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal  no-underline flex items-center hover:bg-grey-dark">BOLG</a>
      <button class="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4">
        <svg class="fill-current " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        <svg class="fill-current " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
      </button>
    </div>
    <div class="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
      <div class="lg:flex lg:items-stretch lg:justify-end ml-auto">
        <router-link v-show="isLoggedIn" to="/dashboard" class="hover:text-gray-200  px-4 leading-normal  no-underline flex items-center ">Dashboard</router-link>
        <button v-show="isLoggedIn" @click="logout" class="hover:text-gray-200  px-4 leading-normal  no-underline flex items-center ">Logout</button>
      </div>
    </div>
  </nav>

</template>

<script>
import {mapGetters} from "vuex";
import {ACTION_LOGOUT} from "@/store/auth.module";
import store from "@/store";

export default {
  name: "page-header",
  methods:{
      logout(){
        store.dispatch(ACTION_LOGOUT)
        this.$router.push({path:"/login"})
      }
  },
  computed:{
    ...mapGetters({
      isLoggedIn : "isLoggedIn"
    }),

  }
}
</script>

<style scoped>

</style>