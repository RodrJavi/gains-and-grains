import { StrictMode, Suspense } from 'react'
import { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter as Router,
  useRoutes,
} from 'react-router-dom'
import routes from '~react-pages'

import '@/assets/index.css' 

import { Auth } from '@/components/auth'
import { supabase } from '@/supabaseClient'
import type { Session } from '@supabase/supabase-js'

function App() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])


  return (
    !session 
      ? <Auth /> 
      : <Suspense fallback={<p>Loading...</p>}>
        {useRoutes(routes)}
      </Suspense>
  )
}

const app = createRoot(document.getElementById('root')!)

app.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)

{/* <Route exact path="/">
  {auth ? <Redirect to="/dashboard" /> : </auth />}
</Route> */}