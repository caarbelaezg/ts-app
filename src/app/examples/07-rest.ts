import { TUser, ROLES } from "./01-enum"

const currentUser: TUser = {
    username: 'Mauri',
    role: ROLES.ADMIN
}

export const checkAdminRole = () => {
    if(currentUser.role === ROLES.ADMIN) {
        return true;
    }
    return false;
}

export const checkRole = (...roles: Array<string>) => {
    if (roles.includes(currentUser.role)) {
        return true;
    }
    return false;
}
