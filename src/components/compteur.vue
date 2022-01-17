<template>
  <div>
    <h1>Compteur de clics</h1>
    <p @click="increment"><button> clique-moi {{ total }} fois </button> </p>
  </div>
</template>

<script>
export default {
  name: 'compteur',
  data () {
    return {
      total: 0
    }
  },
  methods: {
    increment () {
      this.total += 1
    }
  }

}
</script>

<style scoped>

button{
  background-color: #ef0b0b;
  border: none;
  color: #0e2da4;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 80px;
  margin: 10px 20px;
  cursor: pointer;
  border-radius: 50%;
}

</style>
