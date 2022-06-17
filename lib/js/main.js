$(function () {
  // 构造 Vue 组件
  const main = {
    data() {
      return {

      };
    },
    methods: {

      // 添加标签组
      addGroup(){
        // 创建元素、赋类名
        var addEle=document.createElement("div");
        addEle.className="tabGroup";
        // 将 template 中的内容追加到新创建的div中
        // 因为 script type="template" 中的内容全部被解析成文本，所以不能直接获取子节点用于添加
        addEle.innerHTML=$("#addGroup").html();
        // 在瀑布流中追加元素，后面的 .masonry("appended", addEle) 表示为新增的元素加上新增动画
        $("#main").masonry().append(addEle).masonry("appended", addEle);
        // 重新渲染瀑布流
        this.initMasonry();
      },

      addItem(){

      },

      // 初始化瀑布流
      initMasonry(){
        // 删除瀑布流对象中的数据以重新构建，否则在流中新追加的的数据将不会被流覆盖
        // 这个对象在页面渲染的时候由组件自动创建，不要直接remove();
        $("#main").masonry().removeData();
        // 自定义瀑布流对象
        $("#main").masonry({
          itemSelector: ".tabGroup",
          columnWidth: 0,
          gutter: 20
        });
      },

    },
    mounted: function () {
      // 挂载完成后加载 瀑布流
      this.initMasonry();
    },
  };
  const app = Vue.createApp(main);

  // 启用Element UI Plus，注册图标
  app.use(ElementPlus);
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

  // 挂载Vue组件
  app.mount("#layout");


});

// TODO: 搜索框聚焦样式
// $("#search").click(function(){
//   alert(123);
//   $("#search input").focus();
// });