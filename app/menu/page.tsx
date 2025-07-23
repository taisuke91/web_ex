"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import AnimatedElement from "@/components/AnimatedElement";

const courseMenu = {
  title: "Menu Dégustation “NOIR”",
  price: "¥25,000 (税込・サービス料別)",
  description: "シェフ黒田の創造性が凝縮されたシグネチャーコース。旬の最高級食材を使用し、NOIRの世界観を体現します。",
  items: [
    { name: "始まりの一口", description: "季節のアミューズ・ブーシュ" },
    { name: "海の輝き", description: "北海道産帆立のポワレ 焦がしバターと柑橘のソース" },
    { name: "大地の恵み", description: "ホワイトアスパラガスの冷製ポタージュ キャビア添え" },
    { name: "黒の衝撃", description: "竹炭を纏った金目鯛のヴァプール ソース・ノワール" },
    { name: "森の囁き", description: "和牛フィレ肉のロティ トリュフ香る赤ワインソース" },
    { name: "記憶の欠片", description: "フロマージュブランのムースと季節のフルーツ" },
    { name: "漆黒の誘惑", description: "濃厚なショコラのテリーヌと自家製アイスクリーム" },
    { name: "小菓子と珈琲", description: "ミニャルディーズとオリジナルブレンドコーヒー" },
  ],
};

const aLaCarte = [
  { category: "Entrée", items: [
    { name: "本日のカルパッチョ", price: "¥2,800" },
    { name: "パテ・ド・カンパーニュ", price: "¥2,500" },
    { name: "フォアグラのソテー バルサミコソース", price: "¥4,500" },
  ]},
  { category: "Poisson", items: [
    { name: "オマール海老のロースト アメリケーヌソース", price: "¥6,800" },
    { name: "本日の鮮魚のポワレ", price: "¥4,200" },
  ]},
  { category: "Viande", items: [
    { name: "鴨胸肉のロースト オレンジソース", price: "¥5,500" },
    { name: "仔羊の香草焼き", price: "¥6,000" },
    { name: "国産牛フィレ肉のステーキ", price: "¥9,800" },
  ]},
];

const drinkMenu = [
    { category: "Wine Pairing", items: [
        { name: "スタンダードペアリング (5杯)", price: "¥12,000"},
        { name: "プレミアムペアリング (5杯)", price: "¥20,000"},
    ]},
    { category: "Champagne & Sparkling", items: [
        { name: "グラスシャンパーニュ", price: "¥2,500"},
        { name: "ボトル各種", price: "¥15,000~"},
    ]},
    { category: "Non-Alcoholic", items: [
        { name: "自家製ジンジャーエール", price: "¥1,200"},
        { name: "季節のフルーツを使ったノンアルコールカクテル", price: "¥1,500"},
    ]}
]

export default function MenuPage() {
  return (
    <div className="bg-background text-foreground">
       <div className="relative h-80 flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop"
          alt="Menu background"
          layout="fill"
          objectFit="cover"
          className="z-0 opacity-30"
        />
        <div className="relative z-10 text-center">
            <AnimatedElement>
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary">
                    メニュー
                </h1>
            </AnimatedElement>
            <AnimatedElement className="delay-200">
                <p className="mt-4 text-lg text-muted-foreground">Art on a Plate</p>
            </AnimatedElement>
        </div>
      </div>
      
      <div className="container mx-auto py-20 px-6">
        <Tabs defaultValue="course" className="w-full">
            <AnimatedElement className="flex justify-center mb-12">
                <TabsList className="bg-secondary">
                    <TabsTrigger value="course">コース</TabsTrigger>
                    <TabsTrigger value="alacarte">アラカルト</TabsTrigger>
                    <TabsTrigger value="drink">ドリンク</TabsTrigger>
                </TabsList>
            </AnimatedElement>

            <TabsContent value="course">
                <AnimatedElement>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-serif font-bold text-primary">{courseMenu.title}</h2>
                        <p className="text-xl mt-2 text-muted-foreground">{courseMenu.price}</p>
                        <p className="mt-4 max-w-2xl mx-auto text-balance">{courseMenu.description}</p>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-6">
                        {courseMenu.items.map((item, index) => (
                            <div key={index} className="border-b border-dashed border-border/50 pb-4 text-center">
                                <h3 className="text-xl font-semibold text-primary/90">{item.name}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedElement>
            </TabsContent>

            <TabsContent value="alacarte">
                <AnimatedElement>
                    <div className="max-w-4xl mx-auto space-y-12">
                        {aLaCarte.map((category) => (
                            <div key={category.category}>
                                <h3 className="text-3xl font-serif font-bold text-primary mb-6 text-center">{category.category}</h3>
                                <div className="space-y-4">
                                    {category.items.map(item => (
                                        <div key={item.name} className="flex justify-between items-baseline">
                                            <p className="text-lg">{item.name}</p>
                                            <div className="flex-grow border-b border-dotted border-border/50 mx-2"></div>
                                            <p className="text-lg font-mono">{item.price}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimatedElement>
            </TabsContent>

            <TabsContent value="drink">
                <AnimatedElement>
                     <div className="max-w-4xl mx-auto space-y-12">
                        {drinkMenu.map((category) => (
                            <div key={category.category}>
                                <h3 className="text-3xl font-serif font-bold text-primary mb-6 text-center">{category.category}</h3>
                                <div className="space-y-4">
                                    {category.items.map(item => (
                                        <div key={item.name} className="flex justify-between items-baseline">
                                            <p className="text-lg">{item.name}</p>
                                            <div className="flex-grow border-b border-dotted border-border/50 mx-2"></div>
                                            <p className="text-lg font-mono">{item.price}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimatedElement>
            </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

