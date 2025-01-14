import { IconCheck } from "@tabler/icons-react";
import {
  Box,
  Button,
  Container,
  Flex,
  Group,
  Image,
  List,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import image from "../../../public/assets/image.9a65bd94.svg";
import classes from "../styles/HeroBullets.module.css";
import useIsMobile from "../../designSystem/hooks/use-is-mobile";
import { useNavigate } from "react-router-dom";

export function HeroBullets() {
  const mobile = useIsMobile();
  const navigate = useNavigate();

  return (
    <Container size="lg">
      <div className={classes.inner}>
        <Flex direction={mobile ? "column" : "row"} gap="lg">
          <Box className={classes.content} w={mobile ? "100%" : "48%"}>
            <Title className={classes.title}>
              Unlock Your <span className={classes.highlight}>Potential</span>{" "}
              with Sense Coach
            </Title>
            <Text c="dimmed" mt="md">
              Transform your learning experience with AI-powered coaching and an
              extensive library of expert-led courses. Learn smarter, not
              harder.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Personalized AI Coaching</b> – Receive tailored advice and
                recommendations to achieve your goals.
              </List.Item>
              <List.Item>
                <b>Diverse Course Library</b> – Explore hundreds of courses
                across various fields taught by industry experts.
              </List.Item>
              <List.Item>
                <b>Progress Tracking</b> – Monitor your growth with detailed
                insights and analytics.
              </List.Item>
            </List>

            <Group mt={30}>
              <Button
                radius="xl"
                size="md"
                className={classes.control}
                onClick={() => {
                  navigate("/courses");
                  localStorage.setItem("activeLink", "/courses");
                }}
              >
                Start Learning
              </Button>
              <Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
                onClick={() => {
                  navigate("/courses");
                  localStorage.setItem("activeLink", "/courses");
                }}
              >
                Explore Courses
              </Button>
            </Group>
          </Box>

          <Image
            src={image}
            className={classes.image}
            w={mobile ? "100%" : "40%"}
          />
        </Flex>
      </div>
    </Container>
  );
}
