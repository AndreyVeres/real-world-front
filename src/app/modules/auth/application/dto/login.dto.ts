export interface LoginDto {
  readonly user: {
    readonly username: string;
    readonly password: string;
  };
}
