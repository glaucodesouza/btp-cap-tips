# CURSO CAP 
(desatualizado, como sempre ne SAP, MAS DEPOIS DEVE ADICIONAR HDI no MTA, como os passos abaixo)  
	FAZER O CURSO NESTE ORDEM  
		https://developers.sap.com/mission.cp-starter-extensions-cap.html  
		AJUSTAR O MTA.YAML (tem que ficar TODO igual ao modelo)  
			mbt build -t gen --mtar mta.tar  
			cf deploy gen/mta.tar --delete-services --retries 1  
		AJUSTAR o XS-SECURITY.json (p/ ficar igual ao modelo)  

-------------------------------------------------------------------------------  
PASSO-A-PASSO (DE ERROS RESOLVIDOS)  
-------------------------------------------------------------------------------  
Erro 0 - Comando cf login não funciona no BAS  
		Lista de validações:  
			Tem certeza de que está usando o API Endpoint correto?  
			Tem certeza de que está usando o e-mail correto de login ?  
			Tem certeza de que está usando a senha correta do cockpit?  
				Se a resposta for sim para tudo acima, altere a sua senha no cockpit da vale, na opção esqueci a minha senha, e renove a sua senha.  
					Após trocar a senha, o seu login deve funcionar no cf login.  
## Erro 1 - MTA.yaml
No depoloy. Dava erro app xsuaa diz que pode somente estes caracteres a-z A-Z 0-9 - _  
Solução proposta:  
	Vai no arquivo mta.yaml e alterar o valor abaixo:  
		OLD value: xsappname: testgs1-${org}-${space}  
		NEW value: xsappname: testgs1-auth  
## Erro 2 - MTA.yaml
Cadastrar o HDI e fazer BIND dele na parte required do serviço do seu app-srv  
Exemplo para binding no seu app-srv:  
  requires:  
    - name: ADPWFN_HDI  
	
  Exemplo para binding no seu app-db:  
    requires:  
      - name: ADPWFN_HDI  
      properties:  
        TARGET_CONTAINER: ADPWFN_HDI  
  
  resources  
    - name: ADPWFN_HDI  
    type: com.sap.xs.hdi-container  
    parameters:  
      service: hana  
      service-plan: hdi-shared  
      config:  
      schema: adpwfn  
    properties:  
      hdi-container-name: ${service-name}  
	  
## Erro 3 - Como pegar o client secret (se quiser testar no POSTMAN) ?  

Entrar o app-srv  
  Vai na opcao service bindings  
  Marcar a opcao app-xsuaa  
  Clicar em SHOW SENSITIVE DATA  
    copiar  
      clientid  
      clientsecret  
    
## Erro 4 - cds run error no deploy, dizendo que não aceita o comando run.
Vai no package.json e alterar o script:  
  old value "start": "cds-run ..."  
  new value "start": "cds-serve" (apenas cds-serve)  
## Erro 5 - app-db crashed
Vai no SAP HANA PROJECTS (BAS)   
Adicionar HDI do seu hana database  
Ele vai gerar o .env com as credenciais corretas  
OBS.: app-db crashed é um erro esperado hoje em dia, pois ele não é mais necessário ficar started, p/ o seu app funcionar (eu li isso em um forum da sap).  
## Erro 6 - POSTMAN 
Adicionar GET da url do TOKEN  
## Erro 7 - POSTMAN
Adicionar GET da chamada da sua custom function do service.js  
## Erro 8 - COMO VER O LOG DE ERRO do DEPLOY (DETALHADO e RECENTE):
cf logs adpwfn-srv --recent
## Erro 9 - Como atualizar somente o package-lock.json ?
npm update --package-lock-only
## Erro 10 - Erro DEPLOY HANA HDI (Falta no MTA.YAML, a propriedade do REQUIRE no app-db.
ASSIM: cadastrar properties no module app-db, lá no require.  
ASSIM: cadastrar TARGET_CONTAINER: ADPWFN_HDI, na properties criada.  
VAI FICAR ASSIM o module app-db:  
  - name: adpwfn-db  
  type: hdb  
  path: gen/db  
  parameters:  
    buildpack: nodejs_buildpack  
  requires:  
    - name: ADPWFN_HDI  
    properties:  
      TARGET_CONTAINER: ADPWFN_HDI  
## Erro 11 - Erro MODULE NOT FOUND request-promise (após tentar chamar destination na tentativa alternativa, PODE DESCONSIDERAR, POIS É DIFERENTE DO NOSSO APP ATUAL ADP WFN)
Solução: npm i request-promise  
## Erro 12 - Erro ao chamar destination (APÓS DEPLOY DÁ ERRO NA CHAMADA DA DESTINATION, mesmo que funcionasse no teste localmente)
Solução cds add mta  
  explicação: este comando cria a destination no MTA.yaml (provavelmente lê os dados lá da destination que está no Package.json)   
## Erro 13 - Atualizar apenas package-lock, caso queira.
  Executar: npm update --package-lock-only  
## Dica 14 - Como debugar BTP CAP App backend in BAS?
  https://community.sap.com/t5/technology-blogs-by-sap/set-up-remote-debugging-to-diagnose-cap-applications-node-js-stack-at/ba-p/13515376  
