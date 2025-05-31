import Extension from './include/plugin'

new Extension({
    id: "MovementExtension",
    name: "移动控制",
    color1: "#00aa00",  // 使用绿色表示移动相关
    blocks: [
        {
            opcode: 'moveForward',
            blockType: 'command',
            text: '向前移动 [steps:number] 步',
            default: { steps: 10 },
            bind: function({ steps }, util) {
                const target = util.target;
                // 计算移动方向(Scratch中0°朝上)
                const radians = Math.PI * target.direction / 180;
                // 更新角色位置
                target.setXY(
                    target.x + steps * Math.sin(radians),
                    target.y + steps * Math.cos(radians)
                );
            }
        }
    ]
}).register();