import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Timer } from 'lucide-react';

const MathGame = () => {
  // ゲームの状態管理
  const [gameMode, setGameMode] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [score, setScore] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [highScores, setHighScores] = useState({
    easy: {
      addition: 0,
      subtraction: 0,
      multiplication: 0,
      division: 0,
      remainder: 0
    },
    normal: {
      addition: 0,
      subtraction: 0,
      multiplication: 0,
      division: 0,
      remainder: 0
    }
  });
  const [currentProblem, setCurrentProblem] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [gameActive, setGameActive] = useState(false);
  const MAX_QUESTIONS = 20;

  // タイマー処理
  useEffect(() => {
    let timer;
    if (gameActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setGameActive(false);
            clearInterval(timer);
            setFeedback({ 
              correct: false, 
              message: 'タイムアップ！'
            });
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameActive, timeLeft]);

  // 問題生成ロジック
  const generateProblem = () => {
    let num1, num2, answer;
    const isEasy = difficulty === 'easy';
    
    switch (gameMode) {
      case 'addition':
        num1 = isEasy ? Math.floor(Math.random() * 10) + 1 : Math.floor(Math.random() * 90) + 10;
        num2 = isEasy ? Math.floor(Math.random() * 10) + 1 : Math.floor(Math.random() * 90) + 10;
        answer = num1 + num2;
        return { num1, num2, operator: '+', answer };
      
      case 'subtraction':
        num1 = isEasy ? Math.floor(Math.random() * 10) + 1 : Math.floor(Math.random() * 90) + 10;
        num2 = isEasy ? Math.floor(Math.random() * num1) + 1 : Math.floor(Math.random() * num1) + 1;
        answer = num1 - num2;
        return { num1, num2, operator: '-', answer };
      
      case 'multiplication':
        num1 = isEasy ? Math.floor(Math.random() * 9) + 1 : Math.floor(Math.random() * 90) + 10;
        num2 = isEasy ? Math.floor(Math.random() * 9) + 1 : Math.floor(Math.random() * 90) + 10;
        answer = num1 * num2;
        return { num1, num2, operator: '×', answer };
      
      case 'division':
        num2 = isEasy ? Math.floor(Math.random() * 9) + 1 : Math.floor(Math.random() * 90) + 10;
        answer = Math.floor(Math.random() * 9) + 1;
        num1 = num2 * answer;
        return { num1, num2, operator: '÷', answer };
      
      case 'remainder':
        num2 = isEasy ? Math.floor(Math.random() * 9) + 1 : Math.floor(Math.random() * 90) + 10;
        num1 = (Math.floor(Math.random() * 9) + 1) * num2 + Math.floor(Math.random() * num2);
        answer = num1 % num2;
        return { num1, num2, operator: '÷', answer, isRemainder: true };
      
      default:
        return null;
    }
  };

  // 新しいゲームの開始
  const startGame = () => {
    setScore(0);
    setQuestionCount(0);
    setTimeLeft(60);
    setGameActive(true);
    setCurrentProblem(generateProblem());
    setFeedback(null);
    setUserAnswer('');
  };

  // 回答の確認
  const checkAnswer = () => {
    const answer = parseInt(userAnswer);
    if (isNaN(answer)) {
      setFeedback({ correct: false, message: '数字を入力してください' });
      setUserAnswer('');
      return;
    }

    const isCorrect = answer === currentProblem.answer;
    if (isCorrect) {
      const newScore = score + 1;
      const newQuestionCount = questionCount + 1;
      setScore(newScore);
      setQuestionCount(newQuestionCount);
      
      // ゲーム終了条件のチェック
      if (newQuestionCount >= MAX_QUESTIONS) {
        setGameActive(false);
        setFeedback({ correct: true, message: '全問題完了！' });
        
        // ハイスコアの更新
        const difficultyKey = difficulty === 'easy' ? 'easy' : 'normal';
        if (newScore > highScores[difficultyKey][gameMode]) {
          setHighScores(prev => ({
            ...prev,
            [difficultyKey]: {
              ...prev[difficultyKey],
              [gameMode]: newScore
            }
          }));
        }
      } else {
        setFeedback({ correct: true, message: '正解！' });
        setCurrentProblem(generateProblem());
      }
    } else {
      setFeedback({ correct: false, message: '不正解。もう一度試してください。' });
    }
    setUserAnswer('');
  };

  // ゲーム終了時のハイスコア更新
  useEffect(() => {
    if (!gameActive && score > 0) {
      const difficultyKey = difficulty === 'easy' ? 'easy' : 'normal';
      if (score > highScores[difficultyKey][gameMode]) {
        setHighScores(prev => ({
          ...prev,
          [difficultyKey]: {
            ...prev[difficultyKey],
            [gameMode]: score
          }
        }));
      }
    }
  }, [gameActive]);

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold mb-4">算数ゲーム</h1>
          
          {!gameMode && (
            <div className="space-y-4">
              <h2 className="text-xl">モードを選択してください：</h2>
              <div className="space-x-2">
                <Button onClick={() => setGameMode('addition')}>足し算</Button>
                <Button onClick={() => setGameMode('subtraction')}>引き算</Button>
                <Button onClick={() => setGameMode('multiplication')}>掛け算</Button>
                <Button onClick={() => setGameMode('division')}>割り算</Button>
                <Button onClick={() => setGameMode('remainder')}>余り</Button>
              </div>
            </div>
          )}

          {gameMode && !difficulty && (
            <div className="space-y-4">
              <h2 className="text-xl">難易度を選択してください：</h2>
              <div className="space-x-2">
                <Button onClick={() => setDifficulty('easy')}>かんたん</Button>
                <Button onClick={() => setDifficulty('normal')}>ふつう</Button>
              </div>
            </div>
          )}

          {gameMode && difficulty && !gameActive && (
            <div className="space-y-4">
              <Button onClick={startGame}>ゲームスタート</Button>
              <Button 
                variant="outline" 
                onClick={() => {
                  setGameMode(null);
                  setDifficulty(null);
                }}
              >
                モード選択に戻る
              </Button>
            </div>
          )}
        </div>

        {gameActive && currentProblem && (
          <div className="space-y-4">
            <div className="flex justify-between items-center px-4">
              <div className="text-xl">
                スコア: {score} / {questionCount}
              </div>
              <div className="flex items-center text-xl">
                <Timer className="mr-2" />
                {timeLeft}秒
              </div>
            </div>
            
            <div className="text-2xl text-center">
              {currentProblem.num1} {currentProblem.operator} {currentProblem.num2} = ?
              {currentProblem.isRemainder && <div className="text-lg">（余りを求めてください）</div>}
            </div>

            <div className="flex justify-center space-x-2">
              <input
                type="number"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className="border p-2 rounded w-24 text-center"
                placeholder="答え"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    checkAnswer();
                  }
                }}
              />
              <Button onClick={checkAnswer}>回答</Button>
            </div>
          </div>
        )}

        {feedback && (
          <Alert className={`mt-4 ${feedback.correct ? 'bg-green-50' : 'bg-red-50'}`}>
            <AlertDescription>
              {feedback.message}
            </AlertDescription>
          </Alert>
        )}

        {!gameActive && difficulty && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">ハイスコア</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium">かんたん</h4>
                <ul className="list-disc list-inside">
                  <li>足し算: {highScores.easy.addition}</li>
                  <li>引き算: {highScores.easy.subtraction}</li>
                  <li>掛け算: {highScores.easy.multiplication}</li>
                  <li>割り算: {highScores.easy.division}</li>
                  <li>余り: {highScores.easy.remainder}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium">ふつう</h4>
                <ul className="list-disc list-inside">
                  <li>足し算: {highScores.normal.addition}</li>
                  <li>引き算: {highScores.normal.subtraction}</li>
                  <li>掛け算: {highScores.normal.multiplication}</li>
                  <li>割り算: {highScores.normal.division}</li>
                  <li>余り: {highScores.normal.remainder}</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MathGame;