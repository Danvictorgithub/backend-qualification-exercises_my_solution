// import crypto from 'crypto';
export class ObjectId {
  private static fourBitsRandom = new Uint8Array([
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256)]);
  private static counter = Math.floor(Math.random() * (Math.pow(2, 24)));
  private data: Buffer;


  // private static fourBitsRandom = crypto.randomBytes(4); // Not sure if this is valid
  // private static counter = Math.floor(Math.random() * (Math.pow(2, 24))); // Not sure if this is valid
  constructor(type: number, timestamp: number) {
    // This solution doesn't work
    // let fourBitsRandom = crypto.randomBytes(4);
    // let counter = Math.floor(Math.random() * (Math.pow(2, 24)));

    // this.data.set(fourBitsRandom, 7);
    // this.data.writeUIntBE(counter + 1, 11, 3);
    // counter = (counter + 1) % Math.pow(2, 24);

    this.data = Buffer.alloc(14); // 1 + 6 + 4 + 3
    this.data.writeUInt8(type, 0);
    this.data.writeUIntBE(timestamp, 1, 6);
    this.data.set(ObjectId.fourBitsRandom, 7);
    this.data.writeUIntBE(ObjectId.counter + 1, 11, 3);
    ObjectId.counter = (ObjectId.counter + 1) % Math.pow(2, 24);
  }

  static generate(type?: number): ObjectId {
    return new ObjectId(type ?? 0, Date.now());
  }

  toString(encoding?: 'hex' | 'base64'): string {
    return this.data.toString(encoding ?? 'hex');
  }
}
