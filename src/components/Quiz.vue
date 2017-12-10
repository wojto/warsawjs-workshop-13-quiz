<template>
    <div class="col-md-6">
        QUIZ
        <question/>
        <hubert/>
    </div>
</template>

<script>
    import Question from './Question';
    import Hubert from './Hubert';

    export default {
        name: 'Quiz',
        data() {
            return {
                // msg: 'Welcome to Your Vue.js App',
            };
        },
        components: {
            Question,
            Hubert
        }
    };
</script>

<style scoped>
</style>
