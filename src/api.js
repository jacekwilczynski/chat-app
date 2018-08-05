export const checkNickname = nickname =>
  fetch(`/api/check-nickname/${nickname}`)
    .then(res => res.text())
    .then(text => text === 'true');
