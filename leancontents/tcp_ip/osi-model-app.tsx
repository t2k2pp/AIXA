import React, { useState } from 'react';
import { Card } from '@/components/ui/card';

const OSIModel = () => {
  const [selectedLayer, setSelectedLayer] = useState(null);
  
  const layers = [
    {
      id: 7,
      name: "アプリケーション層",
      color: "bg-purple-500",
      description: "ユーザーが直接触れるアプリケーションのLayer！\nLINE、メール、ブラウザなどが該当するよ。\nデータを見やすい形式に変換する役割もあるんだ。",
      examples: "Web閲覧、メール送受信、ファイル転送"
    },
    {
      id: 6,
      name: "プレゼンテーション層",
      color: "bg-blue-500",
      description: "データの形式を統一する層だよ。\n例えば文字コードの変換や、データの圧縮、暗号化などを行うんだ。\nこの層のおかげで、違うOSでも同じように見えるんだよ！",
      examples: "文字コード変換(UTF-8など)、データ圧縮、暗号化"
    },
    {
      id: 5,
      name: "セッション層",
      color: "bg-green-500",
      description: "通信の開始から終了までを管理する層だよ。\nアプリケーション同士の対話を制御するんだ。\n途中で通信が切れても再開できるようにする仕組みもあるよ！",
      examples: "通信の確立・維持・切断、データの同期"
    },
    {
      id: 4,
      name: "トランスポート層",
      color: "bg-yellow-500",
      description: "データの配送を担当する層だよ。\n確実にデータを届けるTCPや、\n速さ重視のUDPといった仕組みがあるんだ。\nポート番号もここで管理されるよ！",
      examples: "TCP、UDP、ポート番号による通信制御"
    },
    {
      id: 3,
      name: "ネットワーク層",
      color: "bg-orange-500",
      description: "データの配送経路を決める層だよ。\nIPアドレスを使って、\n最適な経路を選んでパケットを届けるんだ。\nルーターの主な仕事はこの層だよ！",
      examples: "IPアドレス、ルーティング、パケット転送"
    },
    {
      id: 2,
      name: "データリンク層",
      color: "bg-red-500",
      description: "直接つながっている機器同士の通信を管理する層だよ。\nMACアドレスを使って、\n確実にデータを届ける仕組みを提供するんだ。\nLANの通信はここが重要！",
      examples: "MACアドレス、イーサネット、無線LAN"
    },
    {
      id: 1,
      name: "物理層",
      color: "bg-pink-500",
      description: "通信の物理的な部分を担当する層だよ。\n電気信号や光信号として、\nデータを0と1のビット列として送受信するんだ。\nLANケーブルや無線の電波もここで扱うよ！",
      examples: "ケーブル、ハブ、電気信号、光信号"
    }
  ];

  const handleLayerClick = (layer) => {
    if (selectedLayer?.id === layer.id) {
      setSelectedLayer(null); // 同じ層をクリックしたら閉じる
    } else {
      setSelectedLayer(layer); // 違う層をクリックしたら開く
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">
        OSI参照モデルを理解しよう！
      </h1>
      <p className="text-center mb-6 text-gray-600">
        各層をクリックして、役割を確認してみよう！
      </p>
      
      <div className="space-y-2">
        {layers.map((layer) => (
          <div key={layer.id} className="space-y-2">
            <div
              className={`${layer.color} hover:opacity-90 transition-all cursor-pointer rounded-lg shadow-md 
                ${selectedLayer?.id === layer.id ? 'ring-4 ring-blue-400' : ''}`}
              onClick={() => handleLayerClick(layer)}
            >
              <div className="p-4 text-white font-bold text-center">
                {layer.name}（第{layer.id}層）
              </div>
            </div>

            {/* 選択された層の直下に説明を表示 */}
            {selectedLayer?.id === layer.id && (
              <Card className="p-6 animate-fade-in mx-4">
                <h2 className="text-xl font-bold mb-4 text-center">
                  {layer.name}（第{layer.id}層）の説明
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold mb-2">この層では何をするの？</h3>
                    <p className="whitespace-pre-line text-gray-700">
                      {layer.description}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">具体例：</h3>
                    <p className="text-gray-700">{layer.examples}</p>
                  </div>
                </div>
              </Card>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        OSI参照モデルは、ネットワーク通信を7つの層に分けて考える枠組みだよ。
        下の層から順番に積み重なって、私たちが使うアプリケーションが動いているんだ！
      </div>
    </div>
  );
};

export default OSIModel;