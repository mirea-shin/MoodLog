import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface InputProps {
  id: string;
  type: 'password' | 'text';
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

  label?: string;
  errorMessage?: string;
}

export default function Input({
  label,
  id,
  errorMessage,
  type,
  value,
  onChange,
}: InputProps) {
  const [showPwd, setShowPwd] = useState(false);

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-500">
          {label}
        </label>
      )}
      <div className="w-full relative">
        <input
          className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full"
          id={id}
          type={showPwd ? 'text' : type}
          value={value}
          onChange={onChange}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPwd((prev) => !prev)}
            className="absolute right-3 h-full"
          >
            {showPwd ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
      {errorMessage && (
        <span className="text-xs text-red-500">{errorMessage}</span>
      )}
    </div>
  );
}
