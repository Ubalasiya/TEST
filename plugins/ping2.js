const { cmd } = require('../lib/command');
cmd({
    pattern: "ping2",
    desc: "Replies with Pong!",
    react: "🏓",
    category: "fun",
    filename: __filename
}, async (conn, m, store, { reply }) => {
    reply("Pong!");
});
