const langMap = {
  zh: {
    title: "思绪思维导图文档站点",
    backToList: "返回文档列表",
    backToHome: "返回首页",
    loadError: "无法加载文件",
    statusCode: "状态码",
    docTitle: "思绪思维导图_文档_",
    loadErrorDesc: "加载文档时出错",
    loadErrorTitle: "加载失败",
    loadErrorMsg: "错误信息",
    checkFile: "请检查文件",
    checkFileDesc: "是否存在，以及路径是否正确。",
  },
  en: {
    title: "Mind Map Client Documentation",
    backToList: "Back to Document List",
    backToHome: "Back to Home",
    loadError: "Failed to load file",
    statusCode: "Status Code",
    docTitle: "Mind Map Client Documentation _",
    loadErrorDesc: "Error loading document",
    loadErrorTitle: "Load Failed",
    loadErrorMsg: "Error Message",
    checkFile: "Please check if the file exists",
    checkFileDesc: "Check if the file exists and the path is correct.",
  },
};

const langData = langMap[lang] || langMap.zh;

// 配置 marked 选项
marked.setOptions({
  breaks: true,
  gfm: true,
});
// 配置 highlight.js 与 marked 的集成
marked.use({
  renderer: {
    // 注意：新版 marked 传递的是对象参数 { text, lang }
    code({ text, lang }) {
      const language = lang || "plaintext";
      const validLanguage = hljs.getLanguage(language) ? language : "plaintext";
      return `<pre><code class="hljs language-${validLanguage}">${hljs.highlight(text, { language: validLanguage }).value}</code></pre>`;
    },
  },
});
// 【新增】修正 Markdown 中图片的相对路径
function fixImagePaths(htmlContent, markdownFilePath) {
  // 创建一个临时 DOM 元素来解析 HTML 字符串
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlContent;
  // 获取当前页面的基础 URL（例如 http://localhost/index.html）
  const pageUrl = new URL(window.location.href);
  // 获取页面所在的目录 URL（例如 http://localhost/）
  const pageBasePath = pageUrl.href.substring(
    0,
    pageUrl.href.lastIndexOf("/") + 1,
  );
  // 拼接出 Markdown 文件完整的 URL（例如 http://localhost/docs/xxx.md）
  const absoluteMarkdownUrl = new URL(markdownFilePath, pageBasePath);
  // 获取 Markdown 文件所在的目录 URL（例如 http://localhost/docs/）
  const markdownDirUrl = absoluteMarkdownUrl.href.substring(
    0,
    absoluteMarkdownUrl.href.lastIndexOf("/") + 1,
  );
  // 遍历所有 img 标签，重写 src
  tempDiv.querySelectorAll("img").forEach((img) => {
    const src = img.getAttribute("src");
    if (
      src &&
      !src.startsWith("http://") &&
      !src.startsWith("https://") &&
      !src.startsWith("data:")
    ) {
      // 将相对路径基于 Markdown 文件所在的目录转换为绝对路径
      // 例如：./xxx.png 结合 http://localhost/docs/ => http://localhost/docs/xxx.png
      const absoluteImgUrl = new URL(src, markdownDirUrl);
      img.setAttribute("src", absoluteImgUrl.href);
    }
  });
  return tempDiv.innerHTML;
}
async function loadMarkdown() {
  const contentDiv = document.getElementById("content");
  const params = new URLSearchParams(window.location.search);
  const page = params.get("p");
  if (!page) {
    contentDiv.innerHTML = `
<div class="status-box">
<h2>${langData.title}</h2>
<div>
<a href="/docs/" style="margin-right: 12px;">${langData.backToList}</a>
<a href="/">${langData.backToHome}</a>
</div>
</div>
`;
    return;
  }
  const basePath = "/docs/" + lang + "/";
  const filePath = `${basePath}${page}.md`;
  console.log(filePath);
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(
        `${langData.loadError} (${langData.statusCode}: ${response.status})`,
      );
    }
    const markdownText = await response.text();
    // 1. 解析 Markdown 为 HTML
    let htmlContent = marked.parse(markdownText);
    // 2. 【新增】在渲染前修正图片路径
    htmlContent = fixImagePaths(htmlContent, filePath);
    // 3. 渲染到页面
    contentDiv.innerHTML = htmlContent;
    // 更新页面标题
    const firstH1 = contentDiv.querySelector("h1");
    if (firstH1) {
      document.title = langData.docTitle + firstH1.textContent;
    } else {
      document.title = `${langData.docTitle}${page}`;
    }
  } catch (error) {
    console.error(langData.loadErrorDesc, error);
    contentDiv.innerHTML = `
<div class="status-box">
<h2>${langData.loadErrorTitle}</h2>
<div class="error-box">
<p><strong>${langData.loadErrorMsg}:</strong> ${error.message}</p>
<p>${langData.checkFile} <code>${filePath}</code> ${langData.checkFileDesc}</p>
</div>
</div>
`;
  }
}
loadMarkdown();
