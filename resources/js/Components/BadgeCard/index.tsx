import { Card, Image, Text, Stack } from "@mantine/core";
import classes from "./BadgeCard.module.css";

export function BadgeCard({ data }: any) {
    const { image, name, title, description } = data;

    return (
        <Card withBorder radius="md" p="md" className={classes.card} shadow="sm">
            <Card.Section>
                <Image src={image} alt={title} height={180} />
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
                <Stack gap={0} justify="apart">
                    <Text fz="md" fw={600} c="#000">
                        {name}
                    </Text>
                    <Text fz="xs" fw={500} c="#226012">
                        {title}
                    </Text>
                </Stack>
                <Text fz="sm" mt="xs" fw={400} c="#404040">
                    {description}
                </Text>
            </Card.Section>
        </Card>
    );
}
