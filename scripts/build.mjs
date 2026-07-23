import { copyFileSync, mkdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const astroCli = fileURLToPath(
  new URL('../node_modules/astro/bin/astro.mjs', import.meta.url),
);
const workerSource = fileURLToPath(
  new URL('./static-worker.mjs', import.meta.url),
);
const workerDirectory = fileURLToPath(
  new URL('../dist/server/', import.meta.url),
);
const workerOutput = fileURLToPath(
  new URL('../dist/server/index.js', import.meta.url),
);

const build = spawnSync(process.execPath, [astroCli, 'build'], {
  cwd: projectRoot,
  stdio: 'inherit',
  env: {
    ...process.env,
    ASTRO_TELEMETRY_DISABLED: '1',
  },
});

if (build.error) throw build.error;
if (build.status !== 0) process.exit(build.status ?? 1);

mkdirSync(workerDirectory, { recursive: true });
copyFileSync(workerSource, workerOutput);
