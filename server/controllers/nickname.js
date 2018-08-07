const users = ['Eric'];

const nicknameAvailable = nickname => !users.includes(nickname);

export const check = (req, res) => {
  res.send(nicknameAvailable(req.params.nickname));
};
