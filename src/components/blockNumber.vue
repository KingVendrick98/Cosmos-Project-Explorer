<template>

  <div >
      <form v-on:submit.prevent="onSubmit">
          <div class="mb-3">
          <input v-model="blocknum"> |
          <input type="submit" class="btn btn-primary" >
          </div>
      </form>
  </div>

  <div v-if="seen" class="container">
       <table class="table">
          <tbody>
          <tr>
              <td>Number:</td>
              <td>{{blocks.block.header.height}}</td>
            </tr>
              
            <tr>
               <td>Created:</td>
              <td>{{blocks.block.header.time}}</td>
          </tr>
            <tr>
               <td>Hash:</td>
              <td>{{blocks.block_id.hash}}</td>
          </tr>
            <tr>
               <td>Parent Hash:</td>
              <td>{{}}</td>
          </tr>
          <tr>
              <td>State Root:</td>
              <td>{{block}}</td>
            </tr>
            <tr>
              <td>Extrinsics Root:</td>
              <td>{{block}}</td>
            </tr>
          </tbody>
          </table>
  </div>

</template>
<script>
import axios from 'axios';
  export default {
    name: 'BlockByNumber',
    data() {
    
      return {
        hash: {},
        api: this.API_URL,
        block:{},
        seen: false
      }
    },
    
    methods: {
        onSubmit () {
      axios
        .get(`https://api.cosmos.network/blocks/` + this.blocknum)
        .then(res => {
          this.blocks = res.data;
          this.seen = true
          console.log(res)
        })
        .catch(error => console.log(error))
        }
    }
  }
</script>
<style>
  h3 {
    margin-bottom: 5%;
  }
</style> 