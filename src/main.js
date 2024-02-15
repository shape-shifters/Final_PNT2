import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.filter('toUpperCase', function (value) {
  return value.toUpperCase();
});

Vue.filter('toLowerCase', function (value) {
  return value.toLowerCase();
});

Vue.filter('changeToUpper', function (value) {
  return value.split('').map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('');
});

Vue.filter('changeToLower', function (value) {
  return value.split('').map((char, index) => index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()).join('');
});

