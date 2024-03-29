"use client"

import BackIcon from "@/components/icon/BackIcon"
import { useRouter } from "next/navigation"

interface CommonHeaderProps {
  title: string;
}

export default function CommonHeader({ title }: CommonHeaderProps) {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <div className='flex justify-between text-center text-xl text-black h-16 border-b border-b-gray align-middle p-4'>
      <button onClick={handleBack}><BackIcon /></button>
      <span>{title}</span>
      <span></span>
    </div>
  )
}
