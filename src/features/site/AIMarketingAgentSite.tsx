import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Building2, Calendar as CalendarIcon, ChevronLeft, ChevronRight, FileText, Folder, Image as ImageIcon, Inbox, LayoutGrid, Lightbulb, LineChart as LineChartIcon, Link2, MessageSquare, PlayCircle, Settings, Sparkles, TrendingUp, Users } from 'lucide-react'
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'

function Chip({ children }: { children: React.ReactNode }) {
  return <span className="px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-600">{children}</span>
}

const revenueData = [
  { month: 'May', value: 4200 },
  { month: 'Jun', value: 5600 },
  { month: 'Jul', value: 6100 },
  { month: 'Aug', value: 7300 },
  { month: 'Sep', value: 6800 },
  { month: 'Oct', value: 8400 },
  { month: 'Nov', value: 9100 },
]

const competitorNotes = [
  { name: 'ChefWorks Ltd.', note: 'Posting 3x/week; heavy on behind-the-scenes Reels.' },
  { name: 'UrbanBite Co.', note: 'Launching LinkedIn lead-gen ads; using case studies + testimonials.' },
  { name: 'TasteCraft', note: 'Consistent carousel posts; boosted top performers.' },
]

const postQueue = [
  { id: 1, title: 'New Seasonal Menu', status: 'Scheduled', date: 'Nov 5', platform: 'LinkedIn' },
  { id: 2, title: 'Client Spotlight: Office Lunches', status: 'Needs Review', date: 'Nov 6', platform: 'LinkedIn' },
  { id: 3, title: 'Behind the Scenes', status: 'Draft', date: 'Nov 7', platform: 'LinkedIn' },
]

function buildMonth(year: number, month: number) {
  const first = new Date(year, month, 1)
  const start = new Date(first)
  start.setDate(first.getDate() - ((first.getDay() + 6) % 7))
  const days: { date: Date; inMonth: boolean }[] = []
  for (let i = 0; i < 42; i++) {
    const d = new Date(start)
    d.setDate(start.getDate() + i)
    days.push({ date: d, inMonth: d.getMonth() === month })
  }
  return days
}

function LeftSidebar(){
  return (
    <div className="w-full lg:w-72 xl:w-80 shrink-0 border-r bg-white/60 backdrop-blur">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <LayoutGrid className="h-5 w-5" />
          <h2 className="font-semibold tracking-tight">My Brand</h2>
        </div>
        <div className="space-y-3">
          <Card>
            <CardHeader className="pb-2"><CardTitle className="text-sm">Logo</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full"><ImageIcon className="h-4 w-4 mr-2"/>Upload Logo</Button>
              <div className="text-xs text-slate-500">PNG, SVG. Max 2MB.</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2"><CardTitle className="text-sm">Company Branding</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <Input placeholder="Primary Color (#000000)" />
                <Input placeholder="Secondary Color (#ffffff)" />
              </div>
              <Input placeholder="Font (e.g., Inter)" />
              <Textarea placeholder="Tone & voice (friendly, expert, witty)" />
              <Button className="w-full"><Sparkles className="h-4 w-4 mr-2"/>Generate Brand Guide</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2"><CardTitle className="text-sm">Website</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              <Input placeholder="https://yourcompany.com" />
              <Button className="w-full"><Link2 className="h-4 w-4 mr-2"/>Fetch Info</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2"><CardTitle className="text-sm">Description</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              <Textarea placeholder="Describe your company in a few words" />
              <div className="flex gap-2"><Chip>Food Service</Chip><Chip>SMB</Chip><Chip>Local</Chip></div>
              <Button className="w-full"><Sparkles className="h-4 w-4 mr-2"/>Polish Copy</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2"><CardTitle className="text-sm">Social Media</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              <Input placeholder="LinkedIn Profile URL" />
              <Input placeholder="LinkedIn Company Page URL" />
              <Input placeholder="LinkedIn Ad Account ID" />
              <Button className="w-full"><Link2 className="h-4 w-4 mr-2"/>Connect</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function RightSidebar(){
  return (
    <div className="w-full lg:w-72 xl:w-80 shrink-0 border-l bg-white/60 backdrop-blur">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <Folder className="h-5 w-5" />
          <h2 className="font-semibold tracking-tight">My Library</h2>
        </div>
        <div className="space-y-3">
          <ScrollArea className="h-[180px] pr-2">
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="aspect-square rounded-2xl bg-slate-100" />
              ))}
            </div>
          </ScrollArea>
          <ScrollArea className="h-[140px] pr-2 space-y-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video bg-slate-100" />
                  <div className="p-3 text-sm flex items-center justify-between">
                    <div className="flex items-center gap-2"><PlayCircle className="h-4 w-4"/>Promo_{i+1}.mp4</div>
                    <Badge>1080p</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </ScrollArea>
          <ScrollArea className="h-[120px] pr-2 space-y-2">
            {[
              { name: 'Q3 Performance Report.pdf' },
              { name: 'Menu_Photoshoot_Brief.docx' },
              { name: 'CaseStudy_OfficeCatering.pdf' },
            ].map((f, i) => (
              <div key={i} className="flex items-center justify-between p-2 rounded-xl border">
                <div className="flex items-center gap-2"><FileText className="h-4 w-4"/>{f.name}</div>
                <Button>Open</Button>
              </div>
            ))}
          </ScrollArea>
          <Separator />
          <div className="space-y-2">
            <Button className="w-full"><Sparkles className="h-4 w-4 mr-2"/>Generate Creative</Button>
            <Button className="w-full"><Inbox className="h-4 w-4 mr-2"/>Import from Drive</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function AgentChat(){
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hi! I’m your marketing buddy. Want me to build a LinkedIn plan for you?' },
    { role: 'user', text: 'Yes – we’re a catering company serving offices in Dublin.' },
  ])
  const [input, setInput] = useState('')
  return (
    <Card className="h-[480px] flex flex-col">
      <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><Sparkles className="h-5 w-5"/>AI Agent</CardTitle></CardHeader>
      <CardContent className="flex-1 overflow-hidden">
        <div className="h-full grid grid-rows-[1fr_auto]">
          <ScrollArea className="pr-4">
            <div className="space-y-3">
              {messages.map((m, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className={`max-w[80%] p-3 rounded-2xl text-sm ${m.role==='assistant' ? 'bg-slate-100' : 'bg-slate-900 text-white ml-auto'}`}>{m.text}</motion.div>
              ))}
            </div>
          </ScrollArea>
          <div className="mt-3 flex gap-2">
            <Input
              placeholder="Type a message… Ask for a content calendar, competitor scan, or ad ideas."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && input.trim()) {
                  setMessages((prev) => [...prev, { role: 'user', text: input.trim() }])
                  setInput('')
                  setTimeout(() => {
                    setMessages((prev) => [...prev, { role: 'assistant', text: 'Got it! I drafted 3 LinkedIn posts and added them to your calendar.' }])
                  }, 400)
                }
              }}
            />
            <Button onClick={() => {
              if (!input.trim()) return
              setMessages((prev) => [...prev, { role: 'user', text: input.trim() }])
              setInput('')
              setTimeout(() => {
                setMessages((prev) => [...prev, { role: 'assistant', text: 'Draft complete. Want me to schedule at optimal times?' }])
              }, 400)
            }}>
              <MessageSquare className="h-4 w-4 mr-2"/>Send
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function Dashboard(){
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
      <Card className="xl:col-span-2">
<CardHeader className="pb-2">
  <CardTitle className="text-base flex items-center gap-2">
    <LineChartIcon className="h-5 w-5" />
    Revenue Overview
  </CardTitle>
</CardHeader>
        <CardContent>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData} margin={{ left: 10, right: 10, top: 10, bottom: 0 }}>
                <defs>
                  <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="currentColor" stopOpacity={0.28}/>
                    <stop offset="95%" stopColor="currentColor" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip />
                <Area type="monotone" dataKey="value" strokeWidth={2} fillOpacity={1} fill="url(#rev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><TrendingUp className="h-5 w-5"/>Post Queue</CardTitle></CardHeader>
        <CardContent className="space-y-2">
          {postQueue.map((p) => (
            <div key={p.id} className="flex items-center justify-between p-2 rounded-xl border">
              <div>
                <div className="text-sm font-medium">{p.title}</div>
                <div className="text-xs text-slate-500">{p.platform} • {p.date}</div>
              </div>
              <Badge>{p.status}</Badge>
            </div>
          ))}
          <Button className="w-full mt-1"><Sparkles className="h-4 w-4 mr-2"/>Suggest 3 More</Button>
        </CardContent>
      </Card>
    </div>
  )
}

function CalendarBlock(){
  const today = new Date()
  const [cur, setCur] = useState({ y: today.getFullYear(), m: today.getMonth() })
  const days = useMemo(() => buildMonth(cur.y, cur.m), [cur])
  const monthName = new Date(cur.y, cur.m).toLocaleString(undefined, { month: 'long', year: 'numeric' })
  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  return (
    <Card>
      <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><CalendarIcon className="h-5 w-5"/>Visual Calendar Planner</CardTitle></CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-3">
          <div className="font-medium">{monthName}</div>
          <div className="flex gap-2">
            <Button onClick={() => setCur((c) => ({ y: c.m === 0 ? c.y - 1 : c.y, m: (c.m + 11) % 12 }))}><ChevronLeft className="h-4 w-4"/></Button>
            <Button onClick={() => setCur((c) => ({ y: c.m === 11 ? c.y + 1 : c.y, m: (c.m + 1) % 12 }))}><ChevronRight className="h-4 w-4"/></Button>
          </div>
        </div>
        <div className="grid grid-cols-7 text-xs text-slate-500 mb-1">
          {dayNames.map((d) => (<div key={d} className="p-2 text-center">{d}</div>))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days.map((d, i) => {
            const isToday = d.date.toDateString() === today.toDateString()
            return (
              <div key={i} className={`p-2 h-20 rounded-xl border flex flex-col ${d.inMonth ? '' : 'opacity-40'}`}>
                <div className="text-[11px] text-slate-500 mb-1">{d.date.getDate()}</div>
                {isToday && <Badge className="w-fit">Today</Badge>}
                {d.date.getDay() === 2 && d.inMonth && (
                  <div className="mt-auto text-[11px] bg-slate-100 rounded-md px-1 py-0.5">LinkedIn Post</div>
                )}
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

function MarketBlock(){
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
      <Card>
        <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><BarChart3 className="h-5 w-5"/>Trends</CardTitle></CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div className="flex items-start gap-2">🚀 Short-form video boosts CTR by ~18% vs static images.</div>
          <div className="flex items-start gap-2">👥 Decision-makers engage most Tue–Thu 9–11am local.</div>
          <div className="flex items-start gap-2">💡 Carousel posts drive 1.3× saves over single images.</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><Building2 className="h-5 w-5"/>Competitors</CardTitle></CardHeader>
        <CardContent className="space-y-3 text-sm">
          {[
            { name: 'ChefWorks Ltd.', note: 'Posting 3x/week; heavy on behind-the-scenes Reels.' },
            { name: 'UrbanBite Co.', note: 'Launching LinkedIn lead-gen ads; using case studies + testimonials.' },
            { name: 'TasteCraft', note: 'Consistent carousel posts; boosted top performers.' },
          ].map((c, i) => (
            <div key={i} className="p-3 rounded-xl border">
              <div className="font-medium">{c.name}</div>
              <div className="text-slate-600 text-sm">{c.note}</div>
            </div>
          ))}
          <Button className="w-full"><Sparkles className="h-4 w-4 mr-2"/>Scan 5 Competitors</Button>
        </CardContent>
      </Card>
    </div>
  )
}

function Recommendations(){
  const recs = [
    'Post a client testimonial carousel on Wed 10:00.',
    'Boost “Seasonal Menu” post with €50 for 3 days.',
    'Create a lead-gen form targeting HR managers in Dublin.',
  ]
  return (
    <Card>
      <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><Sparkles className="h-5 w-5"/>Recommendations</CardTitle></CardHeader>
      <CardContent className="grid gap-2">
        {recs.map((r, i) => (
          <div key={i} className="p-3 rounded-xl border flex items-center justify-between">
            <div className="text-sm">{r}</div>
            <div className="flex gap-2">
              <Button>Apply</Button>
              <Button>Details</Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default function AIMarketingAgentSite(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <div className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-2xl bg-slate-900/10 flex items-center justify-center"><Sparkles className="h-4 w-4"/></div>
            <div>
              <div className="font-semibold leading-5">PreviewAgent3</div>
              <div className="text-xs text-slate-500 -mt-1">Your AI marketing buddy</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Input placeholder="Search… posts, assets, competitors" className="w-64" />
            <Button><Settings className="h-4 w-4 mr-2"/>Settings</Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-4">
        <LeftSidebar />
        <div className="space-y-4">
          <AgentChat />
          <Dashboard />
          <CalendarBlock />
          <MarketBlock />
          <Recommendations />
        </div>
        <RightSidebar />
      </div>

      <div className="border-t py-6 text-xs text-slate-500 text-center">© {new Date().getFullYear()} PreviewAgent3 · Built for small businesses</div>
    </div>
  )
}
