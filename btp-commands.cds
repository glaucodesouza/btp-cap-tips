COMMANDS
	cds watch
	cds watch --production
	cds watch --profile hybrid

BUILD
	mbt build -t gen --mtar mta.tar
	mbt build -t ./
    
	DEPLOY
		cf deploy gen/mta.tar --delete-services --retries 1

cds deploy 
	(deploy of local data base sqlite)

cf logs adpwfn-srv --recent	
    
npm update --package-lock-only
npm audit fix --force
npm audit fix
		
cf env adpwfm-srv > default-env.json

when debugging
	url + ?sap-ui-xx-componentPreload=off
	this shows variables with legible names.
