import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import {
    Accordion,
    Anchor,
    Box,
    Button,
    Card,
    Center,
    Container,
    Flex,
    Grid,
    Group,
    Image,
    SimpleGrid,
    Skeleton,
    Space,
    Stack,
    Text,
    Title,
} from "@mantine/core";
import ApplicationLogo from "@/Components/ApplicationLogo";
import classes from "./Welcome.module.css";
import { HeaderMenu } from "@/Components/HeaderMenu";
import { BadgeCard } from "@/Components/BadgeCard";
import { ContactUs } from "@/Components/ContactUs";
import { FooterSocial } from "@/Components/FooterSocial";

const mockdata = {
    image: "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    name: "JORENE JASON DE VERA",
    title: "Chairman",
    description: "BS Agriculture Major in Agricultural Extension, BU Guinobatan",
};

const faq = [
    {
        value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit1",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, consequatur aspernatur nihil accusantium molestiae inventore voluptate, atque sequi commodi a consequuntur laboriosam ad provident blanditiis ipsam enim! Ipsum, consequatur sequi.",
    },
    {
        value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit2",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam obcaecati, repellendus earum non saepe accusantium at sed modi suscipit quis. Qui soluta debitis sapiente dignissimos itaque et, quasi hic nam.",
    },
    {
        value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit3",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti nostrum illo numquam molestiae enim tempora labore temporibus mollitia reiciendis accusantium, aspernatur veniam sequi dolores minus. Ullam accusamus expedita placeat autem?",
    },
    {
        value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit4",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti nostrum illo numquam molestiae enim tempora labore temporibus mollitia reiciendis accusantium, aspernatur veniam sequi dolores minus. Ullam accusamus expedita placeat autem?",
    },
    {
        value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit5",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti nostrum illo numquam molestiae enim tempora labore temporibus mollitia reiciendis accusantium, aspernatur veniam sequi dolores minus. Ullam accusamus expedita placeat autem?",
    },
];

const faqItems = faq.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
        <Accordion.Control>{item.value}</Accordion.Control>
        <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
));

export default function Welcome({ auth }: PageProps) {
    return (
        <>
            <Head title="Quarta" />

            <HeaderMenu auth={auth} />

            <div>
                <Image fit="contain" src="/images/USC RECIEPT SYSTEM 1 1.svg" />
                <Container pt={30} pb={30}>
                    <SimpleGrid cols={2} h={270} spacing={{ base: "xl" }}>
                        <div>
                            <Image
                                radius={"md"}
                                src={null}
                                h={250}
                                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                            ></Image>
                        </div>
                        <div>
                            <Stack h={"100%"} align="stretch" justify="center" gap="md">
                                <Text fw={700} size="xl">
                                    BU E-RECEIPT SYSTEM 2.0
                                </Text>
                                <Text fw={400} size="sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                    cursus libero id dolor suscipit posuere. Nunc vel convallis
                                    quam, ac commodo nisl. Phasellus vulputate viverra interdum.
                                    Etiam malesuada scelerisque leo nec aliquam. Vivamus viverra
                                    orci lectus, id interdum ipsum vestibulum ultricies. Vivamus
                                    facilisis at ex viverra ultrices.{" "}
                                </Text>
                                <Group>
                                    <Button
                                        px={30}
                                        fw={600}
                                        c={"#FFFFFF"}
                                        bg={"#226012"}
                                        variant="default"
                                    >
                                        <Text fw={600} size="sm">
                                            Register my Organization
                                        </Text>
                                    </Button>
                                    <Button
                                        px={30}
                                        fw={600}
                                        variant="default"
                                        c={"#FFFFFF"}
                                        bg={"#399A35"}
                                    >
                                        <Text fw={600} size="sm" mr={10}>
                                            Pay Fee
                                        </Text>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                d="M21.7071 12.7071C22.0976 12.3166 22.0976 11.6834 21.7071 11.2929L17.7071 7.29289C17.3166 6.90237 16.6834 6.90237 16.2929 7.29289C15.9024 7.68342 15.9024 8.31658 16.2929 8.70711L18.5858 11L3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13L18.5858 13L16.2929 15.2929C15.9024 15.6834 15.9024 16.3166 16.2929 16.7071C16.6834 17.0976 17.3166 17.0976 17.7071 16.7071L21.7071 12.7071Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </Button>
                                </Group>
                            </Stack>
                        </div>
                    </SimpleGrid>
                </Container>

                <Box bg="#399A35">
                    <Container pt={30} pb={30} c="#FFF">
                        <SimpleGrid cols={2} h={270} spacing={{ base: "xl" }}>
                            <div>
                                <Stack
                                    h={"100%"}
                                    // bg="var(--mantine-color-body)"
                                    align="stretch"
                                    justify="center"
                                    gap="md"
                                >
                                    <Text fw={700} size="xl">
                                        QUARTA BU
                                        <br />
                                        <span style={{ color: "#FFFF79" }}>
                                            ABOUT THE ORGANIZATON
                                        </span>
                                    </Text>
                                    <Text fw={400} size="sm">
                                        Quarta Bicol University, a university-based organization
                                        which leverages technology in promoting financial inclusion
                                        and literacy to students of Bicol University. Its mother
                                        organization, Quarta PH had served several families in rural
                                        barangays in the Bicol region. As an organization, Quarta BU
                                        aims to deliver services and technological solutions that
                                        will contribute to the convenience of BU students.
                                    </Text>
                                    <div>
                                        <Button
                                            fw={600}
                                            c="quarta"
                                            bg={"#FFFFFF"}
                                            variant="default"
                                        >
                                            <Text fw={600} size="sm">
                                                Read More
                                            </Text>
                                        </Button>
                                    </div>
                                </Stack>
                            </div>

                            <div>
                                <Image
                                    h={250}
                                    radius={"md"}
                                    fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                                ></Image>
                            </div>
                        </SimpleGrid>
                    </Container>
                </Box>

                <Space h="xl"></Space>

                <Box>
                    <Center>
                        <Stack gap={0} align="stretch" justify="center">
                            <Text fw={600} size="xl" c="#000">
                                OFFICIAL DIRECTORY
                            </Text>
                            <Text ta="center" fw={500} size="xs" c="#226012">
                                QUARTA BU 2024-2025
                            </Text>
                        </Stack>
                    </Center>

                    <Space h="xl"></Space>

                    <Container pr={100} pl={100}>
                        <SimpleGrid
                            type="container"
                            cols={{ base: 1, "300px": 2, "600px": 3 }}
                            spacing={{ base: 5, "300px": "md" }}
                        >
                            <BadgeCard data={mockdata} />
                            <BadgeCard data={mockdata} />
                            <BadgeCard data={mockdata} />
                            <BadgeCard data={mockdata} />
                            <BadgeCard data={mockdata} />
                            <BadgeCard data={mockdata} />
                            <BadgeCard data={mockdata} />
                            <BadgeCard data={mockdata} />
                            <BadgeCard data={mockdata} />
                            <BadgeCard data={mockdata} />
                            <BadgeCard data={mockdata} />
                            <BadgeCard data={mockdata} />
                        </SimpleGrid>
                    </Container>
                </Box>

                <Space h="xl"></Space>

                <Container>
                    <Stack gap={0} bd="3px solid #226012" style={{ borderRadius: 5 }}>
                        <Text bg="#226012" c="#FFFFFF" px={50} py={20} fw={700}>
                            FEATURES OF THE BU E-RECEIPT SYSTEM
                        </Text>
                        <SimpleGrid
                            px={50}
                            py={30}
                            cols={{ base: 1, sm: 2 }}
                            spacing={{ base: 10, sm: "xl" }}
                        >
                            <Card bd={"2px solid #226012"} shadow="sm" padding="sm">
                                <Flex>
                                    <div
                                        style={{
                                            justifyContent: "center",
                                            alignContent: "center",
                                        }}
                                    >
                                        <Center
                                            bg={"#EDEDED"}
                                            h={70}
                                            w={70}
                                            style={{ borderRadius: "50%" }}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="53"
                                                height="53"
                                                viewBox="0 0 51 53"
                                                fill="none"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M12.5248 22.0833V15.4583C12.5248 8.14048 18.1323 2.20825 25.0496 2.20825C31.9668 2.20825 37.5743 8.14048 37.5743 15.4583V22.0833C41.033 22.0833 43.8367 25.0494 43.8367 28.7083V41.9583C43.8367 45.6171 41.033 48.5833 37.5743 48.5833H12.5248C9.06616 48.5833 6.26239 45.6171 6.26239 41.9583V28.7083C6.26239 25.0494 9.06616 22.0833 12.5248 22.0833ZM16.6997 15.4583C16.6997 10.5797 20.4381 6.62492 25.0496 6.62492C29.6611 6.62492 33.3994 10.5797 33.3994 15.4583V22.0833H16.6997V15.4583ZM25.0496 30.9166C26.2024 30.9166 27.137 31.9053 27.137 33.1249V37.5416C27.137 38.7612 26.2024 39.7499 25.0496 39.7499C23.8967 39.7499 22.9621 38.7612 22.9621 37.5416V33.1249C22.9621 31.9053 23.8967 30.9166 25.0496 30.9166Z"
                                                    fill="#226012"
                                                />
                                            </svg>
                                        </Center>
                                    </div>
                                    <Space w="md" />
                                    <Stack gap={0}>
                                        <Text fw={600} size="lg">
                                            Secured Transactions
                                        </Text>
                                        <Text mt="xs" c="dimmed" size="sm">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Aliquam cursus libero id dolor suscipit posuere.
                                        </Text>
                                    </Stack>
                                </Flex>
                            </Card>
                            <Card bd={"2px solid #226012"} shadow="sm" padding="sm">
                                <Flex>
                                    <div
                                        style={{
                                            justifyContent: "center",
                                            alignContent: "center",
                                        }}
                                    >
                                        <Center
                                            bg={"#EDEDED"}
                                            h={70}
                                            w={70}
                                            style={{ borderRadius: "50%" }}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="51"
                                                height="53"
                                                viewBox="0 0 51 53"
                                                fill="none"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M27.137 4.41675H14.6122C11.1536 4.41675 8.34985 7.38286 8.34985 11.0417V41.9584C8.34985 45.6173 11.1536 48.5834 14.6122 48.5834H35.4869C38.9455 48.5834 41.7493 45.6173 41.7493 41.9584V22.0834H35.4869C30.8754 22.0834 27.137 18.1286 27.137 13.2501V4.41675ZM14.6122 26.5001C14.6122 25.2805 15.5468 24.2917 16.6997 24.2917H33.3994C34.5523 24.2917 35.4869 25.2805 35.4869 26.5001C35.4869 27.7197 34.5523 28.7084 33.3994 28.7084H16.6997C15.5468 28.7084 14.6122 27.7197 14.6122 26.5001ZM16.6997 35.3334C15.5468 35.3334 14.6122 36.3221 14.6122 37.5417C14.6122 38.7614 15.5468 39.7501 16.6997 39.7501H33.3994C34.5523 39.7501 35.4869 38.7614 35.4869 37.5417C35.4869 36.3221 34.5523 35.3334 33.3994 35.3334H16.6997Z"
                                                    fill="#226012"
                                                />
                                                <path
                                                    d="M41.3244 17.6667C41.0806 17.0027 40.7354 16.3796 40.2978 15.8241L33.1897 6.80053C32.6624 6.13116 32.0227 5.58692 31.3119 5.18836V13.2501C31.3119 15.6893 33.1811 17.6667 35.4869 17.6667H41.3244Z"
                                                    fill="#226012"
                                                />
                                            </svg>
                                        </Center>
                                    </div>
                                    <Space w="md" />
                                    <Stack gap={0}>
                                        <Text fw={600} size="lg">
                                            Auditing Made Easy
                                        </Text>
                                        <Text mt="xs" c="dimmed" size="sm">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Aliquam cursus libero id dolor suscipit posuere.
                                        </Text>
                                    </Stack>
                                </Flex>
                            </Card>
                        </SimpleGrid>
                    </Stack>
                </Container>

                <Space h="xl"></Space>

                <Box bg={"#0E4600"}>
                    <Container>
                        <Stack gap={0}>
                            <Center pt={"30"}>
                                <Text c={"#FFFFFF"} fz={"xl"} fw={600}>
                                    BE A PART OF THE{" "}
                                    <span style={{ color: "#FFFF79" }}>BU E-RECEIPT</span> TODAY!
                                </Text>
                            </Center>

                            <SimpleGrid
                                px={100}
                                py={30}
                                cols={{ base: 1, sm: 2 }}
                                spacing={{ base: 10, sm: "xl" }}
                            >
                                <Card bg={"#226012"} c={"#FFFFFF"}>
                                    <Stack>
                                        <Stack gap={0}>
                                            <Text fw={500} c={"#FFFF79"} fz={"xs"}>
                                                FOR ORGANIZATIONS
                                            </Text>
                                            <Text fw={600} fz={"xl"}>
                                                LOREM IPSUM
                                            </Text>
                                        </Stack>
                                        <Text fw={400} fz="xs">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Aliquam cursus libero id dolor suscipit posuere.
                                        </Text>
                                        <div>
                                            <Button
                                                fw={600}
                                                variant="default"
                                                c={"#226012"}
                                                bg={"#FFFFFF"}
                                            >
                                                <Text fw={600} size="sm" mr={10}>
                                                    Register
                                                </Text>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M21.7071 12.7071C22.0976 12.3166 22.0976 11.6834 21.7071 11.2929L17.7071 7.29289C17.3166 6.90237 16.6834 6.90237 16.2929 7.29289C15.9024 7.68342 15.9024 8.31658 16.2929 8.70711L18.5858 11L3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13L18.5858 13L16.2929 15.2929C15.9024 15.6834 15.9024 16.3166 16.2929 16.7071C16.6834 17.0976 17.3166 17.0976 17.7071 16.7071L21.7071 12.7071Z"
                                                        fill="#226012"
                                                    />
                                                </svg>
                                            </Button>
                                        </div>
                                    </Stack>
                                </Card>

                                <Card bg={"#399A35"} c={"#FFFFFF"}>
                                    <Stack>
                                        <Stack gap={0}>
                                            <Text fw={500} c={"#FFFF79"} fz={"xs"}>
                                                FOR STUDENTS
                                            </Text>
                                            <Text fw={600} fz={"xl"}>
                                                LOREM IPSUM
                                            </Text>
                                        </Stack>
                                        <Text fw={400} fz="xs">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Aliquam cursus libero id dolor suscipit posuere.
                                        </Text>
                                        <div>
                                            <Button
                                                fw={600}
                                                variant="default"
                                                c={"#226012"}
                                                bg={"#FFFFFF"}
                                            >
                                                <Text fw={600} size="sm" mr={10}>
                                                    Pay Fee
                                                </Text>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M21.7071 12.7071C22.0976 12.3166 22.0976 11.6834 21.7071 11.2929L17.7071 7.29289C17.3166 6.90237 16.6834 6.90237 16.2929 7.29289C15.9024 7.68342 15.9024 8.31658 16.2929 8.70711L18.5858 11L3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13L18.5858 13L16.2929 15.2929C15.9024 15.6834 15.9024 16.3166 16.2929 16.7071C16.6834 17.0976 17.3166 17.0976 17.7071 16.7071L21.7071 12.7071Z"
                                                        fill="#226012"
                                                    />
                                                </svg>
                                            </Button>
                                        </div>
                                    </Stack>
                                </Card>
                            </SimpleGrid>
                        </Stack>
                    </Container>
                </Box>

                <Space h={"xl"}></Space>

                <Container fluid>
                    <Center>
                        <Stack gap={0} align="stretch" justify="center">
                            <Text fw={600} size="xl" c="#000">
                                MEET THE DEVELOPERS
                            </Text>
                            <Text ta="center" fw={500} size="xs" c="#226012">
                                BU E-RECEIPT V2.0
                            </Text>
                        </Stack>
                    </Center>

                    <Space h="xl"></Space>

                    <Container pr={100} pl={100}>
                        <SimpleGrid
                            type="container"
                            cols={{ base: 1, "300px": 2, "600px": 3 }}
                            spacing={{ base: 5, "300px": "md" }}
                        >
                            <BadgeCard data={mockdata} />
                            <BadgeCard data={mockdata} />
                            <BadgeCard data={mockdata} />
                            <BadgeCard data={mockdata} />
                            <BadgeCard data={mockdata} />
                            <BadgeCard data={mockdata} />
                        </SimpleGrid>
                    </Container>
                </Container>

                <Space h="xl"></Space>

                <Container
                    py={30}
                    style={{
                        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.15)",
                        borderRadius: "10px",
                    }}
                >
                    <Center>
                        <Text fw={600} size="xl" c="#000">
                            FREQUENTLY ASKED QUESTIONS
                        </Text>
                    </Center>
                    <Space h={"xl"}></Space>
                    <Accordion defaultValue="Apples">{faqItems}</Accordion>
                </Container>

                <Space h="xl"></Space>

                <Container p={-5}>
                    <ContactUs />
                </Container>

                <Space h="xl"></Space>

                <Container fluid bg={"#404040"}>
                    <FooterSocial></FooterSocial>
                </Container>
            </div>

            {/* <Flex pos="relative" mih={100} direction="column" align="center" justify="center">
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
                                        c="quarta"
                                    >
                                        Dashboard
                                    </Anchor>
                                ) : (
                                    <Anchor
                                        component={Link}
                                        href={route("login")}
                                        underline="never"
                                        px={12}
                                        py={8}
                                        c="quarta"
                                    >
                                        Login
                                    </Anchor>
                                )}
                            </Flex>
                        </Grid.Col>
                    </Grid>

                    <div className={classes.wrapper}>
                        <Container size={700} className={classes.container}>
                            <h1 className={classes.title}>
                                This is{" "}
                                <Text
                                    component="span"
                                    variant="gradient"
                                    gradient={{
                                        from: "quarta",
                                        to: "quarta.9",
                                    }}
                                    inherit
                                >
                                    Quarta BU E-Receipt
                                </Text>{" "}
                                source code template.
                            </h1>

                            <Text className={classes.description} c="dimmed">
                                It is based on{" "}
                                <Anchor
                                    className={classes.description}
                                    href="https://laravel.com/docs/11.x/starter-kits#breeze-and-inertia"
                                >
                                    Laravel Breeze with React
                                </Anchor>{" "}
                                and uses the Mantine UI Framework instead of Tailwind.
                            </Text>
                        </Container>
                    </div>
                </div>
            </Flex> */}
        </>
    );
}
