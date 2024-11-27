


// export async function signIn(username: string) {
//     //cari data email data dari backend
//     console.log("sini dulu")
//     const data = await retrieveDataByField('users', 'username', username)
//     if (data.length > 0) {
//         return data[0];
//     } else {
//         return null
//     }
// }

// export async function loginWithGoogle(
//     data: {
//         id?: string,
//         email: string,
//         role?: string,
//         password?: string,
//         image: string,
//         createdAt?: Date,
//         updatedAt?: Date

//     }, callback: Function) {
//     // const err = "data tidak ditemukan";
//     //ambil data dari backend
//     const user = await retrieveDataByField('users', 'email', data.email)
//     if (user.length > 0) {
//         // console.log(user[0]);
//         callback(user[0])

//     } else {
//         data.role = "member";
//         data.createdAt = new Date()
//         data.updatedAt = new Date()
//         data.password = ''
//         await addData('users', data, (status: boolean, res: any) => {
//             data.id = res.path.replace('users/', '')
//             if (status) {
//                 callback(data);
//             }
//         })
//     }
// }