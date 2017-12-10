<template>
    <div id="app">
        <about-us/>
        <router-view/>
    </div>
</template>

<script>
    import AboutUs from './components/AboutUs';

    export default {
        components: {AboutUs},
        name: 'app',
    };
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    .m-t {
        margin-top: 10px;
    }
</style>
