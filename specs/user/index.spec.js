import supertest from "supertest";
import user from "../helper/user";
import config from "../config";
import { async } from "regenerator-runtime";

//describe('user', () => {
  describe('POST /Account/AccountV1AuthorizedPost', () => {
    test('Метод должен существовать', async () => {
      const res = await supertest('https://bookstore.demoqa.com')
          .post('/Account/v1/Authorized')
          .send({})

      expect(res.status).not.toEqual(404);
    })

  test('Авторизация должна проходить успешно с правильным логином и паролем', async () => {
      const res = await user.login(config.credentials)

      expect(res.status).toEqual(200);
    })
 
    test('Авторизация должна возвращать статус с кодом ошибки если логин неверный', async () => {
      const res = await user.login({username: 'eveholt1', password: '12345Qwerty!'})

      expect(res.status).toEqual(400)
    })

    test('Авторизация должна возвращать статус с кодом ошибки если пароль неверный', async () => {
      const res = await user.login({username: 'ExistingUser', password: 'demo3'})

      expect(res.status).toEqual(400);
    })
  })
 /*
  describe('GET /api/v1/user', () => {
    test('Получение информации о пользователе', async() => {
      const token = await user.getAuthToken();
      // т.к. токен был получен ранее, можно к нему обратиться
      const res = await user.user(token);
      expect(res.status).toEqual(200);
    })*/
  
  
