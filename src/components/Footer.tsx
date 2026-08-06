export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-inner">
        <p>© {new Date().getFullYear()} Iwalewa Kolawole</p>
        <p>Designed and built with React and TanStack Router.</p>
      </div>
    </footer>
  )
}
