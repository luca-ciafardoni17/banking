'use client';

import React from 'react'
import Image from 'next/image'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'

const NavBar = ({user}: MobileNavProps) => {
    const pathName = usePathname()
    return (
        <section className='w-full max-w-[30]'>
            <Sheet>
                <SheetTrigger>
                    <Image src='/icons/hamburger.svg' alt='Open' width={30} height={30}/>
                </SheetTrigger>
                <SheetContent className='border-none bg-white'>
                    <nav className='mobilenav-sheet'>
                        <SheetClose asChild>
                            <nav className='flex h-full flex-col gap-4 pt-8 text-white'>
                                {sidebarLinks.map((item) => {
                                    const isActive = pathName===item.route || pathName.startsWith(`${item.route}/`)
                                    return (
                                        <Link href={item.route} key={item.label} 
                                            className={cn('w-full mobilenav-sheet_close', {'bg-bank-gradient' : isActive})}>
                                            <Image src={item.imgURL} alt={item.label} width={30} height={30} 
                                                className={cn({'brightness-[3] invert-0': isActive})}
                                            />
                                            <p className={cn("text-16 font-semibold text-black-2", {"text-white" : isActive})}>
                                                {item.label}
                                            </p>
                                        </Link>
                                    )
                                })}
                            USER
                            </nav>
                        </SheetClose>
                        FOOTER
                    </nav>
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default NavBar