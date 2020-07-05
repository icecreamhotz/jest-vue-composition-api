<template>
  <div>
    <figure class="image is-128x128">
      <img :src="product.image">
    </figure>
    {{ product.name }} : ({{ product.price }} Bath)
    <div class="buttons">
      <b-button
        type="is-info"
        :disabled="disabled"
        @click="$emit('buy', product.price)"
      >
        Buy
      </b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { defineComponent } from '@vue/composition-api';
import Beverage from '@/interface/Beverage';

export default defineComponent({
  props: {
    product: {
      type: Object as () => PropType<Beverage>,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: true,
    },
  },
});
</script>
