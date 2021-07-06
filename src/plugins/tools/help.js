const helpMessage =
`命令：
1.  绑定   <米游社通行证ID>
2.  改绑   <米游社通行证ID>
3.  米游社 [米游社通行证ID]  -> 查询米游社ID的角色信息
4.  UID    <游戏内UID>       -> 查询此UID的角色信息
5.  我的   <角色名>          -> 查询绑定米游社ID下的角色
6.  角色   <角色名>          -> 查询角色的官方数据
7.  十连
8.  卡池   <常驻|角色|武器>  -> 切换【十连】的卡池
9.  圣遗物 [副本ID]          -> 掉落一个圣遗物
10. 强化                     -> 强化掉落的上一个圣遗物
11. 副本                     -> 查询所有副本ID
12. 武器                     -> 查询武器强化信息
13. 天赋                     -> 查询天赋素材信息
14. 周本                     -> 查询周本材料信息
15. roll   [数字]            -> 掷骰子
16. 点歌   [关键字...]       -> 点歌
17. 管理                     -> 查询管理命令

参数：
1. <> 表示必填，[] 表示可选，前面需加空格
2. 可选项不填通常约定自己、上一个或随机`;

module.exports = async ( id, type ) => {
    await bot.sendMessage(id, helpMessage, type);
}
