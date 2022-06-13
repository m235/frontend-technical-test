export const getNicknameInitials = (nickname: string) =>
  nickname
    .split(' ')
    .map((string) => string.trim().charAt(0))
    .slice(0, 2)
    .join('')
