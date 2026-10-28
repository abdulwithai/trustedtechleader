import { createHash } from 'node:crypto';

const pw = process.argv[2];
if (!pw) {
  console.error('Usage: npm run admin:hash -- "new password"');
  process.exit(1);
}
console.log(createHash('sha256').update(pw, 'utf8').digest('hex'));
