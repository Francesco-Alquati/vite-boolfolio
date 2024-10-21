<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
    data(){
        return{
            store,
            success: false,
            project: null
        }
    },
    methods:{
        getProject(){
            this.success = false
            axios.get(`${store.baseUrl}/projects/${this.$route.params.slug}`).then((res) => {
                if(res.data.success){
                    this.project = res.data.results
                    this.success = true
                }
                else{

                }
            });
        }
    },
    created(){
        this.getProject();
    }
}
</script>
<template>
    <div v-if="!success" class="text-white text-center fs-1 mt-5">Caricamento...</div>
    <div v-else class="container text-white">
        <div class="row my-4">
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card">
                    <img class="img-fluid" :src="project.image != null ? `http://127.0.0.1:8000/storage/${project.image}` : 'https://placehold.co/400x200?text=imagine+copertina' " alt="">
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-8 card text-center b-shadow">
                <div>
                    <h1 class="text-uppercase mt-4">{{ project.name }}</h1>
                    <p class="text-warning mt-4">{{ project.type != null ? project.type.name : 'Nessuna Tipologia' }}</p>
                    <p v-if="project.technologies.length > 0"><span v-for=" tech in project.technologies">{{ tech.name }}</span></p>
                    <p v-else class="text-success">Nessuna Tecnologia</p>
                </div>
            </div>
            <div class="col-12">
                <div class="content text-center mt-4 card b-shadow">
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