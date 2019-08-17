<template>
   <div>
      <mhead />
    <lookingFor />
    <mnav />
    <mmain />
   </div>
</template>

<script>
import mhead from './mhead'
import lookingFor from './zhao'
import mnav from './mnav'
import mmain from './mmain'
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
