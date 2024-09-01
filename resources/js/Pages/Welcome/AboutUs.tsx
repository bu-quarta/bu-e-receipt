import { BadgeCard } from "@/Components/BadgeCard";
import { HeaderMegaMenu } from "@/Components/HeaderMegaMenu";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import {
    Center,
    Container,
    Grid,
    Image,
    Paper,
    SimpleGrid,
    Space,
    Stack,
    Text,
} from "@mantine/core";

const mockdata = {
    image: "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    name: "JORENE JASON DE VERA",
    title: "Chairman",
    description: "BS Agriculture Major in Agricultural Extension, BU Guinobatan",
};

export default function AboutUs({ auth }: PageProps) {
    return (
        <>
            <Head title="About Us" />
            <HeaderMegaMenu auth={auth} />
            <Container p={15}>
                <Grid gutter="xl">
                    <Grid.Col
                        span={2}
                        bg={"linear-gradient(180deg, #4C9E37 30%, #1B3813 100%)"}
                    ></Grid.Col>
                    <Grid.Col span={"auto"}>
                        <Container py={25} fw={600}>
                            <Text fw={500} c={"#226012"}>
                                QUARTA BU
                            </Text>
                            <Text fz={"xl"}>About the Organization</Text>
                            <Space h={"sm"} />

                            <Grid>
                                <Grid.Col span={{ base: 12, sm: 8 }} order={{ base: 2, sm: 1 }}>
                                    <Text fz={"xs"}>
                                        <span style={{ color: "#226012" }}>
                                            Quarta Bicol University
                                        </span>
                                        , a university-based organization which leverages technology
                                        in promoting financial inclusion and literacy to students of
                                        Bicol University. Its mother organization, Quarta PH had
                                        served several families in rural barangays in the Bicol
                                        region. As an organization, Quarta BU aims to deliver
                                        services and technological solutions that will contribute to
                                        the convenience of BU students. The e-receipt system, in
                                        particular, was developed by Quarta BU to give the students
                                        an easy and practical way to monitor and store their
                                        financial involvements. With the aid of the right financial
                                        tools, effective financial education, and utilization of
                                        technology, Quarta BU believes that producing a slate of
                                        individuals who are passionate about entrepreneurship and
                                        creating solutions is possible and can be achieved.
                                    </Text>
                                </Grid.Col>
                                <Grid.Col span={"auto"} order={{ base: 1, sm: 2 }}>
                                    <Image
                                        radius="md"
                                        src={null}
                                        h={200}
                                        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                                    />
                                </Grid.Col>
                            </Grid>
                        </Container>

                        <Paper>
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

                            <Container px={25}>
                                <SimpleGrid
                                    type="container"
                                    cols={{ base: 1, "300px": 2, "500px": 3 }}
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
                        </Paper>
                    </Grid.Col>
                </Grid>
            </Container>
        </>
    );
}
