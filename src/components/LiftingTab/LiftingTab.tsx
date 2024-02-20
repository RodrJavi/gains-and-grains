import { Session } from "@/components/Session";
import { CreateSessionButton } from "@/components/Session";
import { supabase } from "@/supabaseClient";
import { Tables } from "@/types/supabase";

export const LiftingTab = () => {
  const [sessions, setSessions] = useState<
    Pick<Tables<"sessions">, "id" | "name">[]
  >([]);

  const getSessions = async () => {
    const { data } = await supabase
      .from("sessions")
      .select("id, name")
      .match({ created_by: "ff61b505-813e-44e4-94bb-dc23170fdc48" });

    if (!data) return;

    setSessions(data);
  };

  useEffect(() => {
    getSessions();
  }, []);

  return (
    <div className="lifting-tab">
      <input type="text" name="" id="" placeholder="Search for a session..." />
      <ul>
        {JSON.stringify(sessions)}
        <CreateSessionButton />
        {sessions.map((session) => {
          return (
            <Session id={session.id} name={session.name} key={session.id} />
          );
        })}
      </ul>
    </div>
  );
};
