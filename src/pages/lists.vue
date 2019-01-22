<template>
	<div id="lists" class="profile-box">
        <p>{{msg}}</p>
        <navTap message="1我是父组件传过来的值"></navTap>
        <navTap v-bind:message="parentMsg" v-on:listenChildEvent="showChildEvent"></navTap>
	</div>
   
</template>

<script>
import navTap from '@/components/navTap'
export default {
	name: 'lists',
	data () {
		return {
            msg:'我是列表页面',
            parentMsg:'2我是父组件动态绑定传的值'
		}
    },
    components:{navTap},
	mounted() { //页面加载就执行函数
		
	},
	methods: {
        showChildEvent(data){
            console.log(data)
        }
    }	
	
}
</script>
<style>
	
</style>
