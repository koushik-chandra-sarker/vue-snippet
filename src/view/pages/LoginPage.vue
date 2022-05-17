<template>
  <div class="login-page w-screen flex justify-center items-center bg-gray-100">
    <form class="p-10 bg-white rounded flex justify-center items-center flex-col shadow-md">
      <p class="mb-5 text-3xl uppercase text-gray-600">Login</p>
      <input v-model="email" type="email" name="email" class="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none" autocomplete="off" placeholder="Email" required/>
      <input v-model="password" type="password" name="password" class="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none" autocomplete="off" placeholder="Password" required/>
      <button @click="login" class="bg-purple-600 hover:bg-purple-900 text-white font-bold p-2 rounded w-80" id="login" type="button"><span>Login</span></button>
    </form>
  </div>
</template>

<script>
import authService from "@/services/auth.service";
import {ACTION_SET_USERINFO_AND_TOKEN} from "@/store/auth.module";
import store from "@/store";


export default {
  name: "LoginPage",
  data(){
    return{
      email: null,
      password: null,
    }
  },
  methods:{
    login(){
      authService
          .login({ email: this.email, password: this.password })
          .then((response) => {
            store.dispatch(ACTION_SET_USERINFO_AND_TOKEN, response.data);
            this.$router.push({ path: "/" });
          });
    }
  }
}
</script>

<style scoped>
  .login-page{
    height: calc(100vh - 64px);
  }
</style>