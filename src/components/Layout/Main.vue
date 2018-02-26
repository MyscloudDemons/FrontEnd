<template>
  <el-container>
    <sidebar :menus="[]"/>
    <el-container>
      <navbar :systems="[]"/>
      <el-main :style="`left: ${asideStatus.width}`">
        <el-tabs class="demons-frame-container" v-model="activeName" @tab-click="handleClick" type="border-card"
                 closable>
          <el-tab-pane class="demons-frame-container" name="first">
            <span slot="label"><i class="el-icon-date"></i>我的行程</span>
            <iframe src="http://47.98.35.15:56010/app/kibana#/home?_g=()" frameborder="0" class="demons-frame"
                    scrolling="false"></iframe>
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
  import Sidebar from './Sidebar'
  import Navbar from './Navbar'
  import { mapGetters } from 'vuex'

  export default {
    name: 'Layout',
    components: {
      Sidebar, Navbar,
    },
    data () {
      return {

      }
    },
    methods: {},
    computed: {
      ...mapGetters({
        asideStatus: 'asideStatus',
        currentTheme: 'currentTheme',
      }),
    },
  }
</script>

<style>
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

</style>
