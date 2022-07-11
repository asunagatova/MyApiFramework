import api from '../framework/services';
import utils from '../framework/helpers/utils';

describe('Оформить заказ на питомца', () => {
  const petId = utils().RandomNumber().getRandomIntFromRange(10);
  const quantity = 1;
    test('Оформить заказ на питомца', async () => {
        const pet = {
          petId: petId,
          quantity: quantity,
          status: "placed",
          complete: true
        }
        const response = await api().Store().orderPet(pet);
        const data = await response.json();
        expect(response.status).toEqual(200);
        expect(data["quantity"]).toEqual(quantity);
        expect(data["status"]).toEqual("placed");
        expect(data["complete"]).toEqual(true);
      }); 
});