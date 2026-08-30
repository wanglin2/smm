// download-images.js
const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');

// 请在此数组中填入你要下载的图片 URL（支持 http 和 https）
const imageUrls = [
  
];

// 下载保存的目录（会自动创建）
const DOWNLOAD_DIR = path.join(__dirname, 'images');

// 确保下载目录存在
if (!fs.existsSync(DOWNLOAD_DIR)) {
  fs.mkdirSync(DOWNLOAD_DIR);
}

/**
 * 从 URL 中提取文件名，若没有则使用时间戳 + 扩展名
 */
function getFileName(url, contentType) {
  const urlPath = new URL(url).pathname;
  const baseName = path.basename(urlPath);
  if (baseName && baseName.includes('.')) {
    return baseName;
  }
  // 根据 Content-Type 推测扩展名
  const extMap = {
    'image/jpeg': '.jpg',
    'image/png': '.png',
    'image/gif': '.gif',
    'image/webp': '.webp',
    'image/svg+xml': '.svg',
    'image/bmp': '.bmp',
  };
  const ext = extMap[contentType] || '.bin';
  return `image_${Date.now()}${ext}`;
}

/**
 * 下载单张图片
 */
function downloadImage(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const request = protocol.get(url, (response) => {
      // 处理重定向
      if (response.statusCode === 301 || response.statusCode === 302) {
        const redirectUrl = response.headers.location;
        console.log(`图片 ${url} 重定向到 ${redirectUrl}`);
        resolve(downloadImage(redirectUrl));
        return;
      }

      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}: ${url}`));
        return;
      }

      const contentType = response.headers['content-type'] || '';
      const fileName = getFileName(url, contentType);
      const filePath = path.join(DOWNLOAD_DIR, fileName);

      // 如果文件名已存在，添加序号避免覆盖
      let finalPath = filePath;
      let counter = 1;
      while (fs.existsSync(finalPath)) {
        const ext = path.extname(fileName);
        const nameWithoutExt = path.basename(fileName, ext);
        finalPath = path.join(DOWNLOAD_DIR, `${nameWithoutExt}_${counter}${ext}`);
        counter++;
      }

      const writeStream = fs.createWriteStream(finalPath);
      response.pipe(writeStream);

      writeStream.on('finish', () => {
        writeStream.close();
        console.log(`✅ 已下载: ${url} -> ${path.basename(finalPath)}`);
        resolve(finalPath);
      });

      writeStream.on('error', (err) => {
        fs.unlink(finalPath, () => {}); // 删除不完整的文件
        reject(err);
      });
    });

    request.on('error', (err) => {
      reject(err);
    });

    // 超时设置（10 秒）
    request.setTimeout(10000, () => {
      request.destroy();
      reject(new Error(`请求超时: ${url}`));
    });
  });
}

/**
 * 批量下载（顺序执行，避免并发压力）
 */
async function downloadAll(urls) {
  console.log(`开始下载 ${urls.length} 张图片...\n`);
  let successCount = 0;
  let failCount = 0;

  for (const url of urls) {
    try {
      await downloadImage(url);
      successCount++;
    } catch (err) {
      failCount++;
      console.error(`❌ 下载失败: ${url} - ${err.message}`);
    }
  }

  console.log(`\n下载完成！成功: ${successCount}，失败: ${failCount}`);
}

// 执行下载
if (imageUrls.length === 0) {
  console.warn('⚠️ 警告: imageUrls 数组为空，请填入图片 URL 后再运行。');
} else {
  downloadAll(imageUrls).catch(console.error);
}