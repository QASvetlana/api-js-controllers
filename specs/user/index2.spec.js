import supertest from "supertest";

describe('user', () => {
  describe('POST /api/v1/login', () => {
    test('Метод должен существовать', async () => {
      const res = await supertest('https://try.vikunja.io')
          .post('/api/v1/login')
          .send({})

      expect(res.status).not.toEqual(404);
    })
})
})