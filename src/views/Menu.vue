<template>
    <div class="menu">
        <div class=menu-nav>
            <!-- 搜索框 -->
            <div class="menu-search">
                <van-search placeholder="输入商品名称"/>
            </div>
            <!-- 搜索框end -->

            <!-- 切换商品类容 -->
            <div class="menu-option">
                <div class="menu-item" v-for="(item,index) in menuOption" :key="index">
                    <div class="m-item">
                        <div class="m-icon">
                            <img class="auto-img" :src="menuIndex == index?item.activeIcon :item.inactiveIcon" alt="">
                        </div>
                        <div class="m-text">
                            {{ item.tittle }}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import "../assets/less/menu.less"
    export default{
        name:'Menu',
        data(){
            return{
                menuIndex:0,
                menuOption:[
                    {
                        tittle:'推荐',
                        inactiveIcon:require("../assets/images/icons_09.gif"),
                        activeIcon:require('../assets/images/icons_21.gif'),
                    },
                    {
                        tittle:'拿铁',
                        inactiveIcon:require("../assets/images/icons_05.gif"),
                        activeIcon:require('../assets/images/icons_19.gif'),
                    },
                    {
                        tittle:'咖啡',
                        inactiveIcon:require("../assets/images/icons_03.gif"),
                        activeIcon:require('../assets/images/icons_18.gif'),
                    },
                    {
                        tittle:'瑞纳冰',
                        inactiveIcon:require("../assets/images/icons_07.gif"),
                        activeIcon:require('../assets/images/icons_20.gif'),
                    }
                ]

            }
        }
    }
</script>