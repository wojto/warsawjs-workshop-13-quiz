<template>
    <div class="container">
        <h1>{{ title }}</h1>
        <div class="row">
            <div class="col-md-12">
                <form class="form-horizontal">
                    <label>
                        Wpisz swoje imię:
                        <input v-model="userName" type="text" :placeholder="placeholder" class="form-control"/>
                    </label>
                    <p v-if="userName">Wpisano: {{ userName }}</p>
                    <button class="btn btn-submit" @click="launch()">Rozpocznij Quiz</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import AboutUs from "./AboutUs";
    import Quiz from "./Quiz";

    export default {
        name: 'Start',
        data() {
            return {
                title: 'Witaj na stronie głównej!',
                userName: '',
                placeholder: 'Wpisz imię'
            };
        },
        methods: {
            launch() {
                this.$router.push('/quiz');
                this.$store.dispatch('updateUserName', {userName: this.userName});
            }
        },
        components: {
            AboutUs,
            Quiz
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        font-weight: normal;
    }
</style>
