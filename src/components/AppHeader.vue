<script>
export default {
    
}
</script>
<template>
   <header>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <ul class="list-unstyled d-flex mt-3 mb-4">
                    <li class="me-3"><router-link :to="{ name: 'homepage' }">Home </router-link></li>
                    <li class="me-3"><router-link :to="{ name: 'portfolio' }">Portfolio </router-link></li>
                </ul>
            </div>
        </div>
    </div>
   </header>
</template>
<style lang="scss" scoped>
   
</style>