import * as component from "/lib/js/components.js";
$(function () {
  // 构造 Vue 根节点
  const app = Vue.createApp({
    data() {
      return {};
    },
    components: {
      "tab-group": component.tabGroup,
      tab: component.tab,
    },
    methods: {
      // 添加标签组
      addGroup() {
        component.createTabGroup(document.getElementById("main"));
        // 重新渲染瀑布流
        this.initMasonry();
      },

      // 初始化瀑布流
      initMasonry() {
        // 删除瀑布流对象中的数据以重新构建，否则在流中新追加的的数据将不会被流覆盖
        // 这个对象在页面渲染的时候由组件自动创建，不要直接remove();
        $("#main").masonry().removeData();
        // 自定义瀑布流对象
        $("#main").masonry({
          itemSelector: ".tabGroup",
          columnWidth: 0,
          gutter: 28,
          percentPosition: true,
        });
      },
    },
    mounted: function () {
      // 挂载完成后加载 瀑布流
      this.initMasonry();
    },
  });

  // 启用Element UI Plus，注册图标
  app.use(ElementPlus);
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }

  // 挂载根节点
  app.mount("#layout");

  // TODO: 搜索框聚焦样式
  // $("#search").click(function(){
  //   alert(123);
  //   $("#search input").focus();
  // });
});
