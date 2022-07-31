// 标签单元组件
const tab = {
    template: "#tab",
    data() {
        return {
            infomation: {},
            iconUrl: this.tab.iconUrl,
            contents: this.tab.contents,
        }
    },
    props: ["tab"],
    methods: {

    }
};

// 标签组组件
const tabGroup = {
    template: "#tabGroup",
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
    mounted: function(){

    }
};

export {
    tab,
    tabGroup
};
