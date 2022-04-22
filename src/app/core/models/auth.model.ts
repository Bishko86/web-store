export interface IAuthCredentials {
  username?: string;
  email: string;
  password: string;
}

export interface ISingUpResponse {
    kind: string
    idToken: string
    email: string
    refreshToken: string
    expiresIn: string
    localId: string
}
