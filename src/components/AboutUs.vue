<template>
    <div id="about-us">
        <h3>O Nas</h3>
        <p>{{ userName }}</p>
    </div>
</template>

<script>
    export default {
        name: 'AboutUs',
        data() {
            return {

            };
        },
        computed: {
            userName: function(){
                return this.$store.state.userName
            }
        }
    };
</script>

<style scoped>
    #about-us {
        position: absolute;
        right: 0;
        margin-right: 50px;
    }
</style>
