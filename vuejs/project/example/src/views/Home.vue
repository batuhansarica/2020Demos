<template>
<div id="home">
  <div>
<Slide></Slide>
</div>
<About></About>
  </div>
</template>

<script>

import Slide from "@/components/Slide.vue";
import About from "@/components/About.vue";

export default {
  name: "Home",
  components: {
    Slide,
   About,
    
  },
};
</script>




