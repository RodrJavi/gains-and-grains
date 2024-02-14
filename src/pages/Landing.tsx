export const Landing = () => {
  return (
    <main className="alignment landing-spacing">
      <p className="landing-title">Working out?</p>
      <p className="landing-title">Documenting food?</p>
      <p className="landing-title">Let's track those.</p>

      <button className="landing-button landing-signin">
        <Link to="/login">Log in</Link>
      </button>

      <p className="landing-signin">
        New to us? That's cool.{" "}
        <u>
          <Link to="/signup">Sign up here</Link>
        </u>
      </p>
    </main>
  );
};
