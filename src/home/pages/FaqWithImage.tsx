import { Accordion, Container, Grid, Image, Title } from "@mantine/core";
import image from "../../assets/image.b0c2306b.svg";
import classes from "../styles/FaqWithImage.module.css";

export function FaqWithImage() {
  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Grid id="faq-grid" gutter={50}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image src={image} alt="Frequently Asked Questions" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={2} ta="left" className={classes.title}>
              Frequently Asked Questions
            </Title>

            <Accordion
              chevronPosition="right"
              defaultValue="ai-coach"
              variant="separated"
            >
              <Accordion.Item className={classes.item} value="ai-coach">
                <Accordion.Control>
                  How does the AI coach provide recommendations?
                </Accordion.Control>
                <Accordion.Panel>
                  Our AI coach analyzes your learning preferences, progress, and
                  goals to provide personalized recommendations for courses and
                  study plans.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="course-access">
                <Accordion.Control>
                  Can I access courses offline?
                </Accordion.Control>
                <Accordion.Panel>
                  Yes, you can download course content for offline access, so
                  you can learn anytime, anywhere.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="certificates">
                <Accordion.Control>
                  Do I get certificates after completing a course?
                </Accordion.Control>
                <Accordion.Panel>
                  Absolutely! After completing a course, you will receive a
                  certificate of achievement that you can share on your resume
                  or social media.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="subscription">
                <Accordion.Control>
                  What subscription plans are available?
                </Accordion.Control>
                <Accordion.Panel>
                  We offer monthly and yearly subscription plans with unlimited
                  access to all courses and AI coaching features.
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
