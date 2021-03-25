import React from 'react'
import { Footer } from '../organism/Footer'
import { Header } from '../organism/Header'
import { Top } from '../templates/top/Top'

export const AllPage = () => {
  return (
    <div>
      <Header />
        <h2>全て</h2>
        <Top />
      <Footer />
    </div>
  )
}
