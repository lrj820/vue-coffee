<template>
    <div class="home">
        <van-nav-bar>
            <template #left>
               <div class="home-nav">
                    <div class="t1">上午好</div>
                    <div class="t2">Allen</div>
               </div>
            </template>
            <template #right>
                <div class="home-search">
                    <van-search placeholder="输入商品名称" />
                </div>
            </template>
        </van-nav-bar>

        <div class="home-content">
            <!-- 轮播图 -->
            <div class="banner-box">
                <van-swipe @change="changecurrentIndex" :autoplay="3000" loop>
                    <van-swipe-item v-for="(item,index) in bannerData" :key="index" @click="goDetail(item.pid)"> 
                        <img class="auto-img" :src="item.bannerImg" alt="">
                    </van-swipe-item>    
                  
                    <template #indicator>
                        <div class="index-box">
                            <div :class="{active:index ==currentIndex}" v-for="(item,index) in bannerData" :key="index"></div>
                            
                        </div>
                    </template>
                </van-swipe>
            </div>

            <!-- 商品 -->
            <div class="product-box">
                <div>

                    <div class="pro-title-box clearfix">
                        <span class="pro-title">热卖推荐</span>
                    </div>

                    <div class="products clearfix">
                        <div class="pro-item fl" v-for="(item,index) in hotProduct" :key="index" @click="goDetail(item.pid)">
                            <div class="img-box">
                                <img class="auto-img" :src="item.smallImg" alt="">
                                <!-- hot 标签 -->
                                <div class="hot">
                                    hot
                                </div>
                            </div>
                            <div class="pro-info">
                                <div class="pro-name">{{item.name}}</div>
                                <div class="pro-enname one-text">{{item.enname}}</div>
                                <div class="pro-price">&yen;{{item.price}}</div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
import "../assets/less/home.less"
    export default {
        name:'Home',
        data(){
            return {
                // 轮播图
                bannerData:[],
                // 当前轮播图索引号
                currentIndex:0,
                //热卖商品
                hotProduct:[]
            }
        },

        created(){
            // 调用获取轮播图数据
            this.getBannerData()
            //调用获取热卖推荐的数据
            this.getHotProduct()
        },

        methods:{
            // 修改轮播图片索引
            changecurrentIndex(index){
                this.currentIndex = index
            },
            // 获取轮播图数据函数
            getBannerData(){
                // 发起获取轮播图数据请求
                this.axios({
                    // 发起请求类型
                    method:'GET',
                    url:'/banner',
                    params:{
                        appkey:this.appkey
                    }
                }).then(result =>{
                    console.log("轮播图数据",result);
                    if(result.data.code == 300){
                        this.bannerData = result.data.result
                        console.log(this.bannerData);
                    }
                })
            },
            //获取热卖商品函数数据
            getHotProduct(){
                //发起获取数据请求
                this.axios({
                    //获取数据方法
                    method:"GET",
                    //请求的地址
                    url:"/typeProducts",
                    //请求参数
                    params:{
                        appkey:this.appkey,
                        key:"isHot",
                        value:1
                    }
                }).then(result =>{
                    //if 判断 如果返回来的Code码等于 500 下相当于获取是正确的
                    if(result.data.code == 500){
                        //将数据存储到定义的变量
                        this.hotProduct = result.data.result
                    }
                    
                })
            },
            //跳转到详情页面
            goDetail(pid){
                this.$router.push({name:'Detail'})
            }
        }
    }
</script>

<style lang="less" scoped>

</style>