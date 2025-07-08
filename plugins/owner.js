const { cmd } = require('../lib/command');

cmd({
  pattern: 'owner',
  desc: 'Show bot owner info',
  category: 'info',
  react: '👑',
  use: '.owner',
  filename: __filename
}, async (conn, m, msg, { from, reply }) => {
  const ownerNumber = '94766315540'; // Only number, no '+'
  const ownerName = '𝗖𝗛𝗔𝗠𝗜';

  const vcard = `
BEGIN:VCARD
VERSION:3.0
FN:${ownerName}
ORG:CHAMI-MD;
TEL;type=CELL;type=VOICE;waid=${ownerNumber}:+${ownerNumber}
END:VCARD`;

  await conn.sendMessage(from, {
    contacts: {
      displayName: ownerName,
      contacts: [{ vcard }]
    }
  }, { quoted: m });
});
