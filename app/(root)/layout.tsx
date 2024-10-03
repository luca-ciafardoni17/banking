import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar'
import Image from 'next/image'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedUser = {firstName: 'Luca', lastName: 'Ciafardoni'}

  return (
    <main className="flex h-screen w-full font-inter">
        <SideBar user={loggedUser} />

        <div className='flex size-full flex-col'>
          <div className='root-layout'>
            <Image src='icons/logo.svg' alt='logo' width={30} height={30}/>
            <div>
              <NavBar user={loggedUser}/>
            </div>
          </div>
          {children}
        </div>
    </main>
  );
}