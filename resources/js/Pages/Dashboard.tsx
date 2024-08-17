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
    Text,
} from "@mantine/core";
import { AdminLayout } from "@/Layouts/AdminLayout";
import {
    IconCalendar,
    IconCalendarBolt,
    IconCalendarMonth,
    IconChartBar,
    IconChevronRight,
    IconCurrencyPeso,
    IconLayoutDashboard,
    IconSquare,
} from "@tabler/icons-react";
import { BarChart, PieChart } from "@mantine/charts";
import React from "react";

export const data = [
    { month: "Jan", PaymentReceived: 1200, Laptops: 900, Tablets: 200 },
    { month: "Feb", PaymentReceived: 1900, Laptops: 1200, Tablets: 400 },
    { month: "Mar", PaymentReceived: 400, Laptops: 1000, Tablets: 200 },
    { month: "Apr", PaymentReceived: 1000, Laptops: 200, Tablets: 800 },
    { month: "May", PaymentReceived: 800, Laptops: 1400, Tablets: 1200 },
    { month: "Jun", PaymentReceived: 900, Laptops: 600, Tablets: 1000 },
    { month: "Jul", PaymentReceived: 750, Laptops: 600, Tablets: 1000 },
    { month: "Aug", PaymentReceived: 654, Laptops: 600, Tablets: 1000 },
    { month: "Sep", PaymentReceived: 900, Laptops: 600, Tablets: 1000 },
    { month: "Oct", PaymentReceived: 450, Laptops: 600, Tablets: 1000 },
    { month: "Nov", PaymentReceived: 234, Laptops: 600, Tablets: 1000 },
    { month: "Dec", PaymentReceived: 400, Laptops: 600, Tablets: 1000 },
];

export const dataPie = [
    { name: "USA", value: 400, color: "quarta.6" },
    { name: "India", value: 300, color: "quarta.4" },
    { name: "Japan", value: 300, color: "quarta.2" },
    { name: "Other", value: 200, color: "quarta.1" },
];

export default function Dashboard({ auth }: PageProps) {
    return (
        <AdminLayout user={auth.user}>
            <Head title="Dashboard" />

            <Grid align="stretch">
                <Grid.Col span={6}>
                    <Stack px={8} gap={24} py={8}>
                        <Group>
                            <IconLayoutDashboard />

                            <Text component="h2" size="xl" fw={600} c="gray.8">
                                Dashboard
                            </Text>
                        </Group>
                        <Flex justify="end">
                            <Select
                                w={160}
                                placeholder="Pick value"
                                data={["This Month", "Last 7 days"]}
                                defaultValue={"This Month"}
                                leftSection={<IconCalendarMonth stroke={1.5} size={16} />}
                            />
                        </Flex>

                        <Paper withBorder p="md" radius="md">
                            <Group mb={48}>
                                <IconChartBar />
                                <Text fw={500}>Payment Received from Users</Text>
                            </Group>
                            <BarChart
                                h={300}
                                data={data}
                                dataKey="month"
                                series={[
                                    {
                                        name: "PaymentReceived",
                                        label: "Payment Received",
                                    },
                                ]}
                                tickLine="none"
                                gridAxis="none"
                            />
                        </Paper>

                        <Paper withBorder p="md" radius="md">
                            <Group mb={48}>
                                <IconChartBar />
                                <Text fw={500}>Payment Received from Users</Text>
                            </Group>
                            <BarChart
                                h={300}
                                data={data}
                                dataKey="month"
                                series={[{ name: "PaymentReceived" }]}
                                tickLine="none"
                                gridAxis="none"
                            />
                        </Paper>
                    </Stack>
                </Grid.Col>

                <Grid.Col span={3}>
                    <Stack px={8} gap={24} py={8}>
                        <Paper
                            withBorder
                            p="md"
                            radius="md"
                            style={{
                                backgroundColor: "#399A35",
                            }}
                        >
                            <Group mb={24}>
                                <IconChartBar color="white" />
                                <Text fw={500} c="white">
                                    Total Amount Received
                                </Text>
                            </Group>

                            <Group gap={4}>
                                <IconCurrencyPeso color="white" size={32} />
                                <Text fw={500} fz={28} c="white">
                                    5 000 000
                                </Text>
                            </Group>
                        </Paper>

                        <Paper withBorder p="lg" radius="md">
                            <Stack gap={24}>
                                <Group>
                                    <IconChartBar />
                                    <Text fw={500}>Payment Transactions</Text>
                                </Group>
                                <Text fw={600} fz={32} ta="center">
                                    11 000
                                </Text>

                                <Divider />

                                <Group justify="space-between">
                                    <Group>
                                        <IconChartBar />
                                        <Text fw={500}>On Queue</Text>
                                    </Group>
                                    <Text size="sm" fw={500}>
                                        5000
                                    </Text>
                                </Group>
                                <Group justify="space-between">
                                    <Group>
                                        <IconChartBar />
                                        <Text fw={500}>Validated</Text>
                                    </Group>
                                    <Text size="sm" fw={500}>
                                        6000
                                    </Text>
                                </Group>
                                <Group justify="space-between">
                                    <Group>
                                        <IconChartBar />
                                        <Text fw={500}>Rejected</Text>
                                    </Group>
                                    <Text size="sm" fw={500}>
                                        2
                                    </Text>
                                </Group>

                                <Divider />

                                <Group justify="space-between">
                                    <Text fw={500}>View Transactions</Text>
                                    <IconChevronRight />
                                </Group>
                            </Stack>
                        </Paper>

                        <Paper withBorder p="lg" radius="md">
                            <Stack gap={24}>
                                <Group>
                                    <IconChartBar />
                                    <Text fw={500}>Payment Received by Fee</Text>
                                </Group>

                                <Center>
                                    <PieChart size={150} data={dataPie} />
                                </Center>

                                <Divider />

                                <Stack gap={8}>
                                    <Group justify="space-between">
                                        <Group>
                                            <IconSquare
                                                fill="var(--mantine-primary-color-5)"
                                                color="none"
                                                size={18}
                                            />
                                            <Text fw={500} size="sm">
                                                USC Fee
                                            </Text>
                                        </Group>
                                        <Text size="sm" fw={500}>
                                            300
                                        </Text>
                                    </Group>

                                    <Group justify="space-between">
                                        <Group>
                                            <IconSquare
                                                fill="var(--mantine-color-gray-5)"
                                                color="none"
                                                size={18}
                                            />
                                            <Text fw={500} size="sm">
                                                Publication Fee
                                            </Text>
                                        </Group>
                                        <Text size="sm" fw={500}>
                                            300
                                        </Text>
                                    </Group>
                                </Stack>

                                <Divider />

                                <Group justify="space-between">
                                    <Text fw={500}>View Payment Types</Text>
                                    <IconChevronRight />
                                </Group>
                            </Stack>
                        </Paper>
                    </Stack>
                </Grid.Col>

                <Grid.Col span={3}>
                    <Stack px={8} gap={24} py={8}>
                        <Paper withBorder p="lg" radius="md">
                            <Stack gap={24}>
                                <Group>
                                    <IconChartBar />
                                    <Text fw={500}>E-Receipts Remaining</Text>
                                </Group>
                                <Text fw={600} fz={32} ta="center">
                                    5 789
                                </Text>

                                <Button>Add More</Button>
                            </Stack>
                        </Paper>

                        <Paper withBorder radius="md">
                            <Group justify="space-between" p="lg">
                                <Text fw={500}>Recent Transactions</Text>
                                <Anchor>View All</Anchor>
                            </Group>
                            <Divider />
                            {Array.from({ length: 8 }).map((_, index) => (
                                <React.Fragment key={index}>
                                    <Group justify="space-between" align="flex-start" p="lg">
                                        <div>
                                            <Text size="sm" fw="bolder">
                                                USC Fee
                                            </Text>
                                            <Text size="xs" c="dimmed">
                                                July 27, 2024 10:00 AM
                                            </Text>
                                        </div>
                                        <Text fw="bold" size="md">
                                            + 350.00
                                        </Text>
                                    </Group>
                                    {index !== 7 && <Divider />}
                                </React.Fragment>
                            ))}
                        </Paper>
                    </Stack>
                </Grid.Col>
            </Grid>
        </AdminLayout>
    );
}
