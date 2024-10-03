import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const page = () => {
  const loggedUser = {firstName: 'Luca', lastName: 'Ciafardoni', email: 'luca.ciafardoni17@gmail.com'}

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            subText="Access and manage your finances efficiently in this page"
            user={loggedUser?.firstName || "Guest"}
          />
          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1200.20}
          />
        </header>
      </div>
      <RightSideBar 
        user={loggedUser}
        transaction={[]}
        banks={[{currentBalance: 1200.20},{ currentBalance: 362.50}]}
      />
    </section>
  )
}

export default page