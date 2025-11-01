
import { test, expect } from '@playwright/test';
import { TestDataGenerator } from '../src/utils/TestDataGenerator';

test.describe('TestDataGenerator', () => {

  test('generateRandomString should generate a string of the correct length', () => {
    const length = 10;
    const randomString = TestDataGenerator.generateRandomString(length);
    expect(randomString).toHaveLength(length);
    expect(randomString).toMatch(/^[a-zA-Z]+$/);
  });

  test('generateRandomAlphanumeric should generate an alphanumeric string of the correct length', () => {
    const length = 15;
    const randomAlphanumeric = TestDataGenerator.generateRandomAlphanumeric(length);
    expect(randomAlphanumeric).toHaveLength(length);
    expect(randomAlphanumeric).toMatch(/^[a-zA-Z0-9]+$/);
  });

  test('generateRandomInteger should generate an integer within the specified range', () => {
    const min = 1;
    const max = 100;
    const randomInt = TestDataGenerator.generateRandomInteger(min, max);
    expect(randomInt).toBeGreaterThanOrEqual(min);
    expect(randomInt).toBeLessThanOrEqual(max);
  });

  test('generateRandomEmail should generate a valid email format', () => {
    const randomEmail = TestDataGenerator.generateRandomEmail();
    expect(randomEmail).toMatch(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/);
  });

  test('generateRandomPhone should generate a valid phone number format', () => {
    const randomPhone = TestDataGenerator.generateRandomPhone();
    expect(randomPhone).toMatch(/^\+1\d{10}$/);
  });

  test('generateRandomDate should generate a date within the specified range', () => {
    const startDate = new Date('2023-01-01');
    const endDate = new Date('2023-12-31');
    const randomDate = TestDataGenerator.generateRandomDate(startDate, endDate);
    expect(randomDate.getTime()).toBeGreaterThanOrEqual(startDate.getTime());
    expect(randomDate.getTime()).toBeLessThanOrEqual(endDate.getTime());
  });

});
