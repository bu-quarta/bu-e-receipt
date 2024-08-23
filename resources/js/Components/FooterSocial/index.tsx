import {
    Container,
    Group,
    ActionIcon,
    rem,
    Image,
    Stack,
    Text,
    UnstyledButton,
} from "@mantine/core";
import {
    IconBrandTwitter,
    IconBrandYoutube,
    IconBrandInstagram,
    IconBrandFacebook,
} from "@tabler/icons-react";
// import { MantineLogo } from "@mantinex/mantine-logo";
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
                        <Text fz={"xs"}>Privacy Policy</Text>
                    </Group>
                </Stack>
                <Stack align="flex-end">
                    <ActionIcon
                        size="lg"
                        color="gray"
                        variant="subtle"
                        bg={"#4C9E37"}
                        style={{ borderRadius: "50%" }}
                        p={5}
                    >
                        {/* <IconBrandFacebook
                        style={{ width: rem(18), height: rem(18) }}
                        stroke={1.5}
                        color="white"
                    /> */}
                        <Image src="/images/fbIcon.svg" />
                    </ActionIcon>
                    <Text fz={"xs"}>Copyright @ 2022 Quarta BU. All Rights Reserved.</Text>
                </Stack>
            </Container>
        </div>
    );
}
