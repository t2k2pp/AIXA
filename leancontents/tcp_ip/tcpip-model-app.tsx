import React, { useState } from 'react';
import { Card } from '@/components/ui/card';

const TCPIPModel = () => {
  const [selectedLayer, setSelectedLayer] = useState(null);
  
  const layers = [
    {
      id: 4,
      name: "アプリケーション層",
      color: "bg-purple-500",
      description: "実際にユーザーが使うアプリケーションの層だよ！\nOSIモデルの7層・6層・5層が統合されているんだ。\nWebブラウザ、メール、LINEなどのアプリはここで動いているよ。\nHTTP、SMTP、DNSなどの重要なプロトコルもこの層で使われるんだ！",
      examples: "HTTP（Webサイト閲覧）\nDNS（ドメイン名をIPアドレスに変換）\nSMTP/POP3（メール送受信）\nFTP（ファイル転送）",
      osiLayers: "OSIモデルの第7層（アプリケーション層）、第6層（プレゼンテーション層）、第5層（セッション層）に相当"
    },
    {
      id: 3,
      name: "トランスポート層",
      color: "bg-blue-500",
      description: "データの配送方法を決める大切な層だよ！\n主にTCPとUDPという2つの方法があるんだ。\n\nTCPは確実な配送を重視！\n例えば、Webサイトの閲覧やファイルのダウンロードで使われるよ。\n\nUDPは速さを重視！\nオンラインゲームやビデオ通話で使われるんだ。",
      examples: "TCP（確実な配送）\nUDP（高速な配送）\nポート番号による通信の管理",
      osiLayers: "OSIモデルの第4層（トランスポート層）に相当"
    },
    {
      id: 2,
      name: "インターネット層",
      color: "bg-green-500",
      description: "インターネット上での配送経路を決める層だよ！\nIPアドレスを使って、データをどの経路で送るか決めるんだ。\n\nちょうど宅配便の配送センターみたいな役割！\n荷物（データ）を最適な経路で届け先まで運ぶように、\nパケットを最適な経路で目的地まで届けるんだ。",
      examples: "IP（インターネットプロトコル）\nICMP（エラー通知）\nルーティング（経路選択）",
      osiLayers: "OSIモデルの第3層（ネットワーク層）に相当"
    },
    {
      id: 1,
      name: "ネットワークインターフェース層",
      color: "bg-orange-500",
      description: "実際の物理的な通信を担当する層だよ！\nLANケーブルや無線LANを使って、\n直接つながっている機器同士でデータをやりとりするんだ。\n\nMACアドレスを使って、\n隣接する機器同士で正しくデータのやり取りができるように管理するよ。",
      examples: "イーサネット（LANケーブル）\n無線LAN（Wi-Fi）\nMACアドレスによる通信\nネットワークカード",
      osiLayers: "OSIモデルの第2層（データリンク層）と第1層（物理層）に相当"
    }
  ];

  const handleLayerClick = (layer) => {
    if (selectedLayer?.id === layer.id) {
      setSelectedLayer(null);
    } else {
      setSelectedLayer(layer);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">
        TCP/IPモデルを理解しよう！
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
                    <p className="whitespace-pre-line text-gray-700">{layer.examples}</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">OSIモデルとの対応：</h3>
                    <p className="text-gray-700">{layer.osiLayers}</p>
                  </div>
                </div>
              </Card>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        TCP/IPモデルは、実際のインターネット通信で使われている4層構造のモデルだよ。
        OSIモデルを実用的にまとめた形になっているんだ！
      </div>
    </div>
  );
};

export default TCPIPModel;