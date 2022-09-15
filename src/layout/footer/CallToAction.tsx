import Link from 'next/link';

import Container from 'components/Container';

const CallToAction = () => {
  return (
    <div className="bg-primary py-7 text-white">
      <Container className="flex justify-between items-center">
        <div>
          <h2>Have a Project idea?</h2>
          <p>Let’s talk. We will give best service</p>
        </div>

        <Link href="/">
          <a className="btn btn-primary">Get Started</a>
        </Link>
      </Container>
    </div>
  );
};

export default CallToAction;
