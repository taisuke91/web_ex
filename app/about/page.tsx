"use client"

import Image from "next/image";
import { ChefHat, Leaf, Wine } from "lucide-react";
import AnimatedElement from "@/components/AnimatedElement";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Page Header */}
      <div className="relative h-80 flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1974&auto=format&fit=crop"
          alt="Our Team"
          layout="fill"
          objectFit="cover"
          className="z-0 opacity-30"
        />
        <div className="relative z-10 text-center">
          <AnimatedElement>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary">
              私たちの物語
            </h1>
          </AnimatedElement>
          <AnimatedElement className="delay-200">
            <p className="mt-4 text-lg text-muted-foreground">The Philosophy of NOIR</p>
          </AnimatedElement>
        </div>
      </div>

      <div className="container mx-auto py-20 px-6">
        {/* Concept Section */}
        <section className="mb-24 grid md:grid-cols-2 gap-16 items-center">
          <AnimatedElement>
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              コンセプト：漆黒のキャンバス
            </h2>
            <p className="text-muted-foreground leading-loose text-balance">
              私たちの料理は、黒いキャンバスに描かれる一筆の芸術です。素材が持つ本来の輝きを最大限に引き出すため、余計な装飾は排し、シンプルながらも奥深い味わいを追求します。黒はすべての色を内包する色。それは、あらゆる食材の可能性を受け入れ、新たな美食の世界を創造するという私たちの決意の表れです。
            </p>
            <p className="mt-4 text-muted-foreground leading-loose text-balance">
              一皿ごとに込められた物語を感じながら、五感で味わう食の体験をお楽しみください。
            </p>
          </AnimatedElement>
          <AnimatedElement className="delay-200">
            <div className="relative w-full h-96">
                <Image
                src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=1970&auto=format&fit=crop"
                alt="Restaurant Ambiance"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-xl"
                />
            </div>
          </AnimatedElement>
        </section>

        {/* Our Commitments */}
        <section className="mb-24">
            <AnimatedElement className="text-center mb-12">
                 <h2 className="text-3xl font-serif font-bold text-primary">三つのこだわり</h2>
                 <p className="mt-2 text-muted-foreground">最高の体験を提供するために</p>
            </AnimatedElement>
            <div className="grid md:grid-cols-3 gap-8">
                <AnimatedElement>
                    <Card className="bg-secondary border-none text-center h-full">
                        <CardHeader>
                            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-background mb-4">
                                <Leaf className="h-8 w-8 text-primary"/>
                            </div>
                            <CardTitle className="font-serif text-primary">旬の食材</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">全国の生産者から直送される、その時期最も輝きを放つ食材のみを使用。季節の息吹を感じる一皿をお届けします。</p>
                        </CardContent>
                    </Card>
                </AnimatedElement>
                 <AnimatedElement className="delay-200">
                    <Card className="bg-secondary border-none text-center h-full">
                        <CardHeader>
                             <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-background mb-4">
                                <ChefHat className="h-8 w-8 text-primary"/>
                            </div>
                            <CardTitle className="font-serif text-primary">革新的な技法</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">伝統的なフランス料理の技法を尊重しつつ、現代的なアプローチと科学的な知見を融合。常に新しい驚きを追求します。</p>
                        </CardContent>
                    </Card>
                </AnimatedElement>
                 <AnimatedElement className="delay-400">
                    <Card className="bg-secondary border-none text-center h-full">
                        <CardHeader>
                             <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-background mb-4">
                                <Wine className="h-8 w-8 text-primary"/>
                            </div>
                            <CardTitle className="font-serif text-primary">究極のペアリング</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">ソムリエが厳選した世界中のワイン。料理とのマリアージュが、感動をさらに深めます。ノンアルコールのペアリングもご用意。</p>
                        </CardContent>
                    </Card>
                </AnimatedElement>
            </div>
        </section>

         {/* Chef Section */}
        <section className="grid md:grid-cols-5 gap-12 items-center">
            <AnimatedElement className="md:col-span-2">
                <div className="relative w-full h-96 aspect-w-3 aspect-h-4">
                    <Image
                    src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=1974&auto=format&fit=crop"
                    alt="Head Chef"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-xl"
                    />
                </div>
            </AnimatedElement>
            <AnimatedElement className="md:col-span-3">
                <p className="text-primary tracking-widest">HEAD CHEF</p>
                <h2 className="text-4xl font-serif font-bold mt-2">黒田 創造 (Kuroda Souzou)</h2>
                <p className="mt-6 text-muted-foreground leading-loose text-balance">
                料理界の鬼才、黒田創造。フランスでの修行を経て、帰国後、伝統と革新を融合させた独自のスタイルを確立。食材の声を聞き、その魅力を最大限に引き出す彼の料理は、国内外の美食家から高い評価を得ている。「料理は五感で楽しむ総合芸術」という信念のもと、日々厨房で新たな創造に挑んでいる。
                </p>
            </AnimatedElement>
        </section>

      </div>
    </div>
  );
}

