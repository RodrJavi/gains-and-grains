import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "@/supabaseClient";
import { Tables } from "@/types/supabase";

const Index = () => {
  const [sessions, setSessions] = useState<Tables<"sessions">[]>([]);

  const getSessions = async () => {
    const { data } = await supabase.from("sessions").select();

    if (!data) return;

    setSessions(data);
  };

  useEffect(() => {
    getSessions();
  }, []);

  return (
    <div>
      <p>index.tsx</p>
      {JSON.stringify(sessions)}
      <Link to="/about">About</Link>
      <Link to="/about/1">About 1</Link>
      <Link to="/auth">Auth</Link>
    </div>
  );
};

export default Index;
