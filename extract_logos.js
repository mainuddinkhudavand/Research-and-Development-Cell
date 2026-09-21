const fs = require('fs');

const html = fs.readFileSync('index-2.html', 'utf8');
const regex = /src="(data:image\/[^"]+)"/g;
const images = [];
let match;

while ((match = regex.exec(html)) !== null) {
  images.push(match[1]);
}

console.log('Found logos/images count:', images.length);

if (images.length > 0) {
  fs.mkdirSync('src/assets', { recursive: true });
  const content = `export const LOGO_EMBLEM = ${JSON.stringify(images[0])};\nexport const HERO_ART_IMG = ${JSON.stringify(images[1] || images[0])};\nexport const ABOUT_EMBLEM = ${JSON.stringify(images[2] || images[0])};\n`;
  fs.writeFileSync('src/assets/images.js', content);
  console.log('Successfully written src/assets/images.js!');
}
