import { motion } from 'motion/react';
import { ReactNode } from 'react';

// --- Shared Chat Components ---

interface ChatMessageProps {
  role: 'user' | 'ai';
  children: ReactNode;
  delay?: number;
}

function ChatMessage({ role, children, delay = 0 }: ChatMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.3 }}
      className={`flex w-full mb-4 ${role === 'ai' ? 'justify-start' : 'justify-end'}`}
    >
      <div className={`flex flex-col max-w-[90%] ${role === 'ai' ? 'items-start' : 'items-end'}`}>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] text-gray-400 font-medium tracking-widest">
            {role === 'ai' ? 'O2CONNECTIVE' : 'YOU'}
          </span>
        </div>
        <div
          className={`px-4 py-3 text-sm leading-relaxed shadow-sm whitespace-pre-wrap ${
            role === 'ai'
              ? 'bg-white border border-gray-100 text-gray-700 rounded-2xl rounded-tl-none'
              : 'bg-[#5a6470] text-white rounded-2xl rounded-tr-none'
          }`}
        >
          {children}
        </div>
      </div>
    </motion.div>
  );
}

function ChatFrame({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#fafafa] rounded-xl border border-gray-200 overflow-hidden h-[360px] flex flex-col shadow-inner relative">
      {/* Fake Header */}
      <div className="bg-white p-3 border-b border-gray-100 flex items-center gap-3 shadow-sm z-10">
        <div className="w-8 h-8 rounded bg-[#5a6470] flex items-center justify-center text-white font-bold text-[10px] tracking-tighter">
          O2
        </div>
        <div>
          <div className="text-[10px] font-bold text-gray-700 tracking-wider">AIカウンセラー O2CONNECTIVE</div>
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[8px] text-gray-400 tracking-[0.2em] uppercase">Online</span>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-4 overflow-y-auto scrollbar-hide font-sans">
        {children}
      </div>

      {/* Input Area */}
      <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
        <div className="flex-1 bg-gray-50 rounded h-9 px-4 text-[9px] flex items-center text-gray-400 font-bold tracking-[0.2em] uppercase">
          MESSAGE...
        </div>
        <div className="w-9 h-9 rounded bg-[#5a6470] flex items-center justify-center text-white font-bold text-[9px]">
          SEND
        </div>
      </div>
    </div>
  );
}

// --- Specific Demo Contents ---

function ChatDemo() {
  return (
    <ChatFrame>
      <ChatMessage role="user" delay={0.2}>
        田中さんへのフィードバック、どう伝えればいい？
      </ChatMessage>
      <ChatMessage role="ai" delay={1.0}>
        田中さんの思考回路に基づき、対話の補助線を引きます。
        {"\n\n"}
        田中さんは「納得重視型」の特性を持っています。
        {"\n"}
        結論を急ぐよりも、なぜその決定に至ったかの根拠を客観的な事実に基づいて提示してください。
        {"\n\n"}
        「期待している」という感情的な言葉よりも、「このデータの精度が非常に高い」という技術的評価が思考の同期を早めます。
      </ChatMessage>
    </ChatFrame>
  );
}

function AnalysisDemo() {
  return (
    <ChatFrame>
      <ChatMessage role="user" delay={0.2}>
        メンバーそれぞれの思考特性を教えて。
      </ChatMessage>
      <ChatMessage role="ai" delay={1.0}>
        120問の診断データから抽出された、各メンバーの思考特性マップです。
        {"\n\n"}
        佐藤：結論優先型
        {"\n"}
        → 合理性を重視。前置きを省くことでスムーズに同期。
        {"\n\n"}
        鈴木：過程共有型
        {"\n"}
        → 共感を重視。事実よりも「意図」を伝えることで信頼構築。
        {"\n\n"}
        高橋：直感駆動型
        {"\n"}
        → スピードを重視。詳細な説明よりも全体像の共有を優先。
      </ChatMessage>
    </ChatFrame>
  );
}

function MapDemo() {
  return (
    <ChatFrame>
      <ChatMessage role="user" delay={0.2}>
        このチームでプロジェクトを進める際の注意点は？
      </ChatMessage>
      <ChatMessage role="ai" delay={1.0}>
        現在のチーム構成に基づいた「構造的な摩擦リスク」を整理しました。
        {"\n\n"}
        【思考回路の競合リスク】
        {"\n"}
        「結論優先」の佐藤さんと「過程共有」の鈴木さんの間で、指示の細かさによるズレが生じやすい構造です。
        {"\n\n"}
        【対策】
        {"\n"}
        鈴木さんが納得するまでの対話時間を、佐藤さんの工数として最初から組み込んでください。この補助線一本で、チーム全体の停滞を防げます。
      </ChatMessage>
    </ChatFrame>
  );
}

function PrepDemo() {
  return (
    <ChatFrame>
      <ChatMessage role="user" delay={0.2}>
        明日の対話で、特に気を使うべき点は？
      </ChatMessage>
      <ChatMessage role="ai" delay={1.0}>
        対話相手の特性に合わせた推奨アジェンダを作成しました。
        {"\n\n"}
        相手は自己実現への意欲が非常に強いため、目先の業務連絡は最小限に留めてください。
        {"\n\n"}
        「一年後のなりたい姿」と「今の業務」の結びつきを言語化する時間を中心に据えることを推奨します。これが最も深い同期を生むトピックです。
      </ChatMessage>
    </ChatFrame>
  );
}

// --- Main Section Component ---

const screenshots = [
  {
    iconLabel: 'ADVICE',
    title: '対話の補助線',
    description: '日常の対話の中で相談するだけで、相手の特性に合わせた最適な言葉選びを直接提示します。',
    component: ChatDemo,
  },
  {
    iconLabel: 'INSIGHT',
    title: '思考特性の理解',
    description: '120問の診断から導き出された「思考の癖」を整理。優劣ではなく違いとして受容できます。',
    component: AnalysisDemo,
  },
  {
    iconLabel: 'STRUCTURE',
    title: 'チーム構造分析',
    description: 'チーム内の「構造的なズレ」を可視化。不定期な診断を基に、未然に対策を打つことができます。',
    component: MapDemo,
  },
  {
    iconLabel: 'GUIDE',
    title: '対話の準備',
    description: '面談前に相談すれば、誰に、いつ、どのような問いを投げかけるべきかを具体的にガイドします。',
    component: PrepDemo,
  },
];

export function ProductScreenshots() {
  return (
    <section className="py-24 bg-[#faf5f3]/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[10px] font-bold tracking-[0.3em] text-[#5a6470] uppercase border-b border-[#5a6470] pb-1">Deep Insights</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#2d3748]">
            「解釈」を捨て、「対話」に集中する。
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            診断は一度。活用は永遠に。<br className="md:hidden"/>
            複雑な管理画面を監視する手間から、組織を解放します。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {screenshots.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white rounded-lg p-6 md:p-8 border border-gray-100 hover:border-[#c4967e]/20 hover:shadow-lg hover:shadow-[#c4967e]/5 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="px-2 py-1 bg-[#faf5f3] rounded border border-[#c4967e]/20 text-[#c4967e] text-[9px] font-bold tracking-widest group-hover:scale-110 transition-transform uppercase">
                  {item.iconLabel}
                </div>
                <h3 className="text-lg font-bold text-[#5a6470]">{item.title}</h3>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-8 h-12">{item.description}</p>
              
              <div className="w-full">
                <item.component />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
