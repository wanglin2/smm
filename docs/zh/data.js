/**
 * 文档配置数据
 * path: 对应 ?p=xxx 的参数值（注意：如果是多级目录，写相对路径如 'guide/intro'）
 * title: 文档标题
 * desc: 文档简介
 */
const obPath = "obsidian/";
const clientPath = "client/";
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
        path: "filenameFormat",
        title: "文件名格式说明",
        desc: "查看插件创建的文件名格式说明。",
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
    docs: [
      {
        path: "ai",
        title: "教你如何用这个思维导图来薅各家AI模型的羊毛",
        desc: "教你如何在思绪思维导图中配置常见大模型厂商的AI模型。",
      },
      {
        path: "customFont",
        title: "如何在思维导图中使用自定义字体",
        desc: "教你如何在思维导图中使用自定义字体。",
      },
      {
        path: "imageHost",
        title: "思绪思维导图图床配置保姆级教程",
        desc: "教你如何在思绪思维导图中配置图床。",
      },
      {
        path: "manyImage",
        title: "思维导图插入太多图片卡顿怎么办？",
        desc: "教你如何在思维导图中插入太多图片时，避免卡顿。",
      },
      {
        path: "syncSpace",
        title: "思绪思维导图同步空间配置保姆级教程",
        desc: "教你如何在思绪思维导图中配置同步空间。",
      },
    ].map((doc) => ({
      ...doc,
      path: clientPath + doc.path,
    })),
  },
];
