<template>
    <div> {{ count }} </div>
</template>

<script>
export default {
  name: 'Contador',
  props: {
    text: String,
  },
  computed: {
    count() {
      return this.text.length;
    },
  },
};
</script>

