<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      label-next= "Sonraki Slayt"
      label-prev="Önceki Slayt"
      background="#ababab"
      img-width="512"
      img-height="240"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

      <b-carousel-slide
      img-width="512"
      img-height="240">
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="512"
            height="240"
            src="../img/slide.jpg"
            alt="image slot"
          >
        </template>
        <h1>Filografi Evi</h1>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="512"
            height="240"
            src="../img/slide1.jpg"
            alt="image slot"
          >
        </template>
        <h1>Takım Çalışmaları</h1>
      </b-carousel-slide>

      
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="512"
            height="240"
            src="../img/slide2.jpg"
            alt="image slot"
          >
        </template>
        <h1>Kadın Portresi</h1>
      </b-carousel-slide>

       <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="512"
            height="240"
            src="../img/slide3.jpg"
            alt="image slot"
          >
        </template>
        <h1>Kişiye Özel Tasarımlar</h1>
      </b-carousel-slide>

     
    </b-carousel>

    
  </div>
</template>

<script>
  export default {
      name:"Slide",
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>
.carousel .carousel-item {
  height: 400px;
}

.carousel-item img {
    position: absolute;
    object-fit:cover;
    top: 0;
    left: 0;
    min-height: 400px;
}
.img-fluid{
  height: 40%;
}

</style>