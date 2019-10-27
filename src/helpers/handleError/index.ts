export default abstract class HandleError<T> {
  public error: T;

  constructor(err: T) {
    this.error = err;
  }

  abstract get code(): any;

  public abstract process(): any;
}

