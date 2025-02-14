  const destination = await cds.connect.to('MY_DESTINATION');

// this function here, is called from who call my backend service.
// the url they call me is the same <url as you have deployed>+<yourService Path you put in service.cds>
//example of url with no path declared (CAP standard path): https://your-customer-dev-myDeployedAppName-srv.cfapps.us10.hana.ondemand.com/odata/v4/myServiceName/mYProcessFunction
//example of url called when deployed app (with your path declared): https://your-customer-dev-myDeployedAppName-srv.cfapps.us10.hana.ondemand.com/service/myServiceName/mYProcessFunction
//example of url while in local test: https://port4004-workspaces-ws-zz999.us10.applicationstudio.cloud.sap/odata/v4/myServiceName/mYProcessFunction
  this.on('mYProcessFunction', async (req) => {

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
