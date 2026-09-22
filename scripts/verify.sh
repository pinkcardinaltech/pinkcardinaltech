#!/bin/bash
set -e

echo "=== Running Deterministic Quality Gate for Pink Cardinal Technology ==="
echo "1. Checking TypeScript types (tsc --noEmit)..."
npx tsc --noEmit
echo "✓ Passed"

echo "2. Verifying production build (next build)..."
npm run build
echo "✓ Passed"

echo "=== All Quality Gates Passed (Ready for commit / deploy) ==="
