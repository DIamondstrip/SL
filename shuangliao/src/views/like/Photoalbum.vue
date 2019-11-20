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
        <van-image-preview
            v-model="show"
            :images="images"
            @change="onChange"
            :startPosition="start"
        >
            <template v-slot:index>第{{ index+1 }}页</template>
        </van-image-preview>
        <ul class="photoList">
            <li v-for="(item,index) of album" :key="index" @click="showpic(index)">
                <img :src="item.pImageurl" alt />
            </li>
        </ul>
    </div>
</template>
<script>
import eventbus from "../../eventbus";
export default {
    data() {
        return {
            show: false,
            index: 0,
            images: [],
            start: 0
        };
    },

    methods: {
        onChange(index) {
            this.index = index;
        },
        goBack() {
            this.$router.back();
        },
        showpic(index) {
            this.show = true;
            this.start = index;
        }
    },
    created() {
        this.$nextTick(function() {
            this.$store.dispatch("details/album", this.$route.params.id); //相册
        });
    },
    computed: {
        album() {
            let album = this.$store.state.details.album;
            this.images = album.map(value => {
                //利用计算属性缓存,不至于刷新了没了
                return value.pImageurl;
            });
            return album;
        }
    },
    mounted() {
        eventbus.$emit("showFooter", false);
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
    display: inline-block;
    border-right: 1px #eee solid;
}
</style>