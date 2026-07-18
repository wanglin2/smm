// ================================================================
//  📦 Pro Features Data Array — Maintain all pro features here
//  Each feature includes:
//    - title        : Feature title
//    - description  : Feature description
//    - sinceVersion : Version when support started (e.g. "v2.1.0")
//    - media        : List of images or videos (array)
//      Each item: { type: 'image' | 'video', url: '...', poster?: '...' }
// ================================================================
const features = [
  {
    id: 1,
    title: "Export to Excel, Freemind, JPG, Mermaid, HTML",
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
    title: "Clickable hyperlinks in exported PDF node labels",
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
    title: "Import from xlsx and Freemind file formats",
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
    title: "Import by pasting Markdown or plain text content",
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
    title: "Import as child nodes of the currently active node",
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
    title: "Fill-in-the-blank mode",
    sinceVersion: "v0.2.1",
    description:
      "Two ways: Fill-in-the-blank mode in presentation mode, or enter directly from the canvas right-click menu.",
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
    title: "Exclusive layouts",
    sinceVersion: "v0.2.1",
    description:
      "Pro version supports additional layouts: Table, Timeline, Fishbone.",
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
    title: "Add tags/labels to nodes",
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
    title: "One-click node numbering",
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
    title: "Add todo/checkbox to nodes",
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
    title: "Hide node text",
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
    title: "Dashed flowing effect on connecting lines",
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
    title: "Exclusive node shapes",
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
    title: "Node border styling without including child nodes",
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
    title: "Momentum/inertia effect when dragging the canvas",
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
    title: "Inline editing via smm code blocks",
    sinceVersion: "v0.2.1",
    description:
      "1. Supports embedding code blocks in <code>smm</code> format — once embedded, they can be converted to mind map view for editing.<br/>2. Only basic editing capabilities are supported: text editing (with rich text toolbar), keyboard shortcuts, and mouse operations.<br/>3. Two action icons at the bottom-right of the edit view: return to root node, and fit to canvas.<br/>4. After editing, clicking elsewhere in the document automatically updates the code block source data.<br/>5. Supports setting the initial height of embedded code blocks in settings.<br/>6. Supports dragging to adjust the height.",
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
    title: "Extend available fonts for mind maps",
    sinceVersion: "v0.2.1",
    description:
      "1. Manage fonts in settings.<br/>2. Newly added fonts will appear in all font selectors within the mind map.",
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
    title: "Preview as mind map in a new tab",
    sinceVersion: "v0.2.1",
    description:
      "When opening a Markdown file, click the more button in the top-right corner and select [Preview as mind map in new tab] — this opens the current file in a new tab and previews it as a mind map.<br/>When the Markdown file is modified, the previewed mind map updates automatically.",
    media: [
      {
        type: "image",
        url: "./assets/images/0.2.1/18.gif",
      },
    ],
  },
];