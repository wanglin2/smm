// ================================================================
//  🖌️ 渲染逻辑
// ================================================================

const list = document.getElementById("featuresList");
const statsContainer = document.getElementById("statsPlaceholder");

// 渲染统计
function renderStats() {
  const total = features.length;
  const mediaCount = features.reduce((acc, f) => acc + f.media.length, 0);
  const videoCount = features.reduce(
    (acc, f) => acc + f.media.filter((m) => m.type === "video").length,
    0,
  );

  statsContainer.innerHTML = `
                <div class="stat-item">
                    <span class="stat-number">${total}</span>
                    <span class="stat-label">截止当前专业版功能数量</span>
                </div>
            `;
}

// 渲染单个媒体项 —— 添加 data-* 属性用于灯箱
function renderMediaItem(item, mediaIndex, featureId) {
  if (item.type === "image") {
    return `
                    <div class="media-item" data-feature="${featureId}" data-index="${mediaIndex}">
                        <img src="${item.url}" alt="${item.alt || "功能截图"}" loading="lazy" />
                    </div>
                `;
  } else if (item.type === "video") {
    return `
                    <div class="media-item" data-feature="${featureId}" data-index="${mediaIndex}">
                        <video src="${item.url}" poster="${item.poster || ""}" controls muted preload="metadata" loading="lazy">
                            您的浏览器不支持视频播放。
                        </video>
                        <div class="play-icon" aria-hidden="true">▶</div>
                    </div>
                `;
  }
  return "";
}

// 渲染所有功能卡片
function renderFeatures() {
  if (!list) return;

  if (features.length === 0) {
    list.innerHTML = `
                    <div style="text-align:center; padding:60px 20px; color:var(--text-light); background:var(--card-bg); border-radius:var(--radius);">
                        <p style="font-size:18px; margin-bottom:8px;">📭 暂无会员功能</p>
                        <p style="font-size:14px;">请先在 <code>features</code> 数组中添加功能数据。</p>
                    </div>
                `;
    return;
  }

  let html = "";
  features.forEach((feature, idx) => {
    const mediaHtml =
      feature.media && feature.media.length > 0
        ? feature
            .media
            .map((m, i) => renderMediaItem(m, i, feature.id))
            .join("")
        : `<div class="no-media">📷 暂无媒体</div>`;

    const mediaCount = feature.media ? feature.media.length : 0;
    const videoCount = feature.media
      ? feature.media.filter((m) => m.type === "video").length
      : 0;

    const sinceVersion = feature.sinceVersion || "v1.0.0";
    const emoji = "✨";
    const titleText = feature.title;

    html += `
                    <div class="feature-card" style="animation-delay: ${(idx * 0.05).toFixed(2)}s">
                        <div class="feature-body">
                            <h3 class="feature-title">
                                <span class="emoji">${emoji}</span>
                                <span>${titleText}</span>
                                <span class="version-tag">${sinceVersion}</span>
                            </h3>
                            <p class="feature-description">${feature.description}</p>
                        </div>
                        <div class="feature-media">
                            ${mediaHtml}
                        </div>
                    </div>
                `;
  });

  list.innerHTML = html;
}

// ================================================================
//  🎨 灯箱（Lightbox） —— 点击媒体全屏显示，支持左右切换
// ================================================================

// 灯箱状态
let lightboxState = {
  featureId: null,
  currentIndex: 0,
  mediaList: [],
  featureTitle: "",
};

// 创建灯箱 DOM
function renderLightbox() {
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.id = "lightbox";
  lightbox.innerHTML = `
        <div class="lightbox-content" id="lightboxContent">
            <div class="lightbox-title" id="lightboxTitle"></div>
            <button class="lightbox-close" id="lightboxClose" aria-label="关闭">✕</button>
            <button class="lightbox-nav lightbox-prev" id="lightboxPrev" aria-label="上一个">‹</button>
            <button class="lightbox-nav lightbox-next" id="lightboxNext" aria-label="下一个">›</button>
            <div class="lightbox-info" id="lightboxInfo"></div>
        </div>
    `;
  document.body.appendChild(lightbox);

  // 绑定事件
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev").addEventListener("click", prevMedia);
  document.getElementById("lightboxNext").addEventListener("click", nextMedia);

  // 点击遮罩区域（非媒体/按钮）关闭
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // 键盘事件
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") prevMedia();
    if (e.key === "ArrowRight") nextMedia();
  });
}

// 打开灯箱
function openLightbox(featureId, startIndex) {
  const feature = features.find((f) => f.id === featureId);
  if (!feature || !feature.media || feature.media.length === 0) return;

  lightboxState = {
    featureId: featureId,
    currentIndex: startIndex,
    mediaList: feature.media,
    featureTitle: feature.title,
  };

  updateLightboxDisplay();
  document.getElementById("lightbox").classList.add("active");
  document.body.style.overflow = "hidden";
}

// 更新灯箱显示内容
function updateLightboxDisplay() {
  const content = document.getElementById("lightboxContent");
  const info = document.getElementById("lightboxInfo");
  const title = document.getElementById("lightboxTitle");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");

  if (!lightboxState.mediaList || lightboxState.mediaList.length === 0) return;

  const current = lightboxState.mediaList[lightboxState.currentIndex];

  // 移除旧的媒体元素
  const existing = content.querySelector("img, video");
  if (existing) existing.remove();

  // 创建新的媒体元素
  let mediaEl;
  if (current.type === "image") {
    mediaEl = document.createElement("img");
    mediaEl.src = current.url;
    mediaEl.alt = current.alt || "功能截图";
    mediaEl.style.animation = "none";
    void mediaEl.offsetWidth;
    mediaEl.style.animation = "lightboxFadeIn 0.25s ease";
  } else if (current.type === "video") {
    mediaEl = document.createElement("video");
    mediaEl.src = current.url;
    if (current.poster) mediaEl.poster = current.poster;
    mediaEl.controls = true;
    mediaEl.muted = false;
    mediaEl.style.animation = "none";
    void mediaEl.offsetWidth;
    mediaEl.style.animation = "lightboxFadeIn 0.25s ease";
  }

  if (mediaEl) {
    // 插入到标题/按钮/info 之前
    content.insertBefore(mediaEl, title);
  }

  // 更新标题和计数
  title.textContent = lightboxState.featureTitle;
  info.textContent = `${lightboxState.currentIndex + 1} / ${lightboxState.mediaList.length} · ${current.type === "image" ? "图片" : "视频"}`;

  // 切换按钮状态
  prevBtn.disabled = lightboxState.currentIndex <= 0;
  nextBtn.disabled = lightboxState.currentIndex >= lightboxState.mediaList.length - 1;
}

// 上一张
function prevMedia() {
  if (lightboxState.currentIndex > 0) {
    lightboxState.currentIndex--;
    updateLightboxDisplay();
  }
}

// 下一张
function nextMedia() {
  if (lightboxState.currentIndex < lightboxState.mediaList.length - 1) {
    lightboxState.currentIndex++;
    updateLightboxDisplay();
  }
}

// 关闭灯箱
function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  const videoEl = lightbox.querySelector("video");
  if (videoEl) videoEl.pause();
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
}

// 为媒体项绑定点击事件
function bindMediaClickEvents() {
  if (!list) return;

  list.addEventListener("click", (e) => {
    // 找到最近的 media-item
    const mediaItem = e.target.closest(".media-item");
    if (!mediaItem) return;

    // 如果点击的是视频控件（在 video 元素内部），不触发灯箱
    if (e.target.tagName === "VIDEO") return;

    const featureId = parseInt(mediaItem.getAttribute("data-feature"), 10);
    const index = parseInt(mediaItem.getAttribute("data-index"), 10);

    if (!isNaN(featureId) && !isNaN(index)) {
      openLightbox(featureId, index);
    }
  });
}

// ================================================================
//  🚀 启动渲染
// ================================================================

renderStats();
renderFeatures();
renderLightbox();
bindMediaClickEvents();

console.log("✅ 会员功能页面已渲染 (垂直布局，媒体网格 + 灯箱)");
console.log(`📦 共 ${features.length} 个会员功能`);
console.log("💡 如需修改数据，请编辑 JavaScript 中的 features 数组。");
console.log(
  "📝 数据格式: [{ id, title, sinceVersion, description, media: [{ type, url, poster? }] }]",
);
console.log("🖼️ 点击媒体可全屏查看，支持左右箭头/按钮切换。");