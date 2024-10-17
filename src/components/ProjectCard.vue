<script>
export default {
    name: 'ProjectCard',
    props:{
        project: Object
    }
}
</script>
<template>
    <div class="col-12 col-md-6 col-lg-4">
        <div class="card">
          <img class="card-img-top" :src="project.image != null ? `http://127.0.0.1:8000/storage/${project.image}` : 'https://placehold.co/300x200?text=imagine+copertina' " alt="">
          <div class="card-body bg-dark text-white">
            <h4 class="card-title text-center">{{ project.name }}</h4>
            <p><strong class="text-warning">{{ project.type ? project.type.name : 'Tipologia non definita'}}</strong></p>
            <ul class="list-unstyled d-flex text-info" v-if="project.technologies">
                <li class="me-1" v-for="(tech, index) in project.technologies.slice(0, -1)">
                  {{ tech.name }},
                </li>
                <li v-for="tech in project.technologies.slice(-1)">
                  {{ tech.name }}
                </li>
              </ul>
            <p>{{ project.summary }}</p>
          </div>
        </div>
      </div>
</template>
<style lang="">
    
</style>