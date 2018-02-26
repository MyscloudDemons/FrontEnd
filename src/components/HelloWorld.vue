<template>
  <el-container>
    <el-aside :width="asideStatus.width" :style="`background: ${currentTheme.aside.backgroundColor}`">
      <div :style="`color: dodgerblue;width: ${asideStatus.width};height: 61px;text-align: center`">
        <span v-if="!asideStatus.collapse" style="font-size: 31px;margin-top: 10px;line-height: 61px">Demons</span>
        <span v-else style="font-size: 31px;margin-top: 10px;line-height: 61px">D</span>
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
    <el-container>
      <el-header :style="`left: ${asideStatus.width}`">
        <el-menu
          :default-active="activeIndex2"
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
              <span class="el-dropdown-link" style="color: white;">
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
      <el-main :style="`left: ${asideStatus.width}`">
        <el-tabs class="demons-frame-container" v-model="activeName" @tab-click="handleClick" type="border-card"
                 closable>
          <el-tab-pane class="demons-frame-container" name="first">
            <span slot="label"><i class="el-icon-date"></i>我的行程</span>
            <iframe src="http://47.98.35.15:56010/app/kibana#/home?_g=()" frameborder="0" class="demons-frame"
                    scrolling="false"></iframe>
          </el-tab-pane>
          <el-tab-pane label="配置管理" name="second">
            <iframe src="http://grafana.yanguo.com:60000/dashboard/db/mysqljian-kong?refresh=5s&orgId=1" frameborder="0"
                    class="demons-frame" scrolling="false"></iframe>
          </el-tab-pane>
          <el-tab-pane label="角色管理" name="third">
            <iframe src="https://www.tmall.com" frameborder="0" class="demons-frame" scrolling="false"></iframe>
          </el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">
            <iframe src="http://control.oms.yanguo.com:60000/project/index.html" frameborder="0" class="demons-frame"
                    scrolling="false"></iframe>
          </el-tab-pane>
        </el-tabs>
        <!--<iframe src="http://47.98.35.15:56010/app/kibana#/home?_g=()" frameborder="0" class="demons-frame" scrolling="false"></iframe>-->
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        asideStatus: {
          collapse: false,
          width: '200px',
        },
        themes: {
          current: 'light',
          dark: {
            aside: {
              backgroundColor: '#252a32',
              textColor: '#fff',
              activeTextColor: '#ffd04b',
            },
            header: {
              backgroundColor: '#545c64',
              textColor: '#fff',
              activeTextColor: '#ffd04b',
            },
          },
          light: {
            aside: {
              backgroundColor: '#f9f9f9',
              textColor: '#000000',
              activeTextColor: '#219aff',
            },
            header: {
              backgroundColor: '#545c64',
              textColor: '#fff',
              activeTextColor: '#ffd04b',
            },
          },
        },
      }
    },
    methods: {
      handleAsideCollapse () {
        this.asideStatus.collapse = !this.asideStatus.collapse
        this.asideStatus.width = this.asideStatus.collapse ? '64px' : '200px'
      },
    },
    computed: {
      currentTheme () {
        return this.themes[this.themes.current]
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .el-header {
    position: absolute;
    padding: 0;
    left: 64px;
    right: 0;
    line-height: 56px;
  }

  .el-aside {
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .el-main {
    padding: 0;
    position: absolute;
    left: 64px;
    right: 0;
    top: 61px;
    bottom: 0;
    width: auto;
    overflow: hidden;
    overflow-y: auto;
    box-sizing: border-box;
  }

  .el-tabs--border-card > .el-tabs__content {
    padding: 0;
  }

  .el-tabs__content {
    padding: 0;
    position: absolute;
    left: 0;
    right: 0;
    top: 39px;
    bottom: 0;
    height: auto;
    width: auto;
  }

  .demons-frame-container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: auto;
  }

  .demons-side-menu {
    border-right: solid 0 #e6e6e6;
    text-align: left;
  }

  .demons-frame {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    overflow-y: auto;
  }

  .demons-header-el-dropdown {
    height: 61px;
  }
</style>
