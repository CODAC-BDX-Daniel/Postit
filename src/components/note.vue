<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <div id="postit">
          <h1> Post-it </h1>
          <h2>titre</h2>
          <textarea cols="20" rows="5" wrap="hard" readonly="yes">{{ dataTitle }}</textarea>
          <p>Je peux me retourner!</p>
        </div>
      </div>
      <div class="flip-card-back">
        <h1> Post-It </h1>
        <textarea cols="20" rows="3" wrap="hard" readonly="yes">{{ dataTitle }}</textarea>
        <textarea cols="20" rows="6" wrap="hard" readonly="yes">{{ dataContent }}</textarea>
        <router-link :to="{name:'NoteZoom', params:{id:id}}" tag="button">
          <button>Cliquer pour plus de détails</button>
        </router-link>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'note',
  props: ['dataTitle', 'dataContent', 'id']
}
</script>

<style lang="scss">
body {
  font-family: Arial, Helvetica, sans-serif;
}

#postit {

}

.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #f3cb02;
}

.flip-card-front {
  background-color: #f3cb02;
  color: black;
  font-weight: normal;
  color: #235ed5;

}

.flip-card-back {
  background-color: #f3d14b;
  font-weight: bold;
  color: #425ab9;
  transform: rotateY(180deg);
}
textarea {
  background-color: transparent;
  font-weight: normal;

}
</style>
