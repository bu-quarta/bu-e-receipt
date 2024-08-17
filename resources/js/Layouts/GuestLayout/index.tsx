import { PropsWithChildren } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { Center, Flex, Paper } from "@mantine/core";
import classes from "./GuestLayout.module.css";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <Center
            h="100vh"
            style={{
                background: "linear-gradient(252deg, #4C9E37 0%, #113C01 100%)",
            }}
        >
            <Paper shadow="md" radius="md" py={56} px={36}>
                {children}
            </Paper>
        </Center>
    );
}
