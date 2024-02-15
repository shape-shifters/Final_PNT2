<template>
  <div id="app">
    <Contador />
    <h1>Ejercicio Final PNT2</h1>
    <input v-model="inputText" @input="updateCharCount" placeholder="Ingrese el texto">
    <br><br>
    <div><b>Cantidad de caracteres:</b> {{ charCount }}</div>
    <div><b>Texto codificado:</b> {{ encodedText }}</div>
    <div><b>Texto en mayúscula:</b> {{ inputText | toUpperCase }}</div>
    <div><b>Texto en minúscula:</b> {{ inputText | toLowerCase }}</div>
    <div><b>Texto con mayúsculas y minúsculas intercaladas (mayúscula primero):</b> {{ inputText | changeToUpper }}</div>
    <div><b>Texto con mayúsculas y minúsculas intercaladas (minúscula primero):</b> {{ inputText | changeToLower }}</div>
    <br><br>
    
    <!-- Respuestas del cuestionario -->
    <h2>Respuestas</h2>
    <p>P1: <b>C |</b> P2: <b>B |</b> P3: <b>C |</b> P4: <b>A |</b> P5: <b>B</b></p>

  </div>
</template>

<script>
import Contador from './components/Contador.vue';

export default {
  name: 'App',
  components: {
    Contador,
  },
  data() {
    return {
      inputText: '',
      charCount: 0,
    };
  },
  methods: {
    updateCharCount() {
      this.charCount = this.inputText.length;
    },
  },
  computed: {
    encodedText() {
      const reemplazo = {
        'a': 'u',
        'e': 'o',
        'o': 'e',
        'u': 'a'
      };

      return this.inputText.toLowerCase().replace(/[aeou]/g, match => reemplazo [match]);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
