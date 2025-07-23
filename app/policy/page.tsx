"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import AnimatedElement from "@/components/AnimatedElement"

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <AnimatedElement className="text-center mb-12">
          <h1 className="text-4xl font-bold font-serif text-primary mb-4">プライバシーポリシー</h1>
          <p className="text-lg text-muted-foreground">最終更新日: {new Date().toLocaleDateString('ja-JP')}</p>
        </AnimatedElement>

        <div className="space-y-8">
          <AnimatedElement>
            <Card className="bg-secondary border-none">
              <CardHeader>
                <CardTitle className="font-serif">はじめに</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none text-muted-foreground">
                <p>
                  Restaurant NOIR（以下、「当レストラン」といいます。）は、お客様の個人情報の保護を最も重要な責務の一つと認識し、個人情報の保護に関する法律（以下、「個人情報保護法」といいます。）を遵守するとともに、以下のプライバシーポリシーに従い、適切な取扱い及び保護に努めます。
                </p>
              </CardContent>
            </Card>
          </AnimatedElement>
          
          <AnimatedElement className="delay-200">
            <Card className="bg-secondary border-none">
              <CardHeader>
                <CardTitle className="font-serif">個人情報の利用目的</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none text-muted-foreground">
                <p>当レストランは、取得した個人情報を以下の目的で利用します。</p>
                <ul>
                  <li>ご予約の管理、確認、および連絡のため</li>
                  <li>お問い合わせへの対応のため</li>
                  <li>当レストランのサービス向上、新メニューやイベント等のご案内のため</li>
                  <li>法令に基づく義務の履行のため</li>
                </ul>
              </CardContent>
            </Card>
          </AnimatedElement>

          <AnimatedElement className="delay-400">
            <Card className="bg-secondary border-none">
              <CardHeader>
                <CardTitle className="font-serif">個人情報の第三者提供</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none text-muted-foreground">
                <p>
                  当レストランは、法令に定める場合を除き、個人情報を、事前にご本人の同意を得ることなく、第三者に提供しません。
                </p>
              </CardContent>
            </Card>
          </AnimatedElement>

          <AnimatedElement className="delay-600">
            <Card className="bg-secondary border-none">
              <CardHeader>
                <CardTitle className="font-serif">お問い合わせ</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none text-muted-foreground">
                <p>本プライバシーポリシーに関するお問い合わせは、下記までお願いいたします。</p>
                <ul className="list-none p-0">
                  <li>名称: Restaurant NOIR</li>
                  <li>Email: privacy@noir-restaurant.com</li>
                  <li>電話: 03-XXXX-XXXX</li>
                </ul>
                <p className="mt-4">
                  <Link href="/contact" className="text-primary hover:underline">
                    お問い合わせフォームはこちら
                  </Link>
                </p>
              </CardContent>
            </Card>
          </AnimatedElement>
        </div>
      </div>
    </div>
  )
}

