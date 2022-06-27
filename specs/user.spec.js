import api from '../framework/services';
import { faker } from '@faker-js/faker';
import getRandomIntFromLength from '../framework/helpers/utils'
import request from 'supertest';

describe('Просмотр питомцев', () => {
    test('Получить список доступных питомцев', async () => {
        const params = new URLSearchParams(
          {
            status: "available",
          },
        );
        const response = await api().Pets().getPets(params);
        expect(response.status).toEqual(200);
      });  
});

describe('Авторизация пользователя', () => {
    const id = 487483893983;
    const firstName = `${faker.name.firstName()}`;
    const lastName = `${faker.name.lastName()}`;
    const username = `${faker.internet.userName(`${firstName}`, `${lastName}`)}`;
    const email = `${faker.internet.email()}`;
    const password = `${faker.internet.password()}`;
    const phone = `${faker.phone.number()}`;
    test('Авторизоваться', async () => {
      const params = new URLSearchParams(
        {
          username: "admin",
          password: "admin",
        },
      );
      const response = await api().User().getUserByName(params);
      console.log(response.statusText);
      expect(response.status).toEqual(200);
    });  
  test('Создание пользователя', async () => {
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
      console.log(user)
      const response = await api().User().createUser(user);
      const data = await response.json()
      console.log(data);
      expect(response.status).toEqual(200);
      expect(data["message"]).toEqual(id.toString());
  });  
});