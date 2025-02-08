# How to DEBUG a BTP CAP backend app in BAS?  
https://community.sap.com/t5/technology-blogs-by-sap/set-up-remote-debugging-to-diagnose-cap-applications-node-js-stack-at/ba-p/13515376

## Important
## Step 1: 
- cf -v (to see whats your cf version)
## Step 2: 
- cf login
## Step 3:
- cf ssh-enabled myapp-srv  
- cf enable-ssh myapp-srv  
- cf restart myapp-srv  
- cf ssh myapp-srv  
   OBS.: New terminal command will look like this:  
	vcap@afa9bea3-b619-6476-5e97-1328:~$
  
## Step 4: 
- ps aux (This will list  all process. Get the vcap PID one which has your app deployed asdress).  
- kill -usr1 151 (for example if your app has PID=151, and "-usr1" probably is a main linux user of the environment).  

## Step 5: 
- ## Open a new separated terminal  
- cf login
- cf ssh -N -L 9229:127.0.0.1:9229 myapp-srv
	- It will open a new browser window, but you didn't need to use it.
 	- Because you only needed this command to run this different local port with ssh.

## Step 6:
- After the end of step 6:
- You put a breakpoint in some executable line in BAS  
- You will call your app from POSTMAN (site or app)
- How to get your app url:
	- https://customer-xpto--cfdevvir-dev-yourappname-srv.cfapps.us10.hana.ondemand.com/odata/v4/employee/process
 	- where /odata/v4/employee/process:
  	- /odata/v4 (you get this from your app when testing locally you can see it)
  	- /employee (this is the service name in service.cds)
  	- /process (this is the function you have created in your srv/service.js)
  	- ![image](https://github.com/user-attachments/assets/4b6ed9a6-8b69-4252-9de4-90f62217800c)

