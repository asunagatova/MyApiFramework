import api from '../framework/services';
import { faker } from '@faker-js/faker';
import utils from '../framework/helpers/utils';

describe('Просмотр питомцев', () => {
  const id = utils().RandomNumber().getRandomIntFromRange(10);
    test('Получить список доступных питомцев', async () => {
        const params = new URLSearchParams(
          {
            status: "available",
          },
        );
        const response = await api().Pets().getPets(params);
        expect(response.status).toEqual(200);
    }); 

    test('Получить описание питомца по id', async () => {
      const response = await api().Pets().getPetById(id);
      const data = await response.json();
      expect(response.status).toEqual(200);
      expect(data["id"]).toEqual(id);
    }); 

    test('Изменить статус питомца на "продано" и поменять имя', async () => {
      const params = `name=${faker.name.firstName()}&status=sold`;
      const response = await api().Pets().changePetById(id, params.toString());
      const data = await response.json();
      expect(response.status).toEqual(200);
      expect(data["message"]).toEqual(id.toString());
    }); 
});