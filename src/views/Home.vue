<template>
  <div class="home">
    <HelloWorld msg="Cosmos Explorer"/>
    <BlocksCount/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import BlocksCount from '@/components/blocksCount.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    BlocksCount
  }
}
</script>
