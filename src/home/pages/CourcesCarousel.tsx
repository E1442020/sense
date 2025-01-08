import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import img1 from "../../assets/dd.jpg";
import img2 from "../../assets/gg.jpg";
import img3 from "../../assets/images.jpg";
import { usePrimaryColorHex } from "../../designSystem/hooks/use-primary-color";
import useIsMobile from "../../designSystem/hooks/use-is-mobile";

export default function CourcesCarousel() {
  const carouselData = [
    {
      title: "Celebrate Team Achievements",
      duration: "19 min",
      category: "Emotional Intelligence",
      professionals: [
        {
          name: "Howard Schultz",
          role: "Former Starbucks CEO",
          image: img1,
        },
        {
          name: "Elaine Welteroth",
          role: "Multimedia Icon",
          image: img2,
        },
      ],
      callToAction: "Sign Up To Practice Live",
    },
    {
      title: "Facilitate Successful Meetings",
      duration: "22 min",
      category: "Leadership Skills",
      professionals: [
        {
          name: "Melody Hobson",
          role: "President of Ariel Investments",
          image: img3,
        },
        {
          name: "James Clear",
          role: "Author of Atomic Habits",
          image: img1,
        },
      ],
      callToAction: "Sign Up To Practice Live",
    },
    {
      title: "Master Conflict Resolution",
      duration: "18 min",
      category: "Workplace Strategies",
      professionals: [
        {
          name: "Susan Cain",
          role: "Author of Quiet",
          image: img3,
        },
        {
          name: "Adam Grant",
          role: "Organizational Psychologist",
          image: img2,
        },
      ],
      callToAction: "Sign Up To Practice Live",
    },
    {
      title: "Celebrate Team Achievements",
      duration: "19 min",
      category: "Emotional Intelligence",
      professionals: [
        {
          name: "Howard Schultz",
          role: "Former Starbucks CEO",
          image: img1,
        },
        {
          name: "Elaine Welteroth",
          role: "Multimedia Icon",
          image: img3,
        },
      ],
      callToAction: "Sign Up To Practice Live",
    },
    {
      title: "Celebrate Team Achievements",
      duration: "19 min",
      category: "Emotional Intelligence",
      professionals: [
        {
          name: "Howard Schultz",
          role: "Former Starbucks CEO",
          image: img2,
        },
        {
          name: "Elaine Welteroth",
          role: "Multimedia Icon",
          image: img3,
        },
      ],
      callToAction: "Sign Up To Practice Live",
    },
  ];
  const color = usePrimaryColorHex();
  const mobile = useIsMobile();
  return (
    <>
      <Container size="lg" mb="md">
        <Title tt={"uppercase"} c={color} order={2} ta="center" mb="md">
          Discover Your Course
        </Title>
        <Text
          mb="xl"
          m="auto"
          ta="center"
          c="gray.6"
          w={mobile ? "90%" : "60%"}
        >
          We offer a wide range of courses across different disciplines. Start
          your learning journey today and gain valuable skills at your own pace.
        </Text>
        <Carousel
          draggable={false}
          slideSize={mobile ? "80%" : "40%"}
          height={570}
          align={mobile ? "start" : undefined}
          slideGap="md"
          withIndicators
          loop
          styles={{
            indicator: {
              backgroundColor: color,
            },
          }}
        >
          {carouselData.map((item, index) => (
            <Carousel.Slide key={index}>
              <Paper h="100%" bg="gray.0" p="md" radius="md" shadow="sm">
                <Stack>
                  {/* Course Details */}
                  <Text c="dimmed" size="xs">
                    {item.category} • {item.duration}
                  </Text>
                  <Title order={3}>{item.title}</Title>

                  {/* Nested Carousel for Professionals */}
                  <Text c={color} tt={"uppercase"}>
                    Watch The Best
                  </Text>
                  <Box>
                    <Carousel
                      height={160}
                      align="start"
                      slideSize={mobile ? "80%" : "60%"}
                      withControls={false}
                      slideGap="md"
                      loop
                    >
                      {item.professionals.map((prof, i) => (
                        <Carousel.Slide key={i}>
                          <Paper
                            withBorder
                            style={{
                              position: "relative",
                              width: "100%",
                              height: "100%",
                              borderRadius: "10%",
                              overflow: "hidden",
                              backgroundImage: `url(${
                                prof.image || "https://via.placeholder.com/60"
                              })`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                          >
                            <Box
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "end",
                                alignItems: "center",
                                backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent overlay
                                color: "white",
                              }}
                            >
                              <Text size="sm" fw={500} ta="center">
                                {prof.name}
                              </Text>
                              <Text size="xs" ta="center" mb="md">
                                {prof.role}
                              </Text>
                            </Box>
                          </Paper>
                        </Carousel.Slide>
                      ))}
                    </Carousel>
                  </Box>
                  <Text c={color} tt={"uppercase"}>
                    Watch Professionals like you
                  </Text>
                  <Flex align="start" gap="sm">
                    {item.professionals.map((prof, i) => (
                      <Flex
                        direction="column"
                        gap="sm"
                        key={i}
                        w={mobile ? "45%" : "30%"}
                      >
                        <Avatar
                          size="lg"
                          src={prof.image}
                          style={{ filter: "blur(4px)" }}
                        />
                        <Text
                          size="xs"
                          w={mobile ? "80%" : undefined}
                          c="dimmed"
                          tt={"uppercase"}
                        >
                          {prof.role}
                        </Text>
                      </Flex>
                    ))}
                  </Flex>
                  {/* Call-to-Action Button */}
                  <Button
                    variant="gradient"
                    gradient={{ from: "violet", to: "blue" }}
                    size="md"
                    mt="md"
                  >
                    {item.callToAction}
                  </Button>
                </Stack>
              </Paper>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </>
  );
}
