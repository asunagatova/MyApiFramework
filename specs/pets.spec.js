import api from '../framework/services';
import { faker } from '@faker-js/faker';

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
    //test('Получить описание питомца по id', async () => {
    //test('Изменить статус питомца на "продано" и поменять имя', async () => {
});