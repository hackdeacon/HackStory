# 像鼹鼠一样深度清理你的 Mac

![Mole](https://pic.hackstory.cn/blog/mole/OS3kF75L.webp)

> Mole（🐹）是一个开源的 macOS 命令行工具，专为深度清理、卸载应用、磁盘分析、系统优化和实时监控而生。它把 CleanMyMac、AppCleaner、DaisyDisk 和 iStat Menus 的核心功能全部打包进一个轻量级 `mo` 命令里。

无 GUI 臃肿、无订阅、完全本地运行，安全又高效！  
截止发文，GitHub Star 将近 40k，受到众多开发者夸赞。
![Tw93](https://pic.hackstory.cn/blog/mole/a4diGmb8.webp)

作品来自大佬 `Tw93`，该大佬还有其他高质量的实用小工具：

- MiaoYan · 妙言：一款优雅的 Markdown 编辑器，这篇文章也是使用该工具码出来的。

![](https://pic.hackstory.cn/blog/mole/i12TJumX.webp)

- Kaku：专为 AI 编程设计的快速、开箱即用的终端，纯 Rust 构建。

![](https://pic.hackstory.cn/blog/mole/Baf8G6nd.webp)

- Pake：只需一条命令即可将任何网页转换为桌面应用，支持 macOS、Windows 和 Linux。

![](https://pic.hackstory.cn/blog/mole/i9W0D9uC.webp)

## 安装 Mole

### 通过 Homebrew 安装（推荐）

```bash
brew install mole
```

### 或使用一键脚本安装

```bash
curl -fsSL https://raw.githubusercontent.com/tw93/mole/main/install.sh | bash
```

## 使用 Mole

- `mo` 交互式菜单
- `mo clean` 深度清理
- `mo uninstall` 智能卸载应用
- `mo optimize` 系统优化
- `mo analyze` 磁盘可视化分析
- `mo status` 实时系统监控
- `mo purge` 项目构建产物清理
- `mo installer` 清理安装包
- `mo update` 更新 Mole
- `mo --help` 帮助

---

### mo

交互式菜单可以导航你想使用的功能。
![mo](https://pic.hackstory.cn/blog/mole/Z5czNfu0.webp)

### mo clean

一键清理，包含 应用程序缓存、系统日志、包管理器缓存、浏览器管理 等等。

> Mole 默认采用安全优先的清理设置：路径验证、受保护目录规则、保守的清理边界，以及对高风险操作进行明确确认。当风险或不确定性较高时，Mole 会跳过、拒绝或要求更强的确认，而不是扩大删除范围。

![mo clean](https://pic.hackstory.cn/blog/mole/LHi1JDXJ.webp)

如果对清理不放心，可以先用 `mo clean --dry-run` 预览清理内容，只预览，不清理。

![mo clean --dry-run](https://pic.hackstory.cn/blog/mole/PRwrgFX0.webp)

### mo uninstall

完全卸载应用程序，无残留，同样支持添加 `--dry-run` 预览参数。

![mo uninstall](https://pic.hackstory.cn/blog/mole/4Yr7nBJx.webp)

### mo optimize

系统优化，包含 DNS 缓存刷新、Spotlight 索引优化、内存压力优化、防火墙、文件加密保险箱 等等。

![mo optimize](https://pic.hackstory.cn/blog/mole/ahBVSJsB.webp)

### mo analyze

磁盘可视化分析，看看那部份占了空间大头。该命令对于临时清理来说更安全，因为它通过 Finder 将文件移至废纸篓，而不是直接删除。

![mo analyze](https://pic.hackstory.cn/blog/mole/Xf0opl5U.webp)

### mo status

显示系统状态，包含 CPU、GPU、Disk、Power、Process、Network。

支持 `mo status --json`，运行后会输出状态数据的 json 文件。

![mo status](https://pic.hackstory.cn/blog/mole/FU2MJe4r.webp)

### mo purge

项目构建产物清理，`node_modules`、`dist` 等等，支持 `--dry-run` 预览。

![mo purge](https://pic.hackstory.cn/blog/mole/psC35fqY.webp)

### mo installer

清理安装包，`.dmg` / `.pkg` 等等。

### 其他参数

`--whitelist` = 自定义白名单保护  
`--paths` = 指定路径扫描

`--debug` 开启超级详细日志，配合 --dry-run 使用，能看到每一个文件的处理路径。

```
mo clean --dry-run --debug
```

## Enjoy it！

项目地址 [github.com/tw93/mole](https://github.com/tw93/mole)

Mole 正在积极开发 Windows 版本，目前已有预发布版本，大家也可以体验一下。