export declare class SocialUser {
    provider: string;
    id: string;
    email: string;
    name: string;
    image: string;
    token?: string;
    idToken?: string;
    authToken: {
        accessToken: string;
        data_access_expiration_time: number;
        expiresIn: number;
        signedRequest: string;
        userId: string;
    };
}
export declare class LoginProviderClass {
    name: string;
    id: string;
    url: string;
}
export declare class LinkedInResponse {
    emailAddress: string;
    firstName: string;
    id: string;
    lastName: string;
    pictureUrl: string;
}
