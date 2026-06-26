// 1. 平滑滚动 (针对 fixed 导航栏调整了偏移量)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const target = document.querySelector(targetId);
    if (target) {
      const offset = 80; // 导航栏的高度预留
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

window.addEventListener("scroll", () => {
  const el = document.querySelector("nav");
  if (window.scrollY <= 0) {
    el.classList.remove("sticky");
  } else {
    el.classList.add("sticky");
  }
});

// 2. 3D 轮播图逻辑
const items = Array.from(document.querySelectorAll(".carousel-item"));
let currentIndex = 0;

function updateCarousel() {
  items.forEach((item, index) => {
    item.classList.remove("active", "prev", "next", "hide");

    if (index === currentIndex) {
      item.classList.add("active");
    } else if (index === (currentIndex + 1) % items.length) {
      item.classList.add("next");
    } else if (index === (currentIndex - 1 + items.length) % items.length) {
      item.classList.add("prev");
    } else {
      item.classList.add("hide");
    }
  });
}

document.querySelector(".next-btn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

document.querySelector(".prev-btn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});

items.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("next") || item.classList.contains("prev")) {
      currentIndex = index;
      updateCarousel();
    }
  });
});

let autoPlay = setInterval(() => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}, 5000);

document.querySelector(".carousel-stage").addEventListener("mouseenter", () => {
  clearInterval(autoPlay);
});

document.querySelector(".carousel-stage").addEventListener("mouseleave", () => {
  autoPlay = setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  }, 5000);
});

// 3. 多端展示 Tab 切换逻辑 (带高度过渡和指示器动画)
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".showcase-content");
const tabIndicator = document.querySelector(".tab-indicator");
const showcaseWrapper = document.querySelector(".showcase-wrapper");

function moveIndicator(element) {
  if (!element) return;
  tabIndicator.style.display = "block";
  tabIndicator.style.left = element.offsetLeft + "px";
  tabIndicator.style.width = element.offsetWidth + "px";
}

function setWrapperHeight(element) {
  if (!element) return;
  const height = element.offsetHeight;
  showcaseWrapper.style.height = height + "px";
}

setTimeout(() => {
  const activeBtn = document.querySelector(".tab-btn.active");
  const activeContent = document.querySelector(".showcase-content.active");
  moveIndicator(activeBtn);
  setWrapperHeight(activeContent);
}, 100);

window.addEventListener("resize", () => {
  const activeBtn = document.querySelector(".tab-btn.active");
  const activeContent = document.querySelector(".showcase-content.active");
  moveIndicator(activeBtn);
  setWrapperHeight(activeContent);
});

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tabId = btn.getAttribute("data-tab");
    const targetContent = document.getElementById(tabId);

    if (btn.classList.contains("active")) return;

    tabBtns.forEach((b) => b.classList.remove("active"));
    tabContents.forEach((c) => c.classList.remove("active"));

    btn.classList.add("active");
    targetContent.classList.add("active");

    moveIndicator(btn);
    setWrapperHeight(targetContent);
  });
});

// 4. 滚动显现动画
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  },
);

reveals.forEach((reveal) => {
  observer.observe(reveal);
});
