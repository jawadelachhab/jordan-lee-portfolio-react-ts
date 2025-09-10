import { motion } from "framer-motion";

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring" as const, duration: 0.8, bounce: 0.3 } 
  },
};

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
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
    </motion.footer>
  );
};

export default Footer;
