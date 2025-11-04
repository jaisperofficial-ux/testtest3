import type { HTMLAttributes } from 'react'
export function ScrollArea({ className='', ...props }: HTMLAttributes<HTMLDivElement>){
  return <div {...props} className={`overflow-auto ${className}`} />
}
export default ScrollArea