import { createTheme } from "@mantine/core";

export const theme = createTheme({
    /** Put your mantine theme override here */
    fontFamily: "Inter, sans-serif",
    primaryColor: "quarta",
    colors: {
        quarta: [
            "#effbec",
            "#e0f3dc",
            "#c0e5b7",
            "#9ed68f",
            "#81ca6e",
            "#6ec258",
            "#64bf4d",
            "#53a83d",
            "#489534",
            "#3a8228",
        ],
    },
    primaryShade: 7,
});
