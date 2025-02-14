  const destination = await cds.connect.to('MY_DESTINATION');

  this.on('process', async (req) => {

    try {           
      const response = await destination.send({
          method: 'POST',
          path: '/Exemple_Of_API_Endpoint',
          headers: {
              'Content-Type': 'application/json',
              'APIKey': 'a99iddAjuh20w9p0kkba5xzAS0RnaLZ8'
          },
          data: JSON.stringify({
              data:[
                  {
                      "field1":"33223",
                      "field2":"A",
                      "field3":"0003810491"
                  },
                  {
                      "field1":"33000",
                      "field2":"B",
                      "field3":"0001234567"
                  }
              ]
          })
      })
    } catch (error) {
      
    }
