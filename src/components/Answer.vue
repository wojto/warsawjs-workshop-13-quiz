<template>
    <div @click="highlight">
        {{ answer.content }}
    </div>
</template>

<script>
    export default {
        name: 'Answer',
        props: ['answer'],
        data() {
            return {
                // msg: 'Welcome to Your Vue.js App',
            };
        },
        methods: {
            highlight(e) {
                this.$emit('handleAnswer', {id: this.answer.id});
            }
        }
    };
</script>

<style scoped>
</style>
