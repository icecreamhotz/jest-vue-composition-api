<template>
  <input
    type="text"
    :value="value"
    @input="$emit('input', $event.target.value)"
    @keyup.enter="$emit('enter')"
  >
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    value: {
      type: String,
      required: true,
    },
  },
});
</script>
