import { AdminLayout } from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Box, Container, Paper } from "@mantine/core";

export default function Dashboard({ auth }: PageProps) {
    return (
        <AdminLayout user={auth.user}>
            <Head title="Dashboard" />

            <Box py={48}>
                <Container size={1280} px={32}>
                    <Paper shadow="xs" p={24}>
                        Wow, you're logged in!
                    </Paper>
                </Container>
            </Box>
        </AdminLayout>
    );
}
