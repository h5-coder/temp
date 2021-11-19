<template>
    <div class="wrap">
        <div
            ref="box"
            class="box"
            :style="{transform:'translateX(' + distance + 'px)'}"
        >
            <div
                ref="marquee"
                class="marquee"
                v-html="text"
            ></div>
            <div
                ref="copy"
                class="copy"
            ></div>
        </div>
        <div
            ref="node"
            class="node"
            v-html="text"
        ></div>
    </div>
</template>
<script>
export default {
    name: "Marquee",
    props: {
        list: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            text: "", // 数组文字转化后的字符串
            distance: 0,
            timer: null,
        };
    },
    methods: {
        move() {
            this.timer && clearInterval(this.timer);
            // 获取文字text 的计算后宽度  （由于overflow的存在，直接获取不到，需要独立的node计算）
            const width = this.$refs.node.getBoundingClientRect().width;
            this.$refs.copy.innerHTML = this.text; // 文字副本填充
            // this.distance = 0; // 位移距离
            // 设置位移
            this.timer = setInterval(() => {
                this.distance -= 2;
                // 如果位移超过文字宽度，则回到起点
                if (-this.distance >= width) {
                    this.distance = 16;
                }
            }, 100);
        },
        setText() {
            for (let i = 0; i < this.list.length; i++) {
                this.text += " " + this.list[i];
            }
        },
    },
    // 把父组件传入的arr转化成字符串
    mounted() {
        this.setText();
        this.move();
    },
    updated() {},
    beforeDestroy() {
        clearInterval(this.timer);
    },
    watch: {
        list() {
            this.setText();
            this.$nextTick(this.move);
        },
    },
};
</script>
<style scoped>
.wrap {
    overflow: hidden;
}

.box {
    width: 80000%;
}

.box div {
    float: left;
}

.marquee {
    margin: 0 16px 0 0;
}

.node {
    position: absolute;
    z-index: -999;
    top: -999999px;
}
</style>
