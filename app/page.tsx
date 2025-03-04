import Image from "next/image"
import { MoreHorizontal } from "lucide-react"
import menuData from "./data.json"

export default function BubbleTeaMenu() {
  const MenuItem = ({ title, items, logo = "/1.jpg", size }: any) => (
    <div className="bg-white rounded-lg p-4 shadow-md min-h-[320px]">
      <div className="flex gap-3 mb-3 h-full">
        <div className="relative w-[200px] h-full rounded-md">
          <Image src={logo} alt={title} width={64} height={64} className="rounded-md object-cover h-full w-full" />
        </div>
        <div className="w-full">
          <div>
            <div className="flex items-center">
              <h2 className="font-bold text-lg uppercase">{title}</h2>
              {size && <span className="ml-auto font-bold">SIZE {size}</span>}
            </div>
          </div>
          <div className="space-y-2">
            {items.map(({ name, price }: any) => (
              <div key={name} className="flex justify-between">
                <span>{name}</span>
                {price && <span>{price}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#f9f7f2] text-gray-800 font-sans">
      <header className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="relative w-12 h-12">
            <Image
              src="/placeholder.svg?height=48&width=48"
              alt="Shop Logo"
              width={48}
              height={48}
              className="rounded-full border-2 border-green-600"
            />
          </div>
        </div>
        <button className="p-2 rounded-full hover:bg-gray-200">
          <MoreHorizontal className="w-6 h-6" />
        </button>
      </header>

      <div className="container mx-auto px-4 mb-6">
        <div className="relative">
          <Image
            src="/placeholder.svg?height=100&width=300"
            alt="Leaf decoration"
            width={100}
            height={50}
            className="absolute -left-4 -top-6 opacity-20"
          />
          <h1 className="text-5xl font-bold tracking-tight text-gray-800">
            BEST
            <br />
            SELLERS
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuData.map((item, index) => (
            <MenuItem
              key={index}
              title={item.title}
              size={item.size}
              items={item.items}
              logo={item.logo}
            />
          ))}
        </div>
      </div>

      <footer className="container mx-auto p-4 text-center text-sm text-gray-600 border-t">
        <p>ĐỒ UỐNG DUNG HUY</p>
      </footer>
    </div>
  )
}