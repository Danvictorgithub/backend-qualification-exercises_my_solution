export type Value = string | number | boolean | null | undefined |
  Date | Buffer | Map<unknown, unknown> | Set<unknown> |
  Array<Value> | { [key: string]: Value };

/**
 * Transforms JavaScript scalars and objects into JSON
 * compatible objects.
 */
export function serialize(value: Value): unknown {
  // Scalars
  switch (typeof value) {
    case "string":
      return value.toString();
    case "number":
      return value;
    case "boolean":
      return value
    case "undefined":
      return value;
    // Serializing objects
    case "object":
      if (value == null) {
        return null;
      }
      if (value instanceof Map) {
        return {
          __t: 'Map',
          __v: Array.from(value.keys()).reduce((acc: Array<[string, any]>, key: string) => {
            return acc.concat([[key, value.get(key)]]); // Finally able to use this array function
          }, [])
        }
      }
      if (value instanceof Set) {
        return {
          __t: 'Set',
          __v: Array.from(value)
        }
      }
      if (value instanceof Buffer) {
        return {
          __t: 'Buffer',
          __v: Array.from(value)
        }
      }
      if (value instanceof Date) {
        return {
          __t: "Date",
          __v: value.getTime()
        }
      }
  }
}

/**
 * Transforms JSON compatible scalars and objects into JavaScript
 * scalar and objects.
 */
export function deserialize<T = unknown>(value: unknown): T {
  /**
   * insert your code here
   */

  return;
}
