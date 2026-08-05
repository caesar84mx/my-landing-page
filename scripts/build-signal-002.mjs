import {mkdir, readFile, writeFile} from 'node:fs/promises';

const sourcePath = new URL('../journal/signal-001/index.html', import.meta.url);
const outputDir = new URL('../journal/signal-002/', import.meta.url);
const outputPath = new URL('index.html', outputDir);
let html = await readFile(sourcePath, 'utf8');

const dataStart = html.indexOf('<script>\nconst sources=');
const renderStart = html.indexOf('\nconst idx=', dataStart);
if (dataStart < 0 || renderStart < 0) throw new Error('Signal 001 data markers were not found');

const prefix = html.slice(0, dataStart)
    .replaceAll('/journal/signal-001/', '/journal/signal-002/')
    .replaceAll('SIGNAL 001', 'SIGNAL 002')
    .replaceAll('Issue 001', 'Issue 002')
    .replaceAll('Issue / 001', 'Issue / 002')
    .replace('<strong>01</strong>', '<strong>02</strong>')
    .replace('01 / Kotlin Multiplatform', '01 / AndroidX Tracing')
    .replace('<a class="small-lead" href="#article-3">', '<a class="small-lead" href="#article-2">')
    .replace('03 / Media3', '02 / Navigation 3')
    .replace('04 / Android', '04 / Android delivery')
    .replace('27 July 2026', '3 August 2026')
    .replace('A weekly engineering journal on Android and cross-platform development, with source-backed analysis and practical decisions.', 'A source-backed mobile engineering brief on Tracing 2.0 RC, Navigation 3, Apple 26.6, and Android developer verification.')
    .replaceAll('Mobile changes worth making decisions about: Kotlin, Media3, Nearby Connections, Android tooling, tracing, and AI.', 'Tracing 2.0 RC, Navigation 3, Apple 26.6, Android developer verification, Kotlin Multiplatform, React Native, and Ktor.')
    .replace('Mobile engineering decisions — MAX.D / SIGNAL 002', 'Mobile delivery decisions — MAX.D / SIGNAL 002')
    .replace('Kotlin improves Swift export, Media3 fixes a high-risk memory behavior, Nearby Connections changes radio-state handling, and Android’s AI stack starts to look like a distinct execution layer.', 'Tracing reaches RC, Navigation 3 matures, Apple ships 26.6, and Android developer verification becomes a delivery concern.');

const tail = html.slice(renderStart)
    .replaceAll('Issue / 001', 'Issue / 002');

await mkdir(outputDir, {recursive: true});
await writeFile(outputPath, `${prefix}<script src="/journal/signal-002/data.js"></script>\n<script>${tail}`, 'utf8');
console.log(`Generated ${outputPath.pathname}`);
