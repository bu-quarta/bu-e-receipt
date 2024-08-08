import { useEffect, FormEventHandler } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Button, Flex, TextInput } from "@mantine/core";
import { Head, useForm } from "@inertiajs/react";
import { Text } from "@mantine/core";

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("password.confirm"));
    };

    return (
        <GuestLayout>
            <Head title="Confirm Password" />

            <Text mb={16} size="sm">
                This is a secure area of the application. Please confirm your
                password before continuing.
            </Text>

            <form onSubmit={submit}>
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
                    mt={16}
                />

                <Flex align="center" justify="end" mt={16}>
                    <Button ms={16} type="submit" loading={processing}>
                        Email Password Reset Link
                    </Button>
                </Flex>
            </form>
        </GuestLayout>
    );
}
