<template>
    <div class="main">
        <!-- 二级路由视图 -->
        
        <div>
            <router-view></router-view>
        </div>
        <!-- 二级路由视图 -->

        <van-tabbar v-model="activeName" inactive-color="#646566" active-color="#0c43ba" route>
            <van-tabbar-item :icon="item.icon" v-for="(item,index) in tabbarData" :key="index" :name='item.name' :to='item.path' replace>

                <span>{{ item.tittle }}</span>
                <template #icon="props">
                    <img :src="props.active ? item.activeImg : item.inactiveImg" />
                </template>

            </van-tabbar-item>
        </van-tabbar>

    </div>

</template>

<script>
    export default{
        name:'Main',
        data(){
            return{
                //激活标签名称
                activeName:"Home",

                tabbarData:[
                    {
                        //标签名字
                        tittle:"首页",
                        //标签跳转的名称
                        name:'Home',
                        //跳转的路径
                        path:'/main/home',
                        //inactive 未被选中的图片
                        inactiveImg:require('../assets/images/home.png'),
                        //被选中的图片 高亮 带上active
                        activeImg:require('../assets/images/home_active.png')
                    },
                    {
                        //标签名字
                        tittle:"菜单",
                        //标签跳转的名称
                        name:'Menu',
                        //跳转的路径
                        path:'/main/menu',
                        //inactive 未被选中的图片
                        inactiveImg:require('../assets/images/menu.png'),
                        //被选中的图片 高亮 带上active
                        activeImg:require('../assets/images/menu_active.png')
                    },
                    {
                        //标签名字
                        tittle:"购物袋",
                        //标签跳转的名称
                        name:'Shopbag',
                        //跳转的路径
                        path:'/main/shopbag',
                        //inactive 未被选中的图片
                        inactiveImg:require('../assets/images/shopbag.png'),
                        //被选中的图片 高亮 带上active
                        activeImg:require('../assets/images/shopbag_active.png')
                    },
                    {
                        //标签名字
                        tittle:"我的",
                        //标签跳转的名称
                        name:'My',
                        //跳转的路径
                        path:'/main/my',
                        //inactive 未被选中的图片
                        inactiveImg:require('../assets/images/my.png'),
                        //被选中的图片 高亮 带上active
                        activeImg:require('../assets/images/my_active.png')
                    }
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>