import { useState } from "react";
import {
  Burger,
  Button,
  Container,
  Drawer,
  Flex,
  Group,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./HeaderSimple.module.css";
import { usePrimaryColorHex } from "../../hooks/use-primary-color";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const links = [
  { link: "/", label: "home" },
  { link: "/about", label: "About" },
  { link: "/courses", label: "Courses" },
  { link: "/aiCoaching", label: " AI Coaching" },
];

export function Header() {
  const [opened, { open, close }] = useDisclosure(false);
  const navigate = useNavigate();

  const [active, setActive] = useState(() => {
    // Retrieve active link from localStorage (if exists)
    return localStorage.getItem("activeLink") || links[0].link;
  });

  const color = usePrimaryColorHex();
  const { t } = useTranslation();

  const handleClick = (link: any) => {
    setActive(link);
    // Store the active link in localStorage
    localStorage.setItem("activeLink", link);
  };

  const items = links.map((link) => {
    if (link.link == "/aiCoaching") {
      return (
        <Button
          size="sm"
          radius="xl"
          variant={active === link.link ? undefined : "outline"}
          onClick={() => {
            handleClick(link.link);
            navigate("/aiCoaching");
          }}
        >
          AI Coaching
        </Button>
      );
    } else {
      return (
        <Link
          key={link.label}
          to={link.link}
          className={classes.link}
          data-active={active === link.link || undefined}
          onClick={() => handleClick(link.link)}
        >
          {t(link.label)}
        </Link>
      );
    }
  });

  return (
    <header className={classes.header}>
      <Container size="lg" className={classes.inner}>
        <Title c={color} order={3}>
          SENSE
        </Title>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Drawer size="40%" opened={opened} onClose={close}>
          <Flex direction="column" gap="sm">
            {links.map((link) => (
              <Link
                onClick={() => {
                  handleClick(link.link);
                  close();
                }}
                key={link.label}
                to={link.link}
                className={classes.link}
                data-active={active === link.link || undefined}
              >
                {t(link.label)}
              </Link>
            ))}
          </Flex>
        </Drawer>

        <Burger opened={opened} onClick={open} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
