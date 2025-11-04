import type { TextareaHTMLAttributes } from 'react'
export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>){
  const { className='', ...rest } = props
  return <textarea {...rest} className={`w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-200 ${className}`} />
}
export default Textarea