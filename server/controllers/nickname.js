export const check = ({ nicknameAvailable }) => (req, res) => {
  res.send(nicknameAvailable(req.params.nickname));
};
