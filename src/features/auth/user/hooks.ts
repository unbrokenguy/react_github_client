import { useLocalStorage } from "../../shared";
import { CREDENTIAL_KEY } from "./const";
import { UserCredential } from "./types";

/**
 * @hook Использование контекста авторизации и соответствующих методов
 */
export const useAuth = () => {
  const [viewer, setViewer] = useLocalStorage<UserCredential | null>(
    CREDENTIAL_KEY,
    null
  );
  const isAuth = !!viewer;

  const login = (credential: UserCredential) => {
    setViewer(credential);
    window.location.href = `/${credential.username}`;
  };
  const logout = () => {
    setViewer(null);
  };

  return { isAuth, viewer, login, logout };
};
