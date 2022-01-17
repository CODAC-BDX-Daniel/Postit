<template>
  <body>
  <img alt="Vue logo" src="../assets/postitCoding.png">
  <AddPosIt class="BtnCréer" href="javascript:window.location.reload()">créer ici un Post-It</AddPosIt>
  <div class="wrapper">
    <span>LE MUR DES POST-ITS</span>
  </div>
  <span> </span>
  <span> </span>
  <span> </span>
<div>
  <a id="alignPostit">
    <note v-for="postit in postits" :key="postit.id" :dataTitle="postit.title" :dataContent="postit.content[0]" :id="postit._id"/>
  </a>
</div>

  </body>
</template>

<script>
import AddPosIt from '@/components/AddPosIt.vue'
import note from '@/components/note.vue'
import axios from 'axios'
import ModifPostit from "@/components/ModifPostit";

export default {
  name: 'Home',
  components: {note, AddPosIt },
  data () {
    return {
      postits: []
    }
  },
  mounted() {
    axios.get('http://5.135.119.239:3090/notes')
        .then(response => {
      console.log(response.data.notes)
      this.postits = response.data.notes;
    })
  },
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Titan+One&display=swap");
span {
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #000;
  font-size: 50px;
  text-shadow: 2px 5px #235ed5, 0 0px #f8f2f2;
  transform: translate(0, 100%) rotate(4deg);
  animation: jump 5s ease-in-out infinite;
  display: inline-block;
  font-family: "Titan One", cursive;
  color: #fff;}

@keyframes jump {
  10% {
    text-shadow: 0px 0px #2164f3, 0 10px #171616;
  }
  30% {
    transform: translate(0, 0) rotate(-2deg);
    text-shadow: 0 0px #425ab9, 0 15px #425ab9;
  }
  50% {
    text-shadow: 0 -0px #d5c140, 0 -10px #425ab9;
  }
}
html {
  width: 100%;
  height: 100vh;
}

#alignPostit {

display: grid;
grid-template-columns: auto auto auto auto;
grid-template-rows: auto auto auto auto;
grid-gap: 10px;
padding: 10px;
}
body {
  background-color: #eae8e8;
}

#bouton {

  background-color: #235ed5;
  color: #FFFFFF;
  text-align: center;
  font-size: 28px;
  padding: 20px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}
.titre {

  text-shadow: #171616 2.5px 2.5px 0,
  #8338ec 5px 5px 0,
  #3a86ff 7.5px 7.5px 0,
  #333 10px 10px 10px;color: #f8f5f5;
  background-color: #235ed5;
}
</style>
