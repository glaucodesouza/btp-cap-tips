# Step-by-step

- This is a step-by-step for creating an backend app,
- Using @sap-cloud-sdk/http-client (not the best though)
- which calls, an API Service through a destination, in service.js main function.
- In this case, the external API has Basic Authorization, with user and password.
- But who configurated this destination, will let us call this destination with NoAuthorization.
- So in package.json, we put NoAuthorization.

# 1-Make sure destination is already created
- There is an API eith basic authorization
- But BTP admin have created the destination with No Authorization for your BTP CAP App.
- So, you do not need user and password.
# 2-Service.js

    const { executeHttpRequest } = require('@sap-cloud-sdk/http-client');

    module.exports = cds.service.impl(async function () {

    this.on('process', async (req) => {
      const destination = await cds.connect.to('ADP_WFN');
      console.log(`instanciando destination ADP_WFN`);

       const destination2 = { destinationName: 'ADP_WFN' };
        try {
            const response = await executeHttpRequest(destination2, {
                  method: 'GET',
                  url: `/Endpoint`
                });
                  let responseEntry = empJobResponse2.data.feed.entry || [];
                  debugger;
          } catch (error) {
              debugger;
          }
        })
      })

    
