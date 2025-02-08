# How to test your deployed app using POSTMAN (program or site)

## Pre-requisites
- You have already a deployed app
- You have the url to call your app externally
## Step 1: 
- We will create two requests
  - a request 1 will be to get the access token from your app-srv
  - a request 2 will be to execute your app from postman
## Step 2: 
- Logon into your postman account
- create a new collection in postman
## Step 3:
- ##Create a new request 1 to get token for your app
- give a good name like my-app-get-token, or my-app-auth.
- url
  - https://cfdevxxx.authentication.us10.hana.ondemand.com/oauth/token
- Params tab
  - let is empty
- Go to authorizations tab
  - fill up Auth Type: Bearer Token
  - let Token field empty for now
- Go to Headers tab
  - Insert a new key named: APIKey
  - Value: (**ASK FOR A BTP COCPIT Administrator to give this APIKey for you**).
    - e.g. a77iyuujDF87W4I0MJbA6CzAS0RnaLEQ
- Go to Body tab
  - Insert 3 keys:
    - grant_type, value: client_credentials
    - client_id, value: (**get it from the steps bellow**).
    - client_secret, value: (**get it from the steps bellow**).
  - **HOW TO GET THESE ABOVE VALUES:**
    - steps to get these bellow informations
      - (To get client secret, client id)
      - go to you BTP cockpit,
      - enter your devspace,
      - enter your app-srv
      - enter the service bindings in up left side
      - select app-auth and click show sensitive data
      - ![image](https://github.com/user-attachments/assets/01886eb5-4f4f-4348-8606-e8f4d81a3f53)
  - **YOUR app-auth request for getting the token will be like this bellow**
  - ![image](https://github.com/user-attachments/assets/79f33784-1d0c-4fc2-97fd-fa2dec476a61)




    - 

- 
  
## Step 4: 
- 

## Step 5: 
- 

## Step 6:
- 



  
