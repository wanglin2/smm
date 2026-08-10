// ================================================================
//  📦 会员功能数据数组 —— 在这里维护所有会员功能
//  每个功能包含：
//    - title        : 功能标题
//    - description  : 功能描述
//    - sinceVersion : 起始支持版本 (例如 "v2.1.0")
//    - media        : 图片或视频列表 (数组)
//      每一项: { type: 'image' | 'video', url: '...', poster?: '...' }
// ================================================================
const features = [
  {
    id: 20,
    title: "支持导入导出OPML格式",
    sinceVersion: "v0.2.5",
    description: "",
    media: [
      {
        type: "image",
        url: "./assets/images/0.2.5/1.png",
      },
      {
        type: "image",
        url: "./assets/images/0.2.5/2.png",
      },
    ]
  },
  {
    id: 19,
    title: "支持进入指定节点",
    sinceVersion: "v0.2.4",
    description: "1.激活某个节点，然后点击右键菜单中的【进入指定节点】，即可进入该节点。<br/>2.目前仅支持进入单层节点，无法进入某个节点后继续进入下级节点。<br/>3.进入节点后可以点击顶部工具栏中的【退出】按钮退出。",
    media: [
      {
        type: "image",
        url: "./assets/images/0.2.4/1.gif",
      },
    ]
  },
  {
    id: 1,
    title: "支持导出为Excel、Freemind、JPG、Mermaid、html格式文件",
    sinceVersion: "v0.2.1",
    description: "",
    media: [
      {
        type: "image",
        url: "./assets/images/0.2.1/Snipaste_2026-06-23_11-24-02.png",
      },
      {
        type: "image",
        url: "./assets/images/0.2.1/Snipaste_2026-06-23_11-26-04.png",
      },
      {
        type: "image",
        url: "./assets/images/0.2.1/Snipaste_2026-06-23_11-25-24.png",
      },
      {
        type: "image",
        url: "./assets/images/0.2.1/Snipaste_2026-06-23_11-26-15.png",
      },
      {
        type: "image",
        url: "./assets/images/0.2.1/Snipaste_2026-06-23_11-29-22.png",
      },
    ],
  },
  {
    id: 2,
    title: "导出的pdf文件节点超链接支持点击",
    sinceVersion: "v0.2.1",
    description: "",
    media: [
      {
        type: "image",
        url: "./assets/images/0.2.1/Snipaste_2026-06-23_13-37-45.png",
      },
      {
        type: "image",
        url: "./assets/images/0.2.1/1.gif",
      },
    ],
  },
  {
    id: 3,
    title: "支持导入xlsx、Freemind格式文件",
    sinceVersion: "v0.2.1",
    description: "",
    media: [
      {
        type: "image",
        url: "./assets/images/0.2.1/2.gif",
      },
    ],
  },
  {
    id: 4,
    title: "支持粘贴Markdown、Txt内容导入",
    sinceVersion: "v0.2.1",
    description: "",
    media: [
      {
        type: "image",
        url: "./assets/images/0.2.1/3.gif",
      },
    ],
  },
  {
    id: 5,
    title: "支持导入为当前激活节点的下级",
    sinceVersion: "v0.2.1",
    description: "",
    media: [
      {
        type: "image",
        url: "./assets/images/0.2.1/4.gif",
      },
    ],
  },
  {
    id: 6,
    title: "支持填空模式",
    sinceVersion: "v0.2.1",
    description:
      "两种方式：演示模式中的填空模式、画布右键菜单直接进入填空模式。",
    media: [
      {
        type: "image",
        url: "./assets/images/0.2.1/5.gif",
      },
      {
        type: "image",
        url: "./assets/images/0.2.1/6.gif",
      },
    ],
  },
  {
    id: 7,
    title: "专属结构",
    sinceVersion: "v0.2.1",
    description: "专业版支持更多结构：表格、时间轴、鱼骨图。",
    media: [
      {
        type: "image",
        url: "./assets/images/0.2.1/Snipaste_2026-06-23_15-14-00.png",
      },
      {
        type: "image",
        url: "./assets/images/0.2.1/Snipaste_2026-06-23_15-14-23.png",
      },
      {
        type: "image",
        url: "./assets/images/0.2.1/Snipaste_2026-06-23_15-14-39.png",
      },
      {
        type: "image",
        url: "./assets/images/0.2.1/Snipaste_2026-06-23_15-15-01.png",
      },
      {
        type: "image",
        url: "./assets/images/0.2.1/Snipaste_2026-06-23_15-15-14.png",
      },
      {
        type: "image",
        url: "./assets/images/0.2.1/Snipaste_2026-06-23_15-15-25.png",
      },
      {
        type: "image",
        url: "./assets/images/0.2.1/Snipaste_2026-06-23_15-15-36.png",
      },
    ],
  },
  {
    id: 8,
    title: "节点支持添加标记",
    sinceVersion: "v0.2.1",
    description: "",
    media: [
      {
        type: "image",
        url: "./assets/images/0.2.1/7.gif",
      },
    ],
  },
  {
    id: 9,
    title: "节点支持一键编号",
    sinceVersion: "v0.2.1",
    description: "",
    media: [
      {
        type: "image",
        url: "./assets/images/0.2.1/8.gif",
      },
      {
        type: "image",
        url: "./assets/images/0.2.1/Snipaste_2026-06-23_15-21-39.png",
      },
    ],
  },
  {
    id: 10,
    title: "节点支持添加待办",
    sinceVersion: "v0.2.1",
    description: "",
    media: [
      {
        type: "image",
        url: "./assets/images/0.2.1/9.gif",
      },
    ],
  },
  {
    id: 11,
    title: "支持隐藏节点文本",
    sinceVersion: "v0.2.1",
    description: "",
    media: [
      {
        type: "image",
        url: "./assets/images/0.2.1/10.gif",
      },
    ],
  },
  {
    id: 12,
    title: "节点连线支持虚线流动效果",
    sinceVersion: "v0.2.1",
    description: "",
    media: [
      {
        type: "image",
        url: "./assets/images/0.2.1/11.gif",
      },
    ],
  },
  {
    id: 13,
    title: "专属节点形状",
    sinceVersion: "v0.2.1",
    description: "",
    media: [
      {
        type: "image",
        url: "./assets/images/0.2.1/Snipaste_2026-06-23_15-28-22.png",
      },
      {
        type: "image",
        url: "./assets/images/0.2.1/Snipaste_2026-06-23_15-31-07.png",
      },
    ],
  },
  {
    id: 14,
    title: "节点外框样式支持设置不包含子节点",
    sinceVersion: "v0.2.1",
    description: "",
    media: [
      {
        type: "image",
        url: "./assets/images/0.2.1/12.gif",
      },
    ],
  },
  {
    id: 15,
    title: "画布支持拖动的动量效果",
    sinceVersion: "v0.2.1",
    description: "",
    media: [
      {
        type: "image",
        url: "./assets/images/0.2.1/13.gif",
      },
    ],
  },
  {
    id: 16,
    title: "支持smm代码块嵌入编辑",
    sinceVersion: "v0.2.1",
    description:
      "1.支持以`smm`格式嵌入代码块，嵌入后可转换为思维导图视图进行编辑；<br/>2.仅支持基本的编辑能力：文本编辑（支持显示富文本工具栏）、快捷键操作、鼠标操作；<br/>3.编辑视图右下角提供两个操作图标：回到根节点、适应画布；<br/>4.编辑完成后，鼠标点击文档其他位置，会自动更新代码块源数据；<br/>5.支持在设置中设置代码块嵌入的初始高度；<br/>6.支持拖拽调整高度；",
    media: [
      {
        type: "image",
        url: "./assets/images/0.2.1/14.gif",
      },
      {
        type: "image",
        url: "./assets/images/0.2.1/15.gif",
      },
    ],
  },
  {
    id: 17,
    title: "支持扩展思维导图可用的字体",
    sinceVersion: "v0.2.1",
    description:
      "1.在设置中管理字体；<br/>2.新增的字体会在思维导图所有字体选择器中显示；",
    media: [
      {
        type: "image",
        url: "./assets/images/0.2.1/16.gif",
      },
      {
        type: "image",
        url: "./assets/images/0.2.1/17.gif",
      },
    ],
  },
  {
    id: 18,
    title: "支持新标签页预览为思维导图",
    sinceVersion: "v0.2.1",
    description:
      "打开Markdown文件时，可点击右上角更多按钮中的【新标签页预览为思维导图】按钮，会在新标签页中打开当前文件并预览为思维导图；<br/>Markdown文件修改后，预览的思维导图会自动更新；",
    media: [
      {
        type: "image",
        url: "./assets/images/0.2.1/18.gif",
      },
    ],
  },
];
