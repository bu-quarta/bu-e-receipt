import { useEffect, FormEventHandler } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import {
    Anchor,
    Button,
    Checkbox,
    Flex,
    Stack,
    Text,
    TextInput,
} from "@mantine/core";

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

            {status && (
                <Text c="green" mb={16} size="sm" fw={500}>
                    {status}
                </Text>
            )}

            <form onSubmit={submit}>
                <Stack gap={16}>
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        autoComplete="username"
                        leftSectionPointerEvents="none"
                        label="Email"
                        onChange={(e) => setData("email", e.target.value)}
                        error={errors.email}
                    />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        autoComplete="current-password"
                        leftSectionPointerEvents="none"
                        label="Password"
                        onChange={(e) => setData("password", e.target.value)}
                        error={errors.password}
                    />

                    <Flex align="center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                            label="Remember me"
                        />
                    </Flex>

                    <Flex align="center" justify="end">
                        {canResetPassword && (
                            <Anchor
                                component={Link}
                                href={route("password.request")}
                                size="sm"
                            >
                                Forgot your password?
                            </Anchor>
                        )}
                        <Button ml={16} type="submit" loading={processing}>
                            Log in
                        </Button>
                    </Flex>
                </Stack>
            </form>
        </GuestLayout>
    );
}
