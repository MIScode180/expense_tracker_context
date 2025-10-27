import React from 'react'
import Header from './component/Header/Header'
import Balance from './component/sections/Balance'
import IncomeExpenses from './component/sections/IncomeExpenses'
import TransectionList from './component/transections/TransectionList'
import AddTransaections from './component/transections/AddTransaections'
import {GlobalProvider} from './contextapi/ContextGlobal'

export default function App() {
  return (
  
    <GlobalProvider >

      <Header />
      <Balance />
      <IncomeExpenses />
      <TransectionList />
      <AddTransaections />
    </GlobalProvider>
    
  )
}
