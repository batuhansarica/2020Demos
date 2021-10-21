<template>
  <div class="card">
 
  <b-card v-for="table in tables" :key="table.id"
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

    <b-button href="#" variant="primary"><b-icon icon="bag" aria-hidden="true"></b-icon>Satın Al</b-button>
  </b-card>

    
  </div>
</template>

<script>

export default {
    name: "Card",
     data() {
      return {
        tables:[
          {id:1,tableName:"Vav Tablosu", imglink: 'https://cdn.10marifet.org/wp-content/uploads/2016/08/filografi-ornekleri-530x505.jpeg'},
          {id:2,tableName:'Baska Tablosu', imglink: 'https://i.ytimg.com/vi/DpZ-ut3SbnM/maxresdefault.jpg'},
          {id:1,tableName:"Vav Tablosu", imglink: 'https://cdn.10marifet.org/wp-content/uploads/2016/08/filografi-ornekleri-530x505.jpeg'},
          {id:1,tableName:"Vav Tablosu", imglink: 'https://cdn.10marifet.org/wp-content/uploads/2016/08/filografi-ornekleri-530x505.jpeg'},
          {id:1,tableName:"Vav Tablosu", imglink: 'https://cdn.10marifet.org/wp-content/uploads/2016/08/filografi-ornekleri-530x505.jpeg'},
          {id:1,tableName:"Vav Tablosu", imglink: 'https://cdn.10marifet.org/wp-content/uploads/2016/08/filografi-ornekleri-530x505.jpeg'},
          {id:1,tableName:"Vav Tablosu", imglink: 'https://cdn.10marifet.org/wp-content/uploads/2016/08/filografi-ornekleri-530x505.jpeg'},
          {id:1,tableName:"Vav Tablosu", imglink: 'https://cdn.10marifet.org/wp-content/uploads/2016/08/filografi-ornekleri-530x505.jpeg'},
          {id:1,tableName:"Vav Tablosu", imglink: 'https://cdn.10marifet.org/wp-content/uploads/2016/08/filografi-ornekleri-530x505.jpeg'},

        
        ]
      }
    },
};
</script>

<style scoped>
.deneme{
     float: left;

}
.card{
display: inline;
 flex-direction: row;
}
</style>
