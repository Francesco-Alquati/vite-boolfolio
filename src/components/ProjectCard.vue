<script>
export default {
    name: 'ProjectCard',
    props:{
        project: Object
    }, 
    methods:{
        truncateText(text){
            return text != null ? text.substr(0, 40) + '...' : '';
        }
    }
}
</script>
<template>
    <div class="col-12 col-md-6 col-lg-4">
        <div class="card card-h border-black">
          <img class="card-img-top" :src="project.image != null ? `http://127.0.0.1:8000/storage/${project.image}` : 'https://placehold.co/300x200?text=imagine+copertina' " alt="">
          <div class="card-body bg-dark text-white">
            <h6 class="card-title text-center text-decoration-underline">{{ project.name }}</h6>
            <p class="mt-4"><strong class="text-warning">{{ project.type ? project.type.name : 'Tipologia non definita'}}</strong></p>
            <ul class="list-unstyled d-flex text-success" v-if="project.technologies.length > 0">
                <li class="me-1" v-for="tech in project.technologies.slice(0, -1)">
                  {{ tech.name }},
                </li>
                <li v-for="tech in project.technologies.slice(-1)">
                  {{ tech.name }}
                </li>
            </ul>
            <p>{{ truncateText(project.summary) }}</p>
            <div class="text-center">
                <router-link class="btn btn-sm btn-primary" :to="{ name: 'single-project', params: { slug: project.slug } }">Dettaglio Progetto</router-link>
            </div>
          </div>
        </div>
      </div>
</template>
<style lang="scss" scoped>
    .card-h{
        height: 480px;
    }
</style>