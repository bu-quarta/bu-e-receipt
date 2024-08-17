import "./bootstrap";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/notifications/styles.css";
import "mantine-datatable/styles.css";

import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Notifications } from "@mantine/notifications";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob("./Pages/**/*.tsx")),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <MantineProvider theme={theme}>
                <Notifications />
                <App {...props} />
            </MantineProvider>,
        );
    },
    progress: {
        color: "var(--mantine-primary-color-3)",
        showSpinner: true,
    },
});
