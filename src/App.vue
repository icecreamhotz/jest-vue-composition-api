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
              @buy="onClickBuy"
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
        <div class="columns">
          Change: 10 ({{ change.changeTenCoin }}),
          5 ({{ change.changeFiveCoin }}),
          2({{ change.changeTwoCoin }}),
          1({{ change.changeOneCoin }})
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
import { defineComponent, ref, reactive } from '@vue/composition-api';
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
    interface Ba {
      changeTenCoin: number;
      changeFiveCoin: number;
      changeTwoCoin: number;
      changeOneCoin: number;
    }
    const coins = ref<Array<number>>([1, 2, 5, 10]);
    const money = ref<number>(0);
    const change = reactive<Ba>({
      changeTenCoin: 0,
      changeFiveCoin: 0,
      changeTwoCoin: 0,
      changeOneCoin: 0,
    });

    const onClickBuy = (price: number) => {
      let total = money.value - price;
      money.value = total;
      change.changeTenCoin = Math.floor(total / 10);
      total %= 10;
      change.changeFiveCoin = Math.floor(total / 5);
      total %= 5;
      change.changeTwoCoin = Math.floor(total / 2);
      total %= 2;
      change.changeOneCoin = Math.floor(total);
    };

    const { beverages, fetchAllBeverages, loading } = useBeverageFetch();
    fetchAllBeverages();

    return {
      beverages,
      loading,
      coins,
      money,
      change,
      onClickBuy,
    };
  },
});
</script>
