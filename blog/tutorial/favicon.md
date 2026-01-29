
# 实现系统主题切换时的 Favicon 动态更新

在现代网站中，越来越多用户开启深色模式（Dark Mode），为了提升一致性体验，我们可以让 **favicon** 根据系统主题实时切换。本文介绍两种实现方法：
* 传统图片 favicon
* 可编程 SVG favicon

## 纯色图标在深浅主题下的对比度问题

当图标为纯黑或纯白时，用户切换系统主题可能导致图标与背景的对比度不足。

![正常深色模式 Favicon](https://pic.hackdeacon.cn/blog/0EeQKlRb.webp)
![错误深色模式 Favicon](https://pic.hackdeacon.cn/blog/JF0MreH8.webp)
![正确浅色模式 Favicon](https://pic.hackdeacon.cn/blog/fFahtbS8.webp)
![错误浅色模式 Favicon](https://pic.hackdeacon.cn/blog/d993Zy81.webp)

## 静态图片 favicon 切换

核心思路：

1. 使用 `window.matchMedia('(prefers-color-scheme: dark)')` 检测系统深色模式
2. 动态修改 `<link rel="icon">` 的 `href`

### 示例代码

```html
<!-- 默认 favicon -->
<link id="favicon-link" rel="icon" type="image/png" href="/favicon-light.png">

<script>
  // 获取 favicon DOM
  const faviconLink = document.getElementById('favicon-link');

  // 创建媒体查询对象
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  /**
   * 根据主题更新 favicon
   * @param {boolean} isDarkMode - 是否为深色模式
   */
  function updateFaviconForTheme(isDarkMode) {
    faviconLink.href = isDarkMode ? '/favicon-dark.png' : '/favicon-light.png';
  }

  // 初始化
  updateFaviconForTheme(darkModeMediaQuery.matches);

  // 监听系统主题变化
  darkModeMediaQuery.addEventListener('change', event => {
    updateFaviconForTheme(event.matches);
  });
</script>
```

**特点**：

* 简单直接，易读性强。
* 支持任何图片格式（PNG、ICO、WebP 等）。
* 缺点：需要两张图，文件大小略大，颜色修改不灵活。

## SVG favicon 动态修改

SVG favicon 可以直接在浏览器中渲染并用 CSS/JS 改变颜色，不需要多张文件。

### 示例 SVG

```html
<link id="favicon-svg" rel="icon" type="image/svg+xml" href="/favicon.svg">

<script>
  const faviconSVG = document.getElementById('favicon-svg');
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  /**
   * 根据深浅色模式，生成对应颜色的 SVG 数据 URL
   * @param {boolean} isDarkMode
   */
  function updateSvgFavicon(isDarkMode) {
    // 这里用简单的圆示例，可替换成你的 SVG 内容
    const color = isDarkMode ? '#ffffff' : '#000000';
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
      <circle cx="16" cy="16" r="16" fill="${color}"/>
    </svg>`;
    // 将 SVG 转成 data URL
    const svgDataUrl = 'data:image/svg+xml;base64,' + btoa(svgContent);
    faviconSVG.href = svgDataUrl;
  }

  // 初始化
  updateSvgFavicon(darkModeMediaQuery.matches);

  // 监听系统主题变化
  darkModeMediaQuery.addEventListener('change', e => updateSvgFavicon(e.matches));
</script>
```

**特点**：

* 文件小，性能好。
* 不需要多张图片文件。
* 可以动态修改颜色、形状，甚至做动画。
