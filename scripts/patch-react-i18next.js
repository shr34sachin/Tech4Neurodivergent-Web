const fs = require('fs');
const path = require('path');

const targetFiles = [
  'node_modules/react-i18next/dist/es/useTranslation.js',
  'node_modules/react-i18next/dist/commonjs/useTranslation.js',
  'node_modules/react-i18next/dist/amd/react-i18next.js',
  'node_modules/react-i18next/dist/umd/react-i18next.js',
  'node_modules/react-i18next/react-i18next.js',
  'node_modules/react-i18next/src/useTranslation.js',
];

let patchedCount = 0;

for (const relPath of targetFiles) {
  const filePath = path.resolve('E:/Projects_new/NextJS/tech4neurodivergent', relPath);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');

  if (content.includes('useMemo(() => unstableNamespaces, unstableNamespaces)')) {
    content = content.replaceAll(
      'useMemo(() => unstableNamespaces, unstableNamespaces)',
      'useMemo(() => unstableNamespaces, [Array.isArray(unstableNamespaces) ? unstableNamespaces.join("#") : ""])'
    );
    fs.writeFileSync(filePath, content, 'utf8');
    patchedCount++;
    console.log(`Patched: ${relPath}`);
  } else if (content.includes('(0, _react.useMemo)(() => unstableNamespaces, unstableNamespaces)')) {
    content = content.replaceAll(
      '(0, _react.useMemo)(() => unstableNamespaces, unstableNamespaces)',
      '(0, _react.useMemo)(() => unstableNamespaces, [Array.isArray(unstableNamespaces) ? unstableNamespaces.join("#") : ""])'
    );
    fs.writeFileSync(filePath, content, 'utf8');
    patchedCount++;
    console.log(`Patched (cjs): ${relPath}`);
  }
}

console.log(`Successfully patched ${patchedCount} files in react-i18next for React 19 compatibility.`);
