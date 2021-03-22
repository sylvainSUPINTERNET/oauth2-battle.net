type RegionName = "eu" | "us" | "apac" | "cn";

interface Region {
    getAuthorization(): string;
}

export class AllCountriesConfiguration implements Region {
    name: RegionName;
    private authorizeUri: string;

    constructor (name: RegionName) {
        this.name = name;
        this.authorizeUri = `https://${this.name}.battle.net/oauth/authorize`
    }

    getAuthorization(): string {
        return this.authorizeUri;
    }
}

