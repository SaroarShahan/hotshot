import { MutableRefObject, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import Container from 'components/Container';
import useOutsideClick from 'hooks/useOutsideClick';
import { useRouter } from 'next/router';

import { data as mainMenu } from './header.data.js';

const Header = () => {
  const router = useRouter();
  const listElement = useRef(null) as MutableRefObject<null>;
  const [toggle, setToggle] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const currentRoute = router.pathname;

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };

  const handleToggleClick = () => {
    setToggle(false);
  };

  useOutsideClick(listElement, handleToggleClick);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={clsx(
          'fixed w-full left-0 z-10 bg-white transition-spacing duration-300',
          scrollPosition > 20 ? 'py-1.5 shadow-lg' : 'py-2 md:py-4'
        )}
      >
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex justify-between items-center">
              <Link href="/">
                <a className="group inline-flex text-2xl">
                  Hot<span className="text-primary">S</span>hot
                </a>
              </Link>

              {/* <div className="block md:hidden">
                {toggle ? (
                  <Icon
                    name="close"
                    onClick={handleToggle}
                    className="text-4xl text-gray opacity-60 cursor-pointer hover:text-primary"
                  />
                ) : (
                  <Icon
                    name="hamburger"
                    onClick={handleToggle}
                    className="text-4xl text-gray opacity-60 cursor-pointer hover:text-primary"
                  />
                )}
              </div> */}
            </div>

            <nav
              ref={listElement}
              className={clsx(
                'bg-white w-full md:w-auto absolute md:static left-0 top-full flex flex-col justify-between md:flex-row md:items-center gap-y-4 md:gap-x-40 pb-5 md:pb-0 z-10',
                toggle
                  ? 'visible opacity-100'
                  : 'invisible opacity-0 md:visible md:opacity-100'
              )}
            >
              <ul className="flex flex-col md:flex-row justify-end gap-y-3 md:gap-x-3 capitalize">
                {mainMenu.map((menuItem) => (
                  <li
                    key={menuItem.id}
                    className={clsx(
                      'border-b-2 md:border-b-transparent border-gray border-opacity-10 pb-4 md:pb-0',
                      currentRoute === menuItem.path
                        ? 'md:border-b-primary'
                        : ''
                    )}
                    onClick={handleToggleClick}
                  >
                    <Link href={menuItem.path}>
                      <a
                        className={clsx(
                          'text-sm transition-all duration-150 hover:text-primary block',
                          currentRoute === menuItem.path
                            ? 'text-primary'
                            : 'text-gray'
                        )}
                      >
                        {menuItem.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* <div className="">
                <Link href="#">
                  <a className="flex items-center gap-2 font-semibold text-sm group transition-all duration-150 hover:text-primary uppercase group">
                    <Icon
                      name="user"
                      className="w-5 h-5 text-gray opacity-60 cursor-pointer transition-all duration-300 group-hover:text-primary"
                    />
                    Login
                  </a>
                </Link>
              </div> */}
            </nav>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
