const reducer = () => null;

const getNicknames = () => ['Eric'];

export const isNicknameAvailable = (state, nickname) =>
  getNicknames(state).indexOf(nickname) === -1;

export default reducer;
