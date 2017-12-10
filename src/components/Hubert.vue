<template>
    <div class="hubert">
        Witaj, jestem Hubert!<br/>
        Stan: {{ state }}<br/>
        Odpowiedź: {{ question }}<br/>
        <div v-if="state==1">
            Czy jesteś pewien?
            <button @click="accept">Tak</button>
        </div>
        <div v-if="state==2">
            Idziemy dalej?
            <button @click="moveNext">Tak</button>
        </div>
    </div>
</template>

<script>
    import Answer from './Answer';
    import check from '../assets/validate.js';

    export default {
        name: 'Hubert',
        data() {
            return {
                // msg: 'Welcome to Your Vue.js App',
            };
        },
        computed: {
            question(){
                return this.$store.state.currentQuestion
            },
            state(){
                return this.$store.state.questionPhase
            }
        },
        methods: {
            accept(question) {
                this.$store.dispatch('answerQuestion', check(this.question.questionId, this.question.answerId));
            },
            moveNext() {
                if (this.$store.state.currentQuestion.correct) {
                    this.$store.dispatch('nextQuestion');
                } else {
                    this.$router.push('finish');
                }
            }
        }
    };
</script>

<style scoped>
    .hubert {
        background:
                url('http://i.iplsc.com/hubert-urbanski-wraca-z-milionerami/00063FAO9S5FN02D-C122-F4.jpg') no-repeat;
        background-size: contain;
        min-height: 100px;
    }
</style>
