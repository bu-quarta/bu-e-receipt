import { PageProps } from "@/types";
import { useForm } from "@inertiajs/react";
import { ActionIcon, Center, Code, Group, Stack, Text } from "@mantine/core";
import { IconUserFilled } from "@tabler/icons-react";
import React from "react";

const SelectRole: React.FC<PageProps> = ({ auth }) => {
    // Initialize the form state
    const { data, post, reset } = useForm({
        role: "", // Initialize role as an empty string
    });

    // Handle role selection and form submission
    const handleRoleClick = (role: string) => {
        data.role = role;

        post(route("role.selected"), {
            onFinish: () => reset(), // Reset form after submission
        });
    };

    return (
        <Center h="100vh" bg="#262626">
            <Stack gap={72}>
                <div>
                    <Text fw={300} c="white" size="xl" ta="center">
                        Welcome Back!
                    </Text>

                    {/* The Org Google Name will show here */}
                    <Text fw={600} c="white" size="xl" tt="uppercase" ta="center">
                        {auth.user.name}
                    </Text>
                </div>

                <div>
                    <Text fw={300} c="white" size="xl" ta="center">
                        Who is using the E-Receipt System?
                    </Text>
                    <Group justify="center" mt={36} gap={36}>
                        <Stack align="center">
                            <ActionIcon
                                onClick={() => handleRoleClick("e-receipt admin")}
                                size={170}
                                variant="filled"
                                color="#003697"
                            >
                                <IconUserFilled size={96} />
                            </ActionIcon>
                            <Text c="white">Admin</Text>
                        </Stack>

                        <Stack align="center">
                            <ActionIcon
                                onClick={() => handleRoleClick("e-receipt finance officer")}
                                size={170}
                                variant="filled"
                                color="#4C9E37"
                            >
                                <IconUserFilled size={96} />
                            </ActionIcon>
                            <Text c="white">Finance Officer</Text>
                        </Stack>

                        <Stack align="center">
                            <ActionIcon
                                onClick={() => handleRoleClick("e-receipt auditor")}
                                size={170}
                                variant="filled"
                                color="#C0C000"
                            >
                                <IconUserFilled size={96} />
                            </ActionIcon>
                            <Text c="white">Auditor</Text>
                        </Stack>

                        <Stack align="center">
                            <ActionIcon
                                onClick={() => handleRoleClick("quarta admin")}
                                size={170}
                                variant="filled"
                                color="#C0C000"
                            >
                                <IconUserFilled size={96} />
                            </ActionIcon>
                            <Text c="white">Quarta Admin</Text>
                        </Stack>
                    </Group>
                </div>
            </Stack>
        </Center>
    );
};

export default SelectRole;
