<template>
    <h2>{{homdata}}</h2>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'Hello',
        data() {
            return{
                homdata: ''
            }
        },
        create() {
            axios({
                url: 'http://152.136.185.210:7878/api/m5/home/multidata'
            }).then(res =>{
                this.homdata = res;
            })
        }
    }
</script>

<style scoped>

</style>