"use client"

import Image from "next/image";
import AnimatedElement from "@/components/AnimatedElement";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1579753456348-42a59a7a607e?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550966871-3cc1b9a24625?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1484723050470-65432a843588?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1578502470724-33827d532028?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1565299543923-37dd37887442?q=80&w=1981&auto=format&fit=crop",
];


export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-background text-foreground">
      <div className="relative h-80 flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1555992336-fb0d29498b13?q=80&w=1964&auto=format&fit=crop"
          alt="Gallery background"
          layout="fill"
          objectFit="cover"
          className="z-0 opacity-30"
        />
        <div className="relative z-10 text-center">
            <AnimatedElement>
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary">
                    ギャラリー
                </h1>
            </AnimatedElement>
            <AnimatedElement className="delay-200">
                <p className="mt-4 text-lg text-muted-foreground">A Visual Feast</p>
            </AnimatedElement>
        </div>
      </div>
        <div className="container mx-auto py-20 px-6">
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {images.map((src, index) => (
                     <AnimatedElement key={src} className={`delay-${(index % 4) * 200}`}>
                        <Dialog>
                            <DialogTrigger asChild>
                                <div className="overflow-hidden rounded-lg cursor-pointer" onClick={() => setSelectedImage(src)}>
                                    <Image
                                        src={src}
                                        alt={`Gallery image ${index + 1}`}
                                        width={500}
                                        height={500}
                                        className="w-full h-auto object-cover transition-transform duration-300 hover:scale-110"
                                    />
                                </div>
                            </DialogTrigger>
                             {selectedImage === src && (
                                <DialogContent className="p-0 border-none max-w-4xl bg-transparent">
                                    <Image src={src} alt={`Gallery image ${index + 1}`} width={1200} height={800} className="w-full h-auto rounded-lg"/>
                                </DialogContent>
                             )}
                        </Dialog>
                    </AnimatedElement>
                ))}
            </div>
        </div>
    </div>
  );
}

