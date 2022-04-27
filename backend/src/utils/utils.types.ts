export interface IResponse {
    status: number;
    message: string;
    data?: any;
};

export interface IAuthenticationData {
    email: string;
    isSigningUp: boolean;
};