import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Navigation from '../../components/Navigation/Navigation'
import './MainLayout.css'

function MainLayout() {
  return (
    <div className="site-shell">
      <Header />
      <Navigation />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
