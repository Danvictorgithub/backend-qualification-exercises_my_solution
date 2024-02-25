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
    // My old solution has repeating patterns so I just need to group it in order to improve the efficiency
    case "string":
    case "number":
    case "boolean":
    case "undefined":
      return value;
    // Serializing objects
    case "object":
      // I found in the documentation that null is kind of a special case object where the only way to check if it is null is to check that the value is indeed === null
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
        // Serializing arrays and objects with recursion
        // Since I have all the base cases covered, I can just use the default case to cover all the other cases
        case 'Array':
          return Array.from(value as Array<any>, v => serialize(v));
        case 'Object':
          return Object.fromEntries(
            Object.entries(value).map(([k, v]) => [k, serialize(v)])
          );
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
