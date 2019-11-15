const Users = require("./helpers");

const db = require("../database/dbConfig");

beforeEach(() => {
    return db("users").truncate();
});
describe("Register", () => {
    describe("when a user registers ", () => {
        it("should insert a user", async () => {
            await Users.add({
                username: "Amira",
                password: "mypassword",

            });
            await Users.add({
                username: "Oladipo",
                password: "hispassword",

            });
            const users = await db("users");
            expect(users).toHaveLength(2);
        });
    })
});