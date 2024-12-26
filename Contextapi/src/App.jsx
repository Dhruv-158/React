
import './App.css'
import Navbar from './components/Navbar'
import UserDetails from './components/userDetails'
import { UserProvide } from './context/UserContext'
import { ThemeProvider } from './context/TheameContext'
import { CountProvider } from './context/Counter'
import Increment from './components/Increment'

function App() {

  return (
    <>

      <main style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        height: '100vh',
        widthL: '100vw',
        backgroundColor: 'whitesmoke',
      }}>
        <ThemeProvider>
          <UserProvide>
            <Navbar />
            <CountProvider>
              <Increment />
            </CountProvider >
            <UserDetails />
          </UserProvide>
        </ThemeProvider>
      </main>
    </>
  )
}

export default App
