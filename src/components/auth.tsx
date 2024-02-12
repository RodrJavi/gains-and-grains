import { useState } from "react";
import { supabase } from "@/supabaseClient";
import { InputField } from "@/components/InputField/InputField";

export function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event: any) => {
    event.preventDefault();

    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Check your email for the login link!");
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Supabase + React</h1>
      <p>Sign in via magic link with your email below</p>
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

      <form onSubmit={handleLogin}>
        <div>
          <button disabled={loading}>
            {loading ? <span>Loading</span> : <span>Log in</span>}
          </button>
        </div>
      </form>
    </div>
  );
}
