import {
    Button,
    Flex,
    Group,
    Modal,
    NumberInput,
    Radio,
    Select,
    SimpleGrid,
    Stack,
    Text,
    TextInput,
} from "@mantine/core";
import React, { FormEventHandler } from "react";
import { useForm } from "@inertiajs/react";
import { notifications } from "@mantine/notifications";
import { FeeFormType } from "@/types";
import { IconCurrencyPeso } from "@tabler/icons-react";

interface IProps {
    isOpened: boolean;
    close: () => void;
}

const AddFeeForm: React.FC<IProps> = ({ isOpened, close }) => {
    const { data, setData, post, processing, errors, reset, clearErrors } = useForm<FeeFormType>({
        payment_name: "",
        semester: "",
        amount: undefined,
        academic_year: "",
        status: "",
    });

    const addFeeSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("fees.store"), {
            onSuccess: () => {
                close();
                reset();
                notifications.show({
                    message: "New fee added successfully",
                    color: "quarta",
                });
            },
        });
    };

    const handleFeeFormClose = () => {
        reset();
        close();
        clearErrors();
    };

    return (
        <Modal
            opened={isOpened}
            onClose={handleFeeFormClose}
            title={
                <Text size="lg" fw={500}>
                    Add Fee
                </Text>
            }
            size={550}
            centered
            padding={28}
        >
            <form onSubmit={addFeeSubmit}>
                <Stack gap={16}>
                    <TextInput
                        id="payment_name"
                        type="text"
                        name="payment_name"
                        value={data.payment_name}
                        label="Payment Name"
                        onChange={(e) => setData("payment_name", e.target.value)}
                        error={errors.payment_name}
                    />

                    <Radio.Group
                        name="semester"
                        label="Semester"
                        value={data.semester}
                        onChange={(value) => setData("semester", value)}
                        error={errors.semester}
                    >
                        <Group mt="xs">
                            <Radio value="first_semester" label="First Semester" />
                            <Radio value="second_semester" label="Second Semester" />
                            <Radio value="both_semester" label="Both Semester" />
                        </Group>
                    </Radio.Group>

                    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
                        <NumberInput
                            id="amount"
                            placeholder="Enter Amount"
                            leftSectionPointerEvents="none"
                            label="Amount"
                            leftSection={<IconCurrencyPeso size={18} />}
                            value={data.amount}
                            onChange={(value) => setData("amount", value)}
                            error={errors.amount}
                        />

                        <Select
                            label="Academic Year"
                            placeholder="Select Academic Year"
                            value={data.academic_year}
                            onChange={(_value, option) => setData("academic_year", option.value)}
                            error={errors.academic_year}
                            data={["2024-2025", "2023-2024", "2022-2023"]}
                        />
                    </SimpleGrid>

                    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
                        <Select
                            label="Status"
                            placeholder="Select Status"
                            value={data.status}
                            onChange={(_value, option) => setData("status", option.value)}
                            error={errors.status}
                            data={["active", "inactive"]}
                        />
                    </SimpleGrid>
                </Stack>

                <Flex align="center" justify="end" mt={16}>
                    <Button variant="light" onClick={handleFeeFormClose}>
                        Cancel
                    </Button>

                    <Button ml={12} type="submit" loading={processing}>
                        Add Payment
                    </Button>
                </Flex>
            </form>
        </Modal>
    );
};

export default AddFeeForm;
