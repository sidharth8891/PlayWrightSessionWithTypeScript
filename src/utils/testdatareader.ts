import fs from 'fs';
import { TEST_DATA_PATH } from '../constants/constants';


const testDataPath =  TEST_DATA_PATH;

// Utility to load and parse JSON once
function loadTestData(): any {
  if (!fs.existsSync(testDataPath)) {
    throw new Error(`Test data file not found: ${testDataPath}`);
  }

  const rawData = fs.readFileSync(testDataPath, "utf-8");
  return JSON.parse(rawData);
}

// Method to get JSON value
export function getTestData(key: string): string {
const testData = loadTestData();

 if (!(key in testData)) {
   throw new Error(`Key "${key}" not found in test data`);
 }

 return testData[key];
}

// Method to get JSON array
export function getJsonArray(key: string): any[] {
  const testData = loadTestData();

  if (!(key in testData)) {
    throw new Error(`Key "${key}" not found in test data`);
  }

  const value = testData[key];
  if (!Array.isArray(value)) {
    throw new Error(`Key "${key}" does not contain a JSON array`);
  }

  return value;
}

// Method to get JSON object
export function getJsonObject(key: string): Record<string, any> {
  const testData = loadTestData();

  if (!(key in testData)) {
    throw new Error(`Key "${key}" not found in test data`);
  }

  const value = testData[key];
  if (typeof value !== "object" || Array.isArray(value)) {
    throw new Error(`Key "${key}" does not contain a JSON object`);
  }

  return value;
}



