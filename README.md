# Battle.net OAuth2 client


# Documentation 

**Create your account / application and get your API credentials and configure your redirect uri : https://develop.battle.net/**



``` javascript
        import OAuth2BnetComponent from "oauth2-battle.net/src/battle.net/OAuth2Bnet.component";

        // ...

        <OAuth2BnetComponent>
        
        </OAuth2BnetComponent>


        let OAuth2BattleNetClient = new OAuth2CodeFlowConfiguration({
            "regionName" : "eu", // Could be another scopes, please check to know existing regions : https://develop.battle.net/documentation/guides/using-oauth
            "scopes" : ["wow.profile"], // Could be another scopes, please check to know existing scopes : https://develop.battle.net/documentation/guides/using-oauth
            "clientId" : "<your_client_id>",
            "response_type": "code",
            "redirect_uri": "<you_redirect_uri>", // From your application settings, e.g : http://localhost:8080/oauth2/redirect
            "clientSecret": "<your_client_secret>",
        });
```