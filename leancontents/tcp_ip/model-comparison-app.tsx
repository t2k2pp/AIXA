import React, { useState } from 'react';
import { Card } from '@/components/ui/card';

const ModelComparison = () => {
  const [selectedPair, setSelectedPair] = useState(null);
  
  // 基準となる高さを設定
  const BASE_HEIGHT = "h-36"; // TCP/IPの1層分の高さ
  const THIRD_HEIGHT = "h-12"; // BASE_HEIGHT/3

  const handleLayerClick = (group) => {
    setSelectedPair(selectedPair === group ? null : group);
  };

  const isLayerHighlighted = (group) => {
    return selectedPair === group;
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">
        OSIモデルとTCP/IPモデルの対応を理解しよう！
      </h1>
      <p className="text-center mb-6 text-gray-600">
        同じ色の層をクリックすると、詳しい説明が表示されるよ！
      </p>

      <div className="grid grid-cols-2 gap-8">
        {/* OSIモデル */}
        <div>
          <h2 className="text-xl font-bold text-center mb-4">OSIモデル</h2>
          <div className="space-y-2">
            {/* アプリケーション層グループ */}
            <div 
              className={`rounded-lg overflow-hidden shadow-md ${isLayerHighlighted(1) ? 'ring-4 ring-blue-400' : ''}`}
              onClick={() => handleLayerClick(1)}
            >
              <div className={`bg-purple-500 cursor-pointer hover:opacity-90 ${THIRD_HEIGHT}`}>
                <div className="flex items-center justify-center h-full text-white font-bold">
                  アプリケーション層（第7層）
                </div>
              </div>
              <div className={`bg-purple-400 cursor-pointer hover:opacity-90 ${THIRD_HEIGHT}`}>
                <div className="flex items-center justify-center h-full text-white font-bold">
                  プレゼンテーション層（第6層）
                </div>
              </div>
              <div className={`bg-purple-300 cursor-pointer hover:opacity-90 ${THIRD_HEIGHT}`}>
                <div className="flex items-center justify-center h-full text-white font-bold">
                  セッション層（第5層）
                </div>
              </div>
            </div>

            {/* トランスポート層 */}
            <div 
              className={`bg-blue-500 rounded-lg shadow-md cursor-pointer hover:opacity-90 
                ${BASE_HEIGHT} ${isLayerHighlighted(2) ? 'ring-4 ring-blue-400' : ''}`}
              onClick={() => handleLayerClick(2)}
            >
              <div className="flex items-center justify-center h-full text-white font-bold">
                トランスポート層（第4層）
              </div>
            </div>

            {/* ネットワーク層 */}
            <div 
              className={`bg-green-500 rounded-lg shadow-md cursor-pointer hover:opacity-90 
                ${BASE_HEIGHT} ${isLayerHighlighted(3) ? 'ring-4 ring-blue-400' : ''}`}
              onClick={() => handleLayerClick(3)}
            >
              <div className="flex items-center justify-center h-full text-white font-bold">
                ネットワーク層（第3層）
              </div>
            </div>

            {/* 物理層・データリンク層グループ */}
            <div 
              className={`rounded-lg overflow-hidden shadow-md ${isLayerHighlighted(4) ? 'ring-4 ring-blue-400' : ''}`}
              onClick={() => handleLayerClick(4)}
            >
              <div className={`${BASE_HEIGHT} flex flex-col`}>
                <div className="flex-1 bg-orange-400 cursor-pointer hover:opacity-90 flex items-center justify-center text-white font-bold">
                  データリンク層（第2層）
                </div>
                <div className="flex-1 bg-orange-500 cursor-pointer hover:opacity-90 flex items-center justify-center text-white font-bold">
                  物理層（第1層）
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TCP/IPモデル */}
        <div>
          <h2 className="text-xl font-bold text-center mb-4">TCP/IPモデル</h2>
          <div className="space-y-2">
            <div 
              className={`bg-purple-500 rounded-lg shadow-md cursor-pointer hover:opacity-90 
                ${BASE_HEIGHT} ${isLayerHighlighted(1) ? 'ring-4 ring-blue-400' : ''}`}
              onClick={() => handleLayerClick(1)}
            >
              <div className="flex items-center justify-center h-full text-white font-bold">
                アプリケーション層（第4層）
              </div>
            </div>
            <div 
              className={`bg-blue-500 rounded-lg shadow-md cursor-pointer hover:opacity-90 
                ${BASE_HEIGHT} ${isLayerHighlighted(2) ? 'ring-4 ring-blue-400' : ''}`}
              onClick={() => handleLayerClick(2)}
            >
              <div className="flex items-center justify-center h-full text-white font-bold">
                トランスポート層（第3層）
              </div>
            </div>
            <div 
              className={`bg-green-500 rounded-lg shadow-md cursor-pointer hover:opacity-90 
                ${BASE_HEIGHT} ${isLayerHighlighted(3) ? 'ring-4 ring-blue-400' : ''}`}
              onClick={() => handleLayerClick(3)}
            >
              <div className="flex items-center justify-center h-full text-white font-bold">
                インターネット層（第2層）
              </div>
            </div>
            <div 
              className={`bg-orange-500 rounded-lg shadow-md cursor-pointer hover:opacity-90 
                ${BASE_HEIGHT} ${isLayerHighlighted(4) ? 'ring-4 ring-blue-400' : ''}`}
              onClick={() => handleLayerClick(4)}
            >
              <div className="flex items-center justify-center h-full text-white font-bold">
                ネットワークインターフェース層（第1層）
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 説明カード */}
      {selectedPair && (
        <Card className="p-6 mt-8 animate-fade-in">
          <h2 className="text-xl font-bold mb-4 text-center">
            {selectedPair === 1 && "アプリケーション層の対応"}
            {selectedPair === 2 && "トランスポート層の対応"}
            {selectedPair === 3 && "ネットワーク層の対応"}
            {selectedPair === 4 && "物理的な通信を担当する層の対応"}
          </h2>
          <p className="whitespace-pre-line text-gray-700">
            {selectedPair === 1 && "TCP/IPモデルのアプリケーション層は、OSIモデルの上位3層（アプリケーション層、プレゼンテーション層、セッション層）をまとめたものだよ！\n\nこれらの層は、ユーザーが直接使うアプリケーションやデータの形式、通信の管理などを担当するんだ。\n\n例えば、LINEやWebブラウザを使う時、データの圧縮や文字コードの変換、通信の確立なども、全部この層でまとめて行われるんだよ！"}
            {selectedPair === 2 && "トランスポート層は、両方のモデルで同じ役割を持っているよ！\n\nデータの配送方法（TCPやUDP）を決めたり、ポート番号を管理したりする大切な層なんだ。\n\nTCPは確実な配送、UDPは速い配送を重視するんだよ。メールなら確実なTCP、ゲームなら速いUDPというように、用途によって使い分けられているんだ！"}
            {selectedPair === 3 && "OSIモデルのネットワーク層は、TCP/IPモデルではインターネット層と呼ばれているよ！\n\nどちらもIPアドレスを使って、データの配送経路を決める役割があるんだ。\n\nインターネット上でデータがどの経路を通って届くのか、ルーターを使って最適な道順を決めるのがこの層の仕事だよ！"}
            {selectedPair === 4 && "TCP/IPモデルのネットワークインターフェース層は、OSIモデルの物理層とデータリンク層をまとめたものだよ！\n\n実際のケーブルや無線での通信（物理層）と、MACアドレスを使った直接の機器同士の通信（データリンク層）を担当しているんだ。\n\nLANケーブルや無線LANを使った通信が、この層で行われているよ！"}
          </p>
        </Card>
      )}

      <div className="mt-8 text-center text-sm text-gray-500">
        TCP/IPモデルは、OSIモデルの7層を実用的な4層に整理したものだよ。
        どちらも大切なモデルで、状況に応じて使い分けられているんだ！
      </div>
    </div>
  );
};

export default ModelComparison;