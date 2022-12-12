enum ROLES {
    ADMIN = "admin",
    SELLER = "seller",
    CUSTOMER = "customer",
}

type TUser = {
    username: string;
    role: ROLES;
}

const aUser: TUser = {
    username: "carlos",
    role: ROLES.ADMIN
}
