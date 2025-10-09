import "@/styles/footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <img src="/logos/kata-mark.svg" alt="KATA" width={20} height={20} />
          <span>© {year} KATA Investment. All rights reserved.</span>
        </div>

        <nav className="footer-nav">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}