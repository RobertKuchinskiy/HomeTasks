const axios = require('axios');
const validator = require('jsonschema');
const postBooksSchemaV1 = require('../data/postBooksSchemaV1.json');

describe('API tests', function () {
  let response;

  beforeAll(async () => {
    response = await axios.post(
      'https://fakerestapi.azurewebsites.net/api/v1/Books',
      {
        id: 0,
        title: 'string',
        description: 'string',
        pageCount: 0,
        excerpt: 'string',
        publishDate: '2023-07-22T05:37:54.149Z',
      },
      {
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json; v=1.0',
        },
      }
    );
  });

  test('POST request should be 200', async () => {
    await expect(response.status).toEqual(200);
  });

  test('POST should be valid schema', async () => {
    const result = await validator.validate(response.data, postBooksSchemaV1);
    await expect(result.valid).toEqual(true);
  });
});