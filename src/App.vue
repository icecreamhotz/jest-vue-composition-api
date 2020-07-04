<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <div class="columns is-multiline">
          <div
            v-for="(beverage, index) in beverages"
            :key="index"
            class="column is-6"
          >
            <Product
              :product="beverage"
              :disabled="money < beverage.price"
            />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="columns">
          <div
            v-for="(coin, index) in coins"
            :key="index"
            class="column"
          >
            <Coin
              :value="coin"
              @click="money = money + $event"
            />
          </div>
        </div>
        <div class="columns">
          Money : {{ money }}
        </div>
      </div>
    </div>
    <b-loading
      :is-full-page="false"
      :active.sync="loading"
      :can-cancel="true"
    />
    <!-- <input-with-validate
      v-model="keyword"
      @enter="addList"
    />
    <todo-list
      :lists="lists"
      @remove="removeList"
    /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from '@vue/composition-api';
import { InputWithValidate } from '@/components/inputs';
import { TodoList } from '@/components/lists';
import { Coin, Product } from '@/components/beverages';
import useBeverageFetch from '@/services/useBeverageFetch';

export default defineComponent({
  components: {
    InputWithValidate,
    TodoList,
    Coin,
    Product,
  },
  setup() {
    // const keyword = ref<string>('');
    // const lists = ref<Array<string>>([]);

    // const addList = () => {
    //   if (keyword.value) {
    //     lists.value = [...lists.value, keyword.value];
    //     keyword.value = '';
    //   }
    // };

    // const removeList = (idx: number) => {
    //   lists.value.splice(idx, 1);
    // };

    // return {
    //   keyword,
    //   lists,
    //   addList,
    //   removeList,
    // };
    const coins = ref<Array<number>>([1, 2, 5, 10]);
    const money = ref<number>(0);
    const { beverages, fetchAllBeverages, loading } = useBeverageFetch();
    fetchAllBeverages();
    return {
      beverages,
      loading,
      coins,
      money,
    };
  },
});
</script>
