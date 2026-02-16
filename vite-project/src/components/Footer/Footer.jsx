import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <p className="site-footer-text">Byggede i React med routing</p>
      <p className="site-footer-text">© {new Date().getFullYear()} HYWAY</p>
    </footer>
  )
}

export default Footer
