import { expect, it } from 'vitest';

type ParamsType = {
  first: string;
  last?: string;
};

export const getName = (params: ParamsType): string => {
  if (!params.last) return params.first;

  return `${params.first} ${params.last}`;
};

it('Should work with just the first name', () => {
  const name = getName({
    first: 'Matt',
  });

  expect(name).toEqual('Matt');
});

it('Should work with the first and last name', () => {
  const name = getName({
    first: 'Matt',
    last: 'Pocock',
  });

  expect(name).toEqual('Matt Pocock');
});
