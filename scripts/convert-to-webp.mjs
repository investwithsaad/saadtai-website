import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

const imagesToConvert = [
  '429 1st St.png',
  '12 Tyler St.png',
  '553 Morris St.png',
  '153 2nd St.png',
  'Home image.png',
  'House1.png',
  'house2.png',
  'house3.png',
  'house4.png'
];

const publicDir = path.join(process.cwd(), 'public');

async function convertPngToWebp() {
  console.log('Starting PNG to WebP conversion...\n');

  for (const filename of imagesToConvert) {
    const inputPath = path.join(publicDir, filename);
    const outputFilename = filename.replace('.png', '.webp');
    const outputPath = path.join(publicDir, outputFilename);

    try {
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(outputPath);

      console.log(`✓ Converted: ${filename} → ${outputFilename}`);
    } catch (error) {
      console.error(`✗ Error converting ${filename}:`, error.message);
    }
  }

  console.log('\nConversion complete!');
}

convertPngToWebp().catch(console.error);
