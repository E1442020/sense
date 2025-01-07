import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import {
  ActionIcon,
  Box,
  Container,
  Flex,
  Group,
  Text,
  Title,
} from "@mantine/core";
import classes from "./FooterLinks.module.css";
import { usePrimaryColorHex } from "../../hooks/use-primary-color";
import useIsMobile from "../../hooks/use-is-mobile";

const data = [
  {
    title: "About",
    links: [
      { label: "Features", link: "#" },
      { label: "Pricing", link: "#" },
      { label: "Support", link: "#" },
      { label: "Forums", link: "#" },
    ],
  },
  {
    title: "Project",
    links: [
      { label: "Contribute", link: "#" },
      { label: "Media assets", link: "#" },
      { label: "Changelog", link: "#" },
      { label: "Releases", link: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Join Discord", link: "#" },
      { label: "Follow on Twitter", link: "#" },
      { label: "Email newsletter", link: "#" },
      { label: "GitHub discussions", link: "#" },
    ],
  },
];

export function FooterLinks() {
  const color = usePrimaryColorHex();
  const mobile = useIsMobile();
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container size="lg">
        <Flex
          w="100%"
          justify="space-between"
          direction={mobile ? "column" : "row"}
          gap="lg"
          wrap="wrap"
        >
          <Box w={mobile ? "100%" : undefined}>
            <Title c={color} order={3}>
              SENSE
            </Title>
            <Text size="xs" c="dimmed" className={classes.description}>
              Build fully functional accessible web applications faster than
              ever
            </Text>
          </Box>
          <Flex w={mobile ? "100%" : undefined}>{groups}</Flex>
        </Flex>
      </Container>
      <Container size="lg" className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2020 mantine.dev. All rights reserved.
        </Text>

        <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
