<script>
import axios from 'axios';

export default {
  data(){
    return{
      projects : []
    }
  },
  methods:{
    getAllProjects(){
      axios.get('http://127.0.0.1:8000/api/projects').then((res) => {
        this.projects = res.data.results;
      })
    }
  }, 
  created(){
    this.getAllProjects();
  }
}
</script>
<template>
  <div class="conteiner container-md container-lg">
    <div class="row">
      <div class="col-12 mb-3">
        <h1 class="text-center">Elenco Progetti</h1>
      </div>
    </div>
    <div class="row gy-4">
      <div class="col-12 col-md-6 col-lg-4" v-for="proj in projects" :key="proj.id">
        <div class="card">
          <img class="card-img-top" :src="proj.image != null ? `http://127.0.0.1:8000/storage/${proj.image}` : 'https://placehold.co/300x200?text=imagine+copertina' " alt="">
          <div class="card-body">
            <h4 class="card-title text-center">{{ proj.name }}</h4>
            <p>{{ proj.summary }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  @import './styles/generals.scss'
</style>