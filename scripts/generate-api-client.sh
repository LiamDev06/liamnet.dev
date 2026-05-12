#!/usr/bin/env bash
set -euo pipefail

./gradlew :liamnet-api:clean :liamnet-api:compileConjure

find liamnet-api/liamnet-api-typescript/src -name '*.js'   -not -path '*/node_modules/*' -delete
find liamnet-api/liamnet-api-typescript/src -name '*.d.ts' -not -path '*/node_modules/*' -delete

(cd liamnet-api/liamnet-api-typescript/src && pnpm install && pnpm exec tsc)

rm -rf liamnet-app/node_modules/@liamnet/liamnet-api
(cd liamnet-app && pnpm install)
