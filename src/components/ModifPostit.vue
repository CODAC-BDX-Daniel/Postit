<!--<template>
<div>
  <h1>titre1</h1>
</div>

  <div>
    <div class="contenant">
      <img alt="Vue logo" src="../assets/postit.png">
      <div class="texte_centrer">
        <h2> {{title}} </h2>
        <p> {{content}} </p>
      </div>
      <note v-for="postit in postits" :key="postit._id" :dataTitle="postit.title" :dataContent="postit.content[0]" :id="postit._id"/>
    </div>
    <transition name="modal">
      <div v-if="isOpen">
        <div class="rectangle" @click.self="isOpen = false;">
          <div class="modal">
            <div>N°{{ $route.params.id }}</div>
            <h1>Modifier le Post-It!</h1>
            {{$route.params.titre}}
            {{$route.params.message}}
            <h2><input v-model="titre" placeholder="title"></h2>
            <input v-model="message" placeholder="content">
            <p>
              <input v-on:click="ModifierPostIt()" type="submit" value="Submit">
            </p>
            <div>
              <note v-for="postit in postits" :key="postit._id" :dataTitle="postit.title" :dataContent="postit.content[0]" :id="postit._id"/>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <button @click="isOpen = !isOpen;">
      {{ isOpen ? "Close" : "Modifier le Post-It" }}
    </button>
  </div>
</template>

<script>
import axios from "axios";
import note from '@/components/note.vue'

export default {
  name: 'ModifPosit',
  props: ['id', 'content'],
}

  data: function () {
    return {
      isOpen: false,
      id: null,
      titre: null,
      message:null,
    };
  },
  mounted() {
    axios.put('http://5.135.119.239:3090/notes/'+this.$route.params.id)
        .then(response => {
          console.log("c'est le bon ID", response.data.notes)
          this.postits = response.data.notes;

        })
  },

  methods: {
    ModifierPostIt: function () {
      console.log(this.id)
      axios.put('http://5.135.119.239:3090/notes/'+this.$route.params.id,
          {
            "title": this.titre,
            "content": [ this.message]
          })
          .then(modification => {
            console.log(modification)
            this.postits = modification.data.notes;
          })
    }
  },
}
</script>

<style >

</style>-->
