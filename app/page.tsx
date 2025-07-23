"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import AnimatedElement from "@/components/AnimatedElement"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <Image
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop"
          alt="Restaurant interior"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />
        <div className="relative z-20 flex flex-col items-center p-4">
          <AnimatedElement>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif tracking-widest text-shadow-lg">
              NOIR
            </h1>
          </AnimatedElement>
          <AnimatedElement className="delay-200">
            <p className="mt-4 text-lg md:text-xl max-w-2xl text-balance">
              漆黒に輝く美食の体験
            </p>
          </AnimatedElement>
          <AnimatedElement className="delay-400">
            <Button asChild size="lg" className="mt-8 bg-primary/80 hover:bg-primary text-primary-foreground">
              <Link href="/menu">
                メニューを見る <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>

      {/* Concept Section */}
      <section className="bg-background py-20 md:py-32 px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <AnimatedElement>
            <div className="relative w-full h-80 md:h-96">
                <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
                alt="Concept Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                />
            </div>
          </AnimatedElement>
          <AnimatedElement>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">私たちの哲学</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-balance">
              「NOIR」はフランス語で「黒」を意味します。それは無限の可能性を秘めた色。私たちは、黒いキャンバスに絵を描くように、厳選された旬の食材一つひとつの個性を最大限に引き出し、驚きと感動に満ちた一皿を創造します。
            </p>
            <Button asChild variant="link" className="mt-6 text-primary p-0 h-auto">
                <Link href="/about">私たちのこだわり →</Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>

      {/* Parallax/Featured Dish Section */}
      <section className="h-[60vh] bg-fixed bg-cover bg-center flex items-center justify-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1547573882-9ab912fde129?q=80&w=2070&auto=format&fit=crop')"}}>
         <div className="text-center text-white bg-black/50 p-8 rounded-lg backdrop-blur-sm">
            <AnimatedElement>
              <h2 className="text-4xl font-serif font-bold">季節のシグネチャー</h2>
            </AnimatedElement>
            <AnimatedElement className="delay-200">
              <p className="mt-4 max-w-xl text-balance">
                シェフがその時期最高の食材で紡ぐ、一夜限りの特別なコースをご堪能ください。
              </p>
            </AnimatedElement>
         </div>
      </section>

      {/* Gallery Highlight Section */}
      <section className="py-20 md:py-32 px-6 bg-secondary">
        <div className="container mx-auto text-center">
          <AnimatedElement>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12">美食のギャラリー</h2>
          </AnimatedElement>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <AnimatedElement>
              <Image src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop" alt="Dish 1" width={400} height={400} className="rounded-lg object-cover aspect-square transition-transform duration-300 hover:scale-105" />
            </AnimatedElement>
            <AnimatedElement className="delay-200">
              <Image src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" alt="Dish 2" width={400} height={400} className="rounded-lg object-cover aspect-square transition-transform duration-300 hover:scale-105" />
            </AnimatedElement>
            <AnimatedElement className="delay-400">
              <Image src="https://images.unsplash.com/photo-1504754524776-8f4f37790774?q=80&w=2070&auto=format&fit=crop" alt="Dish 3" width={400} height={400} className="rounded-lg object-cover aspect-square transition-transform duration-300 hover:scale-105" />
            </AnimatedElement>
            <AnimatedElement className="delay-600">
              <Image src="https://images.unsplash.com/photo-1481931098730-318b6f776db0?q=80&w=1890&auto=format&fit=crop" alt="Dish 4" width={400} height={400} className="rounded-lg object-cover aspect-square transition-transform duration-300 hover:scale-105" />
            </AnimatedElement>
          </div>
           <AnimatedElement>
                <Button asChild variant="outline" size="lg" className="mt-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Link href="/gallery">もっと見る</Link>
                </Button>
           </AnimatedElement>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background py-20 md:py-32 text-center">
        <div className="container mx-auto">
            <AnimatedElement>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">ご予約</h2>
            </AnimatedElement>
            <AnimatedElement className="delay-200">
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-balance">
              特別な夜を、NOIRでお過ごしください。オンラインでのご予約を承っております。
              </p>
            </AnimatedElement>
            <AnimatedElement className="delay-400">
              <Button asChild size="lg" className="mt-8 bg-primary/80 hover:bg-primary text-primary-foreground">
                  <Link href="/contact">
                  ご予約はこちら <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
              </Button>
            </AnimatedElement>
        </div>
      </section>
    </div>
  )
}

