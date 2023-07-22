const axios = require('axios');
const validator = require('jsonschema');
const getBooksSchemaV1 = require('../data/getBooksSchemaV1.json');

describe('API tests', function () {
  let response;

  beforeAll(async () => {
    response = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Books', {
      headers: {
        Accept: 'application/json', // Используем 'application/json' вместо 'text/plain'
      },
    });
  });

  test('GET request should be 200', async () => {
    await expect(response.status).toEqual(200);
  });

  test('GET should be valid json schema', async () => {
    const jsonData = JSON.stringify(response.data); // Преобразуем данные в формат JSON
    const dataObject = JSON.parse(jsonData); // Преобразуем данные обратно в объект
    const firstObject = dataObject[0]; // Получим первый объект из массива
    const result = await validator.validate(firstObject, getBooksSchemaV1); // Проверим первый объект
    console.log('Validation result:', result.valid);
    console.log('Validation errors:', result.errors);
    await expect(result.valid).toEqual(true);
  });
});






