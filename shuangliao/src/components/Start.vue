<template>
    <div class="start">
        <div>
            <img src="https://zhidao.baidu.com/"><span>App名称</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'start'
}
</script>

<style scope>
.start{
    width: 100%;
    height: 100%;
}
.start div{
    position: absolute;
    top: 50%;
    left: 50%;
    /* 平移 */
    transform: translate(-50%, -50%);
}
.start img{
    width: 55px;
    height: 56px;
    vertical-align:middle
}
</style>