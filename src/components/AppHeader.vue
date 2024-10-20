<script>
export default {
    props: {
        menu: Array
    }
}
</script>
<template>
   <header>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <ul class="list-unstyled d-flex mt-3 mb-4">
                    <li class="me-3" v-for="item, ndex in menu" :key="index"><router-link :to="{ name: item.name }">{{ item.label }}</router-link></li>
                    
                </ul>
            </div>
        </div>
    </div>
   </header>
</template>
<style lang="scss" scoped>
   
</style>