import SiteShell from '@/app/_components/SiteShell'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteShell />
      <main>{children}</main>
    </>
  )
}
