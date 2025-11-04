import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Load config and resolve env vars recursively
 */
function resolveEnvVars(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      resolveEnvVars(obj[key]); // Recursively handle nested objects
    } else if (typeof obj[key] === 'string' && obj[key].startsWith('env:')) {
      const envVar = obj[key].replace('env:', '');
      const value = process.env[envVar];
      if (!value) console.warn(`⚠️ Missing environment variable: ${envVar}`);
      obj[key] = value || '';
    }
  }
}

/**
 * Load and prepare config
 */
export function loadConfig() {
  const configPath = './config/config.json';
  const configData = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  resolveEnvVars(configData);
  return configData;
}
