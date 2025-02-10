# XSUAA
## XSUAA is security module of BTP.
- You must create first your xs-security.json file (See example)
- After this, you must use command:  
- cds add hana,mta,xsuaa,approuter --for production  
- **or**  
- cds add mta  
- This command above will generate modules and resources in mta.yaml file.
- This will create yourapp-xsuaa and requirements.

## Tips
  ## 1 - in mta.yaml, the automatic generated code will have an error.
  - THIS BELLOW LINE WILL GIVE ERROR OF DEPLOY:
  - in resources, yourapp-xsuaa,config partÇ
    - ERROR: xsappname: yourapp-**${org}-${space}**
    - CORRECT: xsappname: yourapp-xsuaa
      - because BTP deployment will not recognize symbols and variables for this **${org}-${space}**.
  ## 2 - in your xs-security.json
  - "xsappname": "yourappname",
  - do not need to incremente with -xsuaa part.
