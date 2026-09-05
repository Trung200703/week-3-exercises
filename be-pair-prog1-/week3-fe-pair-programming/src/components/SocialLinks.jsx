import {socialLinks} from '../data'
import SocialLink from './SocialLink'


function SocialLinks() {
  return (
    <div className="social-links">
      {socialLinks.map((link) => {
        return <SocialLink key={link.id} {...link} />;
      })}
    </div>
  );
}

export default SocialLinks;
 