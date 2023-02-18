export function useAuth() {
  const isLoggedIn = localStorage.getItem("user");

  if (isLoggedIn) {
    return JSON.parse(isLoggedIn);
  }

  return null;
}
