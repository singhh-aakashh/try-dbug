import Topbar from "@/components/layout/Topbar"

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div suppressHydrationWarning={true}>
      <Topbar />
      {children}
    </div>
  )
}

export default HomeLayout