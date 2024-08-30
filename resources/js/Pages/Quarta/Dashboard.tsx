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

const elements = [
    { name: "University Student Council", eReceipt: "5 000 000" },
    { name: "Organization Name", eReceipt: "0 000 000" },
    { name: "Organization Name", eReceipt: "0 000 000" },
    { name: "Organization Name", eReceipt: "0 000 000" },
    { name: "Organization Name", eReceipt: "0 000 000" },
];

export default function QuartaDashboard({ auth }: PageProps) {
    const rows = elements.map((element) => (
        <Table.Tr key={element.name}>
            <Table.Td>{element.name}</Table.Td>
            <Table.Td ta={"right"}>{element.eReceipt}</Table.Td>
        </Table.Tr>
    ));

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
                            <Group mb={20}>
                                <Center
                                    bg={"#C3FFB3"}
                                    w={20}
                                    h={20}
                                    p={2}
                                    style={{ borderRadius: 1 }}
                                >
                                    <IconChartBar size={16} color="#4C9E37" />
                                </Center>
                                <Text fw={500}>Top Billers</Text>
                            </Group>
                            <Center px={30}>
                                <Table withRowBorders={false}>
                                    <Table.Thead>
                                        <Table.Tr c={"#8D8D8D"} fw={400}>
                                            <Table.Th>Organization Name</Table.Th>
                                            <Table.Th ta={"right"}>E-Receipts Bought</Table.Th>
                                        </Table.Tr>
                                    </Table.Thead>
                                    <Table.Tbody fw={500}>{rows}</Table.Tbody>
                                </Table>
                            </Center>
                        </Paper>

                        <Paper withBorder p="md" radius="md">
                            <Group mb={48}>
                                <Center
                                    bg={"#C3FFB3"}
                                    w={20}
                                    h={20}
                                    p={2}
                                    style={{ borderRadius: 1 }}
                                >
                                    <IconChartBar size={16} color="#4C9E37" />
                                </Center>
                                <Text fw={500}>E-Receipts Sold</Text>
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
                                <IconReceiptFilled color="white" />
                                <Text fw={500} c="white">
                                    Total Receipts Sold
                                </Text>
                            </Group>

                            <Group gap={4}>
                                <Text fw={500} fz={28} c="white">
                                    2 000 000
                                </Text>
                            </Group>
                        </Paper>

                        <Paper withBorder p="lg" radius="md">
                            <Stack gap={24}>
                                <Group>
                                    <Center
                                        bg={"#C3FFB3"}
                                        h={20}
                                        w={20}
                                        style={{ borderRadius: 1 }}
                                    >
                                        <IconUsersGroup size={16} color="#4C9E37" />
                                    </Center>
                                    <Text fw={500}>Registered Organizations</Text>
                                </Group>
                                <Text fw={600} fz={32} ta="center">
                                    18
                                </Text>

                                <Divider />

                                <Group justify="space-between">
                                    <Group>
                                        <Center
                                            bg={"#FFFFB0"}
                                            h={20}
                                            w={20}
                                            style={{ borderRadius: 1 }}
                                        >
                                            <IconClockHour3 size={16} color="#A7A700" />
                                        </Center>
                                        <Text fw={500}>On Queue</Text>
                                    </Group>
                                    <Text size="sm" fw={500}>
                                        5000
                                    </Text>
                                </Group>
                                <Group justify="space-between">
                                    <Group>
                                        <Center
                                            bg={"#FFCCCC"}
                                            h={20}
                                            w={20}
                                            style={{ borderRadius: 1 }}
                                        >
                                            <IconX size={16} color="#DF1C1C" />
                                        </Center>
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
                    </Stack>
                </Grid.Col>

                <Grid.Col span={3}>
                    <Stack px={8} gap={24} py={8}>
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
