import { ref } from '@vue/composition-api';
import Beverage from '@/interface/Beverage';
import axios from 'axios';

export default function useBeverageFetch() {
  const beverages = ref<Beverage[]>([]);
  const loading = ref<boolean>(true);
  const fetchAllBeverages = async (): Promise<void> => {
    try {
      const kk = await axios.get('https://www.mocky.io/v2/5c77c5b330000051009d64c9');
      beverages.value = kk.data.data;
      loading.value = false;
    } catch (err) {
      console.log(err);
    }
  };
  return {
    beverages,
    fetchAllBeverages,
    loading,
  };
}
