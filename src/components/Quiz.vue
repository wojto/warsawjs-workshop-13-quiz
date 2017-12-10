<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                QUIZ
                <question :question="actualQuestion"/>
                <hubert/>
            </div>
        </div>
    </div>
</template>

<script>
    import Question from './Question';
    import Hubert from './Hubert';

    export default {
        name: 'Quiz',
        data() {
            return {
                questionsList: [{
                    id: 1,
                    title: "best car?",
                    answers: [{
                        id: 1,
                        content: "ford",
                        correct: false
                    }, {
                        id: 2,
                        content: "fiat",
                        correct: false
                    }, {
                        id: 3,
                        content: "tesla",
                        correct: false
                    }, {
                        id: 4,
                        content: "GM",
                        correct: true
                    }

                    ]
                }]
            };
        },
        computed: {
            actualQuestion(){
                return this.questionsList[this.$store.state.questionIndex];
            }
        },
        components: {
            Question,
            Hubert
        }
    };
</script>

<style scoped>
</style>
