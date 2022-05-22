<template>
  <aside class=" aside h-full flex flex-col space-y-10 items-left p-5 relative bg-gray-800 text-white text-left w-52">
    <div v-for="item in getPermittedMenus" :key="item.name" class="flex flex-col">
      <tree-menu
          :name="item.name"
          :nodes="item.child"
          :path="item.path"
          :icon="item.icon"
          :active="item.active"
          :permitted="item.permitted"
          :disable="item.disable"
          :depth="0"
          :key="item.name"
          :parent="item.name"
      ></tree-menu>
    </div>
  </aside>
</template>

<script>
import {isPermittedToAccess} from "@/services/utils/permission.service";
import {sidebarMenu} from "@/view/layout/sidebar/menuItems";
import TreeMenu from "@/view/layout/sidebar/TreeMenu";

export default {
  name: "aside-menu",
  components: {TreeMenu},
  data() {
    return {}
  },
  methods: {
    isPermittedToAccess,
    setPermissionToMenuAndChild(node) {
      if (isPermittedToAccess(node.name)) {
        node.permitted = true
        node.active = this.setActiveToMenuAndChild(node)
      }
      if (node.child !== undefined) {
        node.child.forEach(node => {
          this.setPermissionToMenuAndChild(node)
        })
      }
    },
    setActiveToMenuAndChild(node) {
      if (this.$route.path === node.path) {
        return true
      }
      if (node.child !== undefined) {
        return node.child.some(node => {
          if (this.setActiveToMenuAndChild(node)) {
            return true
          } else return false
        })
      }
    }
  },
  mounted() {

  },
  computed: {
    getPermittedMenus() {
      sidebarMenu.forEach(node => {
        this.setPermissionToMenuAndChild(node)
      });
      return sidebarMenu
    },
  }
}
</script>

<style scoped>

</style>