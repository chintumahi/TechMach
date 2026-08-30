
const fs = require('fs');
const jsData = fs.readFileSync('bstet_art_data.js', 'utf8');
eval(jsData);

const html = fs.readFileSync('index.html', 'utf8');
const scriptMatches = html.match(/<script>([\s\S]*?)<\/script>/g);

console.log('Found script blocks:', scriptMatches ? scriptMatches.length : 0);

// Let's eval the main script block
let mainScript = '';
for (const block of scriptMatches) {
  const code = block.replace(/<\/?script>/g, '');
  if (code.includes('const questionBank')) {
    mainScript = code;
    break;
  }
}

// Mock DOM environment elements
global.window = global;
global.document = {
  getElementById: () => ({ textContent: '', innerHTML: '', style: {}, classList: { add: ()=>{}, remove: ()=>{} } }),
  querySelectorAll: () => [],
  createElement: () => ({ setAttribute: ()=>{}, addEventListener: ()=>{}, style: {}, classList: { add: ()=>{}, remove: ()=>{} } })
};
global.localStorage = { getItem: ()=>null, setItem: ()=>{} };

try {
  eval(mainScript);
  console.log('Main script evaluated successfully!');
  console.log('Total CATEGORIES:', CATEGORIES.length);
  console.log('stet_subject CATEGORIES:', CATEGORIES.filter(c => c.group === 'stet_subject').length);
} catch(e) {
  console.error('JS EVAL ERROR:', e);
}
