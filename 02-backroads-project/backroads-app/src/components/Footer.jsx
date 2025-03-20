import { pageLinks, socialLinks } from '../data';
import PageLinks from './pageLinks';
import SocialLink from './SocialLink';
const Footer = () => {
  return (
    <footer class="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />
      {/* <ul class="footer-links">
        {pageLinks.map(({ id, href, text }) => {
          return (
            <li key={id}>
              <a href={href} class="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul> */}
      <ul class="footer-icons">
        {socialLinks.map((link) => {
          return <SocialLink key={link.id} {...link} itemClass="footer-icon" />;
          // return (
          //   <li key={id}>
          //     <a href={href} target="_blank" class="footer-icon" rel="noreferrer">
          //       <i class={icon}></i>
          //     </a>
          //   </li>
          // );
        })}
      </ul>
      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
