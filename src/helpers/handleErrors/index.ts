export default class HandleError<T> {
  private error: T;

  private data: any;

  constructor(error: T) {
    this.error = error;
    this.data = (error as any).data;
  }

  get code() {
    return '1';
  }
}
