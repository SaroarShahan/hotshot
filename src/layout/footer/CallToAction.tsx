import Link from 'next/link';

import Container from 'components/Container';

const CallToAction = () => {
  return (
    <div className="bg-primary py-7 text-white">
      <Container className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl">Have a Project idea?</h2>
          <p className="text-xs">Let’s talk. We will give best service</p>
        </div>

        <Link href="/">
          <a className="inline-block bg-gray-800 py-1 px-2.5 text-sm capitalize font-medium rounded-full transition duration-300 ease-in-out hover:bg-gray-900">
            Get Started
          </a>
        </Link>
      </Container>
    </div>
  );
};

export default CallToAction;
