import { Ref } from "vue";
import { useFetch } from "@/use/fetch";

export interface User {
  _id: string;
  username: string;
  password?: string;
}

export interface responseUser {
  isAuthorized: boolean;
  message: string;
  token: string;
  user: User | null;
}

type UsableUser = Promise<{ responseUser: Ref<User | undefined> }>;

export async function useUser(data: RequestInit) {
  const { response: user, request } = useFetch<User>(
    "http://localhost:3001/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    }
  );
  await request();

  return { user };
}

export async function useRegUser(data: RequestInit): UsableUser {
  const { response: responseUser, request } = useFetch<User>(
    "http://localhost:3001/reg",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    }
  );
  await request();

  return { responseUser };
}
