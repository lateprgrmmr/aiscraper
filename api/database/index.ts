import { getConnection as connect } from "./connection";

export async function thisFunctionNeedsToExist() {
    return connect();
}

// export default {
//     users: new UserDAO(),
// };