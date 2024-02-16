// import { supabase } from "@/supabaseClient";
// import { Tables } from "@/types/supabase";
import { Tabs, LiftingTab, EatingTab, Header } from "@/components";

export const Home = () => {
  // const [sessions, setSessions] = useState<Tables<"sessions">[]>([]);

  // const getSessions = async () => {
  //   const { data } = await supabase.from("sessions").select();

  //   if (!data) return;

  //   setSessions(data);
  // };

  // useEffect(() => {
  //   getSessions();
  // }, []);

  const liftingTab = {
    title: "Lifting",
    value: "Lifting",
    content: <LiftingTab />,
  };

  const eatingTab = {
    title: "Eating",
    value: "Eating",
    content: <EatingTab />,
  };

  return (
    <div>
      <Header back={true} text="Header text" logout={true} />
      <Tabs items={[liftingTab, eatingTab]} />
    </div>
  );
};
