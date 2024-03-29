import { InputField } from "@/components";

export const SessionCreate = () => {
  const [sessionName, setSessionName] = useState("");
  const [exerciseName, setExerciseName] = useState("");
  const [repCount, setRepCount] = useState(1);

  function addRep(n: number) {
    if (repCount + n < 1) return;
    setRepCount(repCount + n);
  }

  return (
    <div>
      <InputField
        label="Title"
        type="text"
        value={sessionName}
        placeholder=""
        onChange={(e) => setSessionName(e.target.value)}
      />
      <InputField
        label="Exercise"
        type="text"
        value={exerciseName}
        placeholder=""
        onChange={(e) => setExerciseName(e.target.value)}
      />
      <div>
        <p>Number of sets</p>
        <div>
          <button onClick={() => addRep(-1)}>-</button>
          <span>{repCount}</span>
          <button onClick={() => addRep(1)}>+</button>
          <button>Add exercise</button>
        </div>
      </div>
      <div>
        <p>Exercises</p>
        <ul>
          <li>Squats</li>
        </ul>
        <button>Create session</button>
      </div>
    </div>
  );
};
