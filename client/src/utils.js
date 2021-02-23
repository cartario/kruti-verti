export const sayWelcome = () => {
  const date = new Date();
  const hours = date.getHours();

  if(hours >=0 & hours<6){
    return {name: 'Доброй ночи!', status: 0}
  }
  if(hours >=6 & hours<12){
    return {name: 'Доброе утро!', status: 1}
  }
  if(hours >=12 & hours<18){
    return {name: 'Добрый день!', status: 2}
  }
  if(hours >=18 & hours<22){
    return {name: 'Добрый вечер!', status: 3}
  }
  return {name: 'Доброй ночи!', status: 0}
};

//оптимизурует запрос видео
export const getOptimizedUrl = (url) => {
  const targetUrl = url.split('/').filter((item) => item !== 'q_auto:low');

  targetUrl.forEach((item, i) => {
    if (item === 'upload') {
      targetUrl[i] = 'upload/q_auto:low';
    }
  });
  return targetUrl.join('/');
};
