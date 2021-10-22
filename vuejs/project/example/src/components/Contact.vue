<template>

<div  class="contact">  
   <div class="center">
       <hr>

    <a style="text-decoration:none" href="http://www.instagram.com/filografi_evi">
    <h3><b-icon icon="instagram" aria-hidden="true"
     animation="fade" scale="1" shift-h="0"></b-icon>@filografi_evi</h3></a><hr>
     
     <h3><b-icon icon="telephone-inbound" aria-hidden="true"
     animation="cylon" scale="1" shift-h="0"></b-icon>+(90) 536 930 01 43</h3><hr>
     
     <a style="text-decoration:none" href="http://www.facebook.com/filografi_evi">
     <h3><b-icon icon="facebook" aria-hidden="true"
     animation="throb" scale="1" shift-h="0"></b-icon>www.facebook.com/filografi_evi</h3></a><hr>
    </div>
</div>
</template>

<script>
export default {
    name: "Contact",
};
</script>

<style scoped>

.contact{
    align-items: inherit;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 100px;
    left: 300px;
    width: 50%;
    border-style: solid;
    border-radius: 5px;

}
.center{
width: 75%;
    text-align: center;
position: relative;

}
body{
    position: relative;
    display: flex;
    justify-content: center;
}
</style>