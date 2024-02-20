import { FC } from "react";

export const Session: FC<{ id: number; name: string }> = ({ id, name }) => {
  return (
    <li className="session-item">
      <Icon icon="mdi:arm-flex-outline" className="session-icon circle" />
      <Link to={"/sessions/" + id}>{name}</Link>
      <Icon icon="simple-line-icons:options-vertical" className="option-icon" />
    </li>
  );
};
