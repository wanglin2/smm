// 获取页面基础 URL（假设阅读页面叫 index.html，如果是 doc.html 请自行修改）
const READER_PAGE = `/docs/${lang}/index.html`;
// 渲染主内容区
function renderContent() {
  const contentArea = document.getElementById("contentArea");
  const sidebarNav = document.getElementById("sidebarNav");
  let contentHtml = "";
  let navHtml = "";
  docsData.forEach((categoryData, index) => {
    const categoryId = `category-${index}`;
    // 生成侧边栏导航
    navHtml += `<li><a href="#${categoryId}" data-target="${categoryId}" class="${index === 0 ? "active" : ""}">${categoryData.category}</a></li>`;
    // 生成主内容区大类标题
    contentHtml += `<section class="category-section" id="${categoryId}">`;
    contentHtml += `<h2>${categoryData.category}</h2>`;
    contentHtml += `<div class="doc-grid">`;
    // 遍历生成文档卡片
    categoryData.docs.forEach((doc) => {
      const url = doc.url || `${READER_PAGE}?p=${doc.path}`;
      contentHtml += `
<a href="${url}" class="doc-card" target="${doc.url ? "_blank" : "_self"}">
<h3>${doc.title}</h3>
<p>${doc.desc}</p>
</a>
`;
    });
    contentHtml += `</div></section>`;
  });
  contentArea.innerHTML = contentHtml;
  sidebarNav.innerHTML = navHtml;
}
// 初始化页面
renderContent();
