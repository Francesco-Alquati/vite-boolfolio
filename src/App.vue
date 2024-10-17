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
  <div class="conteiner">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center">Elenco Progetti</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card">
          <img class="card-img-top" src="" alt="">
          <div class="card-body">
            <h4 class="card-title">Titolo</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae illo quasi culpa ullam velit consectetur dolor cumque quas expedita quibusdam repellat ratione, dolore fuga excepturi quaerat? Harum illo voluptatem labore!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  @import './styles/generals.scss'
</style>