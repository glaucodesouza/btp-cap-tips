# Step-by-step

- This is a step-by-step for creating an backend app,
- Using @sap-cloud-sdk/http-client (not the best though)
- which calls, an API Service through a destination, in service.js main function.
- In this case, the external API has Basic Authorization, with user and password.
- But who configurated this destination, will let us call this destination with NoAuthorization.
- So in package.json, we put NoAuthorization.

# 0-Make sure destination is already created
- There is an API eith basic authorization
- But BTP admin have created the destination with No Authorization for your BTP CAP App.
- So, you do not need user and password.



# 1-env/.env1
- here we put config for local testing
  
              destinations='[
                {
                    "name":"MY_DECLARED_DESTINATION_IN_PACKAGEJSON",
                    "url":"https://MY_DECLARED_DESTINATION_IN_PACKAGEJSON.dest",
                    "proxyHost":"http://127.0.0.1",
                    "proxyPort":"8887"
                }
            ]'
            cds_requires='{
                "auth":{
                    "strategy":"dummy",
                    "kind":"dummy"
                },
                "messaging":{
                    "kind":"local-messaging"
                },
                "MY_DECLARED_DESTINATION_IN_PACKAGEJSON": {
                    "impl":"@sap/cds/libx/_runtime/remote/Service.js",
                    "external":true,
                    "kind":"rest",
                    "csrf":true,
                    "csrfInBatch":true,
                    "credentials":{
                        "destination":"CORRECT_NAME_OF_DESTINATION_IN_BTP_COCKPIT"
                    }
                }
            }'

# 2-package.json

    "cds": {
        "requires": {
          "MY_DECLARED_DESTINATION_IN_PACKAGE.JSON": {
            "kind": "rest",
            "[production]": {
              "credentials": {
                "destination": "CORRECT_NAME_OF_DESTINATION_IN_BTP_COCKPIT",
                "authentication": "NoAuthentication"
              }
            },
            "csrf": true,
            "csrfInBatch": true
          }
        }
      }

# 3-Service.cds
- declare your myCustomFunction()
  
        using myschema from '../db/schema';

        service EmployeeService {
            entity myCustomFunction as projection on myschema.EmployeeExecution;

            function process() returns String; 
        }

# 4-Service.js

    const { executeHttpRequest } = require('@sap-cloud-sdk/http-client');

    module.exports = cds.service.impl(async function () {

    this.on('myCustomFunction', async (req) => {

       const destination2 = { destinationName: 'MY_DECLARED_DESTINATION_IN_PACKAGE.JSON' };
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

    
