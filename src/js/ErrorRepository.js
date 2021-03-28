import obj from './errorList';

export default class ErrorRepository {
  constructor() {
    this.repository = new Map();
    obj.forEach((error) => {
      this.repository.set(error.code, error.value);
    });
  }

  translate(code) {
    if (this.repository.has(code)) {
      return this.repository.get(code);
    }
    return 'Unknown error!';
  }
}
