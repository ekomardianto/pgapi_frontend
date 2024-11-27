import nextAuth from "next-auth";

declare module "next-auth" {
    interface Session {
        // user: {
        //     data: {
        //         id: int,
        //         username: string,
        //         token: string
        //     }
        // }
        user: {
            id: int,
            username: string,
            email: string,
            name: string,
            rle: string,
            token: string,
            secret: string
        }
    }
}