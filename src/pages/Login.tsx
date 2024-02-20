import { supabase } from "@/supabaseClient";
import { InputField } from "@/components";

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);

    const { data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (data) navigate("/home");

    setLoading(false);
  };

  return (
    <div>
      <h1>Supabase + React</h1>

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
};
