
<template>
    <div class="sd-test" @click="handleClick">{{ num }}</div>
</template>

<script>
export default {
    name: 'SdTest',
    data() {
        return {
            num: 0
        };
    },
    methods: {
        handleClick() {
            this.num++ ;
        }
    }
}
</script>

<style lang="scss" scoped>
.sd-test {
    width: 100px;
    height: 100px;
    line-height: 100px;
    border-radius: 50%;
    font-size: 30px;
    text-align: center;
    background-color: #24292e;
    color: white;
}
</style>
