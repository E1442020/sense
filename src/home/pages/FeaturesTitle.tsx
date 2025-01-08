import {
  IconBrain,
  IconBook,
  IconGauge,
  IconChartDots,
} from "@tabler/icons-react";
import {
  Box,
  Button,
  Container,
  Grid,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import classes from "../styles/FeaturesTitle.module.css";

const features = [
  {
    icon: IconBrain,
    title: "AI-Powered Coaching",
    description:
      "Get tailored learning paths and insights with advanced AI recommendations.",
  },
  {
    icon: IconBook,
    title: "Extensive Course Library",
    description:
      "Access a wide variety of courses across multiple disciplines, taught by experts.",
  },
  {
    icon: IconGauge,
    title: "Flexible Learning Pace",
    description:
      "Learn at your own speed with on-demand video content and progress tracking.",
  },
  {
    icon: IconChartDots,
    title: "Actionable Insights",
    description:
      "Track your progress and analyze your performance with detailed analytics.",
  },
];

export function FeaturesTitle() {
  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: "violet", to: "blue" }}
      >
        <feature.icon size={26} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <Box bg="gray.0" mt="8rem" mb="5rem">
      <Container size="lg">
        <div className={classes.wrapper}>
          <Grid gutter={80}>
            <Grid.Col span={{ base: 12, md: 5 }}>
              <Title className={classes.title} order={2}>
                Empower Your Learning with Sense Coach
              </Title>
              <Text c="dimmed">
                Discover a smarter way to learn with AI-driven coaching and a
                comprehensive course library designed for your growth.
              </Text>

              <Button
                variant="gradient"
                gradient={{ deg: 133, from: "violet", to: "blue" }}
                size="lg"
                radius="md"
                mt="xl"
              >
                Explore Features
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 7 }}>
              <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
                {items}
              </SimpleGrid>
            </Grid.Col>
          </Grid>
        </div>
      </Container>
    </Box>
  );
}
