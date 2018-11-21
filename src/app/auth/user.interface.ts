export interface Roles {
    user?: boolean;
    teacher?: boolean;
    admin?: boolean;
 }

export interface User {
    uid: string;
    email: string;
    roles: Roles;
}
