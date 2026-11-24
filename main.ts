// make.fun post-x entry — Node 22, standard library only.
// The grader mounts the repository at /bot and the destination at /output.
// Locally: mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// v2 added source validation and a post-copy check. v3 removes TypeScript-only
// syntax and uses dynamic import() inside an async IIFE, so the same file runs
// whether the loader treats .ts as CommonJS (see package.json) or as ESM.

(async () => {
  const { copyFileSync, existsSync, mkdirSync, statSync } = await import('node:fs');
  const { join } = await import('node:path');

  const botDir = process.env.MAKEFUN_BOT_DIR || '/bot';
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

  // The output directory is a mount point: create it if absent, NEVER remove it.
  mkdirSync(outputDir, { recursive: true });

  const source = join(botDir, 'POST.json');
  const target = join(outputDir, 'POST.json');

  if (!existsSync(source) || !statSync(source).isFile()) {
    console.error('POST.json is missing or not a file under ' + botDir);
    process.exitCode = 1;
    return;
  }

  try {
    copyFileSync(source, target);
    if (!statSync(target).isFile()) {
      throw new Error('destination ' + target + ' is not a regular file after copy');
    }
    console.log('copied POST.json from ' + botDir + ' to ' + outputDir);
  } catch (err) {
    console.error('could not copy POST.json: ' + (err && err.message ? err.message : err));
    process.exitCode = 1;
  }
})();
