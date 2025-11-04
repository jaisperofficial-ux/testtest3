export function Badge({ children, className='' }){
  const base = 'inline-flex items-center rounded-full px-2 py-0.5 text-xs'
  const styles = 'bg-slate-900 text-white'
  return <span className={`${base} ${styles} ${className}`}>{children}</span>
}
export default Badge