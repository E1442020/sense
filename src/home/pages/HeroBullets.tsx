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
import image from "../../assets/image.9a65bd94.svg";
import classes from "../styles/HeroBullets.module.css";
import useIsMobile from "../../designSystem/hooks/use-is-mobile";

export function HeroBullets() {
  const mobile = useIsMobile();
  return (
    <Container size="lg">
      <div className={classes.inner}>
        <Flex direction={mobile ? "column" : "row"} gap="lg">
          <Box className={classes.content} w={mobile ? "100%" : "48%"}>
            <Title className={classes.title}>
              A <span className={classes.highlight}>modern</span> React <br />{" "}
              components library
            </Title>
            <Text c="dimmed" mt="md">
              Build fully functional accessible web applications faster than
              ever – Mantine includes more than 120 customizable components and
              hooks to cover you in any situation
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
                <b>TypeScript based</b> – build type safe applications, all
                components and hooks export types
              </List.Item>
              <List.Item>
                <b>Free and open source</b> – all packages have MIT license, you
                can use Mantine in any project
              </List.Item>
              <List.Item>
                <b>No annoying focus ring</b> – focus ring will appear only when
                user navigates with keyboard
              </List.Item>
            </List>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                Get started
              </Button>
              <Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
              >
                Source code
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
