import { db } from "./server/db";

await db.user.create({
    data: {
        email: 'test@example.com',
        firstName: 'John',
        lastName: 'Doe',
        imageUrl:''
    }
})
console.log(`Created`)