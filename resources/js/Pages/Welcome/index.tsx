import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import {
    Anchor,
    Box,
    Button,
    Card,
    Container,
    Flex,
    Grid,
    Group,
    Image,
    SimpleGrid,
    Stack,
    Text,
    Title,
} from "@mantine/core";
import ApplicationLogo from "@/Components/ApplicationLogo";
import classes from "./Welcome.module.css";

export default function Welcome({ auth }: PageProps) {
    return (
        <>
            <Head title="Welcome" />

            <Flex
                pos="relative"
                mih={100}
                direction="column"
                align="center"
                justify="center"
            >
                <div className={classes.container}>
                    <Grid align="center" gutter={8} py={40}>
                        <Grid.Col span={{ base: 6, lg: 4 }} offset={{ lg: 4 }}>
                            <Flex justify={{ lg: "center" }}>
                                <ApplicationLogo className={classes.logo} />
                            </Flex>
                        </Grid.Col>
                        <Grid.Col span={{ base: 6, lg: 4 }}>
                            <Flex justify="end" flex={1} mx={-12}>
                                {auth.user ? (
                                    <Anchor
                                        component={Link}
                                        href={route("dashboard")}
                                        underline="never"
                                        px={12}
                                        py={8}
                                        c="green"
                                    >
                                        Dashboard
                                    </Anchor>
                                ) : (
                                    <>
                                        <Anchor
                                            component={Link}
                                            href={route("login")}
                                            underline="never"
                                            px={12}
                                            py={8}
                                            c="green"
                                        >
                                            Login
                                        </Anchor>

                                        <Anchor
                                            component={Link}
                                            href={route("register")}
                                            underline="never"
                                            px={12}
                                            py={8}
                                            c="green"
                                        >
                                            Register
                                        </Anchor>
                                    </>
                                )}
                            </Flex>
                        </Grid.Col>
                    </Grid>

                    <div className={classes.wrapper}>
                        <Container size={700} className={classes.container}>
                            <h1 className={classes.title}>
                                This is the{" "}
                                <Text
                                    component="span"
                                    variant="gradient"
                                    gradient={{ from: "green", to: "green.9" }}
                                    inherit
                                >
                                    BU E-Receipt
                                </Text>{" "}
                                starting source code template.
                            </h1>

                            <Text className={classes.description} c="dimmed">
                                It is based on{" "}
                                <Anchor
                                    className={classes.description}
                                    href="https://laravel.com/docs/11.x/starter-kits#breeze-and-inertia"
                                >
                                    Laravel Breeze with React
                                </Anchor>{" "}
                                and uses the Mantine UI Framework instead of
                                Tailwind.
                            </Text>
                        </Container>
                    </div>
                </div>
            </Flex>
        </>
    );
}
