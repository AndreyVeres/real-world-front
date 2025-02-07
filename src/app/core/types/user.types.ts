export interface User {
  email: string;
  token: string | null;
  username?: string;
  bio?: string;
  image: string | null;
}
