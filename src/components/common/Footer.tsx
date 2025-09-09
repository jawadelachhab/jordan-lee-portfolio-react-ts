const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="h1 logo">
          <a href="#">
            Jordan Lee<span>.</span>
          </a>
        </p>

        <p className="copyright">
          &copy; {new Date().getFullYear()}{" "}
          <a href="https://www.elachhabjawad.com/">Jawad EL ACHHAB</a>. All
          rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
