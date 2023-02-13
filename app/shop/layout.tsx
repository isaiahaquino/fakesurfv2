import ShopHeader from "@/components/ShopHeader";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode,
}) {

  return (
    <div className="flex flex-col items-center max-w-6xl mx-auto px-5 h-full">
      
      <ShopHeader />

      {children}

    </div>
  )
}