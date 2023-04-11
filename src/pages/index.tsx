import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
//import { Inter } from 'next/font/google'

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
  <>
     <Head>
         <title>Tic Tac Toe</title>
     </Head>
     <h1>Tic Tac Toe</h1>
     <div className='game'>
       <div className='game_menu'>
        <p>hello , putting tic tac toe game for you...</p>
       </div>
     </div>
  </>
      
  
  )
}
