<template>
<div class="about">

    
    <footer class="footer">
        
            <div class="head" >
                Filografi Evinde Alışveriş
            
            <ul class="dikdortgen">
              <li class="kare"><span>Hızlı</span></li>   
              <li class="kare"><span>Güvenilir</span></li> 
              <li class="kare"><b-icon icon="truck" aria-hidden="true"></b-icon><span>Tablo bitiminden sonra 24 saat içinde kargoda</span></li> 
              <li class="kare"><span>Kapıda ödeme</span></li> 

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

<style scoped>
.about{
    background-color: lightseagreen;
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
.kare{
    padding: 3rem;
}
.head{font-size: 2rem;
background-color: lightslategray;
text-align: center;
}

.footer{
    
 bottom:0px;
position:fixed;
min-width: 100%;
border-radius: 100px;

}
</style>