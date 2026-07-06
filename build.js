#!/usr/bin/env node

import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectDir = __dirname;
const tscPath = path.join(projectDir, 'node_modules', 'typescript', 'bin', 'tsc');
const tsconfigPath = path.join(projectDir, 'src', 'tsconfig.json');

try {
  console.log('Building TypeScript project...');
  execSync(`node "${tscPath}" -p "${tsconfigPath}"`, {
    cwd: projectDir,
    stdio: 'inherit'
  });
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
