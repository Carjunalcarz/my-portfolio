echo "Switching to branch main"
git checkout main

echo "Building app..."
npm run build
echo "Deploying Files to server..."
scp -r build/* ajncarz@127.0.0.1:/var/www/my-portfolio

echo "Done!"
