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
// import img1 from "../../../public/assets/dd.jpg";
// import img2 from "../../../public/assets/gg.jpg";
// import img3 from "../../../public/assets/images.jpg";
import { usePrimaryColorHex } from "../../designSystem/hooks/use-primary-color";
import useIsMobile from "../../designSystem/hooks/use-is-mobile";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetService } from "../../services/requests-service";
import ApiRoutes from "../../services/api-routes";

export default function CourcesCarousel() {
  // const carouselData = [
  //   {
  //     title: "Celebrate Team Achievements",
  //     duration: "19 min",
  //     category: "Emotional Intelligence",
  //     professionals: [
  //       {
  //         name: "Howard Schultz",
  //         role: "Former Starbucks CEO",
  //         image: img1,
  //         shortRole: "Starbucks CEO",
  //       },
  //       {
  //         name: "Elaine Welteroth",
  //         role: "Multimedia Icon",
  //         image: img2,
  //         shortRole: "Product Manager",
  //       },
  //     ],
  //     callToAction: "Sign Up To Practice Live",
  //   },
  //   {
  //     title: "Facilitate Successful Meetings",
  //     duration: "22 min",
  //     category: "Leadership Skills",
  //     professionals: [
  //       {
  //         name: "Melody Hobson",
  //         role: "President of Ariel Investments",
  //         image: img3,
  //         shortRole: "Product Manager",
  //       },
  //       {
  //         name: "James Clear",
  //         role: "Author of Atomic Habits",
  //         image: img1,
  //         shortRole: "Starbucks CEO",
  //       },
  //     ],
  //     callToAction: "Sign Up To Practice Live",
  //   },
  //   {
  //     title: "Master Conflict Resolution",
  //     duration: "18 min",
  //     category: "Workplace Strategies",
  //     professionals: [
  //       {
  //         name: "Susan Cain",
  //         role: "Author of Quiet",
  //         image: img3,
  //         shortRole: "Starbucks CEO",
  //       },
  //       {
  //         name: "Adam Grant",
  //         role: "Organizational Psychologist",
  //         image: img2,
  //         shortRole: "Product Manager",
  //       },
  //     ],
  //     callToAction: "Sign Up To Practice Live",
  //   },
  //   {
  //     title: "Celebrate Team Achievements",
  //     duration: "19 min",
  //     category: "Emotional Intelligence",
  //     professionals: [
  //       {
  //         name: "Howard Schultz",
  //         role: "Former Starbucks CEO",
  //         image: img1,
  //         shortRole: "Starbucks CEO",
  //       },
  //       {
  //         name: "Elaine Welteroth",
  //         role: "Multimedia Icon",
  //         image: img3,
  //         shortRole: "Starbucks CEO",
  //       },
  //     ],
  //     callToAction: "Sign Up To Practice Live",
  //   },
  //   {
  //     title: "Celebrate Team Achievements",
  //     duration: "19 min",
  //     category: "Emotional Intelligence",
  //     professionals: [
  //       {
  //         name: "Howard Schultz",
  //         role: "Former Starbucks CEO",
  //         image: img2,
  //         shortRole: "Product Manager",
  //       },
  //       {
  //         name: "Elaine Welteroth",
  //         role: "Multimedia Icon",
  //         image: img3,
  //         shortRole: "Starbucks CEO",
  //       },
  //     ],
  //     callToAction: "Sign Up To Practice Live",
  //   },
  // ];
  const navigate = useNavigate();
  const [coursesData, setCoursesData] = useState<any>();
  const color = usePrimaryColorHex();
  const mobile = useIsMobile();
  const [isInnerCarouselActive, setInnerCarouselActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const innerCarouselRef = useRef(null); // Ref for inner carousel
  const parentCarouselRef = useRef(null); // Ref for parent carousel
  useEffect(() => {
    GetService({
      route: ApiRoutes.courses,
    }).then((res: any) => {
      setCoursesData(res.data.courses);
    });
  }, []);
  // Debounced event handlers
  const handleMouseDown = useCallback((e: any) => {
    e.stopPropagation();
    setInnerCarouselActive(true); // Deactivate parent carousel dragging
  }, []);

  const handleTouchStart = useCallback((e: any) => {
    e.stopPropagation();
    setInnerCarouselActive(true); // Deactivate parent carousel dragging
  }, []);

  const handleMouseUp = useCallback(() => setInnerCarouselActive(false), []);
  const handleTouchEnd = useCallback(() => setInnerCarouselActive(false), []);

  const handleIndexChange = useCallback((index: any) => {
    setCurrentIndex(index); // Update the current index on outer carousel
  }, []);

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

        {/* Parent carousel */}

        {coursesData?.length > 3 ? (
          <Carousel
            ref={parentCarouselRef}
            draggable={!isInnerCarouselActive} // Only enable dragging on outer carousel if the inner carousel is inactive
            slideSize={mobile ? "80%" : "40%"}
            height={mobile ? 650 : 570}
            align={mobile ? "start" : undefined}
            slideGap="md"
            withIndicators
            loop
            styles={{
              indicator: {
                backgroundColor: color,
              },
              container: {
                transition: "all 0.3s ease-out",
              },
              // Add smooth transition styles here
            }}
            onSlideChange={handleIndexChange} // Handle index change of outer carousel
            initialSlide={currentIndex} // Make sure to restore the index after touch
          >
            {coursesData?.map((item: any, index: any) => (
              <Carousel.Slide key={index}>
                <Paper h="100%" bg="gray.0" p="md" radius="md" shadow="sm">
                  <Stack>
                    {/* Course Details */}
                    <Text c="dimmed" size="xs">
                      Emotional Intelligence • 19 min
                    </Text>
                    <Title order={3}>{item.title}</Title>

                    {/* Nested Carousel for Professionals */}
                    <Text c={color} tt={"uppercase"}>
                      Watch The Best
                    </Text>
                    <Box>
                      <Carousel
                        ref={innerCarouselRef} // Ref for nested carousel
                        onMouseDown={handleMouseDown} // Use memoized event handlers
                        onTouchStart={handleTouchStart} // Use memoized event handlers
                        onMouseUp={handleMouseUp} // Use memoized event handlers
                        onTouchEnd={handleTouchEnd} // Use memoized event handlers
                        height={160}
                        align="start"
                        slideSize={mobile ? "80%" : "60%"}
                        withControls={false}
                        slideGap="md"
                        loop
                      >
                        {item.instructors.map((prof: any, i: any) => (
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
                      {item.instructors.map((prof: any, i: any) => (
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
                            w={mobile ? "70%" : undefined}
                            c="dimmed"
                            tt={"uppercase"}
                          >
                            {prof.description}
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
                      onClick={() => navigate(`/courseDetails/${item.id}`)}
                    >
                      Sign Up To Practice Live
                    </Button>
                  </Stack>
                </Paper>
              </Carousel.Slide>
            ))}
          </Carousel>
        ) : (
          <Flex wrap="wrap" gap="md" direction={mobile ? "column" : undefined}>
            {coursesData?.map((item: any, index: any) => (
              <Paper
                w={mobile ? "100%" : "32%"}
                key={index}
                h="100%"
                bg="gray.0"
                p="md"
                radius="md"
                shadow="sm"
              >
                <Stack>
                  {/* Course Details */}
                  <Text c="dimmed" size="xs">
                    Emotional Intelligence • 19 min
                  </Text>
                  <Title order={3}>{item.title}</Title>

                  {/* Nested Carousel for Professionals */}
                  <Text c={color} tt={"uppercase"}>
                    Watch The Best
                  </Text>
                  <Box>
                    <Carousel
                      ref={innerCarouselRef} // Ref for nested carousel
                      onMouseDown={handleMouseDown} // Use memoized event handlers
                      onTouchStart={handleTouchStart} // Use memoized event handlers
                      onMouseUp={handleMouseUp} // Use memoized event handlers
                      onTouchEnd={handleTouchEnd} // Use memoized event handlers
                      height={160}
                      align="start"
                      slideSize={mobile ? "80%" : "60%"}
                      withControls={false}
                      slideGap="md"
                      loop
                    >
                      {item.instructors.map((prof: any, i: any) => (
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
                    {item.instructors.map((prof: any, i: any) => (
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
                          w={mobile ? "70%" : undefined}
                          c="dimmed"
                          tt={"uppercase"}
                        >
                          {prof.description}
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
                    onClick={() => navigate(`/courseDetails/${item.id}`)}
                  >
                    Sign Up To Practice Live
                  </Button>
                </Stack>
              </Paper>
            ))}
          </Flex>
        )}
      </Container>
    </>
  );
}
