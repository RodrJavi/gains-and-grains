import { useId } from "react";
import type { FC } from "react";

type InputFieldProps = {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputField: FC<InputFieldProps> = ({
  label,
  onChange,
  type,
  value,
  placeholder,
}) => {
  const id = useId();

  return (
    <div className="input-field">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        required={true}
        id={id}
        onChange={onChange}
      />
    </div>
  );
};
