import type { FC } from "react";
import { supabase } from "@/supabaseClient";

export type HeaderProps = {
  back: boolean;
  text: string;
  logout: boolean;
};

export const Header: FC<HeaderProps> = ({ back, text }) => {
  const navigate = useNavigate();

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <header>
      <div>
        {back && "back button"}
        <p>{text}</p>
      </div>
      <button
        onClick={async () => {
          signOut();
        }}>
        <Icon icon="mdi:logout" className="logout-icon" />
      </button>
    </header>
  );
};
