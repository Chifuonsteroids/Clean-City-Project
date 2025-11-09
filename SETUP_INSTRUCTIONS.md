# Setup Instructions for CleanCity App

## Option 1: Install Node.js (Recommended)

### For Windows:
1. Download Node.js from: https://nodejs.org/
2. Choose the LTS (Long Term Support) version
3. Run the installer and follow the setup wizard
4. Restart your terminal/command prompt
5. Verify installation:
   ```bash
   node --version
   npm --version
   ```

### For macOS:
1. Install using Homebrew (if you have it):
   ```bash
   brew install node
   ```
2. Or download from: https://nodejs.org/

### For Linux:
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nodejs npm

# CentOS/RHEL
sudo yum install nodejs npm
```

## Option 2: Use the HTML Version (No Node.js Required)

If you can't install Node.js, I've created a simple HTML version that runs directly in the browser.

### Files to use:
- `index.html` - Main HTML file
- `styles.css` - All the styling
- `script.js` - JavaScript functionality

### How to run:
1. Download all the HTML version files
2. Double-click `index.html` to open in your browser
3. Or right-click and "Open with" your preferred browser

## Option 3: Online Code Editor

You can also run this in online environments like:
- CodeSandbox
- CodePen
- Replit
- StackBlitz

## After Installing Node.js

Once Node.js is installed, you can run the React version:

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Troubleshooting

### "npm is not recognized"
- Make sure Node.js is properly installed
- Restart your terminal/command prompt
- Check if Node.js is in your PATH

### Port 3000 already in use
```bash
# Use a different port
npm start -- --port 3001
```

### Permission errors (Linux/macOS)
```bash
# Use sudo if needed
sudo npm install
```

## Need Help?

If you're having trouble setting up:
1. Check the Node.js installation guide: https://nodejs.org/
2. Use the HTML version as a fallback
3. Ask for help in the course forum or with your instructor 