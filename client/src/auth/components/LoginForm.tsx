import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Form from '../../shared/components/form/Form';
import Button from '../../shared/components/form/Button';
import Input from '../../shared/components/form/Input';

import { useAuthStore } from '../index';

export default function LoginForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const login = useAuthStore((state) => state.login);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    if (id === 'username') setUsername(value);
    else if (id === 'password') setPassword(value);
  };

  const handleLogin = () => {
    // TODO: 유효성 검사 결과를 사용자에게 띄운다.
    const isSuccess = login(username, password); // Boolean 반환
    if (isSuccess) {
      console.log('로그인 성공! 다음 동작 실행');
      navigate('/moodLog', { replace: true });
      // 예: 페이지 이동, 모달 닫기 등
    } else {
      console.log('아이디/비밀번호를 확인해주세요.');
      // 예: 에러 메시지 표시
    }
  };

  return (
    <Form onSubmit={handleLogin}>
      <Input
        id="username"
        type="text"
        label="ID"
        value={username}
        onChange={handleOnChange}
      />
      <Input
        id="password"
        type="password"
        label="Password"
        value={password}
        onChange={handleOnChange}
      />
      <Button type="submit" text="LOGIN" />
    </Form>
  );
}
