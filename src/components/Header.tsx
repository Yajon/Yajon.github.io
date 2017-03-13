import { useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { motion } from "framer-motion";
import { IMAGE_CONFIG_DATA, URL_CONFIG_DATA } from "@/lib/urls";

interface HeaderProps {
  isScrolled: boolean;
}

export default function Header({ isScrolled }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerData = {
    linksData: [
      {
        title: "即刻",
        url: URL_CONFIG_DATA.blogData.essay,
        icon: "fa-solid fa-cloud",
      },
      {
        title: "GitHub",
        url: URL_CONFIG_DATA.externalData.github,
        icon: "fa-brands fa-github",
      },
      {
        title: "微博",
        url: URL_CONFIG_DATA.externalData.weibo,
        icon: "fa-brands fa-weibo",
      },
      {
        title: "邮箱",
        url: URL_CONFIG_DATA.externalData.mailto,
        icon: "fa-solid fa-envelope", //fa-compass
      },
    ],
  };

  return (
    <header
      className={`w-full py-4 px-4 md:px-6 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm sticky top-0 z-50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and site name */}
        <motion.a
          href={URL_CONFIG_DATA.blogData.home}
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex items-center space-x-2"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
            {/* <i className="fa-solid fa-code text-white text-xl"></i> */}
            <img
              src={IMAGE_CONFIG_DATA.img_e20b75e}
              alt="Logo"
              className="md:h-full object-cover"
            />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300">
            原力圈(Yojoy小册子)
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* <a
            href="#"
            className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            微博
          </a> */}

          {headerData.linksData.map((item) => (
            <motion.button
              key={item.title}
              whileHover={{ scale: 1.02 }}
              className="px-6 py-3 hover:bg-blue-700 hover:text-white text-black-700 font-medium rounded-lg transition-all shadow-lg hover:shadow-blue-500/20 flex items-center justify-center"
              onClick={() => {
                window.open(item.url, "_blank");
              }}
            >
              <i className={item.icon + " mr-2"}></i> {item.title}
            </motion.button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={theme === "light" ? "切换到深色模式" : "切换到浅色模式"}
          >
            {theme === "light" ? (
              <i className="fa-solid fa-moon text-gray-700"></i>
            ) : (
              <i className="fa-solid fa-sun text-yellow-400"></i>
            )}
          </button>

          {/* Search Button */}
          <button
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors hidden md:flex"
            aria-label="搜索-工具箱"
            onClick={() => {
              window.open(URL_CONFIG_DATA.blogData.toolBox, "_blank");
            }}
          >
            <i className="fa-solid fa-search text-gray-700 dark:text-gray-300"></i>
          </button>

          {/* Login Button */}
          <button
            className="hidden md:flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            onClick={() => {
              window.open(URL_CONFIG_DATA.blogData.home, "_blank");
            }}
          >
            <i className="fa-solid fa-house mr-2"></i>主页
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "关闭菜单" : "打开菜单"}
          >
            {isMenuOpen ? (
              <i className="fa-solid fa-times text-gray-700 dark:text-gray-300"></i>
            ) : (
              <i className="fa-solid fa-bars text-gray-700 dark:text-gray-300"></i>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 py-4 px-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <nav className="flex flex-col space-y-4">
            {/* <a
              href="#"
              className="font-medium py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              首页
            </a> */}
            {headerData.linksData.map((item) => (
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="px-6 py-3 hover:bg-blue-700 hover:text-white text-black-700 font-medium rounded-lg transition-all shadow-lg hover:shadow-blue-500/20 flex items-center justify-center"
                onClick={() => {
                  window.open(item.url, "_blank");
                }}
              >
                <i className={item.icon + " mr-2"}></i> {item.title}
              </motion.button>
            ))}
            <div className="pt-2 flex items-center justify-between">
              <button
                className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg w-full justify-center"
                onClick={() => {
                  window.open(URL_CONFIG_DATA.blogData.toolBox, "_blank");
                }}
              >
                <i className="fa-solid fa-search mr-2"></i>搜索
              </button>
            </div>
            <button
              className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg w-full justify-center"
              onClick={() => {
                window.open(URL_CONFIG_DATA.blogData.home, "_blank");
              }}
            >
              <i className="fa-solid fa-house mr-2"></i>主页
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
