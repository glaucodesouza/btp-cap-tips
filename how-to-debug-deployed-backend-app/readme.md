# How to DEBUG a BTP CAP backend app in BAS?  
https://community.sap.com/t5/technology-blogs-by-sap/set-up-remote-debugging-to-diagnose-cap-applications-node-js-stack-at/ba-p/13515376

## Important
## Step 1: 
- cf -v (to see whats your cf version)
## Step 2: 
- cf login
## Step 3:
- To check if an application is accessible via SSH, you can use the following command:
	cf ssh-enabled myapp
## Step 4: 


## Step 5: 
- Open a new separated terminal  
- cf login
- cf ssh -N -L 9229:127.0.0.1:9229 myapp-srv
	- It will open a new browser window, but you didn't need to use it.

## Step 6:
- After the end of step 6:
- You put a breakpoint in some executable line in BAS  
- You will call your app from POSTMAN (site or app)  
