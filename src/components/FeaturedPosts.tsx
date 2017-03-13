import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { URL_CONFIG_DATA } from '@/lib/urls';

interface Post {
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

interface FeaturedPostsProps {
  posts: Post[];
}

export default function FeaturedPosts({ posts }: FeaturedPostsProps) {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300">
              精选文章
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              发现本社区精心挑选的高质量技术文章
            </p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="mt-6 md:mt-0 px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center"
            onClick={() => {window.open(URL_CONFIG_DATA.blogData.archives, '_blank')}}
          >
            查看全部文章 <i className="fa-solid fa-arrow-right ml-2"></i>
          </motion.button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2 group"
          >
            <div className="relative rounded-2xl overflow-hidden h-full flex flex-col md:flex-row bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="md:w-1/2 relative overflow-hidden">
                <img 
                  src={posts[0].image} 
                  alt={posts[0].title}
                  className="w-full h-64 md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {posts[0].category}
                  </span>
                </div>
              </div>
              
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                <div onClick={() => {window.open(posts[0].url, '_blank')}}>
                  <div className="flex items-center space-x-4 mb-4">
                    <img 
                      src={posts[0].author.avatar} 
                      alt={posts[0].author.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">{posts[0].author.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {format(new Date(posts[0].date), 'yyyy-MM-dd')} · {posts[0].readTime} 阅读
                      </p>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {posts[0].title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                    {posts[0].excerpt}
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <button onClick={() => {window.open(posts[0].url, '_blank')}} className="text-blue-600 dark:text-blue-400 font-medium flex items-center group-hover:underline">
                    阅读更多 <i className="fa-solid fa-arrow-right ml-2 text-sm transition-transform group-hover:translate-x-1"></i>
                  </button>
                  
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors">
                      <i className="fa-regular fa-heart"></i>
                      <span>{posts[0].likes}</span>
                    </button>
                    <button className="text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors">
                      <i className="fa-regular fa-bookmark"></i>
                    </button>
                  </div>
                </div>
                <div className="absolute bottom-full left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
              </div>
            </div>
          </motion.div>
          
          {/* Recent Posts */}
          <div className="space-y-6">
            {posts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                viewport={{ once: true }}
                className="group flex bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => {window.open(post.url, '_blank')}}
              >
                <div className="w-1/3 relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="w-2/3 p-4">
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"> 
                    {post.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>{format(new Date(post.date), 'yyyy-MM-dd')}</span>
                    <span className="flex items-center">
                      <i className="fa-regular fa-heart mr-1"></i> {post.likes}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}