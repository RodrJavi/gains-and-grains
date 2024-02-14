import { supabase } from "@/supabaseClient";
import { Tables } from "@/types/supabase";

export const Home = () => {
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
    </div>
  );
};
