import Pets from './pets.service';
import User from './user.service';
import Store from './store.service';

const api = () => ({
  Pets: () => ({ ...Pets }),
  User: () => ({ ...User }),
  Store: () => ({ ...Store }),
});

export default api;