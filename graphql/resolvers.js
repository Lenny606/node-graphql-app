//import ORM schema

const resolvers = {
    hello() {
        return {
            text: 'Hello World',
            views: 1001
        };
    },
    createUser: async function ({userInput}, req) {
        // const email = args.userInput.email
        const email = userInput.email

        //ORM LOGIC with USER


        //response
        return {
            email: "test@email.cz"
        }

    }
};

module.exports = {resolvers};
