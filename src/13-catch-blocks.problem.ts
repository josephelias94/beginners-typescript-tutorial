import { expect, it } from 'vitest';

interface ErrorType {
  message: string;
}

const tryCatchDemo = (state: 'fail' | 'succeed') => {
  try {
    if (state === 'fail') {
      throw new Error('Failure!');
    }
  } catch (error) {
    return (error as Error).message;
  }
};

it('Should return the message when it fails', () => {
  expect(tryCatchDemo('fail')).toEqual('Failure!');
});
