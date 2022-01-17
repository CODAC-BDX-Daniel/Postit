<template>
  <div class="contenant2">
    <img alt="Vue logo" src="../assets/postit.png">
    <div class="texte_centrer2">

      <h2><input class="titre1"  v-model="title" placeholder="titre"></h2>
      <input class="note1" v-model="content" placeholder="message">
      <p>
        <input class="submit" v-on:click="ModifierPostIt()" type="submit" value="Valider">
      </p>
      <p>
        <router-link :to="{name:'Home'}" tag="button">
        <button class="delete" v-on:click="SupprimerPostIt()" type="delete" value="Delete">Supprimer</button>
        </router-link>
      </p>
    </div>
    <note v-for="postit in postits" :key="postit._id" :dataTitle="postit.title" :dataContent="postit.content[0]" :id="postit._id"/>
  </div>
</template>

<script>
import note from '@/components/note.vue'
import axios from 'axios'
import ModifPostit from "@/components/ModifPostit";

export default {
  name: 'ModifPostitV',
  props: ['dataTitle', 'dataContent', 'id'],
  components: {ModifPostit, note },

  data: function () {
    return {
      postits: [],
      title: "",
      content: [""]
    };
  },
  methods: {
    ModifierPostIt: function () {
      axios.put('http://5.135.119.239:3090/notes/'+this.id,
          {
            "title": this.title,
            "content": [ this.content ]
    })
      .then(modification => {
      console.log(modification)
      /*this.postits = modification.data.notes.id;*/
        {alert("Vous venez de modifier le Post-it");}
      })
    },

    SupprimerPostIt: function () {
      axios.delete('http://5.135.119.239:3090/notes/'+this.id,)

          .then(supprimer => {
            console.log(supprimer)
            /*this.postits = modification.data.notes.id;*/

            {alert("Vous venez de supprimer le Post-it");}
          })
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

<style >

.titre1 {
  height:25px;
  width:400px;
  background-color: #f1f0f5;
  color: #171616;
}
.note1 {
  height:200px;
  width:400px;
  background-color: #f4f2f8;
  color: #171616;
}
submit {

  height:200px;
  width:400px;

}

.contenant2 {
  position: relative;
  text-align: center;
  font-weight: bold;
  font-size: x-large;
  color: #42709d;
}

.texte_centrer2
{
  position: absolute;
  top: 43%;
  left: 42%;
  transform: translate(-50%, -50%);
}

</style>
