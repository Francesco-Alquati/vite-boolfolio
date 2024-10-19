<script>
import AppHeader from './components/AppHeader.vue';
import ProjectCard from './components/ProjectCard.vue';
import axios from 'axios';


export default {
  components: {
    AppHeader,
    ProjectCard
  },
  data(){
    return{
      projects : [],
      last_page: null,
      current_page: null
    }
  },
  methods:{
    getAllProjects(){
      axios.get('http://127.0.0.1:8000/api/projects').then((res) => {
        this.projects = res.data.results.data;
        this.last_page = res.data.results.last_page;
        this.current_page = res.data.results.current_page;
      })
    },
    goToPage(page){
      axios.get('http://127.0.0.1:8000/api/projects?page=', {params: {page: page}}).then((res) => {
        this.projects = res.data.results.data;
        this.current_page = res.data.results.current_page;
      })
    }
  }, 
  created(){
    this.getAllProjects();
  }
}
</script>
<template>
  <AppHeader />
  <div class="conteiner container-md container-lg main-content">
    <div class="row">
      <div class="col-12 mb-3">
        <h1 class="text-center">Elenco Progetti</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#" @click="goToPage(current_page - 1)">Previous</a></li>
            <li class="page-item" v-for="i in last_page"><a class="page-link" href="#" @click="goToPage(i)">{{ i }}</a></li>
            <li class="page-item"><a class="page-link" href="#" @click="goToPage(current_page + 1)">Next</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="row gy-4">
      <ProjectCard v-for="proj in projects" :key="proj.id" :project="proj" />
    </div>
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#" @click="goToPage(current_page - 1)">Previous</a></li>
            <li class="page-item" v-for="i in last_page"><a class="page-link" href="#" @click="goToPage(i)">{{ i }}</a></li>
            <li class="page-item"><a class="page-link" href="#" @click="goToPage(current_page + 1)">Next</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  @import './styles/generals.scss'
</style>