import { motion } from "framer-motion";

interface Category {
  id: number;
  name: string;
  description: string;
  icon: string;
  count: number;
  color: string;
}

interface CategoriesProps {
  categories: Category[];
}

export default function Categories({ categories }: CategoriesProps) {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300">
            探索星辰大海
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            丰富的技术分类，找到您感兴趣的内容
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: category.id * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-5 ${category.color}`}>
                <i className={`fa-solid ${category.icon} text-white text-2xl`}></i>
              </div>

              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {category.name}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {category.description}
              </p>

              <div className="flex items-center justify-between">
                {/* <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {category.count} 分享
                </span> */}
                <button className="text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors">
                  {category.count} <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <motion.button
                  whileHover={{ translateX: 5 }}
                  className="text-blue-600 dark:text-blue-400 font-medium flex items-center group-hover:underline"
                >
                  详情 <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
