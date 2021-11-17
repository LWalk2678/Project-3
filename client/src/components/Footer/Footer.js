//Terra Claycamp
//Purpose:Sets up the footer component
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import "./Footer.css";

const footerText = 'you glad to be here'

const Footer = () => <footer>
  <span role="img" aria-label="orange" className="logo">🍊  </span>
  {footerText}
</footer>;

export default Footer;
