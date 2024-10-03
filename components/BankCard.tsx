import { formatAmount } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const BankCard = ({account, userName, showBalance=true}: CreditCardProps) => {
  return (
    <div className='flex flex-col'>
        <Link href='/' className='bank-card'>
            <div className='bank-card_content'>
                <div>
                    <h1 className='text-16 font-semibold text-white'>
                        {account.name || userName}
                    </h1>
                    <p className='font-ibm-plex-serif font-black text-white'>
                        {formatAmount(account.currentBalance)}
                    </p>
                </div>
                <article className='flex flex-col gap-2'>
                    <div className='flex justify-context'>
                        <h1 className='text-12 text-white font-semibold'> {userName}&nbsp; </h1>
                        <h2 className='text-12 text-white font-semibold'> ●● / ●● </h2>
                    </div>
                    <p className='text-14 text-white font-semibold'>
                        ●●●● ●●●● ●●●●
                        <span className='text-16'> 1111</span>
                    </p>
                </article>
            </div>
            <div className='bank-card_icon'>
                <Image src='/icons/Paypass.svg' alt='logo' width={20} height={20}/>
                <Image src='/icons/Mastercard.svg' alt='logo' width={20} height={20}/>
            </div>
            <Image className='absolute top-0 left-0' 
                src='/icons/lines.svg' alt='lines' width={600} height={190}/>
        </Link>
    </div>
  )
}

export default BankCard