import {
  Box,
  Button,
  Flex,
  Group,
  Paper,
  ScrollArea,
  Text,
  Textarea,
  Title,
  Loader,
} from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import useIsMobile from "../../designSystem/hooks/use-is-mobile";

export default function AiCoaching() {
  const aiMessageArray = [
    "Hello! How can I help you today?",
    "Please share your query, and I'll assist you.",
    "I'm here to guide you with any information you need.",
    "Feel free to ask any questions you may have.",
    "What can I assist you with today?",
    "I'm available to help with your project!",
    "How can I be of assistance today?",
    "Let me know what you'd like to know more about.",
    "I'm happy to provide guidance on any topic!",
    "Let's start! What do you need help with?",
  ];

  const [messages, setMessages] = useState<any>([]); // Store chat messages
  const [userInput, setUserInput] = useState<string>(""); // Store user input
  const [firstMsg, setFirstMsg] = useState<boolean>(true); // Flag to show the first message
  const [isLoading, setIsLoading] = useState<boolean>(false); // Track loading state for AI
  const [aiMessage, setAiMessage] = useState<string>(""); // AI message for letter-by-letter effect
  const [isTypingCompleted, setIsTypingCompleted] = useState<boolean>(false); // Track typing completion state
  const [isTyping, setIsIsTyping] = useState<boolean>(false); // Track typing completion state
  const scrollRef = useRef<HTMLDivElement>(null); // Scroll reference to auto-scroll chat
  const mobile = useIsMobile();
  const headerHeight = mobile ? 130 : 60;

  const handleSend = () => {
    if (!userInput.trim()) return;
    setIsIsTyping(true);
    // Add user message to the chat
    const newMessage = { sender: "user", text: userInput };
    setFirstMsg(false);
    setMessages((prevMessages: any) => [...prevMessages, newMessage]);

    // Simulate AI reply with a random message from the aiMessageArray
    const randomIndex = Math.floor(Math.random() * aiMessageArray.length);
    const responseText = aiMessageArray[randomIndex];

    // Clear old AI message before starting a new one
    setAiMessage("");
    setIsLoading(true); // Start loading state
    setIsTypingCompleted(false); // Reset typing completion state

    // Handle rapid message sending by making sure AI responds after the typing effect completes
    const startTypingEffect = () => {
      let index = 0;
      const typingInterval = setInterval(() => {
        setAiMessage((prevMessage) => prevMessage + responseText[index]);
        index++;

        if (index === responseText.length) {
          clearInterval(typingInterval); // Stop the typing effect
          setIsTypingCompleted(true); // Mark typing as completed
          setIsIsTyping(false);

          // Add the full AI message after typing effect
          setMessages((prevMessages: any) => [
            ...prevMessages,
            { sender: "ai", text: responseText },
          ]);
        }
      }, 70); // Adjust typing speed here
    };

    // Delay before typing effect starts
    setTimeout(() => {
      setIsLoading(false); // Hide the loader after 2 seconds
      startTypingEffect(); // Start the typing effect
    }, 2000); // 2 seconds delay before starting typing

    setUserInput(""); // Clear the input field
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scrolling to the top
    setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    }, 100);
    // Scroll to the bottom of the chat container whenever a new message is added
  }, [messages]);

  useEffect(() => {
    // Ensure the AI message doesn't get updated once typing is completed
    if (isTypingCompleted) {
      setAiMessage((prevMessage) => prevMessage); // Stop updates to aiMessage once typing is complete
    }
  }, [isTypingCompleted]);

  return (
    <>
      <Flex
        justify="space-between"
        mih={`calc(100vh - ${headerHeight}px)`}
        mah={`calc(100vh - ${headerHeight}px)`}
      >
        <Flex w="20%" p="md" display={mobile ? "none" : undefined}>
          <ScrollArea.Autosize mah={800}>
            <Flex direction="column" gap="md">
              <Title order={4}>Predefined AI Responses</Title>
              {aiMessageArray.map((item, index) => (
                <Paper p="md" key={index} mb="sm" shadow="lg" radius={"xl"}>
                  {item}
                </Paper>
              ))}
            </Flex>
          </ScrollArea.Autosize>
        </Flex>

        <Flex
          h={mobile ? `calc(100vh - ${130}px)` : undefined}
          direction="column"
          gap="md"
          style={{
            width: mobile ? "100%" : "79%",
            padding: "16px",
            background: "#f8f9fa",
          }}
        >
          {/* Messages Display */}
          <ScrollArea
            style={{
              flex: 1,
              padding: "8px",
              background: "#fff",
              borderRadius: "8px",
              boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end", // Start messages at the bottom
            }}
            viewportRef={scrollRef}
          >
            {firstMsg && (
              <Flex h="100%" justify="center" align="center">
                <Title
                  h="100%"
                  ta={"center"}
                  order={4}
                  my="xl"
                  mt="3rem"
                  c="dark.6"
                >
                  Start Chatting With Your AI Coaching...
                </Title>
              </Flex>
            )}

            <Flex direction="column" style={{ gap: "8px" }}>
              {messages.map((msg: any, index: any) => (
                <Box
                  key={index}
                  style={{
                    alignSelf:
                      msg.sender === "user" ? "flex-end" : "flex-start",
                    background: msg.sender === "user" ? "#d0ebff" : "#d3f9d8",
                    padding: "8px 12px",
                    borderRadius: "12px",
                    maxWidth: "70%",
                  }}
                >
                  <Text
                    w="100%"
                    style={{
                      whiteSpace: "pre-wrap",
                      overflowWrap: "break-word",
                      wordBreak: "break-all",
                      lineHeight: "1.5",
                      fontSize: "16px",
                      color: "#333",
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 400,
                      letterSpacing: "-0.02em",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                    }}
                  >
                    {msg.text}
                  </Text>
                </Box>
              ))}

              {/* Show loading message while AI is typing */}
              {isLoading && (
                <Box
                  style={{
                    alignSelf: "flex-start",
                    background: "#d3f9d8",
                    padding: "8px 12px",
                    borderRadius: "12px",
                    maxWidth: "70%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Loader type="dots" size="sm" />
                </Box>
              )}

              {/* Display AI's message letter by letter */}
              {!isLoading && aiMessage && !isTypingCompleted && (
                <Box
                  style={{
                    alignSelf: "flex-start",
                    background: "#d3f9d8",
                    padding: "8px 12px",
                    borderRadius: "12px",
                    maxWidth: "70%",
                  }}
                >
                  <Text
                    w="100%"
                    style={{
                      whiteSpace: "pre-wrap",
                      overflowWrap: "break-word",
                      wordBreak: "break-all",
                      lineHeight: "1.5",
                      fontSize: "16px",
                      color: "#333",
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 400,
                      letterSpacing: "-0.02em",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                    }}
                  >
                    {aiMessage}
                  </Text>
                </Box>
              )}
            </Flex>
          </ScrollArea>

          {/* Input Section */}
          <Group>
            <Textarea
              placeholder="Type your message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scrolling to the top
                  e.preventDefault();
                  handleSend();
                }
              }}
              style={{ flex: 1 }}
              disabled={isTyping} // Disable input while typing is in progress
            />
            <Button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scrolling to the top

                handleSend(); // Trigger send logic with a delay to allow scroll to complete
                // Execute handleSend immediately after scroll
              }}
              disabled={isTyping} // Disable button while typing is in progress
            >
              Send
            </Button>
          </Group>
        </Flex>
      </Flex>
    </>
  );
}
