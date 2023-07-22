const axios = require('axios')
 const validator = require('jsonschema')
 const getByIdBooksSchema = require('../data/getBooksByIdSchemaV1.json')


 describe ('API tests', function() {
     let response;

     beforeAll(async () =>{
         response = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Books/11/', {
             headers: {
                 Accept: 'text/plain'
             }
         })    
     })

     test('GET activities by id request should be 200', async() => {
         await expect(response.status).toEqual(200)
     })

     test('GET activities by id should be valid json schema', async() => {
         const result = await validator.validate(response.data, getByIdBooksSchema)
         await expect(result.valid).toEqual(true)
     })
 })