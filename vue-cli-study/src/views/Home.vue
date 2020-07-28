<template>
  <div class="home">
    <HelloNuxt></HelloNuxt>
    <Like></Like>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HelloNuxt from '@/components/HelloNuxt.vue'
import Like from '@/Like.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    HelloNuxt,
    Like,
  },
}
</script>
