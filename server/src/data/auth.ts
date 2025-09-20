import { generateToken, generateBcrypt, checkPwd } from '../utils/auth';

const FAKE_USERS = [
  {
    user_id: 'abc',
    username: '유저1',
    password: '$2b$10$laEm7F8cNRzOWe1KfXGExeqbhFpDJrxGp40u8teiMQgGVF7wEjIQW',
    avatar_url: '',
    nickname: '유저의 닉네임',
  },
];

const findUser = (username: string) =>
  FAKE_USERS.find((user) => user.username === username);

export const loginUser = async (userInfo: {
  username: string;
  password: string;
}) => {
  const foundedUser = findUser(userInfo.username);

  if (foundedUser) {
    const matched = await checkPwd(userInfo.password, foundedUser.password);
    if (matched) {
      return { token: generateToken(), users: FAKE_USERS };
    }
  } else {
    return false;
  }
};

export const addNewUser = async ({
  newUser,
}: {
  newUser: {
    user_id: string;
    password: string;
    avatar_url: string;
    username: string;
  };
}) => {
  const foundedUser = findUser(newUser.user_id);

  const encodedPwd = await generateBcrypt(newUser.password);

  if (!foundedUser) {
    FAKE_USERS.push({ ...newUser, password: encodedPwd });
  }

  return { token: generateToken(), users: FAKE_USERS };
};
