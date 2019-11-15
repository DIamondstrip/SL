<template>
    <div>
        <div class="title">
            <i
                class="fa fa-arrow-left"
                aria-hidden="true"
                style="vertical-align: middle;"
                @click="goBack"
            ></i>
            <span>TA的相册</span>
        </div>
        <ul class="photoList">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>
<script>
export default {
    methods: {
        goBack() {
            this.$router.back();
        }
    }
};
</script>
<style scoped>
.title {
    padding: 10px;
}
.title span {
    vertical-align: middle;
    margin-left: 110px;
}
.photoList {
    width: 100%;
}
.photoList li {
    width: 93px;
    height: 93px;
    background: pink;
    display: inline-block;
    border-right: 1px #eee solid;
}
</style>