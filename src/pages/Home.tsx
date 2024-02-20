import { Tabs, LiftingTab, EatingTab, Header } from "@/components";

export const Home = () => {
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
