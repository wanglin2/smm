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
        title: "专业版功能列表",
        desc: "查看专业版功能的功能列表。",
        url: "./pro/",
      },
      {
        path: "changelog",
        title: "更新记录",
        desc: "查看该项目的更新记录。",
      },
      {
        path: "install",
        title: "如何手动安装",
        desc: "了解如何安装该项目。",
      },
      {
        path: "help",
        title: "常见问题",
        desc: "查看该项目的常见问题。",
      },
      {
        path: "imageHosting",
        title: "图床配置帮助",
        desc: "查看该项目的图床配置帮助。",
      },
      {
        path: "ai",
        title: "AI配置帮助",
        desc: "查看该项目的AI配置帮助。",
        url: "https://mp.weixin.qq.com/s/jybRdfuUhF5Af1SesLItfg",
      },
    ].map((doc) => ({
      ...doc,
      path: obPath + doc.path,
    })),
  },
  {
    category: "客户端",
    docs: [],
  },
];
