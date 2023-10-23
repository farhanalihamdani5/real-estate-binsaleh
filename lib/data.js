import bcrypt from "bcryptjs";

const data = {
    users: [
        {
            name: 'farhan',
            email: 'farhanalihamdani2698@outlook.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
          },
          {
            name: 'Jane',
            email: 'user@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
          },
    ]
}

export default data;