<template>
  <div class="container" id ="count">
     Finished Blocks {{blocks}}
  </div>
</template>
<script>
import axios from 'axios';
  export default {
    name: 'BlocksCount',
    data() {   
      return {
        blocks: {},
        api: this.API_URL
      }
    },
    mounted () {
      axios
        .get(`https://api.cosmos.network/blocks/latest`)
        .then(res => {
          this.blocks = res.data.block.header.height;
        })
        .catch(error => console.log(error))
    }
  }
</script>
<style>
  h3 {
    margin-bottom: 5%;
  }
  #count {
    margin: 50px ;
    background-color: rgb(148, 30, 30);
    width: 40%;
    height: 80px;
    color: white;
    border-radius: 5px;
  }
</style> 