const axios = require('axios');
const validator = require('jsonschema');
const putBooksSchemaV1 = require('../data/putBooksSchemaV1.json');

describe('API tests', function () {
  let bookData;
  let updatedBook;
  let response;

  beforeAll(async () => {
    // Сначала выполняем GET-запрос, чтобы получить данные книги
    const getResponse = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Books/20');
    bookData = getResponse.data;

    // Затем обновляем данные книги
    updatedBook = {
      ...bookData,
      title: 'Updated Title',
      description: 'Updated Description',
      pageCount: 100,
      excerpt: 'Updated Excerpt',
      publishDate: '2023-07-20T16:11:49.140Z',
    };

    // Теперь выполним PUT-запрос для обновления данных книги
    response = await axios.put('https://fakerestapi.azurewebsites.net/api/v1/Books/20/', updatedBook, {
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
      },
    });
  });

  test('PUT request should be 200', async () => {
    expect(response.status).toEqual(200);
  });

  test('PUT should be valid schema', async () => {
    // Проверяем, что обновленные данные соответствуют JSON-схеме
    const result = await validator.validate(updatedBook, putBooksSchemaV1);
    expect(result.valid).toEqual(true);
  });
});