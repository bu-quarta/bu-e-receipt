import { useState } from "react";
import { Group, Code } from "@mantine/core";
import {
    IconSettings,
    IconLayoutDashboard,
    IconUser,
} from "@tabler/icons-react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import classes from "./Sidebar.module.css";
import { Link } from "@inertiajs/react";

const data = [
    {
        link: "dashboard",
        label: "Dashboard",
        icon: IconLayoutDashboard,
        href: "dashboard",
    },
    {
        link: "profile.edit",
        label: "Profile",
        icon: IconSettings,
        href: "profile",
    },
];

export function Sidebar() {
    const links = data.map((item) => (
        <Link
            className={classes.link}
            data-active={route().current(item.link) || undefined}
            href={item.href}
            key={item.label}
        >
            <item.icon className={classes.linkIcon} stroke={1.5} />
            <span>{item.label}</span>
        </Link>
    ));

    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarMain}>
                <Group className={classes.header} justify="space-between">
                    <Link href="/dashboard">
                        <ApplicationLogo height={48} width={48} fill="white" />
                    </Link>
                </Group>
                {links}
            </div>
        </nav>
    );
}
