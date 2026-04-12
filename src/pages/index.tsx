import Link from 'next/link';

// Header Component
const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">ZY</span>
          </div>
          <span className="text-xl font-bold text-gray-800">子远教育</span>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><Link href="#" className="text-gray-600 hover:text-blue-600 font-medium">首页</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-blue-600 font-medium">关于我们</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-blue-600 font-medium">服务项目</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-blue-600 font-medium">成功案例</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-blue-600 font-medium">联系我们</Link></li>
          </ul>
        </nav>
        
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition duration-300">
          免费咨询
        </button>
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
            专业的留学咨询服务
            <span className="block text-blue-600 mt-2">助您开启国际教育之旅</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            子远教育致力于为学生提供最优质的留学规划服务，帮助您实现海外名校梦想。
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition duration-300">
              开始咨询
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition duration-300">
              了解更多
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 md:h-80 flex items-center justify-center text-gray-500">
            教育服务展示图
          </div>
        </div>
      </div>
    </section>
  );
};

// Service Grid Component
const ServiceGrid = () => {
  const services = [
    {
      title: "留学申请规划",
      description: "专业顾问为您量身定制留学申请方案，提升录取成功率",
      icon: "🎓",
    },
    {
      title: "语言考试培训",
      description: "提供托福、雅思、SAT等考试辅导，助力语言成绩提升",
      icon: "📚",
    },
    {
      title: "签证办理服务",
      description: "专业团队协助办理留学签证，确保顺利获得签证",
      icon: "📋",
    },
    {
      title: "海外生活指导",
      description: "提供住宿、交通、文化适应等全方位生活指导",
      icon: "🌍",
    },
    {
      title: "背景提升",
      description: "实习推荐、科研项目、志愿者活动等背景提升服务",
      icon: "📈",
    },
    {
      title: "职业规划",
      description: "提供海外就业指导和职业规划建议",
      icon: "💼",
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">我们的核心服务</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            为每一位学生提供全方位、个性化的留学服务，助力您的国际教育之路
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition duration-300 hover:border-blue-200"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Page Component
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServiceGrid />
      
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">子远教育</h4>
              <p className="text-gray-400">
                专业留学服务，成就您的国际教育梦想
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">服务项目</h4>
              <ul className="space-y-2 text-gray-400">
                <li>留学申请</li>
                <li>语言培训</li>
                <li>签证服务</li>
                <li>背景提升</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">关于我们</h4>
              <ul className="space-y-2 text-gray-400">
                <li>公司简介</li>
                <li>团队介绍</li>
                <li>成功案例</li>
                <li>新闻动态</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">联系方式</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📞 400-XXX-XXXX</li>
                <li>✉️ info@ziyuanyu.com</li>
                <li>📍 北京市朝阳区XXX大厦</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            © {new Date().getFullYear()} 子远教育 版权所有
          </div>
        </div>
      </footer>
    </div>
  );
}
