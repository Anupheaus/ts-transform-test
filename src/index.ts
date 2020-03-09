import { schema } from 'ts-transformer-json-schema';

interface SomeInterface {
  a: string;
  b?: number;
}

console.log(schema<SomeInterface>());
