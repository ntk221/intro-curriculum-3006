'use strict';
module.exports = robot => {
  robot.hear(/hello>/i, msg => {
    const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
    const lot = lots[Math.floot(Math.random( ) * lots.length)];
    const user_id = msg.message.user.id;
    msg.send(`${lot}, <${user_id}>`);
  });
};
