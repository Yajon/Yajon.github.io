import { URL_CONFIG_DATA } from "@/lib/urls";
import { copyClipboard, showToast } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerData = {
    socialData: [
      {
        title: "github",
        url: URL_CONFIG_DATA.externalData.github,
        icon: "fa-brands fa-github",
      },
      {
        title: "微博",
        url: URL_CONFIG_DATA.externalData.weibo,
        icon: "fa-brands fa-weibo",
      },
      {
        title: "QQ",
        url: URL_CONFIG_DATA.externalData.qq,
        icon: "fa-brands fa-qq",
      },
      {
        title: "邮箱",
        url: URL_CONFIG_DATA.externalData.mailto,
        icon: "fa-solid fa-envelope",
      },
    ],
    linksData: [
      {
        title: "文章",
        url: URL_CONFIG_DATA.blogData.archives,
      },
      {
        title: "分类",
        url: URL_CONFIG_DATA.blogData.categories,
      },
      {
        title: "工具箱",
        url: URL_CONFIG_DATA.blogData.toolBox,
      },
      {
        title: "关于",
        url: URL_CONFIG_DATA.blogData.about,
      },
    ],
    externalData: [
      {
        title: "腾讯技术团队",
        url: "https://mp.weixin.qq.com/s/-twWvnahlnsENkpvf-AAng",
      },
      {
        title: "美团技术团队",
        url: "https://tech.meituan.com/",
      },
      {
        title: "字节跳动技术团队",
        url: "https://juejin.cn/user/1838039172387262/posts",
      },
      {
        title: "大淘宝技术",
        url: "https://mp.weixin.qq.com/s/9_ausaYpF9Qvix6QVae4nA",
      },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                <i className="fa-solid fa-book text-white text-xl"></i>
              </div>
              <span className="text-xl font-bold text-white">小册子</span>
            </div>

            <p className="text-gray-400 mb-6">
              探索技术的无限可能，分享知识，连接移动端开发者社区。
            </p>

            <div className="flex space-x-4">
              {footerData.socialData.map((item) => (
                <motion.button
                  key={item.title}
                  // href={item.url}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label={item.title}
                  onClick={() => {
                    if (
                      item.title.toUpperCase() === "QQ" &&
                      copyClipboard("2773953617")
                    ) {
                      showToast("QQ号已复制到剪贴板");
                      return;
                    }
                    window.open(item.url, "_blank");
                  }}
                >
                  <i className={`${item.icon} text-white`}></i>
                </motion.button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-6">热门分类</h3>
            <ul className="space-y-4">
              {footerData.linksData.map((item) => (
                <li key={item.title}>
                  <motion.a
                    href={item.url}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-gray-400 hover:text-white flex items-center"
                  >
                    <i className="fa-solid fa-angle-right mr-2 text-blue-500"></i>{" "}
                    {item.title}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-6">快速链接</h3>
            <ul className="space-y-4">
              {footerData.externalData.map((item) => (
                <li key={item.title}>
                  <motion.a
                    href={item.url}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-gray-400 hover:text-white flex items-center justify-between"
                  >
                    <span className="flex items-center">
                      <i className="fa-solid fa-angle-right mr-2 text-blue-500"></i>{" "}
                      {item.title}
                    </span>
                    <span className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded-full">
                      {Math.floor(Math.random() * 100) + 10}
                    </span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-6">订阅服务</h3>
            <p className="text-gray-400 mb-4">获取最新的技术资讯和文章更新</p>

            <form className="space-y-3">
              {/* <div>
                <input
                  disabled={true}
                  type="email"
                  placeholder="您的邮箱地址"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100 placeholder-gray-500"
                />
              </div> */}

              <motion.a
                whileHover={{ scale: 1.02 }}
                // type="submit"
                className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center"
                onClick={() => {
                  const text = URL_CONFIG_DATA.blogData.rss;
                  if (copyClipboard(text)) {
                    showToast("订阅链接已复制到剪贴板");
                  }
                }}
              >
                RSS订阅 <i className="fa-solid fa-paper-plane ml-2"></i>
              </motion.a>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; Copyright © 2012-{currentYear} GuoYanjun. All Rights
              Reserved.
            </p>

            <div className="flex space-x-6">
              <a
                href={URL_CONFIG_DATA.blogData.copyright}
                className="text-gray-500 hover:text-gray-300 text-sm"
              >
                隐私政策
              </a>
              <a
                href={URL_CONFIG_DATA.blogData.copyright}
                className="text-gray-500 hover:text-gray-300 text-sm"
              >
                使用条款
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
