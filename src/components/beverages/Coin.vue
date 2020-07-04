<template>
  <div class="buttons">
    <b-button
      type="is-success"
      @click="$emit('click', value)"
    >
      {{ value }}
    </b-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
});
</script>
