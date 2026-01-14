import { motion } from 'motion/react';

const features = [
  { name: '具体的アクションの提案', o2: true, traditional: false, manual: false },
  { name: '24時間365日の即時相談', o2: true, traditional: false, manual: false },
  { name: '専門知識・研修が不要', o2: true, traditional: false, manual: false },
  { name: '優劣をつけない記述評価', o2: true, traditional: false, manual: true },
  { name: '管理職の学習コスト', o2: false, traditional: true, manual: true },
  { name: '偏差値・スコアによる判断', o2: false, traditional: true, manual: false },
];

export function ComparisonTable() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-xs font-bold tracking-widest text-[#5a6470] border-b border-[#5a6470] pb-1">比較</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#2d3748]">
            既存の手法との決定的な違い
          </h2>
          <p className="text-gray-500 text-sm">
            「数字を見て解釈する」から「具体的な対話へ」
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-4 px-6 text-left font-normal text-gray-400 text-xs tracking-widest">項目</th>
                <th className="py-4 px-6 text-center">
                  <div className="text-[#c4967e] font-bold text-sm tracking-widest">
                    AIカウンセラー O2CONNECTIVE
                  </div>
                </th>
                <th className="py-4 px-6 text-center text-gray-400 font-normal text-xs tracking-widest">従来の診断</th>
                <th className="py-4 px-6 text-center text-gray-400 font-normal text-xs tracking-widest">経験と勘</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <motion.tr
                  key={feature.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
                >
                  <td className="py-5 px-6 text-gray-700 text-sm font-medium">{feature.name}</td>
                  <td className="py-5 px-6 text-center">
                    {feature.o2 ? (
                      <span className="text-[#c4967e] font-bold text-lg">◯</span>
                    ) : (
                      <span className="text-gray-200 text-sm">―</span>
                    )}
                  </td>
                  <td className="py-5 px-6 text-center">
                    {feature.traditional ? (
                      <span className="text-gray-400 text-lg">△</span>
                    ) : (
                      <span className="text-gray-200 text-sm">―</span>
                    )}
                  </td>
                  <td className="py-5 px-6 text-center">
                    {feature.manual ? (
                      <span className="text-gray-400 text-lg">△</span>
                    ) : (
                      <span className="text-gray-200 text-sm">―</span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 p-8 bg-[#faf5f3]/50 rounded-lg border border-[#c4967e]/10">
          <p className="text-center text-gray-600 text-sm leading-loose">
            診断結果を読み解くための「勉強」はもう不要です。<br className="hidden md:inline" />
            AIが個々の思考回路に合わせた<span className="text-[#c4967e] font-bold mx-1">「今、かけるべき言葉」</span>を直接提示します。
          </p>
        </div>
      </div>
    </section>
  );
}
