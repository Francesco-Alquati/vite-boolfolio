<script>
import ProjectCard from './components/ProjectCard.vue';
import axios from 'axios';


export default {
  components: {
    ProjectCard
  },
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
      <ProjectCard v-for="proj in projects" :key="proj.id" :project="proj" />
    </div>
  </div>
</template>
<style lang="scss">
  @import './styles/generals.scss'
</style>