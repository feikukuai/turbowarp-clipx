import Extension from './include/plugin'

new Extension({
    id: "MovementExtension",
    name: "movement",
    color1: "#00aa00",  // 绿色表示移动相关
    blocks: [
        {
            opcode: 'moveForward',
            blockType: 'command',
            text: '向前移动 [steps:number] 步',
            default: { steps: 10 },
            bind: function({ steps }, util) {
                const target = util.target;
                const radians = Math.PI * target.direction / 180;
                target.setXY(
                    target.x + steps * Math.sin(radians),
                    target.y + steps * Math.cos(radians)
                );
            }
        }, 
        // 保留你原来的两个块
        {
            opcode: 'output',
            blockType: 'command',
            text: '命令 [block:string] [type:string]',
            default: { block : "参数2", type: "类型" },
            menu: { block : [ "参数1", "参数2" ] },
            bind: function({ block, type }) {
                return `内容 ${block} 类型 ${type}`;
            },
        }, {
            opcode: 'list',
            blockType: 'reporter',
            text: '获取一个空列表',
            bind: () => [],
            disableMonitor: true,
        }
    ]
}).register();