import fetch, {Headers} from 'node-fetch';
import urls from '../config/urls';

if (!globalThis.fetch) {
  globalThis.fetch = fetch
  globalThis.Headers = Headers
}

const User = {
    createUser: async (user) => {
        const r = await fetch(`${urls.pets}user`, { method: 'POST', body: JSON.stringify(user),
        headers: new Headers({
          'api_key': '5dcc034b-0ce5-4711-9e41-36bd1b82b77e',
          'Content-Type': 'application/json'
        })});
        return r;
      },
    getUserByName: async (params) => {
        const r = await fetch(`${urls.pets}user/login?${params}`, { method: 'GET'});
        return r;
      },
    
  };
  
export default User;