import type { HTMLAttributes, PropsWithChildren } from 'react'
export function Card({ className='', ...props }: PropsWithChildren<HTMLDivElement>){
  return <div {...props} className={`rounded-2xl border border-slate-200 bg-white shadow-sm ${className}`} />
}
export function CardHeader(p:any){ return <div className={`p-4 ${p.className||''}`}>{p.children}</div> }
export function CardContent(p:any){ return <div className={`p-4 pt-0 ${p.className||''}`}>{p.children}</div> }
export function CardTitle(p:any){ return <div className={`text-lg font-semibold ${p.className||''}`}>{p.children}</div> }
export default Card