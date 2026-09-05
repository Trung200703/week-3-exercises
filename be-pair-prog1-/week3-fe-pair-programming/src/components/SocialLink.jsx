function SocialLink({ url, icon }) {
  return (
    <li>
      <a href={url} target="_blank" rel="noreferrer" className="social-link">
        <i className={icon} />
      </a>
    </li>
  );
}

export default SocialLink;
 