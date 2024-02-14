import { useState } from "react";
import { supabase } from "@/supabaseClient";
import { InputField } from "@/components/InputField/InputField";

export const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const passwordsMatch = password === passwordConfirmation;
  const submitIsDisabled = loading || !email || !password;

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);

    if (passwordsMatch) {
      await supabase.auth.signUp({
        email,
        password,
      });
    } else {
      alert("Passwords do not match");
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>Supabase + React</h1>

      <form onSubmit={handleLogin}>
        <InputField
          label="Email address:"
          value={email}
          type="email"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="email@email.com"
        />

        <InputField
          label="Password:"
          value={password}
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          placeholder=""
        />

        <InputField
          label="Confirm password:"
          value={passwordConfirmation}
          type="password"
          onChange={(event) => setPasswordConfirmation(event.target.value)}
          placeholder=""
        />

        <button disabled={submitIsDisabled} type="submit">
          {loading ? <span>Loading</span> : <span>Sign up</span>}
        </button>
      </form>
    </div>
  );
};
