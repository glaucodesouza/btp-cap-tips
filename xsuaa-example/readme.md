# XSUAA
## XSUAA is security module of BTP.
You must create first your xs-security.json file (See example)
After this, you must use command:  
  cds add hana,mta,xsuaa,approuter --for production  
  **or**  
  cds add mta  
  This command above will generate modules and resources in mta.yaml file.
  This will create app-xsuaa and requirements.
