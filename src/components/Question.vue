<template>
    <div class="panel panel-default">
        <div class="panel-heading">{{ question.title }}</div>
        <div class="panel-body">
            <answer v-for="(answer, index) in question.answers" :answer="answer" :key="index"
                    @handleAnswer="selectAnswer"/>
        </div>
    </div>
</template>

<script>
    import Answer from './Answer';

    export default {
        components: {Answer},
        name: 'Question',
        props: ['question'],
        data() {
            return {
                // msg: 'Welcome to Your Vue.js App',
            };
        },
        methods: {
            selectAnswer(payload) {
                console.log(payload);
            }
        }
    };
</script>

<style scoped>
</style>
