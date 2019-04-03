import func from '.';

test('to return bar', () => {
  const foo = func();
  expect(foo).toBe('bar');
});
