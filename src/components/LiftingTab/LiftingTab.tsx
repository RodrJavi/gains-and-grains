import { Session } from "@/components/Session";
import { CreateSessionButton } from "@/components/Session";

export const LiftingTab = () => {
  return (
    <div className="lifting-tab">
      <input type="text" name="" id="" placeholder="Search for a session..." />
      <ul>
        <CreateSessionButton />
        <Session />
      </ul>
    </div>
  );
};
