const validateBug = (bug) => {
  if (!bug.title || !bug.description) return false;
  return true;
};

test('validateBug returns true for valid bug', () => {
  expect(validateBug({ title: 'Bug', description: 'Desc' })).toBe(true);
});

test('validateBug returns false for missing title', () => {
  expect(validateBug({ description: 'Desc' })).toBe(false);
});

test('validateBug returns false for missing description', () => {
  expect(validateBug({ title: 'Bug' })).toBe(false);
}); 