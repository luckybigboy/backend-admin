export interface LoginParams {
  username: string;
  password: string;
  captchaVerification?: string;
  socialType?: number;
  socialCode?: string;
  socialState?: string;
}
