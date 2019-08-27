<template>
    <div class="navContainer">
        <ul class="navBox">
            <router-link to="/" tag="li" exact>首页</router-link>
            <router-link to="/about" tag="li">关于我们</router-link>
            <router-link to="/services" tag="li">服务</router-link>
            <router-link to="/products" tag="li">产品</router-link>
            <router-link to="/blog" tag="li">博客</router-link>
            <router-link to="/contact" tag="li">联系我们</router-link>
        </ul>
        <div class="searchBox">
            <input type="text" v-model="searchContent" class="searchInput"/>
            <img src="../assets/search.png" class="searchIcon" v-on:click="search"/>
        </div>
    </div>
</template>
<script>
export default {
    name: "NavBar",
    props: {
        
    },
    data() {
        return {
            // 搜索框中输入的内容
            searchContent: ""
        }
    },
    created() {
        // 创建或者是刷新页面的时候跳转到home
        this.$router.push({"path": "/"});
    },
    methods: {
        search() {
            console.log("searchContent is ",this.searchContent);
        }
    },
    mounted() {
        this.$nextTick(() => {
            let store = this.$store;
            console.log("store is ",store);
        })
    }
}
</script>
<style lang="less" scoped>
    .navContainer {
        min-width: 800px;
        width: 1200px;
        height: 50px;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        top: 20px;
        left: 20%;
        padding: 10px 20px;
        .navBox {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: nowrap;
            li {
                padding: 10px 15px;
                border-bottom: 2px solid rgba(0, 0, 0, 0);
                font-size: 20px;
                color: #fff;
                cursor: pointer;
            }
            li:hover {
                border-bottom: 2px solid #fff;
            }
        }
        .searchBox {
            margin-right: 40px;
            position: relative;
            .searchInput {
                background-color: rgba(0,0,0,0.2);
                border-width: 0px;
                width: 220px;
                height: 35px;
                padding-left: 10px;
                outline: none;
                font-size: 20px;
                color: #fff;
                border: 1px solid #fff;
                border-radius: 5px;
            }
            .searchIcon{
                position: absolute;
                cursor: pointer;
                right: 0px;
                top: 5px;
            }

        }
    }   
</style>