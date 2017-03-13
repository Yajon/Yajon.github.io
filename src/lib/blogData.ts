import { IMAGE_CONFIG_DATA } from "./urls";

export interface Category {
  id: number;
  name: string;
  description: string;
  icon: string;
  count: number;
  color: string;
}

export interface Post {
  id: number;
  url: string;
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
  likes: number;
}

export const blogCategories: Category[] = [
  {
    id: 1,
    name: "移动端开发",
    description: "学习iOS和Harmony OS等应用开发的最新趋势",
    icon: "fa-mobile-alt",
    count: 16,
    color: "bg-purple-500 hover:bg-purple-600",
  },
  {
    id: 2,
    name: "前端开发",
    description: "探索现代前端技术、框架和最佳实践",
    icon: "fa-laptop-code",
    count: 32,
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    id: 3,
    name: "跨平台开发",
    description: "深入了解跨平台技术、动态和资讯",
    icon: "fa-server",
    count: 64,
    color: "bg-green-500 hover:bg-green-600",
  },
];

export const hotPosts: Post[] = [
  {
    id: 1,
    url: "https://mp.weixin.qq.com/s/x9TyypzmwraeOvEXHSiiCg",
    title: "腾讯Kuikly框架进一步开源",
    excerpt:
      "Kuikly是腾讯广泛应用的跨端开发框架，基于Kotlin Multiplatform技术构建，为开发者提供了技术栈更统一的跨端开发体验，由腾讯大前端领域 Oteam（公司级）推出。...",
    category: "跨平台",
    author: {
      name: "Yojoy",
      // avatar: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=User%20avatar%201&sign=7cc5e5e9d261bde8ce5fccdb28c709aa"
      avatar: `${IMAGE_CONFIG_DATA.img_7cc5e5e}`,
    },
    date: "2025-05-01",
    readTime: "12分钟",
    image:
      "https://mmbiz.qpic.cn/sz_mmbiz_gif/j3gficicyOvasVeMDmWoZ2zyN8iaSc6XWYj79H3xfgvsqK9TDxOBlcUa6W0EE5KBdxacd2Ql6QBmuhBJKIUS4PSZQ/640?wx_fmt=gif&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=0",
    likes: 0,
  },
];

export const featuredPosts: Post[] = [
  {
    id: 1,
    url: "https://reactnative.cn/docs/next/the-new-architecture/pillars-turbomodules",
    title: "React Native新架构之TurboModules",
    excerpt:
      "TurboModules在各个平台的强类型接口声明是一致的；模块支持懒加载，可以加快 App 启动速度；通过替换 Bridge 为 JSI（使用原生代码编写的 JavaScript 接口），提升 JavaScript 与原生代码的通讯效率。...",
    category: "React Native",
    author: {
      name: "Yojoy",
      // avatar: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=User%20avatar%201&sign=7cc5e5e9d261bde8ce5fccdb28c709aa"
      avatar: `${IMAGE_CONFIG_DATA.img_7cc5e5e}`,
    },
    date: "2025-05-01",
    readTime: "12分钟",
    image: `${IMAGE_CONFIG_DATA.img_d01151c}`,
    likes: 245,
  },
  {
    id: 2,
    url: "https://mp.weixin.qq.com/s/vSE6jiq2sxn43N3qRdNIXw?click_id=11",
    title: "与Flutter携手打造鸿蒙跨平台生态新基石",
    excerpt:
      "Flutter 作为谷歌推出的跨平台 UI 框架，以 “一次编码、多端运行” 的特性成为全球开发者的主流选择，而鸿蒙系统则以 “分布式技术、全场景体验” 为核心优势...",
    category: "前端开发",
    author: {
      name: "李华",
      avatar:
        "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=User%20avatar%202&sign=f2938273b9dc9bc101407615eb648d08",
    },
    date: "2025-08-27",
    readTime: "15分钟",
    // image: "https://i.ibb.co/jZf0781g/image.png",
    image: `${IMAGE_CONFIG_DATA.img_e930f48}`,
    likes: 187,
  },
  {
    id: 3,
    url: "https://mp.weixin.qq.com/s/P6RxVL8f7BwrAE4i3aaLXA",
    title: "万字长文详解如何使用 Swift 提高代码质量",
    excerpt:
      "在讨论如何使用Swift提高代码质量之前，我们先来看看Swift本身相比ObjC或其他编程语言有什么优势。Swift有三个重要的特性分别是富有表现力/安全性/快速...",
    category: "Swift",
    author: {
      name: "Yojoy",
      avatar:
        "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=User%20avatar%203&sign=c8bb87cc81bc89d5d3d3ceaa37903fe2",
    },
    date: "2023-05-18",
    readTime: "20分钟",
    image:
      "https://developer.apple.com/home/images/tile-event-sept25/small_2x.jpg",
    likes: 312,
  },
  {
    id: 4,
    url: "https://github.com/Milad-Akarie/skeletonizer",
    title: "Flutter 小技巧之有趣的 UI 骨架屏框架 skeletonizer",
    excerpt:
      "骨架图是 app 中经常用来等待网络加载的一种方式，这种方式可以更友好的让用户知道 app 的状态。Skeletonizer 可以让使用者快速的完成骨架图的功能开发，只需把布局包裹在 Skeletonizer 外层，开启 enabled: true 即可得到骨架屏动画。...",
    category: "Flutter",
    author: {
      name: "Yojoy",
      avatar:
        "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=User%20avatar%204&sign=3fac798f0cb9117a50b7190050f54f04",
    },
    date: "2025-08-20",
    readTime: "25分钟",
    image:
      "https://gh-proxy.com/raw.githubusercontent.com/Milad-Akarie/skeletonizer/main/art/shaded_skeleton_demo.gif",
    likes: 278,
  },
];
