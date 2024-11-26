import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn={firstName:"John", lastName:"Doe", email:"H2EhU@example.com"}
    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox type="greeting" title="Welcome" user={loggedIn.firstName || "Guest"} subtext="Access and manage your accounts and transactions"/>
                    <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1009.35}/>
                </header>
RECENT TRANSACTIONS
            </div>
            <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance: 1009.35},{currentBalance: 1009.35}]} />
           
        </section>
    )
}

export default Home