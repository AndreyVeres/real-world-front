export interface RegisterDto {
  readonly user: {
    readonly email: string;
    readonly password: string;
    readonly username: string;
  };
}
