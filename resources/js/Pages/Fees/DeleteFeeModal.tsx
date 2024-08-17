import { Button, Flex, Modal, Text } from "@mantine/core";
import React, { FormEventHandler } from "react";
import { useForm } from "@inertiajs/react";
import { notifications } from "@mantine/notifications";
import { Fee } from "@/types";

interface IProps {
    isOpened: boolean;
    close: () => void;
    fee?: Fee;
}

const DeleteFeeModal: React.FC<IProps> = ({ isOpened, close, fee }) => {
    const { processing, delete: destroy, reset } = useForm();

    const deleteFeeSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route("fees.destroy", fee?.id), {
            onSuccess: () => {
                close();
                notifications.show({
                    message: "Fee deleted successfully",
                    color: "red",
                });
            },
            onError: () => {
                close();
                notifications.show({
                    message: "Something went wrong",
                    color: "red",
                });
            },
            onFinish: () => reset(),
        });
    };

    const handleFeeModalClose = () => {
        reset();
        close();
    };

    return (
        <Modal
            opened={isOpened}
            onClose={handleFeeModalClose}
            title={<Text size="lg">Delete Fee</Text>}
            size={550}
        >
            <form onSubmit={deleteFeeSubmit}>
                <Text c="dimmed" mt={4} size="sm">
                    Delete {fee?.payment_name}
                </Text>

                <Flex align="center" justify="end" mt={16}>
                    <Button variant="subtle" color="gray" onClick={handleFeeModalClose}>
                        Cancel
                    </Button>

                    <Button ml={12} type="submit" loading={processing} color="red">
                        Confirm Delete
                    </Button>
                </Flex>
            </form>
        </Modal>
    );
};

export default DeleteFeeModal;
