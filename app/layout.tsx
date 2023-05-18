'use client'

import './globals.css'
import MainNav from '@/components/MainNav'
import { useEffect, useState } from 'react'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { MyUserContextProvider } from '@/utils/useUser'
import type { Database } from '@/types_db'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [supabaseClient] = useState(createBrowserSupabaseClient<Database>())
  return (
    <html lang='en'>
      <body className=''>
        <SessionContextProvider supabaseClient={createBrowserSupabaseClient()}>
          <MyUserContextProvider>
            <MainNav />
            <Layout>{children}</Layout>
          </MyUserContextProvider>
        </SessionContextProvider>
      </body>
    </html>
  )
}
