<template>
<div>
  <!-- <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand id="header" class="mb-0" href="#">Filografi Evi</b-navbar-brand>

   

    <b-collapse id="nav-collapse" class="rights" is-nav>

      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#">Disabled</b-nav-item>
      </b-navbar-nav>

      
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
        
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
   
  </b-navbar> -->


  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">Filografi Evi</span>
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
          <a class="nav-link">Hakkımızda</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">İletişim</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
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

<style scoped lang="scss">
.navbar-brand{
  font-size: 30px;
}
.nav-link{
  font-size: 20px;
}
/*#nav-collapse{
position: relative;
left: 72rem;
}

#header{
font-size: 2rem;
margin-left: 50px;
letter-spacing: 2px;
}*/
</style>