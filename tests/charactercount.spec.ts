import { test, expect } from '@playwright/test';

test('Count characters with and without spaces', async () => {
  
  const text = "Hello Playwright how are you";

  // Count including spaces
  const countWithSpaces = text.length;

  // Count excluding spaces
  const countWithoutSpaces = text.replace(/\s/g, '').length;

  console.log(`Original Text: "${text}"`);
  console.log(`Characters (with spaces): ${countWithSpaces}`);
  console.log(`Characters (without spaces): ${countWithoutSpaces}`);

  // Assertions (optional)
  expect(countWithSpaces).toBe(16);
  expect(countWithoutSpaces).toBe(15);
});