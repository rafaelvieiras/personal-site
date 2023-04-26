//return: 10 dias atrás
export const timeAgo = (date: Date | string) => {
  const dateNow = new Date();
  const dateToCompare = new Date(date);
  const seconds = Math.floor(
    (dateNow.getTime() - dateToCompare.getTime()) / 1000
  );
  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return `${interval} anos atrás`;
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return `${interval} meses atrás`;
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return `${interval} dias atrás`;
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return `${interval} horas atrás`;
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return `${interval} minutos atrás`;
  }
  return `${Math.floor(seconds)} segundos atrás`;
};
