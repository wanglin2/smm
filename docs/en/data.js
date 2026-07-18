/**
 * 文档配置数据
 * path: 对应 ?p=xxx 的参数值（注意：如果是多级目录，写相对路径如 'guide/intro'）
 * title: 文档标题
 * desc: 文档简介
 */
const obPath = "obsidian/";
const docsData = [
  {
    category: "Obsidian",
    docs: [
      {
        path: "pro",
        title: "Pro Features List",
        desc: "View the features of the Pro version.",
        url: "./pro/en.html",
      },
      {
        path: "changelog",
        title: "Changelog",
        desc: "View the changelog of the project.",
      },
      {
        path: "install",
        title: "Manual Install",
        desc: "Learn how to install the project manually.",
      },
      {
        path: "help",
        title: "Common Questions",
        desc: "View common questions about the project.",
      },
      {
        path: "imageHosting",
        title: "Image Hosting Help",
        desc: "View the image hosting help.",
      },
      {
        path: "ai",
        title: "AI Help",
        desc: "View the AI help.",
        url: "https://mp.weixin.qq.com/s/jybRdfuUhF5Af1SesLItfg",
      },
    ].map((doc) => ({
      ...doc,
      path: obPath + doc.path,
    })),
  },
  {
    category: "Client",
    docs: [],
  },
];
