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
      switch (value.constructor.name) {
        case 'Map':
          return {
            __t: 'Map',
            __v: Array.from((value as Map<any, any>).entries())
          }
        case 'Set':
          return {
            __t: 'Set',
            __v: Array.from((value as Set<any>).values())
          }
        case 'Buffer':
          return {
            __t: 'Buffer',
            __v: Array.from((value as Buffer))
          }
        case 'Date':
          return {
            __t: "Date",
            __v: (value as Date).getTime()
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
