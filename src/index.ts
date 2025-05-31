import Extension from './include/plugin';

new Extension({
    id: "MoveExtension",
    name: "move",
    color1: "#00bfff",
    blocks: [
        {
            opcode: 'move10',
            blockType: 'command',
            text: '移动10步',
            bind: (args, util) => {
                const rad = util.target.direction * Math.PI / 180;
                util.target.x += 10 * Math.cos(rad);
                util.target.y += 10 * Math.sin(rad);
            },
        }
    ]
}).register();