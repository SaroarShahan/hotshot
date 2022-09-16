import { Card, Container, Section } from 'components';

const Services = () => {
  return (
    <Section>
      <Container>
        <Section.Title>Our Services</Section.Title>
        <Section.SubTitle>
          Lorem ipsum dolor sit amet, consectetur.
        </Section.SubTitle>
        <Section.Content>
          <Card>
            <Card.Image src="/services-bg-1.jpg" />
          </Card>
        </Section.Content>
      </Container>
    </Section>
  );
};

export default Services;
