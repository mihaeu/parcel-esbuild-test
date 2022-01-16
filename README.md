# esbuild & parcel test

## esbuild

* 👍 very fast
* 👍 no setup required at all

```bash
yarn esbuild index.ts --bundle --outfile=esbuild.js --platform=node  --target=node12 --minify

yarn run v1.22.17
$ /home/mike/workspace/experiments/esbuildtest/node_modules/.bin/esbuild index.ts --bundle --outfile=esbuild.js --platform=node --target=node12 --minify

  esbuild.js  35.1kb
Done in 0.11s.
```

## parcel

* 👎 requires a few more plugins and configuration to make it work (but nowhere near as much as webpack)
* 👍 more features

```bash
yarn parcel build index.ts

yarn run v1.22.17
$ /home/mike/workspace/experiments/esbuildtest/node_modules/.bin/parcel build index.ts
✨ Built in 1.53s

dist/main.js       603 B    50ms
dist/types.d.ts      0 B    24ms
Done in 1.87s.
```