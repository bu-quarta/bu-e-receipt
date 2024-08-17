import { usePage } from "@inertiajs/react"; // Import usePage to access props
import { Anchor, Button, Center, Group, UnstyledButton } from "@mantine/core";
import {
    IconSettings,
    IconLayoutDashboard,
    IconUser,
    IconSwitchHorizontal,
    IconLogout,
    IconLayoutGrid,
} from "@tabler/icons-react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import classes from "./Sidebar.module.css";
import { Link } from "@inertiajs/react";
import { PageProps, User } from "@/types";

const data = [
    {
        link: "dashboard",
        label: "Dashboard",
        icon: IconLayoutGrid,
        href: "/dashboard",
        roles: [
            "e-receipt admin",
            "e-receipt finance officer",
            "e-receipt auditor",
        ],
    },
    {
        link: "transactions.pending",
        label: "Pending Transactions",
        icon: IconSettings,
        href: "/transactions/pending",
        roles: ["e-receipt finance officer", "e-receipt auditor"],
    },
    {
        link: "transactions.accepted",
        label: "Accepted Transactions",
        icon: IconSettings,
        href: "/transactions/accepted",
        roles: ["e-receipt finance officer", "e-receipt auditor"],
    },
    {
        link: "transactions.rejected",
        label: "Rejected Transactions",
        icon: IconSettings,
        href: "/transactions/rejected",
        roles: ["e-receipt finance officer", "e-receipt auditor"],
    },
    {
        link: "fees.index",
        label: "Fees",
        icon: IconSettings,
        href: "/fees",
        roles: ["e-receipt finance officer"],
    },
    {
        link: "remittance.overview",
        label: "Remittance Overview",
        icon: IconSettings,
        href: "/remittance/overview",
        roles: ["e-receipt finance officer"],
    },
    {
        link: "remittance.history",
        label: "Remittance History",
        icon: IconSettings,
        href: "/remittance/history",
        roles: ["e-receipt finance officer"],
    },
];

export function Sidebar() {
    const { roles } = usePage<PageProps>().props;

    const filteredData = data.filter((item) =>
        item.roles.some((role) => roles.includes(role))
    );

    const links = filteredData.map((item) => (
        <Link
            className={classes.link}
            data-active={route().current(item.link) || undefined}
            href={item.href}
            key={item.label}
        >
            <item.icon className={classes.linkIcon} stroke={1.5} size={20} />
            <span>{item.label}</span>
        </Link>
    ));

    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarHeader}>
                <Center className={classes.header}>
                    <Link href="/dashboard">
                        <ApplicationLogo height={48} width={48} fill="white" />
                    </Link>
                </Center>
            </div>

            <div className={classes.navbarMain}>{links}</div>

            <div className={classes.footer}>
                <Anchor
                    unstyled
                    component={Link}
                    href="/role-selection"
                    className={classes.link}
                >
                    <IconSwitchHorizontal
                        className={classes.linkIcon}
                        stroke={1.5}
                        size={20}
                    />
                    <span>Change role</span>
                </Anchor>

                <UnstyledButton
                    component={Link}
                    w="100%"
                    as="button"
                    method="post"
                    href={route("logout")}
                    className={classes.link}
                >
                    <IconLogout
                        className={classes.linkIcon}
                        stroke={1.5}
                        size={20}
                    />
                    <span>Logout</span>
                </UnstyledButton>
            </div>
        </nav>
    );
}
