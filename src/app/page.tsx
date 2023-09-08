import { CreateAccount } from '@/components/auth/LoginCard'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex w-full items-center justify-center">
      
      <CreateAccount></CreateAccount>
    </div>
  )
}
