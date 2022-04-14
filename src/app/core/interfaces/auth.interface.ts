export interface IRegistrateDto {
  kind: string
  idToken: string
  email: string
  refreshToken: string
  expiresIn: string
  localId: string
}

export interface ILoginDto {
  kind: string
  localId: string
  email: string
  displayName: string
  idToken: string
  registered: boolean
  refreshToken: string
  expiresIn: string
}

export interface UserCredentials {
  email: string;
  password: string;
}

export interface IdentityAccountResponse {
  kind: string
  users: User[]
}

export interface User {
  localId: string
  email: string
  passwordHash: string
  emailVerified: boolean
  passwordUpdatedAt: number
  providerUserInfo: ProviderUserInfo[]
  validSince: string
  lastLoginAt: string
  createdAt: string
  lastRefreshAt: string
}

export interface ProviderUserInfo {
  providerId: string
  federatedId: string
  email: string
  rawId: string
}