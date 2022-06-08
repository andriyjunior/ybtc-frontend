import { NoScrollLink } from '@/components';

import styles from './Navbar.module.scss';

const links = [
  {
    href: `/`,
    name: `Home`,
  },
  {
    href: `/about`,
    name: `About`,
  },
  {
    href: `/contact-us`,
    name: `Contacts`,
  },
  {
    href: `/donation`,
    name: `Donation`,
  },
];

const Navbar = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.links}>
        {links.map(({ name, href }) => {
          return (
            <li key={href} className={styles.link}>
              <NoScrollLink passHref href={href}>
                {name}
              </NoScrollLink>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Navbar;
