import { UserDb } from "../db/mysql.js";

async function test() {
    console.log('create', await UserDb.createUser('Alice', 25))
    console.log('create', await UserDb.createUser('Tom', 20))
    console.log('create', await UserDb.createUser('Lisa', 22))

    console.log('findAll', await UserDb.findAllUsers())

    console.log('findById', await UserDb.findUserById(1))

    await UserDb.updateUser(1, 'Alice Smith', 28)

    await UserDb.deleteUser(2)

    console.log('findAll', await UserDb.findAllUsers())
}

export default test;