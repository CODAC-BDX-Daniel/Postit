<template>
  <H1>Si tu aimes perdre ton temps, tu peux compter tes clics.</H1>
  <p>
    <compteur/>
  </p>
</template>
<script>
// @ is an alias to /src

import compteur from '@/components/compteur.vue'
export default {
  name: 'Clic page',
  components: {
    compteur
  }
}
</script>
