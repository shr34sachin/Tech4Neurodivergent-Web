const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist_cpanel');
const zipFile = path.join(rootDir, 'deploy_cpanel.zip');

console.log('🚀 Starting cPanel Deployment Package Generation...');

// 1. Verify build exists
const nextDir = path.join(rootDir, '.next');
if (!fs.existsSync(nextDir)) {
  console.log('📦 .next directory not found. Running "npm run build"...');
  execSync('npm run build', { stdio: 'inherit', cwd: rootDir });
}

// 2. Clean previous staging directory and zip file
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
if (fs.existsSync(zipFile)) {
  fs.rmSync(zipFile, { force: true });
}
fs.mkdirSync(distDir, { recursive: true });

console.log('📁 Copying required production files to staging directory...');

// Helper: copy directory recursively
function copyFolderSync(from, to) {
  if (!fs.existsSync(from)) return;
  fs.mkdirSync(to, { recursive: true });
  fs.readdirSync(from).forEach(element => {
    const stat = fs.lstatSync(path.join(from, element));
    if (stat.isDirectory()) {
      // Skip cache directory in .next to save space & speed up upload
      if (element === 'cache') return;
      copyFolderSync(path.join(from, element), path.join(to, element));
    } else {
      fs.copyFileSync(path.join(from, element), path.join(to, element));
    }
  });
}

// 3. Copy .next directory (excluding .next/cache)
console.log('  -> Copying .next bundle (optimized, excluding cache)...');
copyFolderSync(nextDir, path.join(distDir, '.next'));

// 4. Copy public directory
console.log('  -> Copying public directory...');
const publicDir = path.join(rootDir, 'public');
if (fs.existsSync(publicDir)) {
  copyFolderSync(publicDir, path.join(distDir, 'public'));
}

// 5. Copy package.json
console.log('  -> Copying package.json...');
fs.copyFileSync(path.join(rootDir, 'package.json'), path.join(distDir, 'package.json'));

// 6. Copy or create .htaccess for Apache / cPanel
console.log('  -> Generating .htaccess...');
const htaccessTemplatePath = path.join(__dirname, 'htaccess-template.txt');
let htaccessContent = '';
if (fs.existsSync(htaccessTemplatePath)) {
  htaccessContent = fs.readFileSync(htaccessTemplatePath, 'utf8');
} else {
  const scratchHtaccess = path.join('C:\\Users\\Sachin Shrestha\\.gemini\\antigravity-ide\\brain\\ec1ea37d-b8b7-4c65-aabf-280a792b0da9\\scratch\\htaccess-template.txt');
  if (fs.existsSync(scratchHtaccess)) {
    htaccessContent = fs.readFileSync(scratchHtaccess, 'utf8');
  }
}
if (htaccessContent) {
  fs.writeFileSync(path.join(distDir, '.htaccess'), htaccessContent, 'utf8');
}

// 7. Generate server.js entry point for cPanel Node.js App
console.log('  -> Generating server.js (for cPanel "Setup Node.js App")...');
const serverJsContent = `// Production entry point for cPanel Phusion Passenger / Node.js
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = false;
const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(\`> Ready on port \${port}\`);
  });
});
`;
fs.writeFileSync(path.join(distDir, 'server.js'), serverJsContent, 'utf8');

// 8. Generate README_DEPLOY.txt inside the package
const readmeContent = `TECH4NEURODIVERGENT - CPANEL DEPLOYMENT INSTRUCTIONS
===================================================

HOW TO PUBLISH TO CPANEL:

METHOD A: cPanel "Setup Node.js App" (Recommended for Next.js)
---------------------------------------------------------------
1. In cPanel, navigate to "Software" -> "Setup Node.js App".
2. Click "Create Application":
   - Node.js version: 18.x or 20.x (or latest available)
   - Application mode: Production
   - Application root: /home/USERNAME/tech4neurodivergent (or public_html)
   - Application URL: yourdomain.com
   - Application startup file: server.js
3. Upload and extract the contents of "deploy_cpanel.zip" into your Application root directory.
4. In the cPanel Node.js App screen, click "Run NPM Install" (or click "npm install --production").
5. Click "Restart" application.
6. Your Next.js website is now LIVE!

METHOD B: Reverse Proxy or Apache Passenger
-------------------------------------------
The included .htaccess handles HTTPS redirection, 301 legacy URL rewrites, and asset compression automatically.

SUPPORT / ESEWA:
QR image location is: public/images/support/esewa_qr.png
`;
fs.writeFileSync(path.join(distDir, 'README_DEPLOY.txt'), readmeContent, 'utf8');

// 9. Compress distDir into deploy_cpanel.zip using PowerShell
console.log('🗜️  Compressing into deploy_cpanel.zip...');
const psCommand = `powershell -Command "Compress-Archive -Path '${distDir}\\*' -DestinationPath '${zipFile}' -Force"`;
execSync(psCommand, { stdio: 'inherit' });

// 10. Clean up staging directory
fs.rmSync(distDir, { recursive: true, force: true });

// Check file size
const stats = fs.statSync(zipFile);
const sizeMb = (stats.size / (1024 * 1024)).toFixed(2);

console.log('====================================================');
console.log('🎉 SUCCESS! Deployment package generated:');
console.log(`📦 File: ${zipFile}`);
console.log(`📏 Size: ${sizeMb} MB`);
console.log('====================================================');
