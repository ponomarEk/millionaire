export const makeUniqueKey = (length = 10) => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$@!&()';
  let result = '';
  for (let i = 0, len = characters.length; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * len));
  }
  return result;
};
