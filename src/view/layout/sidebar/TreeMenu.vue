<template>
  <div v-if="hasPermittedChild">
    <div class="tree-menu" v-if="permitted">
      <div class="label-wrapper" @click="toggleChildren">
        <div :style="indent" :class="labelClasses" class="text-left">
          <i v-if="hasPermittedChild" class="fa" :class="iconClasses"></i>
          {{ name }}
        </div>
      </div>
      <tree-menu
          v-show="showChildren"
          v-for="node in nodes"
          :nodes="node.child"
          :name="node.name"
          :path="node.path"
          :icon="node.icon"
          :active="node.active"
          :permitted="node.permitted"
          :disable="node.disable"
          :depth="depth + 1"
          :key="node.name"
          :parent="parent"
      >
      </tree-menu>
    </div>
  </div>
  <router-link v-else :to="path" >
    <div class="tree-menu" v-if="permitted">
      <div class="label-wrapper" @click="toggleChildren">
        <div :style="indent" :class="labelClasses" class="text-left">
          <i v-if="hasPermittedChild" class="fa" :class="iconClasses"></i>
          {{ name }}
        </div>
      </div>
      <tree-menu
          v-show="showChildren"
          v-for="node in nodes"
          :nodes="node.child"
          :name="node.name"
          :path="node.path"
          :icon="node.icon"
          :active="node.active"
          :permitted="node.permitted"
          :disable="node.disable"
          :depth="depth + 1"
          :key="node.name"
          :parent="parent"
      >
      </tree-menu>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "tree-menu",
  props: ['name', 'path', 'icon', 'active', 'permitted', 'disable', 'nodes', 'depth','parent'],
  data() {
    return{
      showChildren:this.active,
    }
  },
  mounted() {

  },
  computed: {
    iconClasses() {
      return {
        'fa-solid fa-plus': !this.showChildren,
        'fa-solid fa-minus': this.showChildren
      }
    },
    labelClasses() {
      return {'has-children': this.nodes}
    },
    indent() {
      return {transform: `translate(${this.depth * 20}px)`}
    },
    hasPermittedChild() {
      return this.nodes.some((n) => n.permitted)
    }
  },
  methods: {
    toggleChildren() {
      this.showChildren = !this.showChildren;
      console.log(this.parent)
    }
  }
}
</script>

<style>
.tree-menu .label-wrapper {
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #ffffff;
}

.tree-menu .has-children {
  cursor: pointer;
}
.aside .router-link-active .tree-menu .label-wrapper{
  background-color: #b0b0b0;
  border-bottom: 1px solid #afadad;
}

</style>