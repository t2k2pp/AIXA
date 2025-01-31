import React, { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';

const AnalogClock = ({ size = 360, hours, minutes, isInteractive = false, onTimeChange }) => {
  const svgRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [activeDragging, setActiveDragging] = useState(null);

  const calculateAngle = (centerX, centerY, x, y) => {
    const angle = Math.atan2(y - centerY, x - centerX) * 180 / Math.PI + 90;
    return (angle + 360) % 360;
  };

  const handlePointerDown = (e, type) => {
    if (!isInteractive) return;
    const svg = svgRef.current;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const svgP = pt.matrixTransform(svg.getScreenCTM().inverse());
    
    setIsDragging(true);
    setActiveDragging(type);
    handlePointerMove(e);
  };

  const handlePointerMove = (e) => {
    if (!isDragging || !isInteractive) return;
    
    const svg = svgRef.current;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const svgP = pt.matrixTransform(svg.getScreenCTM().inverse());
    
    const angle = calculateAngle(size/2, size/2, svgP.x, svgP.y);
    
    if (activeDragging === 'hours') {
      const newHours = Math.round(angle / 30) % 12 || 12;
      onTimeChange('hours', newHours);
    } else {
      const newMinutes = Math.round(angle / 6) % 60;
      onTimeChange('minutes', newMinutes);
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    setActiveDragging(null);
  };

  return (
    <svg 
      ref={svgRef}
      width={size} 
      height={size} 
      viewBox={`0 0 ${size} ${size}`}
      className={`${isInteractive ? 'cursor-pointer' : ''}`}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {/* 背景の円 */}
      <circle 
        cx={size/2} 
        cy={size/2} 
        r={size/2-10} 
        fill="white" 
        stroke="black" 
        strokeWidth="8"
      />

      {/* 目盛り */}
      {Array.from({ length: 60 }).map((_, i) => {
        const angle = i * 6;
        const isHour = i % 5 === 0;
        const length = isHour ? 20 : 10;
        const width = isHour ? 4 : 2;
        const radius = size/2 - 40;
        const x1 = size/2 + radius * Math.cos((angle - 90) * Math.PI / 180);
        const y1 = size/2 + radius * Math.sin((angle - 90) * Math.PI / 180);
        const x2 = size/2 + (radius - length) * Math.cos((angle - 90) * Math.PI / 180);
        const y2 = size/2 + (radius - length) * Math.sin((angle - 90) * Math.PI / 180);

        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="black"
            strokeWidth={width}
          />
        );
      })}

      {/* 数字 */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = ((i - 3) * 30) * Math.PI / 180;  // 12時位置から開始するように調整
        const radius = size/2 - 25; // 数字を外側に配置
        const x = size/2 + radius * Math.cos(angle);
        const y = size/2 + radius * Math.sin(angle);
        const number = i === 0 ? 12 : i;  // 12時位置に12を表示

        return (
          <text
            key={i}
            x={x}
            y={y}
            fontSize="28"
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {number}
          </text>
        );
      })}

      {/* 時針 */}
      <line
        x1={size/2}
        y1={size/2}
        x2={size/2 + size/4 * Math.cos((hours * 30 + minutes / 2 - 90) * Math.PI / 180)}
        y2={size/2 + size/4 * Math.sin((hours * 30 + minutes / 2 - 90) * Math.PI / 180)}
        stroke="#2563eb"
        strokeWidth="8"
        strokeLinecap="round"
        onPointerDown={e => handlePointerDown(e, 'hours')}
        style={{cursor: isInteractive ? 'pointer' : 'default'}}
      />

      {/* 分針 */}
      <line
        x1={size/2}
        y1={size/2}
        x2={size/2 + size/3 * Math.cos((minutes * 6 - 90) * Math.PI / 180)}
        y2={size/2 + size/3 * Math.sin((minutes * 6 - 90) * Math.PI / 180)}
        stroke="#dc2626"
        strokeWidth="6"
        strokeLinecap="round"
        onPointerDown={e => handlePointerDown(e, 'minutes')}
        style={{cursor: isInteractive ? 'pointer' : 'default'}}
      />

      {/* 中心点 */}
      <circle
        cx={size/2}
        cy={size/2}
        r="8"
        fill="black"
      />
    </svg>
  );
};

const TimeButtons = ({ hours, minutes, onTimeChange, disabled = false }) => (
  <div className="space-y-2">
    {/* 時間 */}
    <div className="text-sm font-bold text-blue-600 text-center">時間</div>
    <div className="grid grid-cols-12 gap-1">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(h => (
        <button
          key={h}
          onClick={() => !disabled && onTimeChange('hours', h)}
          className={`w-8 h-8 rounded-md text-sm ${
            hours === h 
              ? 'bg-blue-600 text-white' 
              : disabled 
                ? 'bg-gray-100 text-gray-400 cursor-default'
                : 'bg-blue-100 hover:bg-blue-200'
          }`}
          disabled={disabled}
        >
          {h}
        </button>
      ))}
    </div>

    {/* 分（10の位） */}
    <div className="text-sm font-bold text-red-500 text-center">分（10の位）</div>
    <div className="flex justify-center gap-1">
      {[0, 1, 2, 3, 4, 5].map(m => (
        <button
          key={m}
          onClick={() => !disabled && onTimeChange('minutes', (m * 10) + (minutes % 10))}
          className={`w-8 h-8 rounded-md text-sm ${
            Math.floor(minutes / 10) === m 
              ? 'bg-red-500 text-white' 
              : disabled 
                ? 'bg-gray-100 text-gray-400 cursor-default'
                : 'bg-red-100 hover:bg-red-200'
          }`}
          disabled={disabled}
        >
          {m}0
        </button>
      ))}
    </div>

    {/* 分（1の位） */}
    <div className="text-sm font-bold text-red-500 text-center">分（1の位）</div>
    <div className="flex justify-center gap-1">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(m => (
        <button
          key={m}
          onClick={() => !disabled && onTimeChange('minutes', Math.floor(minutes / 10) * 10 + m)}
          className={`w-8 h-8 rounded-md text-sm ${
            minutes % 10 === m 
              ? 'bg-red-500 text-white' 
              : disabled 
                ? 'bg-gray-100 text-gray-400 cursor-default'
                : 'bg-red-100 hover:bg-red-200'
          }`}
          disabled={disabled}
        >
          {m}
        </button>
      ))}
    </div>
  </div>
);

const DigitalDisplay = ({ hours, minutes }) => (
  <div className="flex justify-center">
    <div className="text-4xl font-bold font-mono bg-gray-100 px-6 py-3 rounded-lg">
      {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}
    </div>
  </div>
);

const AnalogClockLearning = () => {
  const [learningHours, setLearningHours] = useState(3);
  const [learningMinutes, setLearningMinutes] = useState(0);
  const [currentHours, setCurrentHours] = useState(0);
  const [currentMinutes, setCurrentMinutes] = useState(0);
  const [mode, setMode] = useState('learning');
  const [targetHours, setTargetHours] = useState(0);
  const [targetMinutes, setTargetMinutes] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      setCurrentHours(now.getHours() % 12 || 12);
      setCurrentMinutes(now.getMinutes());
    };

    updateCurrentTime();
    const interval = setInterval(updateCurrentTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleTimeChange = (type, value) => {
    if (type === 'hours') {
      setLearningHours(value);
    } else {
      setLearningMinutes(value);
    }
  };

  // ランダムな時刻を生成する関数
  const generateRandomTime = () => {
    const hours = Math.floor(Math.random() * 12) + 1;
    const minutes = Math.floor(Math.random() * 12) * 5; // 5分単位
    return { hours, minutes };
  };

  // クイズの答え合わせ
  const checkAnswer = () => {
    const isCorrect = learningHours === targetHours && learningMinutes === targetMinutes;
    setShowResult(true);
    setIsCorrect(isCorrect);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  // 次の問題を生成
  const nextQuestion = () => {
    const { hours, minutes } = generateRandomTime();
    setTargetHours(hours);
    setTargetMinutes(minutes);
    setLearningHours(3); // 初期位置にリセット
    setLearningMinutes(0);
    setShowResult(false);
  };

  // モード切り替え時の処理
  const handleModeChange = () => {
    if (mode === 'learning') {
      setMode('quiz');
      nextQuestion();
      setScore(0);
    } else {
      setMode('learning');
      setShowResult(false);
      setLearningHours(3);
      setLearningMinutes(0);
    }
  };

  return (
    <Card className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center space-y-8">
        <div className="text-2xl font-bold">
          {mode === 'learning' ? 'アナログ時計を学ぼう！' : 'クイズに挑戦！'}
        </div>

        <div className="flex justify-between items-start space-x-12">
          {/* 左側の時計 */}
          <div className="space-y-6">
            <div className="text-xl font-bold text-center">
              {mode === 'learning' ? '今の時間' : 'お手本の時計'}
            </div>
            <AnalogClock
              hours={mode === 'learning' ? currentHours : targetHours}
              minutes={mode === 'learning' ? currentMinutes : targetMinutes}
              isInteractive={false}
            />
            <DigitalDisplay 
              hours={mode === 'learning' ? currentHours : targetHours}
              minutes={mode === 'learning' ? currentMinutes : targetMinutes}
            />
            <TimeButtons 
              hours={mode === 'learning' ? currentHours : targetHours}
              minutes={mode === 'learning' ? currentMinutes : targetMinutes}
              onTimeChange={() => {}}
              disabled={true}
            />
          </div>

          {/* 右側の時計 */}
          <div className="space-y-6">
            <div className="text-xl font-bold text-center">
              {mode === 'learning' ? '学習用の時計' : 'あなたの答え'}
            </div>
            <AnalogClock
              hours={learningHours}
              minutes={learningMinutes}
              isInteractive={true}
              onTimeChange={handleTimeChange}
            />
            <DigitalDisplay hours={learningHours} minutes={learningMinutes} />
            <TimeButtons 
              hours={learningHours}
              minutes={learningMinutes}
              onTimeChange={handleTimeChange}
            />
          </div>
        </div>

        {/* クイズモードの結果表示 */}
        {mode === 'quiz' && (
          <div className="space-y-4 text-center">
            <div className="text-xl font-bold">
              お手本の時計と同じ時刻に合わせてね！
            </div>
            <div className="flex space-x-4">
              <button
                onClick={checkAnswer}
                className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-lg"
                disabled={showResult}
              >
                確認する！
              </button>
              {showResult && (
                <button
                  onClick={nextQuestion}
                  className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 text-lg"
                >
                  次の問題へ
                </button>
              )}
            </div>
            {showResult && (
              <div className={`text-2xl font-bold ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                {isCorrect ? 
                  '⭐️ せいかい！ ⭐️' : 
                  'もう一度チャレンジしてみよう！'
                }
              </div>
            )}
            <div className="text-xl font-bold text-blue-600">
              スコア: {score}問 せいかい！
            </div>
          </div>
        )}

        {/* 針の説明 */}
        <div className="flex space-x-8 text-lg">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-blue-600 rounded-full mr-2"></div>
            <span>短い針（時）</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-red-500 rounded-full mr-2"></div>
            <span>長い針（分）</span>
          </div>
        </div>

        <button
          onClick={handleModeChange}
          className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 text-lg"
        >
          {mode === 'learning' ? 'クイズモードに切り替え' : '学習モードに切り替え'}
        </button>
      </div>
    </Card>
  );
};

export default AnalogClockLearning;