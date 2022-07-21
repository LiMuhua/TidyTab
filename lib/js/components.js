// 标签组组件
const tabGroup = {
    template: "#tabGroup",
    data() {
        return {
            title: "静态标签组",
            createTime: "1天前",
        };
    },
};
/**
 * 创建标签组组件
 * @param {JqObject} position 接收JQ对象，添加组件的位置，在这个位置下面新建节点挂载
 */
function createTabGroup(position) {
    const mountNode = document.createElement("div");
    position.appendChild(mountNode);
    Vue.createApp(tabGroup).mount(mountNode);
    const id = Date.now();
    mountNode.getElementsByClassName("tabGroup")[0].setAttribute("id", id);
    for(let i = 0; i<Math.floor(Math.random()*6+5); i++){
        createTab($("#"+id));
    }

}

// 标签单元组件
const tab = {
    template: "#tab",
    data() {
        return {
            iconUrl:
                "https://element-plus.gitee.io/images/element-plus-logo-small.svg",
            contents:
                "map缓存token并设置过期时间_谛蕴的博客-CSDN博客_map设置过期时间时间_谛蕴的博客-CSDN博客_map设置过期时间",
        };
    },
};
/**
 * 创建标签单元组件
 * @param {JqObject} position 接收JQ对象，添加组件的位置，在这个位置下面新建节点挂载
 */
function createTab(position) {
    const mountNode = document.createElement("div");
    position.append(mountNode);
    // TODO 挂载组件后 ElementUI PLus 的图标组件创建失败
    Vue.createApp(tab).mount(mountNode);
}

export { tab, createTab, tabGroup, createTabGroup };
