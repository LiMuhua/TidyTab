// 标签单元组件
const tab = {
    template: "#tab",
    setup() {
        // const instance = Vue.getCurrentInstance()
        // 右键菜单配置项
        const tabMenu = [
            {
                label: "编辑",
                icon: "EditPen",
                // tip: "Alt+向左箭头",//快捷键
                // click: () => { //function(){}
                // },
            },
            {
                label: "删除",
                icon: "Close",
            },
            {
                label: "多选",
                icon: "Check",
            },
        ]
        const isOpen = Vue.ref(false);
        const eventVal = Vue.ref({});
        function rightClick(event) {
            // 这里管不到其它组件的状态，JQ获取所有元素隐藏
            // 会在下一次通过组件隐藏标签单元的右键菜单时统一销毁所有组件
            $(".menus").hide();
            isOpen.value = false;
            Vue.nextTick(() => {
                eventVal.value = event;
                isOpen.value = true;
            });
            event.preventDefault();
        }
        const menusOtions = Vue.shallowRef({
            menus: tabMenu,
        });
        return {
            isOpen,
            eventVal,
            rightClick,
            menusOtions,
        };
    },
    data() {
        return {
            iconUrl: this.tab.iconUrl,
            contents: this.tab.contents,
            icon: "Close"
        }
    },
    props: ["tab"],
    methods: {

    }
};

// 标签组组件
const tabGroup = {
    template: "#tabGroup",
    setup() {
        // 右键菜单配置项
        const groupMenu = [
            {
                label: "编辑",
                icon: "EditPen",
            },
            {
                label: "删除",
                icon: "Close",
            },
            {
                label: "添加标签",
                icon: "CirclePlus",
            },
        ]
        const isOpen = Vue.ref(false);
        const eventVal = Vue.ref({});
        function rightClick(event) {
            isOpen.value = false;
            Vue.nextTick(() => {
                eventVal.value = event;
                isOpen.value = true;
            });
            event.preventDefault();
        }
        const menusOtions = Vue.shallowRef({
            menus: groupMenu,
        });
        return {
            isOpen,
            eventVal,
            rightClick,
            menusOtions,
        };
    },
    data() {
        return {
            title: this.group.title,
            createTime: this.group.createTime,
        };
    },
    components: {
        "tab": tab,
    },
    props: ['group'],
    methods: {

    },
    mounted: function () {

    }
};

export {
    tab,
    tabGroup
};
