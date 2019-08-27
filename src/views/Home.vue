<template>
    <div class="homepage">
        <div class="itemContainer">
            <div class="item">
                <img src="../assets/icon1.png"/>
                <div class="content">
                    <p class="contentFirst">介绍</p>
                    <p class="contentSecond">afasfasdfadf</p>
                </div>
            </div>
            <div class="item">
                <img src="../assets/icon1.png"/>
                <div class="content">
                    <p class="contentFirst">介绍</p>
                    <p class="contentSecond">afasfasdfadf</p>
                </div>
            </div>
            <div class="item">
                <img src="../assets/icon1.png"/>
                <div class="content">
                    <p class="contentFirst">介绍</p>
                    <p class="contentSecond">afasfasdfadf</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .homepage {
        width: 100%;
        height: 250px;
        position: relative;
        .itemContainer {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .item {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                flex-wrap: nowrap;
                width: 200px;
                height: 250px;
                margin-right: 20px;
                margin-top: -100px;
                background: rgb(150, 199, 191);
                .content {
                    .contentFirst {
                        font-size: 30px;
                        color: #fff;
                        margin-top: 20px;
                    }
                    .contentSecond {
                        font-size: 20px;
                        color: black;
                    }
                }
            }
        }
    }
</style>