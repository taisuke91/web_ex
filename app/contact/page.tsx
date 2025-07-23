"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"
import AnimatedElement from "@/components/AnimatedElement"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "ご予約リクエストを承りました",
      description: "内容を確認の上、折り返しご連絡いたします。この時点では予約は確定しておりません。",
    })

    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-background">
       <div className="relative h-80 flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=2070&auto=format&fit=crop"
          alt="Contact background"
          layout="fill"
          objectFit="cover"
          className="z-0 opacity-30"
        />
        <div className="relative z-10 text-center">
            <AnimatedElement>
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary">
                    ご予約・お問い合わせ
                </h1>
            </AnimatedElement>
            <AnimatedElement className="delay-200">
                <p className="mt-4 text-lg text-muted-foreground">Reservation & Contact</p>
            </AnimatedElement>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <AnimatedElement>
              <Card className="bg-secondary border-none">
                <CardHeader>
                  <CardTitle className="font-serif text-primary">店舗情報</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">所在地</p>
                      <p className="text-muted-foreground">
                        〒104-0061<br />
                        東京都中央区銀座X-X-X<br />
                        NOIRビル 8階
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">電話番号</p>
                      <p className="text-muted-foreground">03-XXXX-XXXX</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">contact@noir-restaurant.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedElement>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <AnimatedElement>
              <Card className="bg-secondary border-none">
                <CardHeader>
                  <CardTitle className="font-serif text-primary">オンライン予約フォーム</CardTitle>
                  <CardDescription>ご希望の日時、人数をご入力ください。24時間以内に折り返しご連絡いたします。</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">お名前 *</Label>
                        <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required placeholder="山田 太郎" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">電話番号 *</Label>
                        <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} required placeholder="090-1234-5678" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">メールアドレス *</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required placeholder="your.email@example.com" />
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="date">ご希望日 *</Label>
                            <Input id="date" name="date" type="date" value={formData.date} onChange={handleInputChange} required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="time">ご希望時間 *</Label>
                            <Input id="time" name="time" type="time" value={formData.time} onChange={handleInputChange} required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="guests">人数 *</Label>
                            <Input id="guests" name="guests" type="number" min="1" max="8" value={formData.guests} onChange={handleInputChange} required placeholder="2" />
                        </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">ご要望 (アレルギー等)</Label>
                      <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="アレルギー情報や記念日のご利用など、ご要望がございましたらご記入ください。" rows={4}/>
                    </div>
                    <Button type="submit" className="w-full bg-primary/80 hover:bg-primary text-primary-foreground" disabled={isSubmitting}>
                      {isSubmitting ? "送信中..." : "予約リクエストを送信"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </div>
  )
}

