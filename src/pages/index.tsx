import Link from 'next/link';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';

// Header Component
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">ZY</span>
          </div>
          <span className="text-xl font-bold text-gray-800">子远教育</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><Link href="/" className="text-gray-600 hover:text-blue-600 font-medium">首页</Link></li>
            <li><Link href="#about" className="text-gray-600 hover:text-blue-600 font-medium">关于我们</Link></li>
            <li><Link href="#services" className="text-gray-600 hover:text-blue-600 font-medium">服务项目</Link></li>
            <li><Link href="#testimonials" className="text-gray-600 hover:text-blue-600 font-medium">成功案例</Link></li>
            <li><Link href="#contact" className="text-gray-600 hover:text-blue-600 font-medium">联系我们</Link></li>
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none"
            aria-label="切换导航菜单"
          >
            {isMenuOpen ? (
              // Close icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
        
        <Link href="#contact" className="hidden md:block">
          <Button variant="primary" size="md">
            免费咨询
          </Button>
        </Link>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4">
          <ul className="flex flex-col space-y-4">
            <li><Link href="/" className="block text-gray-600 hover:text-blue-600 font-medium py-2">首页</Link></li>
            <li><Link href="#about" className="block text-gray-600 hover:text-blue-600 font-medium py-2">关于我们</Link></li>
            <li><Link href="#services" className="block text-gray-600 hover:text-blue-600 font-medium py-2">服务项目</Link></li>
            <li><Link href="#testimonials" className="block text-gray-600 hover:text-blue-600 font-medium py-2">成功案例</Link></li>
            <li><Link href="#contact" className="block text-gray-600 hover:text-blue-600 font-medium py-2">联系我们</Link></li>
            <li>
              <Link href="#contact" className="block w-full">
                <Button variant="primary" size="md" fullWidth={true}>
                  免费咨询
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

// Hero Section Component
const HeroSection: React.FC = () => {
  return (
    <Section id="home" background="gradient">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
            专业的留学咨询服务
            <span className="block text-blue-600 mt-2">助您开启国际教育之旅</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            子远教育致力于为学生提供最优质的留学规划服务，帮助您实现海外名校梦想。
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="#contact">
              <Button variant="primary" size="lg">
                开始咨询
              </Button>
            </Link>
            <Link href="#services">
              <Button variant="outline" size="lg">
                了解更多
              </Button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div 
            className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 md:h-80 flex items-center justify-center text-gray-500"
            aria-label="专业留学咨询团队为学生提供一对一规划服务"
            role="img"
          >
            教育服务展示图
          </div>
        </div>
      </div>
    </Section>
  );
};

// Define TypeScript interfaces
interface Service {
  title: string;
  description: string;
  icon: string;
}

// Service Grid Component
const ServiceGrid: React.FC = () => {
  const services: Service[] = [
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
      description: "提供海外就业指导和真实的职业规划建议",
      icon: "💼",
    }
  ];

  return (
    <Section id="services" background="white">
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
            <div className="text-4xl mb-4" aria-label={service.title}>
              <span aria-hidden="true">{service.icon}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

// About Us Section Component
const AboutUsSection: React.FC = () => {
  return (
    <Section id="about" background="gray">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">关于我们</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          深圳市子远教育咨询有限公司致力于为学生提供最优质的留学规划服务，
          帮助您实现海外名校梦想。我们拥有专业的顾问团队和丰富的行业经验。
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-white rounded-xl shadow-sm">
          <div className="text-4xl mb-4 text-blue-600">🎓</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">专业团队</h3>
          <p className="text-gray-600">
            资深留学顾问，具备海外名校背景和丰富申请经验
          </p>
        </div>
        
        <div className="text-center p-6 bg-white rounded-xl shadow-sm">
          <div className="text-4xl mb-4 text-blue-600">📊</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">成功案例</h3>
          <p className="text-gray-600">
            超过千名学生成功进入世界顶尖大学，录取率达95%
          </p>
        </div>
        
        <div className="text-center p-6 bg-white rounded-xl shadow-sm">
          <div className="text-4xl mb-4 text-blue-600">🌍</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">全球网络</h3>
          <p className="text-gray-600">
            与多国院校建立合作关系，提供全方位留学服务
          </p>
        </div>
      </div>
    </Section>
  );
};

// Testimonials Section Component
const TestimonialsSection: React.FC = () => {
  return (
    <Section id="testimonials" background="white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">成功案例</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          听听我们的学生和家长如何评价子远教育的优质服务
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
          <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
          <p className="text-gray-600 mb-4">
            "子远教育的顾问非常专业，从选校到文书写作都给了我很多帮助，最终成功拿到了心仪学校的offer！"
          </p>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">张同学</div>
            <div>
              <div className="font-medium text-gray-800">张同学</div>
              <div className="text-sm text-gray-500">哥伦比亚大学</div>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
          <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
          <p className="text-gray-600 mb-4">
            "感谢子远教育的全程指导，从文书到面试都提供了细致的帮助，让孩子顺利进入理想学校。"
          </p>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">李家长</div>
            <div>
              <div className="font-medium text-gray-800">李家长</div>
              <div className="text-sm text-gray-500">哈佛大学</div>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
          <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
          <p className="text-gray-600 mb-4">
            "签证办理非常顺利，在子远教育的帮助下，整个流程都很高效，很放心。"
          </p>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">王同学</div>
            <div>
              <div className="font-medium text-gray-800">王同学</div>
              <div className="text-sm text-gray-500">斯坦福大学</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

// Main Page Component
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutUsSection />
      <ServiceGrid />
      <TestimonialsSection />
      
      <footer id="contact" className="bg-gray-800 text-white py-12">
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
                <li className="flex items-center">
                  <span className="sr-only">电话</span>
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>400-123-4567</span>
                </li>
                <li className="flex items-center">
                  <span className="sr-only">邮箱</span>
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>contact@ziyuanyu.com</span>
                </li>
                <li className="flex items-center">
                  <span className="sr-only">地址</span>
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>深圳市南山区科技园南区深圳湾科技生态园</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            © {new Date().getFullYear()} 深圳市子远教育咨询有限公司 版权所有
          </div>
        </div>
      </footer>
    </div>
  );
}