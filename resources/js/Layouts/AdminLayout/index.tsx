import { Sidebar } from "@/Components/Sidebar";
import { User } from "@/types";
import { Link } from "@inertiajs/react";
import {
    AppShell,
    Burger,
    Flex,
    Group,
    Menu,
    rem,
    Text,
    UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown, IconLogout, IconUser } from "@tabler/icons-react";
import { PropsWithChildren } from "react";

export function AdminLayout({
    user,
    children,
}: PropsWithChildren<{ user: User }>) {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            layout="alt"
            header={{ height: 60 }}
            navbar={{
                width: 250,
                breakpoint: "sm",
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <Flex
                    h="100%"
                    px="md"
                    justify={{ base: "space-between", sm: "flex-end" }}
                    align="center"
                >
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        size="sm"
                    />

                    <Menu
                        width={200}
                        transitionProps={{
                            transition: "pop-top-right",
                        }}
                        position="bottom-end"
                    >
                        <Menu.Target>
                            <UnstyledButton>
                                <Group gap={7}>
                                    <Text size="sm" lh={1} mr={3}>
                                        {user.name}
                                    </Text>
                                    <IconChevronDown
                                        style={{
                                            width: rem(18),
                                            height: rem(18),
                                        }}
                                        stroke={1.5}
                                    />
                                </Group>
                            </UnstyledButton>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item
                                component={Link}
                                leftSection={
                                    <IconUser
                                        style={{
                                            width: rem(14),
                                            height: rem(14),
                                        }}
                                    />
                                }
                                href={route("profile.edit")}
                            >
                                Profile
                            </Menu.Item>
                            <Menu.Item
                                component={Link}
                                leftSection={
                                    <IconLogout
                                        style={{
                                            width: rem(14),
                                            height: rem(14),
                                        }}
                                    />
                                }
                                href={route("logout")}
                                as="button"
                                method="post"
                            >
                                Logout
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Flex>
            </AppShell.Header>
            <AppShell.Navbar>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                />
                <Sidebar />
            </AppShell.Navbar>
            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    );
}
