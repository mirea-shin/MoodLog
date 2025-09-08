import { BsFillChatHeartFill } from 'react-icons/bs';

import { TITLE } from '../../../constants/strings';
import { useAuthStore } from '../../../features/auth';

export default function Header() {
  const { isLoggedIn } = useAuthStore();

  return (
    <header className=" px-10 py-5 flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <span className="text-2xl">
          <BsFillChatHeartFill />
        </span>
        <h6 className="text-2xl">{TITLE}</h6>
      </div>
      {isLoggedIn && (
        <div className="text-xl">
          <p>something usercontrol </p>
        </div>
      )}
    </header>
  );
}
