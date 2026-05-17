#!/usr/bin/env bash
set -euo pipefail

./gradlew :liamnet-api:clean :liamnet-api:compileConjure

find liamnet-api/liamnet-api-typescript/src -name '*.js'   -not -path '*/node_modules/*' -delete
find liamnet-api/liamnet-api-typescript/src -name '*.d.ts' -not -path '*/node_modules/*' -delete

pnpm install
pnpm --filter @liamnet/liamnet-api exec tsc
