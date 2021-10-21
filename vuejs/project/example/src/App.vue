<template>
  <div id="app">
    <div >
      <Navbar></Navbar>
  
    </div>
    <router-view />
    <About></About>
  </div>
</template>


<script>
import Navbar from "@/components/Navbar.vue";
import About from "@/components/About.vue";

export default {
  components: {
    Navbar,
    About,

    
  },
}

    </script>



<style lang="scss">
.about{
  position: absolute;
}
</style>
