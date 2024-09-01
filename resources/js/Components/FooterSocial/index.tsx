import { Container, Group, ActionIcon, Image, Stack, Text, Anchor } from "@mantine/core";
import classes from "./FooterSocial.module.css";
import { Link } from "@inertiajs/react";

export function FooterSocial() {
    return (
        <div className={classes.footer}>
            <Container className={classes.inner} c={"#FFFFFF"}>
                <Stack>
                    <Image src="/images/quartaWhite.svg" h={10} />
                    <Group>
                        <Text fz={"xs"}>Terms of Service</Text>
                        <Link
                            href="/privacy-policy"
                            style={{ textDecoration: "none", color: "#FFFFFF" }}
                        >
                            <Text fz={"xs"}>Privacy Policy</Text>
                        </Link>
                    </Group>
                </Stack>
                <Stack align="flex-end">
                    <Anchor href="https://www.facebook.com/quarta.ph">
                        <ActionIcon
                            size="lg"
                            color="gray"
                            variant="subtle"
                            bg={"#4C9E37"}
                            style={{ borderRadius: "50%" }}
                            p={5}
                        >
                            <Image src="/images/fbIcon.svg" />
                        </ActionIcon>
                    </Anchor>
                    <Text fz={"xs"}>Copyright @ 2022 Quarta BU. All Rights Reserved.</Text>
                </Stack>
            </Container>
        </div>
    );
}
