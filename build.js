#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

const projectDir = path.dirname(__filename);
const tscPath = path.join(projectDir, 'node_modules', '.bin', 'tsc');
const tsconfigPath = path.join(projectDir, 'src', 'tsconfig.json');

try {
  console.log('Building TypeScript project...');
  execSync(`"${tscPath}" -p "${tsconfigPath}"`, {
    cwd: projectDir,
    stdio: 'inherit'
  });
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
