const resolvers = {
    hello() {
        return {
            text: 'Hello World',
            views: 1001
        };
    }
};

module.exports = { resolvers };
