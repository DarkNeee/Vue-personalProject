<template>
   <div>
      <mhead />
    <!-- <lookingFor /> -->
    <lookingFor />
    <mnav />
    <mmain />
   </div>
</template>

<script>
import mhead from '../components/main-components/mhead'
import lookingFor from '../components/main-components/zhao'
import mnav from '../components/main-components/mnav'
import mmain from '../components/main-components/mmain'
export default {
  name: 'about',
  components: {
    mhead,
    lookingFor,
    mnav,
    mmain,
  }
}
</script>

<style>

</style>
