import { Menu, Group, Center, Burger, Container, Button, Anchor, Flex, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from "./HeaderMenu.module.css";
import { Link } from "@inertiajs/react";

const links = [
    { link: "/about", label: "HOME" },
    { link: "/about", label: "ABOUT US" },
    { link: "/pricing", label: "PRIVACY POLICY" },
    { link: "/pricing", label: "CONTACT US" },
];

export function HeaderMenu({ auth }) {
    const [opened, { toggle }] = useDisclosure(false);

    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Menu.Item key={item.link}>{item.label}</Menu.Item>
        ));

        if (menuItems) {
            return (
                <Menu
                    key={link.label}
                    trigger="hover"
                    transitionProps={{ exitDuration: 0 }}
                    withinPortal
                >
                    <Menu.Target>
                        <a
                            href={link.link}
                            className={classes.link}
                            onClick={(event) => event.preventDefault()}
                        >
                            <Center>
                                <span className={classes.linkLabel}>{link.label}</span>
                                <IconChevronDown size="0.9rem" stroke={1.5} />
                            </Center>
                        </a>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
            );
        }

        return (
            <a
                key={link.label}
                href={link.link}
                className={classes.link}
                onClick={(event) => event.preventDefault()}
                style={{ fontSize: ".8rem" }}
            >
                {link.label}
            </a>
        );
    });

    return (
        <header className={classes.header}>
            <Container fluid size="md">
                <div className={classes.inner}>
                    {/* <MantineLogo size={28} /> */}
                    <Group gap="xs">
                        <Image src="/images/BULogo.svg" h={37} />
                        <Image src="/images/USCBUlogo.svg" h={40} />
                        <Image src="/images/quarta.svg" />
                    </Group>
                    <Group gap={5} visibleFrom="sm">
                        {items}
                        <Button>
                            {auth.user ? null : (
                                <Anchor
                                    component={Link}
                                    href={route("login")}
                                    underline="never"
                                    c="white"
                                    fw={600}
                                    fz={"sm"}
                                >
                                    LOGIN
                                </Anchor>
                            )}
                        </Button>
                    </Group>
                    <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
                </div>
            </Container>
        </header>
    );
}
