import api from '../framework/services';
import { faker } from '@faker-js/faker';
import utils from '../framework/helpers/utils';

describe('Авторизация пользователя', () => {
    const id = utils().RandomNumber().getRandomIntFromLength();
    const firstName = `${faker.name.firstName()}`;
    const lastName = `${faker.name.lastName()}`;
    const username = `${faker.internet.userName(`${firstName}`, `${lastName}`)}`;
    const email = `${faker.internet.email()}`;
    const password = `${faker.internet.password()}`;
    const phone = `${faker.phone.number()}`;

  test('Авторизация пользователя', async () => {
     const params = new URLSearchParams(
        {
          username: username,
          password: password,
        },
      );
      const response = await api().User().getUserByName(params);
      expect(response.status).toEqual(200);
    });   

  test('Заполнение профиля пользователя', async () => {
      const user = {
        id: id,
        username: username,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phone: phone,
        userStatus: 0
        };
      const response = await api().User().createUser(user);
      const data = await response.json();
      expect(response.status).toEqual(200);
      expect(data["message"]).toEqual(id.toString());
  }); 
});