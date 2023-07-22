const axios = require('axios')

 describe ('API tests', function() {
     test('DELETE activities by id request should be 200', async() => {
         const response = await axios.delete('https://fakerestapi.azurewebsites.net/api/v1/Books/220', {
             headers: {
                 Accept: '*/*'
             }
         })
         await expect(response.status).toEqual(200)
     })
    })