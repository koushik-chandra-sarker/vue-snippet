<template>
  <div class="h-screen w-full bg-white relative flex overflow-hidden">

    <!--    &lt;!&ndash; Sidebar &ndash;&gt;
        <aside class="h-full flex flex-col space-y-10 items-left pt-5 relative bg-gray-800 text-white">
          &lt;!&ndash; Profile &ndash;&gt;
          <router-link  v-for="item in sideberItems"
                        :key="item.name"
                        :to="item.path"
                        v-show="isPermittedToAccess(item.name)"
                        class="flex items-center">
            <div class="h-10  flex items-center pl-8  pr-8 cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
              </svg>
              <span class="pl-2 text-base">{{ item.name }}</span>
            </div>
          </router-link>

          &lt;!&ndash;&lt;!&ndash;       Like &ndash;&gt;
          &lt;!&ndash;      <div class="h-10  flex items-center  pl-8  pr-8 cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">&ndash;&gt;
          &lt;!&ndash;        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>&ndash;&gt;
          &lt;!&ndash;        <span class="pl-2 text-base">Like</span>&ndash;&gt;
          &lt;!&ndash;      </div>&ndash;&gt;

          &lt;!&ndash;          &lt;!&ndash; Comment &ndash;&gt;&ndash;&gt;
          &lt;!&ndash;      <div class="h-10 w-30 flex items-center pl-8  pr-8 cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">&ndash;&gt;
          &lt;!&ndash;        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>&ndash;&gt;
          &lt;!&ndash;        <span class="pl-2 text-base">Comments</span>&ndash;&gt;
          &lt;!&ndash;      </div>&ndash;&gt;&ndash;&gt;

        </aside>-->
   <aside-menu></aside-menu>


    <div class="w-full h-full flex flex-col justify-between">


      <!-- Main -->
      <main class="max-w-full h-full flex relative overflow-y-hidden">
        <!-- Container -->
        <router-view></router-view>
      </main>
    </div>

  </div>
</template>

<script>

import AsideMenu from "@/view/layout/sidebar/Aside";
export default {
  name: "AdminPage",
  components: {AsideMenu},
  methods: {

  },
  mounted() {

  }
}
</script>

<style scoped>

</style>