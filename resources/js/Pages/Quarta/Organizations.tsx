import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import {
    Anchor,
    Button,
    Center,
    Divider,
    Flex,
    Grid,
    Group,
    Paper,
    Select,
    Stack,
    Table,
    Text,
} from "@mantine/core";
import { AdminLayout } from "@/Layouts/AdminLayout";
import {
    IconCalendar,
    IconCalendarBolt,
    IconCalendarMonth,
    IconChartBar,
    IconUsersGroup,
    IconChartBarPopular,
    IconReceiptFilled,
    IconChevronRight,
    IconCurrencyPeso,
    IconLayoutDashboard,
    IconSquare,
    IconClockHour3,
    IconX,
} from "@tabler/icons-react";
import { BarChart, PieChart } from "@mantine/charts";
import React from "react";

export default function QuartaDashboard({ auth }: PageProps) {
    return (
        <AdminLayout user={auth.user}>
            <Head title="Dashboard" />

            <Grid align="stretch">
                <Grid.Col span={6}>
                    <Stack px={8} gap={24} py={8}>
                        <Group>
                            <IconUsersGroup />

                            <Text component="h2" size="xl" fw={600} c="gray.8">
                                Organizations
                            </Text>
                        </Group>
                    </Stack>
                </Grid.Col>
            </Grid>
        </AdminLayout>
    );
}
