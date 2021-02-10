<template>
    <div class="test-button">
        <fwcpb-button  @click="testClick" width="120" >按钮</fwcpb-button>
        <fwcpb-button  @click="testClick" height="40" radius="20">圆角</fwcpb-button>
        <fwcpb-button  @click="testClick" bordercolor="#c0c4cc" disabled classhover="fwcpb-button-disabled">禁用</fwcpb-button>
        <fwcpb-button  @click="testClick" width="80" height="30">小按钮</fwcpb-button>
        <fwcpb-button  @click="testClick" >蓝色</fwcpb-button>
        <fwcpb-button  @click="testClick" backcolor="#5daf34">绿色</fwcpb-button>
        <fwcpb-button  @click="testClick" backcolor="#909399">信息</fwcpb-button>
        <fwcpb-button  @click="testClick" backcolor="#cf9236">警告</fwcpb-button>
        <fwcpb-button  @click="testClick" backcolor="#f56c6c">危险</fwcpb-button>
        <fwcpb-button icon="icon-comment"  @click="testClick">图标</fwcpb-button>
    </div>
</template>

<script>
    import fwcpb from '../../packages/index'
    console.log(fwcpb)
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        components: {
            fwcpbButton: fwcpb.fwcpbButton
        },
        methods: {
            testClick(){
                alert(333)
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
    .test-button .fwcpb-button{
        margin: 10px;
    }
</style>
