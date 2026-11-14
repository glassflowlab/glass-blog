
// === 9月柚子素材包的「資料結構」範例 ===
// 未來改月份時，只需要改這個結構

const POSTER_DATA = {
  month: "2026-09",
  emoji: "🍊",
  fruit: "文旦柚",
  hero_image: "images/square.jpg",
  hook: "文旦柚正盛產。想做糖漬柚皮、柚子茶、柚子醬？",
  
  // ⬇️ 推薦瓶款（這裡改就行）
  bottles: [
    { tag: "柚子果醬首選", name: "300 歐式果醬瓶", purpose: "寬口好挖" },
    { tag: "送禮精選",     name: "150 手把果醬瓶", purpose: "小手把可愛" },
    { tag: "糖漬柚皮",     name: "100 橢圓果醬瓶", purpose: "橢圓優雅" },
    { tag: "柚子酒",       name: "300 透明梅酒瓶", purpose: "最熱銷款" },
  ],
  
  // ⬇️ 食譜（這裡改就行）
  recipes: [
    { emoji: "🍊", name: "糖漬柚皮", time: "約 1 小時",
      steps: ["柚皮刨絲", "鹽抓30分", "汆燙2次", "加糖熬30分", "入瓶"],
      bottle: "100 橢圓果醬瓶" },
    // ... 更多食譜
  ],
};
