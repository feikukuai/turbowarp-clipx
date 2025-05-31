import Extension from './include/plugin';

new Extension({
    id: "HideExtension",
    name: "hide",
    color1: "#888888",
    blocks: [
        {
            opcode: 'hideSprite',
            blockType: 'command',
            text: '隐藏角色',
            bind: (args, util) => {
                util.target.visible = false;
            },
        }
    ]
}).register();