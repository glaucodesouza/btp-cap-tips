# COMMANDS
	cds watch
	cds watch --production
	cds watch --profile hybrid

## BUILD
	mbt build -t gen --mtar mta.tar
	mbt build -t ./
    
## DEPLOY
	cf deploy gen/mta.tar --delete-services --retries 1

## cds deploy 
	(deploy of local data base sqlite)

## cf login
	cf logs adpwfn-srv --recent	

## npm
	npm update --package-lock-only
	npm audit fix --force
	npm audit fix

## cf
	cf env adpwfm-srv > default-env.json

## when debugging
	url + ?sap-ui-xx-componentPreload=off
	this shows variables with legible names.

## package.json/scripts
	  "scripts": {
	    "start": "cds-serve",
	    "start-local": "npm run generate-entry-point && npm run cds-watch",
	    "generate-entry-point": "dev-cap-tools gen-entrypoint",
	    "cds-watch": "cds watch --open",
	    "watch-mtrmonitorfrontend": "cds watch --open mtrmonitorfrontend/webapp/index.html?sap-ui-xx-viewCache=false",
	    "undeploy": "cf undeploy mtrmonitor --delete-services --delete-service-keys --delete-service-brokers",
	    "build": "rimraf resources mta_archives && mbt build --mtar archive",
	    "deploy": "cf deploy mta_archives/archive.mtar --retries 1"
	  },
	
 	command: npm run build
