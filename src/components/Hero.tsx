import { motion, AnimatePresence } from "framer-motion";
import { hotPosts } from "@/lib/blogData";
import { IMAGE_CONFIG_DATA, URL_CONFIG_DATA } from "@/lib/urls";
import { useState } from "react";

export default function Hero() {
  const userImages = [
    IMAGE_CONFIG_DATA.img_6bd8bf9,
    IMAGE_CONFIG_DATA.img_c8bb87c,
    IMAGE_CONFIG_DATA.img_e0dc896,
    IMAGE_CONFIG_DATA.img_f293827,
  ];
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/5 dark:bg-blue-600/10 rounded-l-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-indigo-500/5 dark:bg-indigo-600/10 rounded-r-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300">
                探索技术的
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                无限可能
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              发现前沿技术文章、教程和见解，帮助你在开发旅程中不断成长。
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-blue-500/20 flex items-center justify-center"
                onClick={() => {
                  window.open(URL_CONFIG_DATA.blogData.home, "_blank");
                }}
              >
                <i className="fa-solid fa-compass mr-2"></i> 探索
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 font-medium rounded-lg transition-all shadow-md flex items-center justify-center"
                onClick={() => {
                  window.open(URL_CONFIG_DATA.blogData.music, "_blank");
                }}
              >
                <i className="fa-solid fa-water mr-2"></i> 漂流瓶
              </motion.button>
            </div>

            <div className="mt-12 flex items-center space-x-6">
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <img
                    key={i}
                    // src={`https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=User%20avatar%20${i}`}
                    src={userImages[i]}
                    alt="用户头像"
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center text-amber-500 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <i key={i} className="fa-solid fa-star text-xs"></i>
                  ))}
                  <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                    4.9
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  来自 2,000+ 开发者的信任
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <img
                // src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Programmer%20working%20on%20laptop%20with%20code%20editor%20open%20dark%20theme&sign=92078af7145644c6b3ee931284ad84a7"
                src={IMAGE_CONFIG_DATA.img_92078af}
                alt="热门图片"
                className="w-full h-auto object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end"
                onClick={() => {
                  window.open(hotPosts[0].url, "_blank");
                }}
              >
                <div className="p-6 text-white">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    热门文章
                  </span>
                  <h3 className="text-xl font-bold mt-2">
                    {hotPosts[0].title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400/20 dark:bg-blue-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-400/20 dark:bg-indigo-500/20 rounded-full blur-2xl"></div>

            {/* Floating card */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-10, 0, -10] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -top-10 -right-10 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div
                className="flex items-center space-x-3"
                onClick={() => {
                  // 弹出微信二维码弹窗，从中间向上下展开的过渡动画效果
                  setIsAlertModalOpen(true);
                }}
              >
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                  <i className="fa-solid fa-rocket text-green-600 dark:text-green-400"></i>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    佛系更新
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    新鲜技术文章
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 二维码弹窗 */}
      <AnimatePresence>
        {isAlertModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* 背景蒙层 */}
            <div
              className="absolute inset-0 bg-black/70"
              onClick={() => setIsAlertModalOpen(false)}
            ></div>

            {/* 弹窗内容 */}
            <motion.div
              className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 max-w-sm w-full mx-8"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* 关闭按钮 */}
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                onClick={() => setIsAlertModalOpen(false)}
              >
                <i className="fa-solid fa-xmark text-xl"></i>
              </button>

              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  关注微信公众号
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  获取最新文章推送
                </p>

                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mx-auto flex items-center justify-center mb-6">
                  <span className="text-gray-500 p-1.5">
                    <img src={IMAGE_CONFIG_DATA.img_weChatQR} alt="二维码" />
                  </span>
                </div>

                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  扫码关注，及时获取更新
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
