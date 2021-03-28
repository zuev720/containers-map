import ErrorRepository from '../js/ErrorRepository';

it('Метод translate(code) класса ErrorRepository должен возвращать правильные значения', () => {
  const errorRepository = new ErrorRepository();
  expect(errorRepository.translate(1)).toBe('Ошибка №1');
  expect(errorRepository.translate(2)).toBe('Ошибка №2');
  expect(errorRepository.translate(3)).toBe('Ошибка №3');
  expect(errorRepository.translate(4)).toBe('Ошибка №4');
});

it('При несуществующем коде ошибки метод translate(code) должен возвращать строку "Unknown error!" ', () => {
  const errorRepository = new ErrorRepository();
  const received = 'Unknown error!';
  expect(errorRepository.translate(25)).toBe(received);
});
