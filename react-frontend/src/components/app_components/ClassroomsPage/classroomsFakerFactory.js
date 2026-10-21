
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
room: faker.datatype.boolean(""),
building: faker.datatype.boolean(""),
floor: faker.datatype.boolean(""),
capacity: faker.datatype.boolean(""),
hasProjector: faker.datatype.boolean(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
