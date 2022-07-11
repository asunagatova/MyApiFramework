import FormData from 'form-data';
import fetch, {Headers} from 'node-fetch';
import urls from '../config/urls';

if (!globalThis.fetch) {
  globalThis.fetch = fetch
  globalThis.Headers = Headers
}

const Pets = {
    getPets: async (params) => {
      const r = await fetch(`${urls.pets}pet/findByStatus?${params}`, { method: 'GET'});
      return r;
    },
    getPetById: async (id) => {
      const r = await fetch(`${urls.pets}pet/${id}`, { method: 'GET'});
      return r;
    },
    changePetById: async (id, params) => {
      const r = await fetch(`${urls.pets}pet/${id}`, { method: 'POST', body: params,
      headers: new Headers({
        'api_key': '5dcc034b-0ce5-4711-9e41-36bd1b82b77e',
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      })});
      return r;
    },
  };
  
export default Pets;