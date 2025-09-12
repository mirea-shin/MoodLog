import { useState } from 'react';

import Form from '../../../shared/components/form/Form';
import Input from '../../../shared/components/form/Input';
import Button from '../../../shared/components/form/Button';

import { FaArrowLeft } from 'react-icons/fa';
import useAuthStore from '../store/useAuthStore';

export default function SignUpForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const { changeAuthMode } = useAuthStore();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    if (id === 'username') setUsername(value);
    else if (id === 'password') setPassword(value);
    else if (id === 'nickname') setNickname(value);
  };

  return (
    <Form onSubmit={() => {}}>
      <div className="mb-2">
        <Input
          id="username"
          type="text"
          label="ID"
          value={username}
          onChange={handleOnChange}
        />
      </div>
      <div className="mb-2">
        <Input
          id="password"
          type="password"
          label="Password"
          value={password}
          onChange={handleOnChange}
        />
      </div>
      <div>
        <Input
          id="nickname"
          type="text"
          label="Nickname"
          value={nickname}
          onChange={handleOnChange}
        />
      </div>
      <div className="flex justify-center items-center my-5">
        <Button type="submit" text="SIGN UP" />
      </div>
      <button
        type="button"
        className="text-gray-500 hover:text-blue-500 flex items-center gap-1.5"
        onClick={() => changeAuthMode('login')}
      >
        <span>
          <FaArrowLeft />
        </span>
        <p> Back to login page</p>
      </button>
    </Form>
  );
}
