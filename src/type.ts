// src/auth.ts
export interface SignInReq {
    accountId: string;
    accountPw: string;
}

export interface SignInRes {
    accessToken: string;
}
