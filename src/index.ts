import Extension from './include/plugin';

new Extension({
    id: "MoveExtension",
    name: "移动",
    color1: "#00BFFF", // 蓝色调
    blocks: [
        {
            opcode: 'moveSteps',
            blockType: 'command',
            text: '移动 [steps:number] 步',
            default: { steps: 10 },
            bind: ({ steps }, util) => {
                util.target.x += steps * Math.cos(util.target.direction * Math.PI / 180);
                util.target.y += steps * Math.sin(util.target.direction * Math.PI / 180);
            }
        },
        {
            opcode: 'setPosition',
            blockType: 'command',
            text: '设置位置为 x: [x:number] y: [y:number]',
            default: { x: 0, y: 0 },
            bind: ({ x, y }, util) => {
                util.target.x = x;
                util.target.y = y;
            }
        },
        {
            opcode: 'pointDirection',
            blockType: 'command',
            text: '面向 [direction:number] 度',
            default: { direction: 90 },
            bind: ({ direction }, util) => {
                util.target.direction = direction;
            }
        },
        {
            opcode: 'getX',
            blockType: 'reporter',
            text: '当前的 X 坐标',
            bind: (args, util) => util.target.x
        },
        {
            opcode: 'getY',
            blockType: 'reporter',
            text: '当前的 Y 坐标',
            bind: (args, util) => util.target.y
        },
    ]
}).register();