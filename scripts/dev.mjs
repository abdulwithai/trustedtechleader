// `npm run dev`: starts the Next dev server and the local social helper (admin -> Social tab) together.
// Usage: node scripts/dev.mjs
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const helper = spawn(process.execPath, ['scripts/social-server.mjs'], { cwd: ROOT, stdio: 'inherit' });
const next = spawn(process.execPath, [path.join(ROOT, 'node_modules', 'next', 'dist', 'bin', 'next'), 'dev', '-p', '9100'], {
  cwd: ROOT,
  stdio: 'inherit',
});

// Ctrl+C (or Next exiting) stops the helper too.
const stop = () => { if (helper.exitCode === null) helper.kill(); };
next.on('exit', (code) => { stop(); process.exit(code ?? 0); });
process.on('SIGINT', stop);
process.on('SIGTERM', () => { stop(); next.kill(); });
