type RegionName = "eu" | "us" | "apac" | "cn";
type Scopes = "wow.profile" | "sc2.profile" | "d3.profile" | "openid";

interface Region {
    getAuthorizationUri(): string;
    getTokenUri(): string;
}

interface OAuth2Settings {
    getScopes(): Array<Scopes>;
}

interface OAuth2ApplicationSetting {
    getClientId(): string;
    getRedirectUri(): string;
    getResponseType(): string;
}

export class OAuth2CodeFlowConfiguration implements Region, OAuth2Settings, OAuth2ApplicationSetting {
    regionName: RegionName;
    scopes: Array<Scopes>;

    clientId: string;
    responseType: string;
    redirectUri: string;


    private _authorizeUri: string;
    private _tokenUri: string;
    

    constructor ({regionName, scopes, clientId, response_type, redirect_uri} : {regionName: RegionName, scopes: Array<Scopes>, clientId: string, response_type: string, redirect_uri: string}) {
        this.regionName = regionName;
        this.scopes = scopes;

        this.redirectUri = redirect_uri;
        this.responseType = response_type;
        this.clientId = clientId;

        this._authorizeUri = regionName === "cn" ? "https://www.battlenet.com.cn/oauth/authorize" : `https://${this.regionName}.battle.net/oauth/authorize`
        this._tokenUri = regionName === "cn" ? "https://www.battlenet.com.cn/oauth/token" : `https://${this.regionName}.battle.net/oauth/token`

    }

    getAuthorizeURL(): string {
        return `${this._authorizeUri}?scope=${this.scopes.join(" ")}&client_id=${this.clientId}&response_type=${this.responseType}&redirect_uri=${this.redirectUri}`;
    }

    getRedirectUri(): string {
        return this.redirectUri;
    }
    getResponseType(): string {
        return this.responseType;
    }
    getClientId(): string {
        return this.clientId;
    }

    getTokenUri(): string {
        return this._tokenUri;
    }
    getScopes(): Scopes[] {
        return this.scopes;
    }

    getAuthorizationUri(): string {
        return this._authorizeUri;
    }
}

