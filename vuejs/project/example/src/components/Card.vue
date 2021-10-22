<template>
<div class="card">
  <div class="container">
 
  <b-card v-for="(table, index) in tables" :key="table.id"
    :title="table.tableName"
    :img-src ="table.imglink"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2 deneme"
    
  >
    <b-card-text>
     {{table.tableName}} Cok guzel bir tablodu 25x25ölçüleri <br>35x35 ölçüleri vardır.
    </b-card-text>

    <b-button @click="satinal(index)" href="#" variant="primary"><b-icon icon="bag" aria-hidden="true"></b-icon>Satın Al</b-button>
  </b-card>


  </div>
  </div>
</template>

<script>

export default {
  
    name: "Card",
     data() {
      return {
        tables:[
          {id:1,tableName:"Vav Tablosu", imglink: 'https://cdn.10marifet.org/wp-content/uploads/2016/08/filografi-ornekleri-530x505.jpeg'},
          {id:2,tableName:'Baska Tablosu', imglink: 'https://cdn.10marifet.org/wp-content/uploads/2016/08/filografi-ornekleri-530x505.jpeg'},
          {id:3,tableName:"X Tablosu", imglink: 'https://cdn.10marifet.org/wp-content/uploads/2016/08/filografi-ornekleri-530x505.jpeg'},
          {id:4,tableName:"Y Tablosu", imglink: 'https://cdn.10marifet.org/wp-content/uploads/2016/08/filografi-ornekleri-530x505.jpeg'},
          {id:5,tableName:"Z Tablosu", imglink: 'https://cdn.10marifet.org/wp-content/uploads/2016/08/filografi-ornekleri-530x505.jpeg'},
          {id:6,tableName:"A Tablosu", imglink: 'https://cdn.10marifet.org/wp-content/uploads/2016/08/filografi-ornekleri-530x505.jpeg'},
          {id:7,tableName:"P Tablosu", imglink: 'https://cdn.10marifet.org/wp-content/uploads/2016/08/filografi-ornekleri-530x505.jpeg'},
          {id:8,tableName:"Q Tablosu", imglink: 'https://cdn.10marifet.org/wp-content/uploads/2016/08/filografi-ornekleri-530x505.jpeg'},
          
        ]
      }
    },
    methods: {
  	satinal: function(index){
      this.$delete(this.tables,index);
    alert(" satin alma işlemi gerçekleşti");
    },
}
}
</script>

<style scoped>

.deneme{
     float: left;

}
.container{
display: inline;
 flex-direction: row;
}
.card{
  display: inline-block;
}
</style>