import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import { loginUser } from "../services/authService";
import { User } from "../types/user";

export function useAuth() {
  const { login } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleLogin(email: string, password: string): Promise<User | null> {
    try {
      setLoading(true);
      setError(null);

      const { token, user } = await loginUser({ email, password });

      const normalizedUser: User = {
        ...user,
        type: user.type.toUpperCase() as "ADMIN" | "CLIENTE",
      };

      login(normalizedUser, token);
      return normalizedUser;
    } catch (err: any) {
      setError(err.response?.data?.message || "Erro ao fazer login");
      return null;
    } finally {
      setLoading(false);
    }
  }

  return {
    handleLogin,
    loading,
    error,
  };
}
