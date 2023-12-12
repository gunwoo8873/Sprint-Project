const commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;

module.exports = class ClassName extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'name',
            aliases: [],
            group: 'group',
            memberName: 'name',
            description: 'Testing Command Check',
            details: oneLine`
                description
            `,
            examples: ['example'],
        })
    }

    async run(msg) {
        
    }
}