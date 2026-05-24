import Link from 'next/link';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import {
  brand,
  coreValues,
  stats,
  offerDistribution,
  services,
  pacdSystem,
  destinations,
  programTypes,
  successCases,
  offerImages,
  contacts,
  serviceCenters,
  backgroundResources,
  partnerUniversities,
  timeline,
} from '@/data/company';

// ---------- Header ----------
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-white shadow-sm py-3 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          {/* Logo 占位 — 替换为实际 ZEVEDU logo 图片 */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-extrabold tracking-tight" style={{ background: 'linear-gradient(135deg, #1e40af, #1e3a5f)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {brand.nameEn}
            </span>
            <span className="text-sm text-gray-500 hidden sm:inline">{brand.name}</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link href="#home" className="text-gray-600 hover:text-blue-600 font-medium text-sm">首页</Link>
          <Link href="#about" className="text-gray-600 hover:text-blue-600 font-medium text-sm">关于我们</Link>
          <Link href="#services" className="text-gray-600 hover:text-blue-600 font-medium text-sm">核心服务</Link>
          <Link href="#destinations" className="text-gray-600 hover:text-blue-600 font-medium text-sm">留学国家</Link>
          <Link href="#cases" className="text-gray-600 hover:text-blue-600 font-medium text-sm">成功案例</Link>
          <Link href="#offers" className="text-gray-600 hover:text-blue-600 font-medium text-sm">录取捷报</Link>
          <Link href="#contact" className="text-gray-600 hover:text-blue-600 font-medium text-sm">联系我们</Link>
          <Link href="#contact">
            <Button variant="primary" size="sm">
              免费咨询
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="切换导航菜单"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-4 px-4">
          <ul className="flex flex-col space-y-3">
            {['首页', '关于我们', '核心服务', '留学国家', '成功案例', '录取捷报', '联系我们'].map((item, i) => (
              <li key={i}>
                <Link
                  href={`#${['home', 'about', 'services', 'destinations', 'cases', 'offers', 'contact'][i]}`}
                  className="block text-gray-600 hover:text-blue-600 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                <Button variant="primary" size="md" fullWidth>免费咨询</Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

// ---------- Hero Section ----------
const HeroSection: React.FC = () => (
  <section id="home" className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #ede9fe 100%)' }}>
    <div className="container mx-auto px-4 py-20 md:py-28">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            🎓 一站式国际升学与教育规划服务平台
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            {coreValues.philosophy}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-xl">
            {brand.description}
          </p>
          <p className="text-base text-gray-500 mb-8 max-w-xl">
            服务覆盖名校规划、本硕博升学、香港副学士、中外合作办学、课业辅导、文书服务、面试培训、背景提升、科研实习及签证咨询等多元化内容。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#contact">
              <Button variant="primary" size="lg">
                免费评估
              </Button>
            </Link>
            <Link href="#services">
              <Button variant="outline" size="lg">
                了解更多
              </Button>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl" style={{ background: 'linear-gradient(135deg, #1e40af, #3b82f6)' }}>
              <div className="w-full h-full flex items-center justify-center text-white">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4"></div>
                  <div className="text-2xl font-bold mb-2">全球名校</div>
                  <div className="text-lg opacity-80">Offer库 10,000+</div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400 rounded-full opacity-10" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ---------- Stats Section ----------
const StatsSection: React.FC = () => (
  <section className="py-12 bg-white border-b border-gray-100">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ---------- About Section ----------
const AboutSection: React.FC = () => (
  <Section id="about" background="white">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">关于我们</h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        {coreValues.positioning}
      </p>
    </div>

    {/* Core Values */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
        <div className="text-5xl mb-4">🎯</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">专业团队</h3>
        <p className="text-gray-600 text-sm">
          资深留学顾问团队，具备海外名校背景和丰富申请经验，文案老师从业超10年
        </p>
      </div>
      <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
        <div className="text-5xl mb-4">📊</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">高成功率</h3>
        <p className="text-gray-600 text-sm">
          累计服务数千名学生，Offer库突破10,000份，申请成功率高达96%
        </p>
      </div>
      <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
        <div className="text-5xl mb-4"></div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">全球网络</h3>
        <p className="text-gray-600 text-sm">
          深圳、北京、厦门三地服务，与全球Top 100院校建立深度合作关系
        </p>
      </div>
    </div>

    {/* PACD System */}
    <div className="mb-20">
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{pacdSystem.title}</h3>
        <p className="text-gray-600">{pacdSystem.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pacdSystem.items.map((item) => (
          <div key={item.letter} className="relative p-6 bg-white rounded-2xl border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="absolute -top-4 left-6 w-10 h-10 rounded-full flex items-center justify-center text-white font-extrabold text-lg" style={{ background: 'linear-gradient(135deg, #1e40af, #3b82f6)' }}>
              {item.letter}
            </div>
            <div className="mt-4">
              <div className="text-sm text-blue-600 font-medium mb-1">{item.name}</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Timeline */}
    <div>
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">发展历程</h3>
        <p className="text-gray-600">从工作室到一站式教育平台</p>
      </div>
      <div className="relative">
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 -translate-y-1/2" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {timeline.map((item, i) => (
            <div key={i} className="relative text-center">
              <div className="relative z-10 w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ background: 'linear-gradient(135deg, #1e40af, #3b82f6)' }}>
                {item.year.slice(-2)}
              </div>
              <div className="text-sm font-bold text-blue-600 mb-1">{item.year}年</div>
              <div className="text-xs font-medium text-gray-800 mb-1">{item.title}</div>
              <div className="text-xs text-gray-500 hidden lg:block">{item.desc.slice(0, 40)}...</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

// ---------- Services Section ----------
const ServicesSection: React.FC = () => (
  <Section id="services" background="gray">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">核心服务</h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        覆盖留学全流程，从背景评估到录取后学术辅导，提供一站式服务
      </p>
    </div>

    {/* Program Types */}
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {programTypes.map((p, i) => (
        <span key={i} className="px-5 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">
          {p.name}
        </span>
      ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-blue-200 group"
        >
          <div className="text-4xl mb-4">{service.icon}</div>
          <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{service.title}</h3>
          <p className="text-sm text-blue-600 font-medium mb-3">{service.subtitle}</p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
          <ul className="space-y-2">
            {service.features.map((f, fi) => (
              <li key={fi} className="flex items-start text-sm text-gray-500">
                <span className="text-blue-500 mr-2 mt-0.5">✓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* Background Resources */}
    <div className="mt-16 p-8 bg-white rounded-2xl border border-gray-100">
      <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">背景提升合作资源</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-bold text-blue-600 mb-3 text-sm"> 科研项目合作院校</h4>
          <div className="flex flex-wrap gap-2">
            {backgroundResources.research.map((r, i) => (
              <span key={i} className="px-3 py-1 bg-gray-50 text-gray-700 rounded text-xs">{r}</span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold text-blue-600 mb-3 text-sm">💼 名企实习合作</h4>
          <div className="flex flex-wrap gap-2">
            {backgroundResources.internships.slice(0, 10).map((r, i) => (
              <span key={i} className="px-3 py-1 bg-gray-50 text-gray-700 rounded text-xs">{r}</span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold text-blue-600 mb-3 text-sm">🏆 国际竞赛指导</h4>
          <div className="flex flex-wrap gap-2">
            {backgroundResources.competitions.map((r, i) => (
              <span key={i} className="px-3 py-1 bg-gray-50 text-gray-700 rounded text-xs">{r}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Section>
);

// ---------- Destinations Section ----------
const DestinationsSection: React.FC = () => (
  <Section id="destinations" background="white">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">留学国家与地区</h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        覆盖全球热门留学目的地，累计10,000+成功Offer
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
      {offerDistribution.map((d, i) => (
        <div key={i} className="text-center p-4 bg-gradient-to-b from-blue-50 to-white rounded-xl border border-blue-50 hover:shadow-md transition-all duration-300">
          <div className="text-3xl mb-2">{d.flag}</div>
          <div className="font-bold text-gray-900 text-sm">{d.country}</div>
          <div className="text-blue-600 font-bold text-lg">{d.count}</div>
          <div className="text-xs text-gray-400">份Offer</div>
        </div>
      ))}
    </div>

    {/* Partner Universities */}
    <div className="p-8 bg-gray-50 rounded-2xl">
      <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">部分合作/录取院校</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {partnerUniversities.map((u, i) => (
          <span key={i} className="px-4 py-2 bg-white text-gray-700 rounded-lg text-sm border border-gray-200 shadow-sm">
            {u}
          </span>
        ))}
      </div>
    </div>
  </Section>
);

// ---------- Success Cases Section ----------
const CasesSection: React.FC = () => (
  <Section id="cases" background="gradient">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">成功案例</h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        数千名学生通过子远教育成功进入世界顶尖大学
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {successCases.map((c, i) => (
        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
          <div className="text-yellow-400 text-lg mb-4">★★★★★</div>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed italic">
            "{c.quote}"
          </p>
          <div className="border-t border-gray-100 pt-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-gray-900">{c.student}</div>
                <div className="text-sm text-gray-500">{c.background}</div>
              </div>
              <div className="text-right">
                <div className="text-blue-600 font-bold">{c.university}</div>
                <div className="text-xs text-gray-400">{c.major} · {c.country}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

// ---------- Offer Gallery Section ----------
const OfferGallerySection: React.FC = () => (
  <Section id="offers" background="white">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">🎉 2025 录取捷报</h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        恭喜子远学员斩获全球顶尖名校录取，实力见证！
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {offerImages.map((offer, i) => (
        <a
          key={i}
          href={offer.image}
          target="_blank"
          rel="noopener noreferrer"
          className="group block bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
        >
          <div className="aspect-[3/4] overflow-hidden bg-gray-50">
            <img
              src={offer.image}
              alt={`${offer.school}录取捷报`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div className="p-4">
            <div className="font-bold text-gray-900 text-lg">{offer.school}</div>
            <div className="text-sm text-blue-600 font-medium mt-1">{offer.major}</div>
            <div className="text-xs text-gray-400 mt-2">{offer.background}</div>
          </div>
        </a>
      ))}
    </div>
  </Section>
);

// ---------- Contact Section ----------
const ContactSection: React.FC = () => (
  <Section id="contact" background="white">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">联系我们</h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        添加顾问微信，获取免费留学评估
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {/* Mora老师 */}
      <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-2xl font-bold" style={{ background: 'linear-gradient(135deg, #1e40af, #3b82f6)' }}>
          M
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">Mora老师</h3>
        <p className="text-blue-600 font-medium mb-4">📱 {contacts[0].phone}</p>
        <div className="bg-white rounded-xl p-4 inline-block shadow-sm">
          <img src={contacts[0].wechatQr} alt={`${contacts[0].name}微信二维码`} className="w-48 h-48 object-contain rounded-lg" />
        </div>
      </div>

      {/* May老师 */}
      <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-2xl font-bold" style={{ background: 'linear-gradient(135deg, #1e40af, #3b82f6)' }}>
          M
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">May老师</h3>
        <p className="text-blue-600 font-medium mb-4">📱 {contacts[1].phone}</p>
        <div className="bg-white rounded-xl p-4 inline-block shadow-sm">
          <img src={contacts[1].wechatQr} alt={`${contacts[1].name}微信二维码`} className="w-48 h-48 object-contain rounded-lg" />
        </div>
      </div>

      {/* 地址信息 */}
      <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl border border-gray-200">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl" style={{ background: 'linear-gradient(135deg, #1e40af, #3b82f6)' }}>
          📍
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">服务中心</h3>
        <div className="space-y-3 mt-4">
          {serviceCenters.map((center, i) => (
            <div key={i}>
              <div className="font-bold text-gray-800">{center.city}{center.type}</div>
              {center.address && (
                <div className="text-sm text-gray-500">{center.address}</div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="text-sm text-gray-500">
            <div className="font-medium text-gray-700 mb-1">营业时间</div>
            <div>周一至周五 9:00 - 18:00</div>
            <div>周六 10:00 - 17:00</div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

// ---------- Main Page ----------
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <DestinationsSection />
      <CasesSection />
      <OfferGallerySection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl font-extrabold" style={{ background: 'linear-gradient(135deg, #60a5fa, #93c5fd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {brand.nameEn}
                </span>
                <span className="text-sm text-gray-400">{brand.name}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {coreValues.positioning}
              </p>
              <div className="text-sm text-gray-500">
                <div className="font-medium text-gray-300 mb-1">核心理念</div>
                <div>"{coreValues.philosophy}"</div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">核心服务</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {services.slice(0, 5).map((s, i) => (
                  <li key={i}><Link href="#services" className="hover:text-white transition-colors">{s.title}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">关于我们</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="#about" className="hover:text-white transition-colors">公司简介</Link></li>
                <li><Link href="#about" className="hover:text-white transition-colors">发展历程</Link></li>
                <li><Link href="#cases" className="hover:text-white transition-colors">成功案例</Link></li>
                <li><Link href="#destinations" className="hover:text-white transition-colors">合作院校</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">联系方式</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                {contacts.map((c, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-400 mr-2 mt-0.5"></span>
                    <div>
                      <div className="text-gray-300 font-medium">{c.name}</div>
                      <div>{c.phone}</div>
                    </div>
                  </li>
                ))}
                <li className="flex items-start pt-2 border-t border-gray-700 mt-2">
                  <span className="text-blue-400 mr-2 mt-0.5">📍</span>
                  <div>
                    <div className="text-gray-300 font-medium">深圳服务中心</div>
                    <div>{serviceCenters[0].address}</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} 深圳市子远教育咨询有限公司 版权所有
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <span>粤ICP备XXXXXXXX号</span>
              <Link href="#" className="hover:text-gray-300 transition-colors">隐私政策</Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">用户协议</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
