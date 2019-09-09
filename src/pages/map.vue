<template>
  <div>
    <div id="container" style="width:100%; height:900px"></div>
  </div>
</template>

<script>
  import AMap from 'AMap'
  export default {
    name:'地图',
    mounted: function () {
      this.init()
    },
    methods: {
      init: function () {
        const map = new AMap.Map('container', {
          center: [116.397428, 39.90923],
          resizeEnable: true,
          zoom: 10
        })
        AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function () {
          map.addControl(new AMap.ToolBar())
          map.addControl(new AMap.Scale())
        })
      }
    }
  }
</script>
