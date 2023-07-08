"use client"

import NumberDisplayPad from "@/components/pad/NumberDisplayPad/NumberDisplayPad"
import { addNumber, deleteNumber } from "@/redux/features/certificationNumberSlice"
import { useAppSelector } from "@/redux/hooks"
import { useRouter } from "next/navigation"

export default function Certification() {
  const router = useRouter()
  const certificationNumber = useAppSelector((state) => state.certificationNumberReducer.value)
  const certificationNumberWithStar = useAppSelector((state) => state.certificationNumberReducer.starValue)

  const handleSubmit = (e: any) => {
    router.push("/completion/use")
  }

  return (
    <div className='w-1/2 h-full'>
      <NumberDisplayPad
        displayValue={certificationNumberWithStar}
        numberAction={addNumber}
        deleteAction={deleteNumber}
        submitButtonText='승인'
        handleSubmit={handleSubmit}
        randomPadNumber={true} />
    </div>
  )
}
