import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Form from '../../../shared/components/form/Form';
import Button from '../../../shared/components/form/Button';
import Input from '../../../shared/components/form/Input';

import { useAuthStore } from '../index';

export default function LoginForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { login, changeAuthMode, loading, error, setErrMsg, isLoggedIn } =
    useAuthStore();

  useEffect(() => {
    if (isLoggedIn) navigate('/moodLog', { replace: true });
  }, [isLoggedIn]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setErrMsg('');
    const { id, value } = event.target;

    if (id === 'username') setUsername(value);
    else if (id === 'password') setPassword(value);
  };

  const validation = () => {
    if (!username || !password) return 'Please check your ID and password';
  };

  const handleLogin = () => {
    const hasErr = validation();
    if (hasErr) {
      setErrMsg(hasErr);
      return;
    }
    login({ username, password });
  };

  return (
    <Form onSubmit={handleLogin}>
      {loading && <div className="text-5xl text-red-400">로!딩!</div>}
      <div className="mb-2 relative">
        <Input
          id="username"
          type="text"
          label="ID"
          value={username}
          onChange={handleOnChange}
        />
      </div>
      <div className="relative">
        <Input
          id="password"
          type="password"
          label="Password"
          value={password}
          onChange={handleOnChange}
        />
      </div>
      <div className="flex justify-center items-center my-5 relative">
        <Button type="submit" text="LOGIN" />
        {error && (
          <div className="absolute text-xs text-red-600 top-11">
            <p>{error}</p>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center  gap-2">
        <button type="button" className="text-gray-500 hover:text-blue-500">
          Continue as Test User
        </button>
        <p>|</p>
        <button
          type="button"
          className="text-gray-500 hover:text-blue-500"
          onClick={() => {
            changeAuthMode('signUp');
          }}
        >
          Sign up
        </button>
      </div>
    </Form>
  );
}
