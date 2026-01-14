import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Question {
  id: number;
  text: string;
  options: string[];
}

const questions: Question[] = [
  {
    id: 1,
    text: '新しいプロジェクトの説明を受けるとき、どちらを重視しますか？',
    options: ['全体像と最終ゴール', '具体的な手順とデータ'],
  },
  {
    id: 2,
    text: '意思決定をするとき、何を優先しますか？',
    options: ['直感と経験', '論理的な分析'],
  },
  {
    id: 3,
    text: 'フィードバックを受けるとき、どちらが響きますか？',
    options: ['努力や姿勢への評価', '成果や結果への評価'],
  },
];

interface QuickDiagnosticDemoProps {
  onClose: () => void;
}

export function QuickDiagnosticDemo({ onClose }: QuickDiagnosticDemoProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    } else {
      setTimeout(() => {
        setShowResult(true);
      }, 500);
    }
  };

  const getPersonalityType = () => {
    const score = answers.reduce((sum, answer) => sum + answer, 0);
    if (score <= 2) return { type: '直感型', color: '#c4967e' };
    return { type: '論理型', color: '#5a6470' };
  };

  const result = getPersonalityType();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors text-[10px] font-bold tracking-widest"
        >
          閉じる [×]
        </button>

        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key="questions"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-bold tracking-widest text-[#c4967e] border border-[#c4967e]/30 px-2 py-0.5 rounded">
                    簡易診断
                  </span>
                  <span className="text-xs font-semibold text-[#c4967e]">
                    デモ体験
                  </span>
                </div>
                <div className="flex gap-2 mb-6">
                  {questions.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1.5 flex-1 rounded-full transition-all ${
                        index <= currentQuestion ? 'bg-[#c4967e]' : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2">
                  質問 {currentQuestion + 1} / {questions.length}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {questions[currentQuestion].text}
                </p>
              </div>

              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(index)}
                    className="w-full p-4 text-left rounded-xl border-2 border-gray-200 hover:border-[#c4967e] hover:bg-[#faf5f3] transition-all font-medium"
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center border-2"
                style={{ borderColor: result.color, backgroundColor: `${result.color}10` }}
              >
                <span className="text-2xl font-bold" style={{ color: result.color }}>O2</span>
              </motion.div>

              <h3 className="text-2xl font-bold mb-4">
                あなたは「<span style={{ color: result.color }}>{result.type}</span>」タイプ
              </h3>

              <div className="bg-gray-50 rounded-xl p-6 mb-6 text-left">
                <h4 className="font-bold mb-3 tracking-wider text-[10px] text-gray-400">AIアドバイス</h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {result.type === '論理型'
                    ? '数字やデータを交えた説明が効果的です。「過去のデータでは85%の成功率」のように具体的な根拠を示すと、納得して行動に移しやすくなります。'
                    : '全体像やビジョンから伝えると響きやすいです。「このプロジェクトで実現したい未来」を共有することで、モチベーションが高まります。'}
                </p>
                <div className="flex items-start gap-2 text-[10px] text-gray-400 tracking-tight border-t border-gray-100 pt-3">
                  <span>これはデモ結果です。製品版ではより詳細な分析とアドバイスを提供します。</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full px-6 py-4 bg-[#c4967e] text-white rounded font-bold hover:bg-[#d4a898] transition-colors tracking-widest text-sm"
              >
                製品版の詳細を見る
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
