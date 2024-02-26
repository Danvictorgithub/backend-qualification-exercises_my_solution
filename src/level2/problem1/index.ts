export class ExecutionCache<TInputs extends Array<unknown>, TOutput> {
  private cache: { [key: string]: Promise<TOutput> } = {}; // Not sure if this is allowed, or does it have to be inside in the fire function?

  constructor(private readonly handler: (...args: TInputs) => Promise<TOutput>) { }

  async fire(key: string, ...args: TInputs): Promise<TOutput> {
    // if already cached return the result
    if (this.cache[key]) {
      return this.cache[key] as Promise<TOutput>;
    }
    // if not cached, then store to the cache
    const listPromises = this.handler(...args);
    this.cache[key] = listPromises;

    // Once the execution is complete, remove the promise from the cache and resolve it
    return listPromises.finally(() => {
      delete this.cache[key];
    });
  }
};
