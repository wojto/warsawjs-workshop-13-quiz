<template>
    <div @click="highlight" :class="'answer ' + corrected">
        {{ answer.content }}
    </div>
</template>

<script>
    export default {
        name: 'Answer',
        props: ['answer'],
        data() {
            return {
            };
        },
        computed: {
            highlighted(){
                return this.$store.state.currentQuestion.answerId
            },
            corrected(){
                if (typeof this.$store.state.currentQuestion.correct != 'undefined') {
                    if (this.$store.state.currentQuestion.correct) {
                        return 'correct';
                    } else {
                        return 'wrong';
                    }
                } else {
                    return 'not-answered';
                }
            }
        },
        methods: {
            highlight(e) {
                this.$emit('handleAnswer', {id: this.answer.id});
            }
        }
    };
</script>

<style scoped>
    .answer {
        border: 1px solid #c6c6c6;
        margin: 10px;
        padding: 10px;
        cursor: pointer;
    }
    .correct {
        color: green;
    }
    .wrong {
        color: red;
    }
    .not-answered {
        color: dimgray;
    }
</style>
