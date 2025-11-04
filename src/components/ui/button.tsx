import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
export function Button({ className='', ...props }: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>){
  return <button {...props} className={`inline-flex items-center justify-center rounded-2xl px-3 py-2 text-sm font-medium border border-slate-200 hover:bg-slate-50 transition ${className}`} />
}
export default Button