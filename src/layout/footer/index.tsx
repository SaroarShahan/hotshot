import Link from 'next/link';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaRegClock,
  FaMapMarkerAlt,
} from 'react-icons/fa';

import { Container, Menu } from 'components';
import CallToAction from './CallToAction';
import Widget from './Widget';
import { PropsWithChildren } from 'react';

const RecentNews = ({
  img,
  alt,
  title,
  date,
  href,
}: {
  img: string;
  alt?: string;
  title: string;
  date: string;
  href: string;
}) => {
  return (
    <div className="flex gap-x-1 items-center">
      <Link href="#">
        <a className="w-6">
          <picture>
            <source srcSet={img} />
            <img src={img} alt={alt} />
          </picture>
        </a>
      </Link>

      <div>
        <Link href={href}>
          <a className="inline-block mb-0.5 tranistion duration-300 ease-in-out hover:text-primary">
            {title}
          </a>
        </Link>
        <p>{date}</p>
      </div>
    </div>
  );
};

const SocialIcon = ({
  children,
  href,
}: PropsWithChildren<{ href: string }>) => {
  return (
    <Link href={href}>
      <a className="bg-primary w-4 h-4 rounded-full flex justify-center items-center text-base border border-transparent transition duration-300 ease-in-out hover:bg-transparent hover:border-primary">
        {children}
      </a>
    </Link>
  );
};

const Footer = () => {
  return (
    <footer>
      <CallToAction />

      <div className="bg-gray-800 py-7 border-b border-gray-300">
        <Container className="grid grid-cols-4 gap-3">
          <Widget title="HotShot">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
              nostrum odio, odit nulla dolor, voluptatem ducimus tenetur nobis
              et tempora quae dolorum reiciendis quam! Quae sequi cupiditate
              harum debitis est?
            </p>

            <div className="flex gap-1 mt-3">
              <SocialIcon href="#">
                <FaFacebookF />
              </SocialIcon>
              <SocialIcon href="#">
                <FaTwitter />
              </SocialIcon>
              <SocialIcon href="#">
                <FaLinkedinIn />
              </SocialIcon>
            </div>
          </Widget>

          <Widget title="Recent News">
            <div className="space-y-3">
              <RecentNews
                img="/recent-news-bg-1.jpg"
                title="Powerful Admin Panel"
                date="01 November 2016"
                href="#"
              />

              <RecentNews
                img="/recent-news-bg-2.jpg"
                title="Powerful Admin Panel"
                date="01 November 2016"
                href="#"
              />

              <RecentNews
                img="/recent-news-bg-1.jpg"
                title="Powerful Admin Panel"
                date="01 November 2016"
                href="#"
              />
            </div>
          </Widget>

          <Widget title="Quick Links">
            <Menu className="flex-col gap-1">
              <Menu.Item href="#" className="hover:text-primary">
                Home
              </Menu.Item>
              <Menu.Item href="#" className="hover:text-primary">
                About
              </Menu.Item>
              <Menu.Item href="#" className="hover:text-primary">
                Services
              </Menu.Item>
              <Menu.Item href="#" className="hover:text-primary">
                Case Studies
              </Menu.Item>
              <Menu.Item href="#" className="hover:text-primary">
                Latest News
              </Menu.Item>
              <Menu.Item href="#" className="hover:text-primary">
                Contact
              </Menu.Item>
            </Menu>
          </Widget>

          <Widget title="Newsletter">
            <form className="relative bg-white rounded-full overflow-hidden h-4.8">
              <input
                placeholder="Enter your email"
                className="h-full pl-2 rounded-full focus:outline-none text-gray-800 placeholder:text-gray-300"
              />
              <button className="bg-primary absolute right-0 top-0 px-1.5 h-full">
                Sign up
              </button>
            </form>

            <div className="mt-3 space-y-1">
              <Link href="tel:+8801712952337">
                <a className="flex gap-1 transition duration-300 ease-in-out hover:text-primary">
                  <FaPhoneAlt />
                  +8801712952337
                </a>
              </Link>

              <p className="flex gap-1">
                <FaRegClock />
                8AM - 5PM Mon - Fri
              </p>
              <p className="flex gap-1">
                <FaMapMarkerAlt />
                Mirpur, Dhaka, Bangladesh.
              </p>
            </div>
          </Widget>
        </Container>
      </div>

      <div className="bg-gray-800 py-2">
        <Container>
          <p className="text-sm text-gray-300 text-center">
            Copyright &copy; {new Date().getFullYear()} . All Rights Reserved.
            Designed & develop By{' '}
            <Link href="https://github.com/SaroarShahan">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 ease-in-out hover:text-primary"
              >
                SaroarShahan
              </a>
            </Link>
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
