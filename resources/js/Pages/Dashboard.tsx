import { AdminLayout } from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Box, Container, Paper, Stack, Text } from "@mantine/core";

export default function Dashboard({ auth }: PageProps) {
    return (
        <AdminLayout user={auth.user}>
            <Head title="Dashboard" />

            <Stack px={8} gap={24} py={8}>
                <Text component="h2" size="xl" fw={600} c="gray.8">
                    Dashboard
                </Text>
            </Stack>
        </AdminLayout>
    );
}
