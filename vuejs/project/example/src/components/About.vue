<template>
<div class="about">
 <footer class="footer">
        
            <div class="head" >
                Filografi Evinde Alışveriş
            
            <ul class="dikdortgen">
              <li class="kare"><b-icon icon="clock-fill" aria-hidden="true"></b-icon><span>Hızlı</span></li>   
              <li class="kare"><b-icon icon="hand-thumbs-up" aria-hidden="true"></b-icon><span>Güvenilir</span></li> 
              <li class="kare"><b-icon icon="truck" aria-hidden="true"></b-icon><span>Tablo bitiminden sonra 24 saat içinde kargoda</span></li> 
              <li class="kare"><b-icon icon="cash" aria-hidden="true"></b-icon><span>Kapıda ödeme</span></li> 

            </ul>
            </div>
       
    </footer> 
</div>

    
</template>

<script>
export default {
    name: "About",
};
</script>

<style>
.about{
    background-color: antiquewhite;
}
.dikdortgen{
    font-family: Roboto,Arial,sans-serif;
    display: flex;
    display: -webkit-flex;
    display: -webkit-box;
    flex-direction: row;
    font-size: 1.6rem;
    position:inherit;
    background-color: lightblue;
    border-radius: 10px;
 
}
.kare {
    margin: 2rem;
    top: 0px;
}
.head{
    font-size: 2rem;
    background-color: rgb(178, 205, 214);
    text-align: center;
    
}

.footer{ 
    bottom:0;
    position:fixed;
    min-width: 100%;
    border-radius: 100px;
}
</style>