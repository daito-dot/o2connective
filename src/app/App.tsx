import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { InteractiveChatDemo } from './components/InteractiveChatDemo';
import { QuickDiagnosticDemo } from './components/QuickDiagnosticDemo';
import { ComparisonTable } from './components/ComparisonTable';
import { UserStorySection } from './components/UserStorySection';
import { ProductScreenshots } from './components/ProductScreenshots';
import { FloatingCTA } from './components/FloatingCTA';
import { TestimonialCarousel } from './components/TestimonialCarousel';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDiagnostic, setShowDiagnostic] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-[#fdfcfa] font-sans text-gray-800">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 text-gray-900 no-underline">
            <div className="w-10 h-10 rounded bg-[#5a6470] flex items-center justify-center text-white font-bold text-lg">
              O2
            </div>
            <div>
              <div className="font-bold text-lg tracking-tight">O2CONNECTIVE</div>
              <div className="text-[10px] text-gray-500 tracking-widest">AIカウンセラー</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-gray-600 hover:text-[#5a6470] transition-colors">
              コンセプト
            </a>
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-[#5a6470] transition-colors">
              機能
            </a>
            <a href="#solutions" className="text-sm font-medium text-gray-600 hover:text-[#5a6470] transition-colors">
              活用範囲
            </a>
            <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-[#5a6470] transition-colors">
              よくある質問
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-gray-600 hover:text-[#5a6470] transition-colors">
              ログイン
            </button>
            <button 
              onClick={() => setShowDiagnostic(true)}
              className="px-5 py-2.5 bg-[#5a6470] text-white rounded-md text-sm font-medium hover:bg-[#4a5568] transition-colors"
            >
              無料デモ
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded transition-colors text-xs font-bold tracking-widest"
          >
            {mobileMenuOpen ? '閉じる' : 'メニュー'}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-40 md:hidden backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[280px] bg-white shadow-xl p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-6 mt-16">
                <a href="#about" className="text-gray-800 font-medium" onClick={() => setMobileMenuOpen(false)}>コンセプト</a>
                <a href="#features" className="text-gray-800 font-medium" onClick={() => setMobileMenuOpen(false)}>機能</a>
                <a href="#solutions" className="text-gray-800 font-medium" onClick={() => setMobileMenuOpen(false)}>活用範囲</a>
                <a href="#faq" className="text-gray-800 font-medium" onClick={() => setMobileMenuOpen(false)}>よくある質問</a>
                <div className="h-px bg-gray-100 my-2" />
                <button className="w-full py-3 text-gray-600 border border-gray-200 rounded text-sm font-medium">ログイン</button>
                <button className="w-full py-3 bg-[#5a6470] text-white rounded text-sm font-medium">無料デモ</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden pt-20 bg-[#fdfcfa]">
        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-8">
              <span className="h-px w-8 bg-[#c4967e]" />
              <span className="text-xs font-bold tracking-widest text-[#c4967e]">AIカウンセラー O2CONNECTIVE</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] mb-8 text-[#2d3748] tracking-tight">
              組織の「思考回路」の<br />
              <span className="text-[#c4967e]">ズレ</span>を解消する。
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-lg font-medium">
              24時間365日、あなただけの専属アドバイザー。<br />
              データを見るのではなく、「どうすればいいか」をAIが直接伝えます。
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={() => setShowDiagnostic(true)}
                className="px-8 py-4 bg-[#5a6470] text-white rounded shadow-sm hover:bg-[#4a5568] transition-all text-sm font-bold tracking-widest"
              >
                デモを開始する
              </button>
              <button className="px-8 py-4 border border-gray-200 text-gray-600 rounded hover:bg-gray-50 transition-colors text-sm font-bold tracking-widest">
                資料をダウンロード
              </button>
            </div>

            <div className="flex items-center gap-6 text-[10px] text-gray-400 font-bold tracking-widest">
              <span>心理学に基づく分析</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span>AIテクノロジー</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#c4967e]/10 to-transparent rounded-full blur-3xl transform scale-75" />
            <InteractiveChatDemo />
          </motion.div>
        </div>
      </section>

      {/* Concept Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block mb-4">
            <span className="text-xs font-bold tracking-widest text-[#5a6470] border-b border-[#5a6470] pb-1">コンセプト</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-[#2d3748] tracking-tight leading-relaxed">
            対話に、新たな解像度を。<br />
            120問の設問から、思考回路を読み解く。
          </h2>
          
          <p className="text-gray-600 leading-loose mb-16 max-w-3xl mx-auto">
            従来の適性検査は、結果を読み解くための「勉強」が必要でした。<br className="hidden md:inline" />
            AIカウンセラー O2CONNECTIVEは、全社員が120問の設問に回答するだけで、AIがそれぞれの思考特性を学習。<br />
            数字や優劣で判断するのではなく、人間関係を円滑にするための「具体的な行動」をガイドします。
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: '勉強不要', desc: '専門知識は一切不要。\nAIが答えを出すので、\n今日からすぐに使えます。' },
              { title: '優劣なし', desc: 'スコアで人を評価しません。\n「特性」として可視化し、\n相互理解の補助線を引きます。' },
              { title: '心理的安全', desc: '相手はAIだからこそ、\n人間には聞けない本音も\n安心して相談できます。' },
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="text-4xl font-light text-gray-100 mb-4 group-hover:text-[#c4967e]/20 transition-colors">{`0${i+1}`}</div>
                <h3 className="text-lg font-bold text-[#5a6470] mb-3">{step.title}</h3>
                <p className="text-sm text-gray-500 whitespace-pre-line leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Story */}
      <UserStorySection />

      {/* Features Detail */}
      <section id="features" className="py-24 bg-[#faf5f3]/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="text-xs font-bold tracking-widest text-[#c4967e] border-b border-[#c4967e] pb-1">提供価値</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#2d3748]">
                「どうすればいいか」を<br />
                AIが直接ガイド
              </h2>
              <div className="space-y-8">
                {[
                  { title: '具体的フレーズの提案', desc: '「部下のAさんにどう切り出せばいいか」といった悩みに、相手の特性に合わせた具体的な言葉を提示します。' },
                  { title: '24時間365日の相談環境', desc: '深夜の悩みや急な面談前でも。専属のカウンセラーがいつでもあなたの傍に控えています。' },
                  { title: '対話準備の自動化', desc: '面談相手の現在のコンディションを予測し、話すべき項目をAIが自動構成します。' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-1.5 h-1.5 bg-[#c4967e] rounded-full mt-2.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-700 mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#c4967e]/5 rounded-lg transform rotate-3" />
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" 
                alt="Decision Support" 
                className="relative rounded-lg shadow-sm grayscale-[20%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <ComparisonTable />

      {/* Product Screens */}
      <ProductScreenshots />

      {/* Scalability / Solutions */}
      <section id="solutions" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-xs font-bold tracking-widest text-[#5a6470] border-b border-[#5a6470] pb-1">活用シーン</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#2d3748]">
              活用範囲の広がり
            </h2>
            <p className="text-gray-500 text-sm">
              組織の垣根を越え、あらゆる対話の回路を同期します。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '採用',
                sub: 'ミスマッチの防止',
                desc: '候補者の特性を事前に把握し、既存メンバーとの思考回路の相性を分析。入社後のスムーズな立ち上がりを支援します。',
              },
              {
                title: '自己理解',
                sub: 'セルフマネジメント',
                desc: '自身の行動特性を客観視。なぜその感情になるのかを理解し、メンタルコンディションを自ら最適化します。',
              },
              {
                title: '家庭',
                sub: '家族間の同期',
                desc: '夫婦関係や教育方針のすり合わせ。身近だからこそ難しいコミュニケーションのズレを解消します。',
              },
            ].map((item, i) => (
              <div key={i} className="group p-8 border border-gray-100 rounded hover:border-[#5a6470]/30 transition-all duration-500">
                <div className="text-[10px] font-bold text-[#c4967e] tracking-widest mb-2">{item.title}</div>
                <h3 className="text-lg font-bold text-gray-700 mb-4">{item.sub}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* FAQ */}
      <section id="faq" className="py-24 bg-[#faf5f3]/30">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#5a6470]">
              よくある質問
            </h2>
          </div>
          <div className="space-y-4">
            <FAQItem question="専門的な知識は必要ですか？" answer="いいえ、必要ありません。AIが複雑な分析を代行し、誰にでも分かりやすい具体的な行動指針として提示します。" />
            <FAQItem question="診断にはどのくらいの時間がかかりますか？" answer="約120問の設問で構成されており、平均15分〜20分程度で完了します。この一度の診断で永続的なサポートが可能になります。" />
            <FAQItem question="セキュリティは安全ですか？" answer="通信の暗号化やデータの厳重な管理を行っております。プライバシー保護を最優先に設計されており、安心してご利用いただけます。" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#5a6470] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[#4a5568] opacity-50" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            対話の質は、組織の質。
          </h2>
          <p className="text-gray-300 mb-10 max-w-xl mx-auto leading-relaxed">
            簡単なデモ診断から、あなたの組織の「思考回路」を読み解く体験を。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowDiagnostic(true)}
              className="px-10 py-5 bg-white text-[#5a6470] rounded font-bold hover:bg-gray-100 transition-all tracking-widest text-xs"
            >
              デモを開始する
            </button>
            <button className="px-10 py-5 border border-gray-500 text-gray-200 rounded hover:border-white hover:text-white transition-all tracking-widest text-xs">
              お問い合わせ
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d3748] text-gray-400 py-16 text-sm">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12 border-b border-gray-700 pb-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-white font-bold text-lg mb-4 tracking-tighter">O2CONNECTIVE</div>
            <p className="leading-relaxed text-gray-500 max-w-xs text-[10px] tracking-widest">
              AIカウンセラー O2CONNECTIVE<br />
              思考回路の同期で、組織の解像度を高める。
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold text-xs tracking-widest mb-6">コンテンツ</h4>
            <ul className="space-y-3 text-[10px] tracking-wide">
              <li><a href="#" className="hover:text-white transition-colors">コンセプト</a></li>
              <li><a href="#" className="hover:text-white transition-colors">機能</a></li>
              <li><a href="#" className="hover:text-white transition-colors">活用シーン</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-xs tracking-widest mb-6">規約・ポリシー</h4>
            <ul className="space-y-3 text-[10px] tracking-wide">
              <li><a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
              <li><a href="#" className="hover:text-white transition-colors">利用規約</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 text-center text-[10px] text-gray-600 tracking-[0.2em] uppercase">
          &copy; 2026 O2CONNECTIVE. All rights reserved.
        </div>
      </footer>

      <FloatingCTA />
      
      <AnimatePresence>
        {showDiagnostic && <QuickDiagnosticDemo onClose={() => setShowDiagnostic(false)} />}
      </AnimatePresence>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded border border-gray-200 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-bold text-gray-700 text-sm tracking-tight">{question}</span>
        <span className={`text-[#c4967e] text-[10px] font-bold transition-transform duration-300 tracking-widest ${isOpen ? 'rotate-45' : ''}`}>
          {isOpen ? '閉じる' : '開く'}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-sm text-gray-500 leading-relaxed border-t border-gray-50 bg-gray-50/30">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
