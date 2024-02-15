import { FC, use } from "react";

import { supabase } from "@/supabaseClient";

type AuthGuardProps = { children: React.ReactNode };

const sessionPromise = supabase.auth.getSession().then((res) => res.data);

export const AuthGuard: FC<AuthGuardProps> = ({ children }) => {
  const data = use(sessionPromise);

  return data.session ? children : <Navigate to="/login" />;
};
