
<template>
    <p @click="click">request</p>
</template>
<script>
export default {
    methods: {
        async click() {
            let response = await this.$axios.get("https://www.easy-mock.com/mock/5c46cd90eaf31779b928ae07/example/mock")
            console.log(response)
        }
    }
}
</script>
<style lang="scss" scoped>
    .request {
        background: #FFCCCC;
        height: 98vh;
    }
</style>
