<template>
    <div id="navTap" class="profile-box">
        {{msg}}我是引入组件导航导航
        <div>{{message}}</div>
        <button @click="sendMsgToParent">子组件向父组件传值：</button>
	</div>
</template>
<style>

</style>
<script>
    export default {
        name: 'navTap',
        data () {
            return {
                msg:'navTap'
            }
        },
        props : ['message'],
        mounted() { //页面加载就执行函数
            
        },
        methods: {
            sendMsgToParent(){
                this.$emit("listenChildEvent","我是子组件向父组件传的值...........")
            }
        }	
    }
</script>

