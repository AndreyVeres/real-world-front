export interface RegisterPayload {
  user: {
    email: string;
    password: string;
    username: string;
  };
}

export interface LoginPayload {
  user: {
    username: string;
    password: string;
  };
}

export interface UserResponse {
  user: {
    bio: string;
    email: string;
    id: number;
    image: string;
    token: string;
    username: string;
  };
}
