type RegionName = "eu" | "us" | "apac" | "cn";
type Scopes = "wow.profile" | "sc2.profile" | "d3.profile" | "openid";

interface Region {
    getAuthorizationUri(): string;
    getTokenUri(): string;
}

interface OAuth2Settings {
    getScopes(): Array<Scopes>;
}

export class OAuth2CodeFlowConfiguration implements Region, OAuth2Settings {
    regionName: RegionName;
    scopes: Array<Scopes>;

    private _authorizeUri: string;
    private _tokenUri: string;
    

    constructor (regionName: RegionName, scopes: Array<Scopes>) {
        this.regionName = regionName;
        this.scopes = scopes;

        this._authorizeUri = regionName === "cn" ? "https://www.battlenet.com.cn/oauth/authorize" : `https://${this.regionName}.battle.net/oauth/authorize`
        this._tokenUri = regionName === "cn" ? "https://www.battlenet.com.cn/oauth/token" : `https://${this.regionName}.battle.net/oauth/token`
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

