import Logo from './ui/Logo';
import iconFacebook from '../assets/icon-facebook.svg';
import iconTwitter from '../assets/icon-twitter.svg';
import iconPinterest from '../assets/icon-pinterest.svg';
import iconInstagram from '../assets/icon-instagram.svg';
import LinkList from './ui/LinkList';

const linkContent = [
  {
    title: 'Features',
    links: ['Link Shortening', 'Branded Links', 'Analytics'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Developers', 'Support'],
  },
  {
    title: 'Company',
    links: ['About', 'Our Team', 'Careers', 'Contact'],
  },
];

function Footer() {
  return (
    <footer className=" bg-very-dark-blue w-full flex flex-col md:flex-row md:items-start md:px-32 md:justify-between items-center gap-10 p-10">
      <Logo isWhite={true} />
      <div className="flex flex-col gap-6 md:flex-row md:pl-40 md:gap-16">
        {linkContent.map(({ title, links }) => (
          <LinkList key={title} title={title} links={links} />
        ))}
      </div>
      <div className="flex gap-4">
        <img src={iconFacebook} alt="icon facebook" />
        <img src={iconTwitter} alt="icon twitter" />
        <img src={iconPinterest} alt="icon pinterest" />
        <img src={iconInstagram} alt="icon instagram" />
      </div>
    </footer>
  );
}

export default Footer;
