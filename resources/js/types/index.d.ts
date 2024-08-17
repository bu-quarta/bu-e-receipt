export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type Fee = {
    id: string;
    payment_name: string;
    semester: string;
    amount: string | number | undefined;
    academic_year: string;
    status: string;
    added_on: string;
};

export type FeeFormType = Omit<Fee, "id" | "added_on">;

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    roles: string[];
};

export type FeePageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    fees: Fee[];
    roles: string[];
};
