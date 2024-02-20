import { supabase } from "@/supabaseClient";
import { Tables } from "@/types/supabase";

export const SessionView = () => {
  const [session, setSession] =
    useState<Pick<Tables<"sessions">, "exercises">>();

  const { sessionId } = useParams();

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase
        .from("sessions")
        .select("exercises")
        .match({
          created_by: "ff61b505-813e-44e4-94bb-dc23170fdc48",
          id: sessionId,
        })
        .limit(1)
        .single();

      if (!data) return;

      setSession(data);
    };

    getSession();
  }, [sessionId]);

  return (
    <div>
      <h2>Suh sessionview</h2>
      {JSON.stringify(session)}
    </div>
  );
};
