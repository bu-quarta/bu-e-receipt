import { useEffect, FormEventHandler } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import {
    Anchor,
    Button,
    Checkbox,
    Divider,
    Flex,
    Group,
    Image,
    Stack,
    Text,
    TextInput,
} from "@mantine/core";
import { IconBrandGoogle, IconBrandGoogleFilled } from "@tabler/icons-react";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <form onSubmit={submit}>
                <Stack gap={32} align="center">
                    <Group>
                        <Image src="/images/usc-logo.png" h={62} w={88} />
                        <Image src="/images/quarta.png" h={62} w={179} />
                    </Group>
                    <div>
                        <Text fw={400} c="#226012" size="xl" ta="center" tt="uppercase">
                            Welcome to
                        </Text>

                        <Text fw={700} c="#226012" fz={24} tt="uppercase" ta="center">
                            BU E-Receipt System
                        </Text>
                    </div>

                    <Button
                        leftSection={<IconBrandGoogleFilled size={20} />}
                        component="a"
                        color="#226012"
                        href={route("google-auth")}
                        size="md"
                        px={24}
                        h={56}
                        fullWidth
                        fw={400}
                    >
                        LOGIN WITH BU EMAIL
                    </Button>

                    <Stack align="center" gap={4}>
                        <Text fw={500} size="md" ta="center">
                            New to BU E-Receipt System?
                        </Text>

                        <Anchor
                            component={Link}
                            href="/org-registration"
                            fw={500}
                            size="md"
                            underline="always"
                        >
                            Register my Organization
                        </Anchor>
                    </Stack>
                </Stack>
            </form>
        </GuestLayout>
    );
}
