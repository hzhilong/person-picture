module.exports = {
  type: 'INSTALLER',
  id: 'ContextMenuManager 设置',
  name: 'ContextMenuManager',
  backupConfigs: [
    {
      name: '设置',
      items: [
        {
          type: 'file',
          sourcePath: '%APPDATA%/ContextMenuManager/Config',
          targetRelativePath: 'Config',
        },
      ],
    },
  ],
}
