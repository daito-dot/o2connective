import { motion } from 'motion/react';

export function UserStorySection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#faf5f3]/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-xs font-bold tracking-widest text-[#5a6470] border-b border-[#5a6470] pb-1">背景</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#2d3748]">
            現場の違和感、その正体。
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            それは能力不足ではなく、個々の「思考回路」のズレから生じています。
          </p>
        </div>

        <div className="relative grid md:grid-cols-2 gap-8 md:gap-24 items-center">
          
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex-col items-center justify-center gap-2">
            <div className="w-16 h-16 rounded-full bg-white border-4 border-[#faf5f3] flex items-center justify-center shadow-sm z-20">
               <span className="text-[#c4967e] font-bold text-lg">→</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-sm">
               <div className="flex items-center gap-3 mb-8">
                 <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 font-bold text-[10px] tracking-tighter">
                   課題
                 </div>
                 <h3 className="text-xl font-bold text-gray-500 tracking-widest">以前</h3>
               </div>

               <div className="space-y-8">
                 <div>
                    <h4 className="font-bold text-gray-700 mb-2 flex items-center gap-2">
                      <span className="w-1 h-1 bg-gray-300 rounded-full" />
                      静かなる退職
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed pl-3">
                      上司とのすれ違いによる意欲減退。優秀な人材が、前触れなく組織を去っていく。
                    </p>
                 </div>
                 <div>
                    <h4 className="font-bold text-gray-700 mb-2 flex items-center gap-2">
                      <span className="w-1 h-1 bg-gray-300 rounded-full" />
                      生産性の停滞
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed pl-3">
                      不要な気遣いや指示の出し直しによる手戻り。本来不要な「調整」に時間を奪われる。
                    </p>
                 </div>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 border border-[#c4967e]/30 shadow-xl shadow-[#c4967e]/5">
               <div className="flex items-center gap-3 mb-8">
                 <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#c4967e] to-[#5a6470] flex items-center justify-center text-white shadow-lg shadow-[#c4967e]/20 font-bold text-[10px] tracking-tighter">
                   解決
                 </div>
                 <h3 className="text-xl font-bold text-[#5a6470] tracking-widest">導入後</h3>
               </div>

               <div className="space-y-8">
                 <div>
                    <h4 className="font-bold text-[#5a6470] mb-2 flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#c4967e] rounded-full" />
                      確かな補助線
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed bg-[#faf5f3] p-4 rounded-lg border border-[#c4967e]/10">
                      相手のタイプを知ることで「今、何を話すべきか」が明確に。準備が整い、自信を持って向き合える。
                    </p>
                 </div>
                 <div>
                    <h4 className="font-bold text-[#5a6470] mb-2 flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#c4967e] rounded-full" />
                      組織の回路同期
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed bg-[#faf5f3] p-4 rounded-lg border border-[#c4967e]/10">
                      感性に響く言葉選びで納得感が劇的に向上。心理的安全性が保たれ、本音での対話が活性化する。
                    </p>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
