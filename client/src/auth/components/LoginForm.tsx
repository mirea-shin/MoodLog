import Form from '../../shared/components/form/Form';
import Button from '../../shared/components/form/Button';

export default function LoginForm() {
  const handleLogin = () => {
    console.log('submit login');
  };

  return (
    <Form onSubmit={handleLogin}>
      안녕하세요
      <Button type="submit" />
    </Form>
  );
}
