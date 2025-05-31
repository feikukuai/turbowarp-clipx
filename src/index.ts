import Extension from './include/plugin'

new Extension({
    id: "ExampleExtension",
    name: "example",
    color1: "#0800ff",
    blocks: [
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
        },
    ]
}).register();