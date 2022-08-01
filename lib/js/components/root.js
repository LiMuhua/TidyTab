import * as tab from "/lib/js/components/tab.js";

$(function () {  
  // 构造 Vue 根节点
  const app = Vue.createApp({
    data() {
      return {
        groupDataList: [
          {
            title: "静态标签组",
            createTime: "1天前",
            tabDataList: [
              {
                iconUrl:
                  "https://element-plus.gitee.io/images/element-plus-logo-small.svg",
                contents:
                  "map缓存token并设置过期时间_谛蕴的博客-CSDN博客_map设置过期时间时间_谛蕴的博客-CSDN博客_map设置过期时间",
              },
              {
                iconUrl:
                  "https://element-plus.gitee.io/images/element-plus-logo-small.svg",
                contents:
                  "map缓存token并设置过期时间_谛蕴的博客-CSDN博客_map设置过期时间时间_谛蕴的博客-CSDN博客_map设置过期时间",
              },
              {
                iconUrl:
                  "https://element-plus.gitee.io/images/element-plus-logo-small.svg",
                contents:
                  "map缓存token并设置过期时间_谛蕴的博客-CSDN博客_map设置过期时间时间_谛蕴的博客-CSDN博客_map设置过期时间",
              },
              {
                iconUrl:
                  "https://element-plus.gitee.io/images/element-plus-logo-small.svg",
                contents:
                  "map缓存token并设置过期时间_谛蕴的博客-CSDN博客_map设置过期时间时间_谛蕴的博客-CSDN博客_map设置过期时间",
              },
              {
                iconUrl:
                  "https://element-plus.gitee.io/images/element-plus-logo-small.svg",
                contents:
                  "map缓存token并设置过期时间_谛蕴的博客-CSDN博客_map设置过期时间时间_谛蕴的博客-CSDN博客_map设置过期时间",
              }
            ]
          },
          {
            title: "静态标签组",
            createTime: "1天前",
            tabDataList: [
              {
                iconUrl:
                  "https://element-plus.gitee.io/images/element-plus-logo-small.svg",
                contents:
                  "map缓存token并设置过期时间_谛蕴的博客-CSDN博客_map设置过期时间时间_谛蕴的博客-CSDN博客_map设置过期时间",
              },
              {
                iconUrl:
                  "https://element-plus.gitee.io/images/element-plus-logo-small.svg",
                contents:
                  "map缓存token并设置过期时间_谛蕴的博客-CSDN博客_map设置过期时间时间_谛蕴的博客-CSDN博客_map设置过期时间",
              },
              {
                iconUrl:
                  "https://element-plus.gitee.io/images/element-plus-logo-small.svg",
                contents:
                  "map缓存token并设置过期时间_谛蕴的博客-CSDN博客_map设置过期时间时间_谛蕴的博客-CSDN博客_map设置过期时间",
              },
              {
                iconUrl:
                  "https://element-plus.gitee.io/images/element-plus-logo-small.svg",
                contents:
                  "map缓存token并设置过期时间_谛蕴的博客-CSDN博客_map设置过期时间时间_谛蕴的博客-CSDN博客_map设置过期时间",
              },
              {
                iconUrl:
                  "https://element-plus.gitee.io/images/element-plus-logo-small.svg",
                contents:
                  "map缓存token并设置过期时间_谛蕴的博客-CSDN博客_map设置过期时间时间_谛蕴的博客-CSDN博客_map设置过期时间",
              }
            ]
          }
        ],
        tabDataTemp: {
          iconUrl: "",
          contents: "",
        },
        groupDataTemp: {
          title: "",
          createTime: "",
        }
      }
    },
    components: {
      "tab-group": tab.tabGroup,
      "tab": tab.tab
    },
    methods: {
      // 添加标签组
      createTabGroup(value) {
        let endIndex = this.groupDataList.length;
        this.groupDataList.splice(endIndex, 0, value)
        // console.log(this.groupDataList)
        // TODO 第一次点击添加的时候被添加到文档流最开始的位置，之后正常添加，init时的元素移动可能也跟此有关
        this.initMasonry()
      },

      createTab(groupIndex, value){
        let originalValue = this.groupDataList[groupIndex]
        originalValue.tabDataList.push(value)
        this.initMasonry()
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
          gutter: 26,
          percentPosition: true,
        });
      },
    },
    mounted: function () {
      // 挂载完成后加载 瀑布流
      this.initMasonry();
    },
  });

  // 装载Element UI Plus插件，注册图标
  app.use(ElementPlus);
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
  // 装载右键菜单插件
  app.use(Vue3Menus);

  // 挂载根节点
  app.mount("#layout");


  // TODO: 搜索框聚焦样式
  // $("#search").click(function(){
  //   alert(123);
  //   $("#search input").focus();
  // });
});
