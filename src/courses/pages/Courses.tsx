import {
  Box,
  Button,
  Container,
  Flex,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import { useEffect, useState } from "react";
import { Carousel } from "@mantine/carousel";
import { usePrimaryColorHex } from "../../designSystem/hooks/use-primary-color";
import useIsMobile from "../../designSystem/hooks/use-is-mobile";
import { useLocation, useNavigate } from "react-router-dom";
import PaginationList from "../../designSystem/baseLayout/components/Pagination";
import { GetService } from "../../services/requests-service";
import ApiRoutes from "../../services/api-routes";

export default function Courses() {
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
  //     sections: [
  //       {
  //         title: "Introduction to Team Building",
  //         lessons: [
  //           {
  //             title: "What is Team Building?",
  //             type: "text",
  //             content:
  //               "This lesson covers the fundamentals of team building, including the importance of collaboration and trust.",
  //           },
  //           {
  //             title: "Understanding Emotional Intelligence",
  //             type: "video",
  //             content: "https://www.example.com/video1.mp4", // Example video URL
  //           },
  //           {
  //             title: "Team Dynamics",
  //             type: "audio",
  //             content: "https://www.example.com/audio1.mp3", // Example audio URL
  //           },
  //         ],
  //       },
  //       {
  //         title: "Advanced Team Strategies",
  //         lessons: [
  //           {
  //             title: "Conflict Resolution in Teams",
  //             type: "video",
  //             content: "https://www.example.com/video2.mp4", // Example video URL
  //           },
  //           {
  //             title: "Creating an Effective Team Culture",
  //             type: "pdf",
  //             content: "https://www.example.com/reading1.pdf", // Example PDF URL
  //           },
  //         ],
  //       },
  //     ],
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
  //     sections: [
  //       {
  //         title: "Planning and Structuring Meetings",
  //         lessons: [
  //           {
  //             title: "The Art of Meeting Planning",
  //             type: "text",
  //             content:
  //               "This lesson covers the key components of effective meeting planning, from setting agendas to identifying objectives.",
  //           },
  //           {
  //             title: "Setting Clear Objectives",
  //             type: "video",
  //             content: "https://www.example.com/video3.mp4", // Example video URL
  //           },
  //         ],
  //       },
  //       {
  //         title: "Facilitating Effective Discussions",
  //         lessons: [
  //           {
  //             title: "Managing Group Dynamics",
  //             type: "audio",
  //             content: "https://www.example.com/audio2.mp3", // Example audio URL
  //           },
  //           {
  //             title: "Dealing with Conflict in Meetings",
  //             type: "pdf",
  //             content: "https://www.example.com/reading2.pdf", // Example PDF URL
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     title: "Master Conflict Resolution",
  //     duration: "18 min",
  //     category: "Workplace Strategies",
  //     professionals: [
  //       {
  //         name: "Susan Cain",
  //         role: "Author of Quiet",
  //         image: img1,
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
  //     sections: [
  //       {
  //         title: "Understanding Conflict",
  //         lessons: [
  //           {
  //             title: "Types of Conflict in the Workplace",
  //             type: "text",
  //             content:
  //               "This lesson introduces the different types of conflict that can arise in a workplace setting.",
  //           },
  //           {
  //             title: "Emotional Intelligence in Conflict Resolution",
  //             type: "video",
  //             content: "https://www.example.com/video4.mp4", // Example video URL
  //           },
  //         ],
  //       },
  //       {
  //         title: "Advanced Conflict Resolution Skills",
  //         lessons: [
  //           {
  //             title: "Effective Communication Techniques",
  //             type: "audio",
  //             content: "https://www.example.com/audio3.mp3", // Example audio URL
  //           },
  //           {
  //             title: "Mediating Conflicts",
  //             type: "pdf",
  //             content: "https://www.example.com/reading3.pdf", // Example PDF URL
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     title: "Celebrate Team Achievements",
  //     duration: "19 min",
  //     category: "Emotional Intelligence",
  //     professionals: [
  //       {
  //         name: "Howard Schultz",
  //         role: "Former Starbucks CEO",
  //         image: img3,
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
  //     sections: [
  //       {
  //         title: "Introduction to Team Building",
  //         lessons: [
  //           {
  //             title: "What is Team Building?",
  //             type: "text",
  //             content:
  //               "This lesson covers the fundamentals of team building, including the importance of collaboration and trust.",
  //           },
  //           {
  //             title: "Understanding Emotional Intelligence",
  //             type: "video",
  //             content: "https://www.example.com/video1.mp4", // Example video URL
  //           },
  //           {
  //             title: "Team Dynamics",
  //             type: "audio",
  //             content: "https://www.example.com/audio1.mp3", // Example audio URL
  //           },
  //         ],
  //       },
  //       {
  //         title: "Advanced Team Strategies",
  //         lessons: [
  //           {
  //             title: "Conflict Resolution in Teams",
  //             type: "video",
  //             content: "https://www.example.com/video2.mp4", // Example video URL
  //           },
  //           {
  //             title: "Creating an Effective Team Culture",
  //             type: "pdf",
  //             content: "https://www.example.com/reading1.pdf", // Example PDF URL
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     title: "Facilitate Successful Meetings",
  //     duration: "22 min",
  //     category: "Leadership Skills",
  //     professionals: [
  //       {
  //         name: "Melody Hobson",
  //         role: "President of Ariel Investments",
  //         image: img1,
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
  //     sections: [
  //       {
  //         title: "Planning and Structuring Meetings",
  //         lessons: [
  //           {
  //             title: "The Art of Meeting Planning",
  //             type: "text",
  //             content:
  //               "This lesson covers the key components of effective meeting planning, from setting agendas to identifying objectives.",
  //           },
  //           {
  //             title: "Setting Clear Objectives",
  //             type: "video",
  //             content: "https://www.example.com/video3.mp4", // Example video URL
  //           },
  //         ],
  //       },
  //       {
  //         title: "Facilitating Effective Discussions",
  //         lessons: [
  //           {
  //             title: "Managing Group Dynamics",
  //             type: "audio",
  //             content: "https://www.example.com/audio2.mp3", // Example audio URL
  //           },
  //           {
  //             title: "Dealing with Conflict in Meetings",
  //             type: "pdf",
  //             content: "https://www.example.com/reading2.pdf", // Example PDF URL
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     title: "Master Conflict Resolution",
  //     duration: "18 min",
  //     category: "Workplace Strategies",
  //     professionals: [
  //       {
  //         name: "Susan Cain",
  //         role: "Author of Quiet",
  //         image: img2,
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
  //     sections: [
  //       {
  //         title: "Understanding Conflict",
  //         lessons: [
  //           {
  //             title: "Types of Conflict in the Workplace",
  //             type: "text",
  //             content:
  //               "This lesson introduces the different types of conflict that can arise in a workplace setting.",
  //           },
  //           {
  //             title: "Emotional Intelligence in Conflict Resolution",
  //             type: "video",
  //             content: "https://www.example.com/video4.mp4", // Example video URL
  //           },
  //         ],
  //       },
  //       {
  //         title: "Advanced Conflict Resolution Skills",
  //         lessons: [
  //           {
  //             title: "Effective Communication Techniques",
  //             type: "audio",
  //             content: "https://www.example.com/audio3.mp3", // Example audio URL
  //           },
  //           {
  //             title: "Mediating Conflicts",
  //             type: "pdf",
  //             content: "https://www.example.com/reading3.pdf", // Example PDF URL
  //           },
  //         ],
  //       },
  //     ],
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
  //         image: img2,
  //         shortRole: "Product Manager",
  //       },
  //     ],
  //     callToAction: "Sign Up To Practice Live",
  //     sections: [
  //       {
  //         title: "Introduction to Team Building",
  //         lessons: [
  //           {
  //             title: "What is Team Building?",
  //             type: "text",
  //             content:
  //               "This lesson covers the fundamentals of team building, including the importance of collaboration and trust.",
  //           },
  //           {
  //             title: "Understanding Emotional Intelligence",
  //             type: "video",
  //             content: "https://www.example.com/video1.mp4", // Example video URL
  //           },
  //           {
  //             title: "Team Dynamics",
  //             type: "audio",
  //             content: "https://www.example.com/audio1.mp3", // Example audio URL
  //           },
  //         ],
  //       },
  //       {
  //         title: "Advanced Team Strategies",
  //         lessons: [
  //           {
  //             title: "Conflict Resolution in Teams",
  //             type: "video",
  //             content: "https://www.example.com/video2.mp4", // Example video URL
  //           },
  //           {
  //             title: "Creating an Effective Team Culture",
  //             type: "pdf",
  //             content: "https://www.example.com/reading1.pdf", // Example PDF URL
  //           },
  //         ],
  //       },
  //     ],
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
  //     sections: [
  //       {
  //         title: "Planning and Structuring Meetings",
  //         lessons: [
  //           {
  //             title: "The Art of Meeting Planning",
  //             type: "text",
  //             content:
  //               "This lesson covers the key components of effective meeting planning, from setting agendas to identifying objectives.",
  //           },
  //           {
  //             title: "Setting Clear Objectives",
  //             type: "video",
  //             content: "https://www.example.com/video3.mp4", // Example video URL
  //           },
  //         ],
  //       },
  //       {
  //         title: "Facilitating Effective Discussions",
  //         lessons: [
  //           {
  //             title: "Managing Group Dynamics",
  //             type: "audio",
  //             content: "https://www.example.com/audio2.mp3", // Example audio URL
  //           },
  //           {
  //             title: "Dealing with Conflict in Meetings",
  //             type: "pdf",
  //             content: "https://www.example.com/reading2.pdf", // Example PDF URL
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     title: "Master Conflict Resolution",
  //     duration: "18 min",
  //     category: "Workplace Strategies",
  //     professionals: [
  //       {
  //         name: "Susan Cain",
  //         role: "Author of Quiet",
  //         image: img2,
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
  //     sections: [
  //       {
  //         title: "Understanding Conflict",
  //         lessons: [
  //           {
  //             title: "Types of Conflict in the Workplace",
  //             type: "text",
  //             content:
  //               "This lesson introduces the different types of conflict that can arise in a workplace setting.",
  //           },
  //           {
  //             title: "Emotional Intelligence in Conflict Resolution",
  //             type: "video",
  //             content: "https://www.example.com/video4.mp4", // Example video URL
  //           },
  //         ],
  //       },
  //       {
  //         title: "Advanced Conflict Resolution Skills",
  //         lessons: [
  //           {
  //             title: "Effective Communication Techniques",
  //             type: "audio",
  //             content: "https://www.example.com/audio3.mp3", // Example audio URL
  //           },
  //           {
  //             title: "Mediating Conflicts",
  //             type: "pdf",
  //             content: "https://www.example.com/reading3.pdf", // Example PDF URL
  //           },
  //         ],
  //       },
  //     ],
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
  //         image: img2,
  //         shortRole: "Product Manager",
  //       },
  //     ],
  //     callToAction: "Sign Up To Practice Live",
  //     sections: [
  //       {
  //         title: "Introduction to Team Building",
  //         lessons: [
  //           {
  //             title: "What is Team Building?",
  //             type: "text",
  //             content:
  //               "This lesson covers the fundamentals of team building, including the importance of collaboration and trust.",
  //           },
  //           {
  //             title: "Understanding Emotional Intelligence",
  //             type: "video",
  //             content: "https://www.example.com/video1.mp4", // Example video URL
  //           },
  //           {
  //             title: "Team Dynamics",
  //             type: "audio",
  //             content: "https://www.example.com/audio1.mp3", // Example audio URL
  //           },
  //         ],
  //       },
  //       {
  //         title: "Advanced Team Strategies",
  //         lessons: [
  //           {
  //             title: "Conflict Resolution in Teams",
  //             type: "video",
  //             content: "https://www.example.com/video2.mp4", // Example video URL
  //           },
  //           {
  //             title: "Creating an Effective Team Culture",
  //             type: "pdf",
  //             content: "https://www.example.com/reading1.pdf", // Example PDF URL
  //           },
  //         ],
  //       },
  //     ],
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
  //     sections: [
  //       {
  //         title: "Planning and Structuring Meetings",
  //         lessons: [
  //           {
  //             title: "The Art of Meeting Planning",
  //             type: "text",
  //             content:
  //               "This lesson covers the key components of effective meeting planning, from setting agendas to identifying objectives.",
  //           },
  //           {
  //             title: "Setting Clear Objectives",
  //             type: "video",
  //             content: "https://www.example.com/video3.mp4", // Example video URL
  //           },
  //         ],
  //       },
  //       {
  //         title: "Facilitating Effective Discussions",
  //         lessons: [
  //           {
  //             title: "Managing Group Dynamics",
  //             type: "audio",
  //             content: "https://www.example.com/audio2.mp3", // Example audio URL
  //           },
  //           {
  //             title: "Dealing with Conflict in Meetings",
  //             type: "pdf",
  //             content: "https://www.example.com/reading2.pdf", // Example PDF URL
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     title: "Master Conflict Resolution",
  //     duration: "18 min",
  //     category: "Workplace Strategies",
  //     professionals: [
  //       {
  //         name: "Susan Cain",
  //         role: "Author of Quiet",
  //         image: img2,
  //         shortRole: "Starbucks CEO",
  //       },
  //       {
  //         name: "Adam Grant",
  //         role: "Organizational Psychologist",
  //         image: img1,
  //         shortRole: "Product Manager",
  //       },
  //     ],
  //     callToAction: "Sign Up To Practice Live",
  //     sections: [
  //       {
  //         title: "Understanding Conflict",
  //         lessons: [
  //           {
  //             title: "Types of Conflict in the Workplace",
  //             type: "text",
  //             content:
  //               "This lesson introduces the different types of conflict that can arise in a workplace setting.",
  //           },
  //           {
  //             title: "Emotional Intelligence in Conflict Resolution",
  //             type: "video",
  //             content: "https://www.example.com/video4.mp4", // Example video URL
  //           },
  //         ],
  //       },
  //       {
  //         title: "Advanced Conflict Resolution Skills",
  //         lessons: [
  //           {
  //             title: "Effective Communication Techniques",
  //             type: "audio",
  //             content: "https://www.example.com/audio3.mp3", // Example audio URL
  //           },
  //           {
  //             title: "Mediating Conflicts",
  //             type: "pdf",
  //             content: "https://www.example.com/reading3.pdf", // Example PDF URL
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     title: "Celebrate Team Achievements",
  //     duration: "19 min",
  //     category: "Emotional Intelligence",
  //     professionals: [
  //       {
  //         name: "Howard Schultz",
  //         role: "Former Starbucks CEO",
  //         image: img3,
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
  //     sections: [
  //       {
  //         title: "Introduction to Team Building",
  //         lessons: [
  //           {
  //             title: "What is Team Building?",
  //             type: "text",
  //             content:
  //               "This lesson covers the fundamentals of team building, including the importance of collaboration and trust.",
  //           },
  //           {
  //             title: "Understanding Emotional Intelligence",
  //             type: "video",
  //             content: "https://www.example.com/video1.mp4", // Example video URL
  //           },
  //           {
  //             title: "Team Dynamics",
  //             type: "audio",
  //             content: "https://www.example.com/audio1.mp3", // Example audio URL
  //           },
  //         ],
  //       },
  //       {
  //         title: "Advanced Team Strategies",
  //         lessons: [
  //           {
  //             title: "Conflict Resolution in Teams",
  //             type: "video",
  //             content: "https://www.example.com/video2.mp4", // Example video URL
  //           },
  //           {
  //             title: "Creating an Effective Team Culture",
  //             type: "pdf",
  //             content: "https://www.example.com/reading1.pdf", // Example PDF URL
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     title: "Facilitate Successful Meetings",
  //     duration: "22 min",
  //     category: "Leadership Skills",
  //     professionals: [
  //       {
  //         name: "Melody Hobson",
  //         role: "President of Ariel Investments",
  //         image: img2,
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
  //     sections: [
  //       {
  //         title: "Planning and Structuring Meetings",
  //         lessons: [
  //           {
  //             title: "The Art of Meeting Planning",
  //             type: "text",
  //             content:
  //               "This lesson covers the key components of effective meeting planning, from setting agendas to identifying objectives.",
  //           },
  //           {
  //             title: "Setting Clear Objectives",
  //             type: "video",
  //             content: "https://www.example.com/video3.mp4", // Example video URL
  //           },
  //         ],
  //       },
  //       {
  //         title: "Facilitating Effective Discussions",
  //         lessons: [
  //           {
  //             title: "Managing Group Dynamics",
  //             type: "audio",
  //             content: "https://www.example.com/audio2.mp3", // Example audio URL
  //           },
  //           {
  //             title: "Dealing with Conflict in Meetings",
  //             type: "pdf",
  //             content: "https://www.example.com/reading2.pdf", // Example PDF URL
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     title: "Master Conflict Resolution",
  //     duration: "18 min",
  //     category: "Workplace Strategies",
  //     professionals: [
  //       {
  //         name: "Susan Cain",
  //         role: "Author of Quiet",
  //         image: img1,
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
  //     sections: [
  //       {
  //         title: "Understanding Conflict",
  //         lessons: [
  //           {
  //             title: "Types of Conflict in the Workplace",
  //             type: "text",
  //             content:
  //               "This lesson introduces the different types of conflict that can arise in a workplace setting.",
  //           },
  //           {
  //             title: "Emotional Intelligence in Conflict Resolution",
  //             type: "video",
  //             content: "https://www.example.com/video4.mp4", // Example video URL
  //           },
  //         ],
  //       },
  //       {
  //         title: "Advanced Conflict Resolution Skills",
  //         lessons: [
  //           {
  //             title: "Effective Communication Techniques",
  //             type: "audio",
  //             content: "https://www.example.com/audio3.mp3", // Example audio URL
  //           },
  //           {
  //             title: "Mediating Conflicts",
  //             type: "pdf",
  //             content: "https://www.example.com/reading3.pdf", // Example PDF URL
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     title: "Celebrate Team Achievements",
  //     duration: "19 min",
  //     category: "Emotional Intelligence",
  //     professionals: [
  //       {
  //         name: "Howard Schultz",
  //         role: "Former Starbucks CEO",
  //         image: img3,
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
  //     sections: [
  //       {
  //         title: "Introduction to Team Building",
  //         lessons: [
  //           {
  //             title: "What is Team Building?",
  //             type: "text",
  //             content:
  //               "This lesson covers the fundamentals of team building, including the importance of collaboration and trust.",
  //           },
  //           {
  //             title: "Understanding Emotional Intelligence",
  //             type: "video",
  //             content: "https://www.example.com/video1.mp4", // Example video URL
  //           },
  //           {
  //             title: "Team Dynamics",
  //             type: "audio",
  //             content: "https://www.example.com/audio1.mp3", // Example audio URL
  //           },
  //         ],
  //       },
  //       {
  //         title: "Advanced Team Strategies",
  //         lessons: [
  //           {
  //             title: "Conflict Resolution in Teams",
  //             type: "video",
  //             content: "https://www.example.com/video2.mp4", // Example video URL
  //           },
  //           {
  //             title: "Creating an Effective Team Culture",
  //             type: "pdf",
  //             content: "https://www.example.com/reading1.pdf", // Example PDF URL
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     title: "Facilitate Successful Meetings",
  //     duration: "22 min",
  //     category: "Leadership Skills",
  //     professionals: [
  //       {
  //         name: "Melody Hobson",
  //         role: "President of Ariel Investments",
  //         image: img2,
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
  //     sections: [
  //       {
  //         title: "Planning and Structuring Meetings",
  //         lessons: [
  //           {
  //             title: "The Art of Meeting Planning",
  //             type: "text",
  //             content:
  //               "This lesson covers the key components of effective meeting planning, from setting agendas to identifying objectives.",
  //           },
  //           {
  //             title: "Setting Clear Objectives",
  //             type: "video",
  //             content: "https://www.example.com/video3.mp4", // Example video URL
  //           },
  //         ],
  //       },
  //       {
  //         title: "Facilitating Effective Discussions",
  //         lessons: [
  //           {
  //             title: "Managing Group Dynamics",
  //             type: "audio",
  //             content: "https://www.example.com/audio2.mp3", // Example audio URL
  //           },
  //           {
  //             title: "Dealing with Conflict in Meetings",
  //             type: "pdf",
  //             content: "https://www.example.com/reading2.pdf", // Example PDF URL
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     title: "Master Conflict Resolution",
  //     duration: "18 min",
  //     category: "Workplace Strategies",
  //     professionals: [
  //       {
  //         name: "Susan Cain",
  //         role: "Author of Quiet",
  //         image: img1,
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
  //     sections: [
  //       {
  //         title: "Understanding Conflict",
  //         lessons: [
  //           {
  //             title: "Types of Conflict in the Workplace",
  //             type: "text",
  //             content:
  //               "This lesson introduces the different types of conflict that can arise in a workplace setting.",
  //           },
  //           {
  //             title: "Emotional Intelligence in Conflict Resolution",
  //             type: "video",
  //             content: "https://www.example.com/video4.mp4", // Example video URL
  //           },
  //         ],
  //       },
  //       {
  //         title: "Advanced Conflict Resolution Skills",
  //         lessons: [
  //           {
  //             title: "Effective Communication Techniques",
  //             type: "audio",
  //             content: "https://www.example.com/audio3.mp3", // Example audio URL
  //           },
  //           {
  //             title: "Mediating Conflicts",
  //             type: "pdf",
  //             content: "https://www.example.com/reading3.pdf", // Example PDF URL
  //           },
  //         ],
  //       },
  //     ],
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
  //         image: img2,
  //         shortRole: "Product Manager",
  //       },
  //     ],
  //     callToAction: "Sign Up To Practice Live",
  //     sections: [
  //       {
  //         title: "Introduction to Team Building",
  //         lessons: [
  //           {
  //             title: "What is Team Building?",
  //             type: "text",
  //             content:
  //               "This lesson covers the fundamentals of team building, including the importance of collaboration and trust.",
  //           },
  //           {
  //             title: "Understanding Emotional Intelligence",
  //             type: "video",
  //             content: "https://www.example.com/video1.mp4", // Example video URL
  //           },
  //           {
  //             title: "Team Dynamics",
  //             type: "audio",
  //             content: "https://www.example.com/audio1.mp3", // Example audio URL
  //           },
  //         ],
  //       },
  //       {
  //         title: "Advanced Team Strategies",
  //         lessons: [
  //           {
  //             title: "Conflict Resolution in Teams",
  //             type: "video",
  //             content: "https://www.example.com/video2.mp4", // Example video URL
  //           },
  //           {
  //             title: "Creating an Effective Team Culture",
  //             type: "pdf",
  //             content: "https://www.example.com/reading1.pdf", // Example PDF URL
  //           },
  //         ],
  //       },
  //     ],
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
  //     sections: [
  //       {
  //         title: "Planning and Structuring Meetings",
  //         lessons: [
  //           {
  //             title: "The Art of Meeting Planning",
  //             type: "text",
  //             content:
  //               "This lesson covers the key components of effective meeting planning, from setting agendas to identifying objectives.",
  //           },
  //           {
  //             title: "Setting Clear Objectives",
  //             type: "video",
  //             content: "https://www.example.com/video3.mp4", // Example video URL
  //           },
  //         ],
  //       },
  //       {
  //         title: "Facilitating Effective Discussions",
  //         lessons: [
  //           {
  //             title: "Managing Group Dynamics",
  //             type: "audio",
  //             content: "https://www.example.com/audio2.mp3", // Example audio URL
  //           },
  //           {
  //             title: "Dealing with Conflict in Meetings",
  //             type: "pdf",
  //             content: "https://www.example.com/reading2.pdf", // Example PDF URL
  //           },
  //         ],
  //       },
  //     ],
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
  //     sections: [
  //       {
  //         title: "Understanding Conflict",
  //         lessons: [
  //           {
  //             title: "Types of Conflict in the Workplace",
  //             type: "text",
  //             content:
  //               "This lesson introduces the different types of conflict that can arise in a workplace setting.",
  //           },
  //           {
  //             title: "Emotional Intelligence in Conflict Resolution",
  //             type: "video",
  //             content: "https://www.example.com/video4.mp4", // Example video URL
  //           },
  //         ],
  //       },
  //       {
  //         title: "Advanced Conflict Resolution Skills",
  //         lessons: [
  //           {
  //             title: "Effective Communication Techniques",
  //             type: "audio",
  //             content: "https://www.example.com/audio3.mp3", // Example audio URL
  //           },
  //           {
  //             title: "Mediating Conflicts",
  //             type: "pdf",
  //             content: "https://www.example.com/reading3.pdf", // Example PDF URL
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   // Add additional courses here with sections and lessons as needed
  // ];
  const navigate = useNavigate();

  const color = usePrimaryColorHex();
  const mobile = useIsMobile();

  const [coursesData, setCoursesData] = useState<any>();
  const [coursesCount, setCoursesCount] = useState<any>();
  const route = useLocation();
  const queryParams = new URLSearchParams(route.search);
  const fetchedCourses = (activePage?: any) => {
    GetService({
      route: ApiRoutes.courses,
      params: {
        limit: 6,
        page: activePage,
      },
    }).then((res: any) => {
      setCoursesData(res.data.courses);
      setCoursesCount(res.data.total);
    });
  };
  useEffect(() => {
    fetchedCourses(
      queryParams?.get("page") !== null ? +queryParams?.get("page")! : 1
    );
  }, []);
  const loadNextPage = ({ value }: { value: number }) => {
    fetchedCourses(value);
  };

  return (
    <Container size="lg" my="md" mt="xl">
      <Flex
        justify={coursesData?.length > 3 ? "space-between" : undefined}
        wrap="wrap"
        gap="md"
        direction={mobile ? "column" : undefined}
      >
        {coursesData?.map((item: any, index: any) => (
          <Paper
            mb="lg"
            w={mobile ? "100%" : "32%"}
            key={index}
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
                  height={160}
                  align="start"
                  slideSize={mobile ? "80%" : "60%"}
                  withControls={false}
                  slideGap="md"
                  loop
                >
                  {item?.instructors.map((prof: any, i: any) => (
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
              {/* <Text c={color} tt={"uppercase"}>
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
                      w={mobile ? "70%" : undefined}
                      c="dimmed"
                      tt={"uppercase"}
                    >
                      {prof.shortRole}
                    </Text>
                  </Flex>
                ))}
              </Flex> */}
              {/* Call-to-Action Button */}
              <Button
                variant="gradient"
                gradient={{ from: "violet", to: "blue" }}
                size="sm"
                mt="md"
                onClick={() => navigate(`/courseDetails/${item.id}`)}
              >
                Sign Up To Practice Live
              </Button>
            </Stack>
          </Paper>
        ))}
      </Flex>

      {/* Pagination */}
      <Flex justify="center" mb="xl">
        <PaginationList count={coursesCount} loadNextPage={loadNextPage} />
      </Flex>
    </Container>
  );
}
