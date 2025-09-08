import { useState } from 'react';
import Button from '../../shared/components/form/Button';
import Form from '../../shared/components/form/Form';
import Input from '../../shared/components/form/Input';

export default function MoodLogForm() {
  const [moodMsg, setMoodMsg] = useState('');

  const onSubmit = () => {
    console.log('ahhhhh form 제출');
  };
  return (
    <Form onSubmit={onSubmit}>
      <div className="text-3xl">😜</div>
      <Input
        label="Mood Message"
        id="msg"
        type="text"
        value={moodMsg}
        onChange={(e) => setMoodMsg(e.target.value)}
      />
      <Button type="submit" text="submit" />
    </Form>
  );
}
