<template>
  <aside class=" aside h-full flex flex-col space-y-10 items-left p-5 relative bg-gray-800 text-white text-left w-52">
    <div v-for="item in sidebarMenu" :key="item.name" class="flex flex-col">
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
          :closeEvent="closeEvent"
          :parent="item"
          :grandParent="item"
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
    return {
      sidebarMenu: sidebarMenu
    }
  },
  methods: {
    isPermittedToAccess,
    setPermissionToMenuAndChild(node) {
      if (isPermittedToAccess(node.name)) {
        node.permitted = true
        node.active = this.currentManuExpand(node)
      }
      if (node.child !== undefined) {
        node.child.forEach(node => {
          this.setPermissionToMenuAndChild(node)
        })
      }
    },
    currentManuExpand(node) {
      if (this.$route.path === node.path) {
        return true
      }
      if (node.child !== undefined) {
        return node.child.some(node => {
          if (this.currentManuExpand(node)) {
            return true
          } else return false
        })
      }
    },

    toggleChildren(node, name) {
      if (node.name === name  && node.child !== undefined) {
        node.active = !node.active
      }
      else if (node.child === undefined) {
        node.active = false
      }
      if (node.child !== undefined) {
        node.child.forEach(node => {
            this.toggleChildren(node, name)
        })
      }
    },
    collapseChildren(node) {
        node.active = false
      if (node.child !== undefined) {
        node.child.forEach(node => {
          this.collapseChildren(node)
        })
      }
    },

    closeEvent(grandParent, parent, name) {
      this.sidebarMenu.forEach(item => {
        if (item.name === grandParent.name) {
          this.toggleChildren(item, name)
        } else {
          this.collapseChildren(item)
        }

      })
    },
  },
  mounted() {
    this.sidebarMenu.forEach(node => {
      this.setPermissionToMenuAndChild(node)
    });
  },
  computed: {}
}
</script>

<style scoped>

</style>