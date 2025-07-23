import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import { Briefcase, Building, Gavel, HeartHandshake, Home, Scale } from "lucide-react"
import Link from "next/link"

export default function PracticeAreasPage() {
  const practiceAreas = [
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "企業法務",
      description: "契約書作成・レビュー、コンプライアンス、M&A、労働問題など、企業のあらゆる法的ニーズに対応します。",
    },
    {
      icon: <Scale className="h-8 w-8 text-primary" />,
      title: "刑事弁護",
      description: "逮捕直後の対応から公判まで、被疑者・被告人の権利を最大限守るための弁護活動を行います。",
    },
    {
      icon: <Home className="h-8 w-8 text-primary" />,
      title: "家事事件",
      description: "離婚、財産分与、親権、相続、遺言など、ご家庭内のデリケートな問題を親身にサポートします。",
    },
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: "不動産",
      description: "不動産売買、賃貸借契約、境界紛争、建築紛争など、不動産に関するトラブルを解決します。",
    },
    {
      icon: <Gavel className="h-8 w-8 text-primary" />,
      title: "一般民事",
      description: "交通事故、債権回収、損害賠償請求など、個人間の様々な法的トラブルに対応します。",
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-primary" />,
      title: "労働問題",
      description: "不当解雇、残業代請求、ハラスメントなど、労働者の権利を守るためのサポートを行います。",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <nav className="flex items-center justify-between w-full">
            <Link href="/" className="text-lg font-bold text-primary">
              佐藤総合法律事務所
            </Link>
            <div className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/" className="text-muted-foreground transition-colors hover:text-primary/80">
                ホーム
              </Link>
              <Link href="/practice-areas" className="text-primary transition-colors hover:text-primary/80">
                取扱分野
              </Link>
              <Link href="/contact" className="text-muted-foreground transition-colors hover:text-primary/80">
                お問い合わせ
              </Link>
              <Link href="/policy" className="text-muted-foreground transition-colors hover:text-primary/80">
                プライバシーポリシー
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">取扱分野</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            当事務所では、個人のお客様から法人のお客様まで、幅広い法律問題に対応しております。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area) => (
            <Card key={area.title}>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="flex-shrink-0">{area.icon}</div>
                <CardTitle>{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-4">上記以外の分野についても、まずはお気軽にご相談ください。</p>
            <Button asChild size="lg">
                <Link href="/contact">お問い合わせはこちら</Link>
            </Button>
        </div>
      </div>
    </div>
  )
}