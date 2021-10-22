<template>
<div>

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">

    <span class="navbar-brand mb-0 h1" >
        <img class="imglogo" src="../img/logo.jpg">Filografi Evi</span>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
          </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">
          <router-link to="/"><a class="nav-link active" aria-current="page" href="#">
            Ana Sayfa</a></router-link>
        </li>

        <li class="nav-item">
         <router-link to="/card"> <a class="nav-link" href="#">Ürünler</a> </router-link>
        </li>

        <li class="nav-item">
         <router-link to="/history"> <a class="nav-link">Tarihçe</a> </router-link>
        </li>

        <li class="nav-item">
          <router-link to="/contact"> <a class="nav-link">İletişim</a> </router-link>
        </li>

      </ul>
      
    </div>
  </div>
</nav>
</div>
   
</template>
<script>
export default {
    name: "Navbar",
};
</script>

<style scoped>
.navbar-brand{
  font-size: 30px;
}
.nav-link{
  font-size: 20px;
}
.imglogo{
width: 100px;
height: 40px;
object-fit: contain;

}

</style>