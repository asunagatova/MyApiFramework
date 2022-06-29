import fetch, {Headers} from 'node-fetch';
import urls from '../config/urls';

const Pets = {
    getPets: async (params) => {
      const r = await fetch(`${urls.pets}pet/findByStatus?${params}`, { method: 'GET'});
      return r;
    },
  };
  
export default Pets;