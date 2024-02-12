import { LoginForm } from "./LoginForm";
import { SignUp } from "./SignUp";
import { Tabs, type TabsProps } from "@/components/Tabs";

export function Auth() {
  const myTabs: TabsProps["items"] = [
    {
      title: "one",
      value: "one",
      content: <LoginForm />,
    },
    {
      title: "two",
      value: "two",
      content: <SignUp />,
    },
  ];

  return (
    <div>
      <Tabs items={myTabs} />
    </div>
  );
}
