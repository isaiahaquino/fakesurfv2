import Image from "next/image"
import Link from "next/link"
import bg from "../public/home.jpg"

export default function Home() {
  return (
    <div className="h-full">
      <Image className="object-cover" src={bg} alt="Background" />
    </div>
  )
}
