<template>
  <div class="axios">axios is a request tool</div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import axios from '../utils/request';

  export default defineComponent({
    setup() {
      axios
        .get('/users/XPoet')
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
</script>

<style lang="scss" scoped></style>
>
