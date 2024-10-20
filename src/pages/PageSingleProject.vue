<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
    data(){
        return{
            store,
            project: null
        }
    },
    methods:{
        getProject(){
            axios.get('').then((res) => {
                if(res.data.success){
                    this.project = res.data.result
                }
                else{

                }
            });
        }
    }
}
</script>
<template>
    <div class="container text-white">
        <div class="row">
            <div class="col-12 col-md-6 col-lg-4">
                <img src="" alt="">
            </div>
            <div class="col-12 col-md-6 col-lg-8 mt-3 card text-center b-shadow">
                <div class="head">
                    <h1 class="text-uppercase">Titolo</h1>
                    <p><strong class="text-warning">Tipologia: </strong>Tipo</p>
                    <p><strong class="text-success">Tecnologie: </strong>Tecnologie</p>
                </div>
            </div>
            <div class="col-12">
                <div class="content text-center mt-5 card b-shadow">
                    <p class="p-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla incidunt alias animi quos architecto, esse officiis. Id libero aliquid optio dicta ex! Ipsa iure porro minus aliquam alias laudantium nobis.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .b-shadow{
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
</style>