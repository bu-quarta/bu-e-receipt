import { useState } from "react";
import { Head } from "@inertiajs/react";
import { IconEdit, IconPlus, IconTrash } from "@tabler/icons-react";
import {
    ActionIcon,
    Badge,
    Box,
    Button,
    Flex,
    Group,
    Stack,
    Text,
} from "@mantine/core";
import { DataTable } from "mantine-datatable";
import { useDisclosure } from "@mantine/hooks";
import { Fee, FeePageProps } from "@/types";
import { AdminLayout } from "@/Layouts/AdminLayout";
import AddFeeForm from "./AddFeeForm";
import EditFeeForm from "./EditFeeForm";
import DeleteFeeModal from "./DeleteFeeModal";

export default function DisplayFees({ auth, fees }: FeePageProps) {
    const [currentFee, setCurrentFee] = useState<Fee | undefined>();

    // Add Fee Form Handlers
    const [addFeeFormOpened, { open: openAddFeeForm, close: closeAddFeeForm }] =
        useDisclosure(false);

    // Edit Fee Form Handlers
    const [
        editFeeFormOpened,
        { open: openEditFeeForm, close: closeEditFeeForm },
    ] = useDisclosure(false);

    const handleEditFee = (fee: Fee) => {
        setCurrentFee(fee);
        openEditFeeForm();
    };

    // Delete Fee Modal Handlers
    const [
        deleteFeeModalOpened,
        { open: openDeleteFeeModal, close: closeDeleteFeeModal },
    ] = useDisclosure(false);

    const handleDeleteFee = (fee: Fee) => {
        setCurrentFee(fee);
        openDeleteFeeModal();
    };

    return (
        <AdminLayout user={auth.user}>
            <Head title="Fee" />
            <Stack px={8} gap={24} py={8}>
                <Text component="h2" size="xl" fw={600} c="gray.8">
                    Fees
                </Text>
                <Flex
                    justify="flex-end"
                    direction={{ base: "column", md: "row" }}
                    gap={{ base: 12, md: 0 }}
                >
                    <Button
                        leftSection={<IconPlus size={14} />}
                        onClick={openAddFeeForm}
                    >
                        Add New Fee
                    </Button>
                </Flex>
                <DataTable
                    pinLastColumn
                    withTableBorder
                    shadow="xs"
                    borderRadius="sm"
                    withRowBorders={false}
                    highlightOnHover
                    verticalSpacing="md"
                    columns={[
                        { accessor: "payment_name", title: "Fee" },
                        { accessor: "amount" },
                        { accessor: "semester" },
                        {
                            accessor: "academic_year",
                        },
                        {
                            accessor: "status",
                            render: (fee) => (
                                <>
                                    {fee.status === "active" ? (
                                        <Badge color="green" variant="light">
                                            Active
                                        </Badge>
                                    ) : (
                                        <Badge color="red" variant="light">
                                            Inactive
                                        </Badge>
                                    )}
                                </>
                            ),
                        },
                        {
                            accessor: "added_on",
                        },
                        {
                            accessor: "actions",
                            title: <Box mr={6}>Actions</Box>,
                            render: (fee) => (
                                <Group gap={8} justify="left" wrap="nowrap">
                                    <ActionIcon
                                        size="md"
                                        color="quarta"
                                        onClick={() => {
                                            handleEditFee(fee);
                                        }}
                                    >
                                        <IconEdit size={16} />
                                    </ActionIcon>

                                    <ActionIcon
                                        size="md"
                                        color="red"
                                        onClick={() => {
                                            handleDeleteFee(fee);
                                        }}
                                    >
                                        <IconTrash size={16} />
                                    </ActionIcon>
                                </Group>
                            ),
                        },
                    ]}
                    records={fees}
                />
            </Stack>

            <AddFeeForm isOpened={addFeeFormOpened} close={closeAddFeeForm} />

            <EditFeeForm
                isOpened={editFeeFormOpened}
                close={closeEditFeeForm}
                fee={currentFee}
            />

            <DeleteFeeModal
                isOpened={deleteFeeModalOpened}
                close={closeDeleteFeeModal}
                fee={currentFee}
            />
        </AdminLayout>
    );
}
