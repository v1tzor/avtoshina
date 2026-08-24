#!/usr/bin/env bash

# Exit immediately if a command exits with a non-zero status
set -e

echo "🔨 Building site for production..."
npm run build

# Navigate into the build output directory
cd dist

# Initialize a temporary git repository inside dist
git init -b gh-pages
git add -A
git commit -m "Deploy site to GitHub Pages [$(date '+%Y-%m-%d %H:%M:%S')]"

echo "🚀 Pushing to gh-pages branch on GitHub..."
# Try pushing via current remote
git push -f https://github.com/v1tzor/avtoshina.git gh-pages:gh-pages

echo "✨ Deployment complete! Your site will be live on GitHub Pages shortly."
cd ..
