<template>
    <transition name="el-loading-fade" @after-leave="handleAfterLeave">
        <div v-show="visible"></div>
    </transition>
</template>

<script>
export default {};
</script>
