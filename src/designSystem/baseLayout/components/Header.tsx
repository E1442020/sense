import { useState } from "react";
import {
  Burger,
  Container,
  Drawer,
  Flex,
  Group,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./HeaderSimple.module.css";
import { usePrimaryColorHex } from "../../hooks/use-primary-color";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const links = [
  { link: "/", label: "home" },
  { link: "/about", label: "About" },
];

export function Header() {
  const [opened, { open, close }] = useDisclosure(false);

  const [active, setActive] = useState(links[0].link);
  const color = usePrimaryColorHex();
  const { t } = useTranslation();
  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {t(link.label)}
    </Link>
  ));

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
            <Link to="/">
              <Text onClick={close} c="dark">
                Home
              </Text>
            </Link>
            <Link to="/about">
              <Text onClick={close} c="dark">
                About
              </Text>
            </Link>
          </Flex>
        </Drawer>

        <Burger opened={opened} onClick={open} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
