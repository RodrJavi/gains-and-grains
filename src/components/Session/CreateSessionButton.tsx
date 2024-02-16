export const CreateSessionButton = () => {
  return (
    <li className="session-item">
      <Icon icon="ic:baseline-plus" className="session-icon circle" />
      <Link to="/home">Create Session</Link>
    </li>
  );
};
