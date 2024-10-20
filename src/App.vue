<script>

import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader,
    
  },
  data(){
    return{
     store

    }
  }
}
</script>
<template>
  <AppHeader :menu="store.menuItems" />
  <router-view></router-view>
</template>
<style lang="scss">
  @import './styles/generals.scss'
</style>