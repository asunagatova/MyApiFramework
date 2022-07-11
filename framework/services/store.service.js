import fetch, {Headers} from 'node-fetch';
import urls from '../config/urls';

if (!globalThis.fetch) {
    globalThis.fetch = fetch
    globalThis.Headers = Headers
}

const Store = {
    orderPet: async (pet) => {
        const r = await fetch(`${urls.pets}store/order`, { method: 'POST', body: JSON.stringify(pet),
        headers: new Headers({
          'api_key': '5dcc034b-0ce5-4711-9e41-36bd1b82b77e',
          'Content-Type': 'application/json'
        })});
        return r;
      },
  };
  
export default Store;