<template>
    <div class="login">
        <van-nav-bar
            right-text="先逛一会"
        >
            <template #left>
                <div class="nav-left">
                    <div class="logo"></div>
                    <div class="logo-text">Luckin coffee</div>
                </div>
            </template>
    </van-nav-bar>

    <div class="user-box">
        <div class="user-title">
            <div class="welcome">欢迎回来</div>
            <div class="sub-title">Please login to your accounts</div>
        </div>

        <!-- 表单控性 -->
        <van-form>
            <van-field
                v-model="userInfo.phone"
                name="手机号"
                label="手机号"
                placeholder="手机号"
            />
            <van-field
                v-model="userInfo.password"
                :type="isRegisterPassword?'password':'text'"
                :right-icon="isRegisterPassword?'closed-eye':'eye-o'"
                @click-right-icon="toggleRedisterPasswordType"
                name="密码"
                label="密码"
                placeholder="密码必须为字母开头"
            />
            <div class="forgot">
                <span>忘记密码</span>
            </div>
            <div class="commit-btn">
                <van-button round block tolor="#0c34ba">登入</van-button>
            </div>
            <div class="commit-btn">
                <van-button round block type="default" @click="toggleRegisterBox">注册</van-button>
            </div>
        </van-form>


    </div>

    <!-- 注册框 -->
    <van-popup class="register-box" closeable v-model="isShow" position="botton">
        <div class="register-title">注册</div>
        <van-form>
            <van-field
                v-model="userRegisterInfo.phone"
                name="手机号"
                label="手机号"
                placeholder="11位手机号"
            />
            <van-field
                v-model="userRegisterInfo.password"
                :type="isRegisterPassword?'password':'text'"
                :right-icon="isRegisterPassword?'closed-eye':'eye-o'"
                @click-right-icon="toggleRedisterPasswordType"
                name="密码"
                label="密码"
                placeholder="密码必须为字母开头"
            />
            <van-field
                v-model="userRegisterInfo.nickName"
                name="昵称"
                label="昵称"
                placeholder="昵称"
            />
            <div class="commit-btn register-btn">
                <van-button round block color="#0c34ab" @click="register">注册</van-button>
            </div>
        </van-form>
    </van-popup>

    </div>
</template>

<script>
//导入表单验证模块
import { validForm } from '../assets/js/validForm'
import "../assets/less/login.less"


    export default {
        name:'Login',
        data(){
            return{
                //是否显示注册框
                isShow:false,
                //切换注册框密码类型
                isRegisterPassword:true,
                //用户登入信息
                userInfo:{
                    phone:'',
                    passWord:''
                },
                //用户注册信息
                user RegisterInfo:{
                    phone:'',
                    passWord:'',
                    nickName:''
                }
            }
        },
        methods:{
            toggleRegisterBox(){
                this.isShow = True
            },
            toggleRegisterPasswordType(){
                this.isRegisterPassword = !this.isRegisterPassword
            },
            //注册
            register(){
                console.log(1);
                //构造表单信息
                let o ={
                    phone:{
                        value:this.userRegisterInfo.phone,
                        errorMsg:'手机号格式不正确',
                        reg:/^1[3-9]\d{9}$/
                    },
                    passWord:{
                        value:this.userRegisterInfo.passWord,
                        errorMsg:'密码由数字和下划线组合（6-16字符）',
                        reg:/^[A-Za-z]\w{5,15}$/
                    },
                    nickName:{
                        value:this.userRegisterInfo.nickName,
                        errorMsg:'名称有字母数字下划线汉字组合（1-10字符）',
                        reg:/^[\w\u4e00-\u9fa5]{1,10}$/
                    }
                }

                let isPass = validForm.valid(o);
                if(isPass){
                    //赋值用户注册信息
                    let userInfo = Object.assign({},this.userRegisterInfo);
                    userInfo.appkey = this.appkey

                    this.$toast.loading({
                        //加载提示文本
                        message:'加载中...',
                        //禁止穿透点击
                        forbidClick:true,
                        //加载时长 0 表示无限时长
                        duration:0
                    })
                    //发起注册请求
                    this.axios({
                        method:'POST',
                        url:'/register',
                        data:userInfo
                    }).then(result =>{
                        this.$toast.clear()
                        if(result.data.code ==100){
                            this.isShow= false
                            this.$toast(result.data.msg)
                        }else{
                            //如果注册失败 或者手机号被注册
                            this.$toast(result.data.msg)
                        }
                    })

                }
            }
        }
    }
</script>

<style lang="less" scoped>
</style>