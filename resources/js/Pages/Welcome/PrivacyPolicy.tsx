import { HeaderMegaMenu } from "@/Components/HeaderMegaMenu";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { Container, Grid, List, Space, Text, ThemeIcon } from "@mantine/core";

export default function AboutUs({ auth }: PageProps) {
    return (
        <>
            <Head title="Privacy Policy" />
            <HeaderMegaMenu auth={auth} />
            <Container p={15}>
                <Grid gutter="xl">
                    <Grid.Col
                        span={2}
                        bg={"linear-gradient(180deg, #4C9E37 30%, #1B3813 100%)"}
                        // h={`calc(100vh - 80px)`}
                    ></Grid.Col>
                    <Grid.Col span={"auto"}>
                        <Container py={25} fw={600}>
                            <Text fw={500} c={"#226012"}>
                                BU E-RECEIPT SYSTEM
                            </Text>
                            <Text fw={600} fz={"xl"}>
                                Privacy Policy
                            </Text>
                            <Space h={"sm"} />

                            <Text fz={"xs"}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Convallis tellus id interdum velit. Pharetra vel turpis nunc eget
                                lorem dolor sed. Urna et pharetra pharetra massa massa ultricies mi
                                quis. In pellentesque massa placerat duis ultricies lacus sed.
                                Nullam eget felis eget nunc lobortis mattis aliquam. Nam at lectus
                                urna duis convallis convallis tellus id interdum. Ultricies mi quis
                                hendrerit dolor. Dictum sit amet justo donec. Non diam phasellus
                                vestibulum lorem sed risus ultricies tristique. Pellentesque eu
                                tincidunt tortor aliquam nulla facilisi cras. <br /> <br /> Enim
                                blandit volutpat maecenas volutpat blandit. Justo eget magna
                                fermentum iaculis eu non diam phasellus. Quisque egestas diam in
                                arcu cursus euismod quis. Pulvinar pellentesque habitant morbi
                                tristique. Commodo nulla facilisi nullam vehicula ipsum a arcu. Sit
                                amet consectetur adipiscing elit pellentesque habitant morbi
                                tristique senectus. Congue eu consequat ac felis donec et. Nunc sed
                                velit dignissim sodales ut eu sem integer. Mauris cursus mattis
                                molestie a iaculis at. Eget aliquet nibh praesent tristique magna
                                sit. Vestibulum sed arcu non odio. Orci phasellus egestas tellus
                                rutrum tellus pellentesque eu tincidunt tortor. Varius vel pharetra
                                vel turpis nunc. Elit duis tristique sollicitudin nibh sit amet
                                commodo nulla facilisi. Fermentum leo vel orci porta. Aliquet
                                sagittis id consectetur purus ut faucibus pulvinar elementum
                                integer. Quis eleifend quam adipiscing vitae proin sagittis nisl
                                rhoncus mattis.
                            </Text>

                            <Space h="md" />
                            <Text fw={600}>Sample Subtopic</Text>
                            <Space h="md" />

                            <List
                                spacing="xs"
                                size="sm"
                                center
                                fw={400}
                                pl={20}
                                icon={<ThemeIcon color="#4C9E37" radius={50} size={7} />}
                            >
                                <List.Item>Clone or download repository from GitHub</List.Item>
                                <List.Item>Install dependencies with yarn</List.Item>
                                <List.Item>
                                    To start development server run npm start command
                                </List.Item>
                                <List.Item>
                                    Run tests to make sure your changes do not break the build
                                </List.Item>
                                <List.Item>Submit a pull request once you are done</List.Item>
                            </List>

                            <Space h="md" />
                            <Text fw={600}>Sample Subtopic</Text>
                            <Space h="md" />

                            <Text fz={"xs"}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Convallis tellus id interdum velit. Pharetra vel turpis nunc eget
                                lorem dolor sed. Urna et pharetra pharetra massa massa ultricies mi
                                quis. In pellentesque massa placerat duis ultricies lacus sed.
                                Nullam eget felis eget nunc lobortis mattis aliquam. Nam at lectus
                                urna duis convallis convallis tellus id interdum. Ultricies mi quis
                                hendrerit dolor. Dictum sit amet justo donec. Non diam phasellus
                                vestibulum lorem sed risus ultricies tristique. Pellentesque eu
                                tincidunt tortor aliquam nulla facilisi cras.
                            </Text>
                        </Container>
                    </Grid.Col>
                </Grid>
            </Container>
        </>
    );
}
