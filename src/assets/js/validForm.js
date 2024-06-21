import Vue from 'vue';
import {Toast} from 'vant';

Vue.use(Toast);

//表单验证方法
class ValidForm{
    constructor(){}

    //验证函数
    valid(o){
        for(let key in o){
            if(!o[key].reg.test(o[key].value)){
                //提示错误信息
                Toast(o[key].errorMsg);
                //表单验证不通过
                return false
            }
        }
        //表单验证通过
        return true;

    }
}

export const validForm = new ValidForm();