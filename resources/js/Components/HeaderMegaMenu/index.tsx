import {
    Group,
    Button,
    Divider,
    Box,
    Burger,
    Drawer,
    ScrollArea,
    rem,
    useMantineTheme,
    Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./HeaderMegaMenu.module.css";
import { Link } from "@inertiajs/react";

export function HeaderMegaMenu({ auth }: any) {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();

    return (
        <Box>
            <header className={classes.header}>
                <Group justify="space-between" h="100%">
                    <Group gap={5}>
                        <Image src="/images/BULogo.svg" h={37} />
                        <Image src="/images/USCBUlogo.svg" h={40} />
                        <Image src="/images/quarta.svg" />
                    </Group>

                    <Group h="100%" gap={0} visibleFrom="sm">
                        <Link href="/" className={classes.link}>
                            HOME
                        </Link>
                        <Link href="/about-us" className={classes.link}>
                            ABOUT US
                        </Link>
                        <Link href="/privacy-policy" className={classes.link}>
                            PRIVACY POLICY
                        </Link>
                        <Link href="/#contact-us" className={classes.link}>
                            CONTACT US
                        </Link>
                        <Link href="/login">
                            <Button variant="default" c={"white"} bg={"#4C9E37"}>
                                Log in
                            </Button>
                        </Link>
                    </Group>
                    <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
                </Group>
            </header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Quarta"
                hiddenFrom="sm"
                zIndex={1000000}
            >
                <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
                    <Divider my="sm" />

                    <Link href="/" className={classes.link}>
                        HOME
                    </Link>
                    <Link href="/about-us" className={classes.link}>
                        ABOUT US
                    </Link>
                    <Link href="/privacy-policy" className={classes.link}>
                        PRIVACY POLICY
                    </Link>
                    <Link href="/#contact-us" className={classes.link}>
                        CONTACT US
                    </Link>

                    <Divider my="sm" />

                    <Link href="/login">
                        <Button variant="default" c={"white"} bg={"#4C9E37"}>
                            Log in
                        </Button>
                    </Link>
                </ScrollArea>
            </Drawer>
        </Box>
    );
}
