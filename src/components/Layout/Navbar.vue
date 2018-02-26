<template>
  <el-header :style="`left: ${asideStatus.width}`">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      :background-color="currentTheme.header.backgroundColor"
      :text-color="currentTheme.header.textColor"
      :active-text-color="currentTheme.header.activeTextColor"
      @select="handleSelect">
      <el-button type="text" @click="handleAsideCollapse"
                 style="float: left;margin: 5px 15px;font-size: 21px;">
        <svg-icon icon-class="list"/>
      </el-button>
      <el-menu-item index="system">系统管理</el-menu-item>
      <el-submenu index="2">
        <template slot="title">更多系统</template>
        <el-menu-item index="2-1">订单中心</el-menu-item>
      </el-submenu>
      <div style="float: right; margin: 0 20px">
        <el-dropdown class="demons-header-el-dropdown">
              <span class="el-dropdown-link">
                <img src="https://q.qlogo.cn/qqapp/101435463/02468BE66A91A74C8AAE5900576C642E/100"
                     style="width: 31px;height: 31px;margin-top: 15px"/>
              </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>系统设置</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-menu>
  </el-header>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { cache } from '@/common'

  export default {
    name: 'Navbar',
    props: {
      systems: {
        type: Array,
        required: true,
      },
    },
    computed: {
      ...mapGetters({
        currentTheme: 'currentTheme',
        asideStatus: 'asideStatus',
      }),
    },
    data () {
      return {}
    },
    methods: {
      ...mapActions([
        'changeAsideStatus',
      ]),
      handleAsideCollapse () {
        if (this.asideStatus) {
          cache.get('Demons-AsideStatus', true)
        }
        let asideStatus = {collapse: !this.asideStatus.collapse, width: !this.asideStatus.collapse ? '64px' : '200px'}
        this.changeAsideStatus(asideStatus)
      },
      handleSelect () {

      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header {
    position: absolute;
    padding: 0;
    left: 64px;
    right: 0;
    line-height: 56px;
  }

  .demons-header-el-dropdown {
    height: 61px;
  }
</style>
