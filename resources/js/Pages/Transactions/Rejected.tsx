import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Stack, Text } from "@mantine/core";
import { AdminLayout } from "@/Layouts/AdminLayout";

export default function RejectedTransactions({ auth, roles }: PageProps) {
    return (
        <AdminLayout user={auth.user}>
            <Head title="Rejected Transactions" />
            <Stack px={8} gap={24} py={8}>
                <Text component="h2" size="xl" fw={600} c="gray.8">
                    Rejected Transactions
                </Text>
            </Stack>
        </AdminLayout>
    );
}
