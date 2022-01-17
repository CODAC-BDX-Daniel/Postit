<template>
  <div>
    <router-link :to="{name:'ModifPostitV', params:{id:id}}" tag="button">
      <button>Cliquer pour modifier le Post-It</button>
    </router-link>
  </div>
  <div class="contenant">
    <img alt="Vue logo" src="../assets/postit.png">
    <div class="texte_centrer">
      <h2> Titre </h2>
      <textarea cols="50" rows="3" wrap="hard" readonly="yes">{{title}}</textarea>
      <p>Notes</p>
      <textarea cols="50" rows="20" wrap="hard" readonly="yes">{{content}} </textarea>

    </div>
    <note v-for="postit in postits" :key="postit._id" :dataTitle="postit.title" :dataContent="postit.content[0]" :id="postit._id"/>
  </div>
</template>

<script>
import note from '@/components/note.vue'
import axios from 'axios'
import AddPosIt from "@/components/AddPosIt";
import ModifPostit from "@/components/ModifPostit";

export default {
  name: 'NoteZoom',
  props: ['dataTitle', 'dataContent', 'id'],
  components: {ModifPostit, note },
  data () {
    return {
      postits: [],
      title: null,
      content: null,
    }
  },
  mounted() {
    axios.get('http://5.135.119.239:3090/notes/'+this.id)
        .then(response => {

          //Stocker titre

          this.title = response.data.note.title
          this.content = response.data.note.content[0]
          console.log(response.data.note._id)

          //Stocker contenu
       /*   console.log(response.data.note)
          this.postits = response.data.note;*/
        })
  },
}
</script>

<style>
.contenant {
  position: relative;
  text-align: center;
  font-weight: bold;
  font-size: x-large;
  color: #2c3e50;
}


.texte_centrer
{
  position: absolute;
  top: 43%;
  left: 43%;
  transform: translate(-50%, -50%);
}
textarea {
  background-color: transparent;
}

</style>
