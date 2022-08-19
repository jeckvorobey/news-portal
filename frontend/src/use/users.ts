import { Ref } from "vue";
import { useFetch } from "@/use/fetch";

export interface User {
  _id: string;
  username: string;
  password: string;
}

type UsableUser = Promise<{ user: Ref<User | undefined> }>;

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

export async function useRegUser(data: {
  password: Ref<string>;
  username: Ref<string>;
}): UsableUser {
  const { response: user, request } = useFetch<User>(
    "http://localhost:3001/auth",
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  await request();

  return { user };
}
