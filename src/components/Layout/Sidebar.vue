<template>
  <el-aside :width="asideStatus.width" :style="`background: ${currentTheme.aside.backgroundColor}`">
    <div :style="`color: dodgerblue;width: ${asideStatus.width};height: 61px;text-align: center`">
      <span class="demons-logo" v-if="!asideStatus.collapse">Demons</span>
      <span class="demons-logo" v-else>D</span>
    </div>
    <el-menu
      class="demons-side-menu"
      default-active="2"
      :collapse="asideStatus.collapse"
      :background-color="currentTheme.aside.backgroundColor"
      :text-color="currentTheme.aside.textColor"
      :active-text-color="currentTheme.aside.activeTextColor"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Sidebar',
    props: {
      menus: {
        type: Array,
        required: true,
      },
    },
    data () {
      return {}
    },
    computed: {
      ...mapGetters({
        asideStatus: 'asideStatus',
        currentTheme: 'currentTheme',
      }),
    },
    methods: {
      handleOpen () {

      },
      handleClose () {

      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .demons-logo {
    font-size: 31px;
    margin-top: 10px;
    line-height: 61px
  }

  .el-aside {
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .demons-side-menu {
    border-right: solid 0 #e6e6e6;
    text-align: left;
  }
</style>
