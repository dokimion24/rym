const ROOT_URL = "http://localhost:3000";

export const router = {
  home: ROOT_URL,
  profile: `${ROOT_URL}/profile`,
} as const;
