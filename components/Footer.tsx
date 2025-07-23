import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-muted-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="mb-4 inline-block">
               <Image src="/logo.svg" alt="NOIR Logo" width={120} height={32} />
            </Link>
            <p className="max-w-md text-sm">
              漆黒に輝く美食の体験。厳選された食材と革新的な調理法が織りなす、モダンフレンチレストラン。
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Sitemap</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary">About</Link></li>
              <li><Link href="/menu" className="hover:text-primary">Menu</Link></li>
              <li><Link href="/gallery" className="hover:text-primary">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
              <li><Link href="/policy" className="hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-primary"><Facebook size={20}/></a>
              <a href="#" aria-label="Instagram" className="hover:text-primary"><Instagram size={20}/></a>
              <a href="#" aria-label="Twitter" className="hover:text-primary"><Twitter size={20}/></a>
            </div>
            <h4 className="font-semibold text-foreground mb-4 mt-6">Contact</h4>
            <p className="text-sm">03-XXXX-XXXX</p>
            <p className="text-sm">contact@noir-restaurant.com</p>
          </div>

        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Restaurant NOIR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

