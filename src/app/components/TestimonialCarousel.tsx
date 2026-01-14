import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const testimonials = [
  {
    id: 1,
    role: 'IT企業 人事担当',
    content: '新任マネージャーの育成に課題を感じていましたが、このツールのおかげで1on1の質が均一化されつつあると感じています。具体的なアドバイスが得られるのが良いですね。',
    type: 'トライアル利用',
  },
  {
    id: 2,
    role: '中学校 教員',
    content: '生徒一人ひとりとの関わり方に悩んでいましたが、客観的な分析があることで、冷静に向き合えるようになりました。保護者の方への説明もしやすくなりそうです。',
    type: 'モニター利用',
  },
  {
    id: 3,
    role: '営業職 マネージャー',
    content: 'チームメンバーとの相性で悩んでいましたが、単なる相性の問題ではなく「思考回路の違い」だと分かり、接し方を変えるきっかけになりました。',
    type: 'トライアル利用',
  },
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-[#faf5f3]/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#5a6470]">
            利用者の声
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            先行トライアル・モニターに参加された方々の感想
          </p>
        </div>

        <div className="relative bg-white rounded-lg p-8 md:p-12 border border-gray-100 shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center mb-6 text-gray-300 font-bold text-[10px] tracking-widest border border-gray-100">
                利用者
              </div>

              <p className="text-gray-700 leading-loose mb-8 max-w-2xl font-medium italic text-sm md:text-base">
                "{testimonials[currentIndex].content}"
              </p>

              <div>
                <div className="text-sm font-bold text-[#5a6470] mb-1 tracking-wider">
                  {testimonials[currentIndex].role}
                </div>
                <div className="text-[10px] font-bold text-[#c4967e] tracking-widest">
                  {testimonials[currentIndex].type}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center absolute top-1/2 left-4 right-4 -translate-y-1/2 md:-left-16 md:-right-16 md:px-0 pointer-events-none">
            <button
              onClick={prev}
              className="pointer-events-auto w-10 h-10 rounded bg-white border border-gray-100 flex items-center justify-center text-gray-300 hover:text-[#5a6470] hover:border-[#5a6470] transition-all hover:scale-110 text-[10px] font-bold"
              aria-label="前へ"
            >
              前へ
            </button>

            <button
              onClick={next}
              className="pointer-events-auto w-10 h-10 rounded bg-white border border-gray-100 flex items-center justify-center text-gray-300 hover:text-[#5a6470] hover:border-[#5a6470] transition-all hover:scale-110 text-[10px] font-bold"
              aria-label="次へ"
            >
              次へ
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                index === currentIndex ? 'bg-[#c4967e]' : 'bg-gray-200'
              }`}
              aria-label={`${index + 1}番目の声を見る`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
