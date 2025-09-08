import { useEffect, useState } from 'react';

import { LoginForm } from '../../features/auth/index';
import Card from '../../shared/components/ui/Card';

import { EMOTIONS } from '../../constants/emotion';
import { TITLE } from '../../constants/strings';

export default function AuthPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % EMOTIONS.length);
    }, 2000); // 2초마다 로테이션

    return () => clearInterval(interval); // 언마운트 시 interval 제거
  }, []);

  const currentEmotion = EMOTIONS[index].emoji;

  return (
    <Card style={{ padding: '3rem 5rem', width: '500px' }}>
      <div className=" flex flex-col justify-center items-center mb-8">
        <div className="flex">
          <h1 className="px-2 ">{currentEmotion}</h1>
          <h1>{TITLE}</h1>
        </div>
        <h4 className="text-gray-500">Your daily mood</h4>
      </div>
      <LoginForm />
    </Card>
  );
}
