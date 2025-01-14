// import { GlobalWorkerOptions } from "pdfjs-dist";

// // Use a CDN link for the worker
// GlobalWorkerOptions.workerSrc =
//   "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.69/pdf.worker.min.mjs";

import {
  Accordion,
  Affix,
  Blockquote,
  Button,
  Drawer,
  Flex,
  Paper,
  rem,
  ScrollArea,
  Text,
  Title,
} from "@mantine/core";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// Create new plugin instance

import useIsMobile from "../../designSystem/hooks/use-is-mobile";
import { usePrimaryColorHex } from "../../designSystem/hooks/use-primary-color";
import { IconBook, IconInfoCircle } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import "video-react/dist/video-react.css"; // Correct import path
import { Player } from "video-react";
import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";

export default function CourseDetails() {
  const color = usePrimaryColorHex(4);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const course = {
    title: "Celebrate Team Achievements",
    duration: "19 min",
    category: "Emotional Intelligence",
    // professionals: [
    //   {
    //     name: "Howard Schultz",
    //     role: "Former Starbucks CEO",
    //     image: img1,
    //     shortRole: "Starbucks CEO",
    //   },
    //   {
    //     name: "Elaine Welteroth",
    //     role: "Multimedia Icon",
    //     image: img2,
    //     shortRole: "Product Manager",
    //   },
    // ],
    callToAction: "Sign Up To Practice Live",
    sections: [
      {
        title: "Introduction to Team Building",
        lessons: [
          {
            title: "What is Team Building?",
            type: "text",
            content:
              "This lesson covers the fundamentals of team building, including the importance of collaboration and trust.",
          },
          {
            title: "Understanding Emotional Intelligence",
            type: "video",
            content: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4", // Example video URL
          },
          {
            title: "Team Dynamics",
            type: "audio",
            content:
              "https://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3", // Example audio URL
          },
        ],
      },
      {
        title: "Advanced Team Strategies",
        lessons: [
          {
            title: "Conflict Resolution in Teams",
            type: "video",
            content: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4", // Example video URL
          },
          {
            title: "Creating an Effective Team Culture",
            type: "text",
            content:
              "This lesson covers the fundamentals of team building, including the importance of collaboration and trust.", // Example PDF URL
          },
        ],
      },
      {
        title: "Introduction to Team ",
        lessons: [
          {
            title: "What is Team Building?",
            type: "text",
            content:
              "This lesson covers the fundamentals of team building, including the importance of collaboration and trust.",
          },
          {
            title: "Understanding Emotional Intelligence",
            type: "video",
            content: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4", // Example video URL
          },
          {
            title: "Team Dynamics",
            type: "audio",
            content:
              "https://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3", // Example audio URL
          },
        ],
      },
    ],
  };
  const headerHeight = 55;
  const mobile = useIsMobile();
  const [lesson, setLesson] = useState<any>(null);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Flex
        justify="space-between"
        mih={`calc(100vh - ${headerHeight}px)`}
        mah={`calc(100vh - ${headerHeight}px)`}
      >
        <Flex w="20%" display={mobile ? "none" : undefined}>
          <Paper w="100%" shadow="md" p="md" bg={color}>
            <ScrollArea.Autosize mah={800}>
              <Flex direction="column" gap="md">
                <Title order={4} c="white">
                  Course Sections
                </Title>
                <Accordion
                  radius="xl"
                  variant="separated"
                  defaultValue="Apples"
                >
                  {course.sections.map((item, index) => (
                    <Accordion.Item key={index} value={item.title}>
                      <Accordion.Control c="dark">
                        <Title order={6}>{item.title}</Title>
                      </Accordion.Control>
                      <Accordion.Panel>
                        <Flex direction="column" gap="md">
                          {item.lessons.map((lesson, index) => (
                            <Paper
                              style={{
                                cursor: "pointer",
                              }}
                              radius="md"
                              p="xs"
                              bg="gray.2"
                              key={index}
                              onClick={() => setLesson(lesson)}
                            >
                              {index + 1}- {lesson.title}
                            </Paper>
                          ))}
                        </Flex>
                      </Accordion.Panel>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </Flex>
            </ScrollArea.Autosize>
          </Paper>
        </Flex>

        <Flex w={mobile ? "100%" : "78%"}>
          <Paper p="md" w="100%" shadow="md" h="100%">
            <Text c="dimmed" size="xs">
              {course.category} • {course.duration}
            </Text>
            <Title order={3}>{course.title}</Title>
            {lesson && (
              <Text fw="bolder" c={color}>
                Lesson: {lesson.title}
              </Text>
            )}

            {lesson == null && (
              <Flex justify="center" mt="12rem">
                <Title c={color} order={4}>
                  Choose a lesson and enjoy learning...
                </Title>
              </Flex>
            )}
            {lesson && lesson?.type == "video" && (
              <Flex justify="center" mt="md">
                <Player
                  fluid={false} // Disable fluid to control dimensions manually
                  height={mobile ? 400 : 530} // Explicitly set height
                  playsInline
                  poster="/public/assets/gg.jpg"
                  src={lesson.content}
                />
              </Flex>
            )}
            {lesson && lesson?.type == "audio" && (
              <Flex mt="10rem">
                <Flex w="100%">
                  <ReactAudioPlayer
                    style={{
                      width: "100%",
                    }}
                    src={lesson.content}
                    autoPlay={false}
                    controls
                  />
                </Flex>
              </Flex>
            )}
            {lesson && lesson?.type == "text" && (
              <Flex>
                <Flex w="100%">
                  <Blockquote
                    w="100%"
                    color="violet"
                    cite="– Forrest Gump"
                    icon={<IconInfoCircle />}
                    mt="xl"
                  >
                    {lesson.content}
                  </Blockquote>
                </Flex>
              </Flex>
            )}
            {lesson && lesson?.type == "pdf" && (
              <Flex w="100%">
                <div
                  style={{
                    maxWidth: "100%",
                    maxHeight: "500px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
                    <Viewer
                      fileUrl="/sense.pdf"
                      plugins={[defaultLayoutPluginInstance]}
                    />
                  </Worker>
                </div>
              </Flex>
            )}
          </Paper>
        </Flex>
      </Flex>
      {mobile && (
        <>
          <Affix position={{ bottom: 70, right: 20 }}>
            <Button
              radius="xl"
              onClick={open}
              //  onClick={() => scrollTo({ y: 0 })}
            >
              <IconBook style={{ width: rem(20), height: rem(20) }} />
            </Button>
          </Affix>
          <Drawer size="70%" opened={opened} onClose={close}>
            <Paper w="100%" shadow="md" p="md">
              <ScrollArea.Autosize mah={800}>
                <Flex direction="column" gap="md">
                  <Title order={4}>Course Sections</Title>
                  <Accordion
                    radius="xl"
                    variant="separated"
                    defaultValue="Apples"
                  >
                    {course.sections.map((item, index) => (
                      <Accordion.Item key={index} value={item.title}>
                        <Accordion.Control bg={color} c="white">
                          <Title order={6}>{item.title}</Title>
                        </Accordion.Control>
                        <Accordion.Panel>
                          <Flex direction="column" gap="md">
                            {item.lessons.map((lesson, index) => (
                              <Paper
                                style={{
                                  cursor: "pointer",
                                }}
                                radius="md"
                                bg="gray.2"
                                p="xs"
                                key={index}
                                onClick={() => {
                                  setLesson(lesson);
                                  close();
                                }}
                              >
                                {index + 1}- {lesson.title}
                              </Paper>
                            ))}
                          </Flex>
                        </Accordion.Panel>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </Flex>
              </ScrollArea.Autosize>
            </Paper>
          </Drawer>
        </>
      )}
    </>
  );
}
