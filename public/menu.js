module.exports = function applicationMenu (appName) {
  const appMenu = [
    {
      label: 'Projects',
      submenu: [
        {
          label: 'New project',
          accelerator: 'CmdOrCtrl+N',
          click: () => console.log('Adding new project')
        },
        {
          label: 'All projects',
          accelerator: 'CmdOrCtrl+V',
          click: () => console.log('Viewing all projects')
        }
      ]
    },
    {
      label: 'Reports',
      submenu: [
        {
          label: 'View reports',
          click: () => { console.log('Viewing reports page ') }
        }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        {
          role: 'undo'
        },
        {
          role: 'redo'
        },
        {
          type: 'separator'
        },
        {
          role: 'cut'
        },
        {
          role: 'copy'
        },
        {
          role: 'paste'
        },
        {
          role: 'pasteandmatchstyle'
        },
        {
          role: 'delete'
        },
        {
          role: 'selectall'
        }
      ]
    },
    {
      label: 'Window',
      submenu: [
        {
          label: 'Minimize',
          accelerator: 'CmdOrCtrl+M',
          role: 'minimize'
        },
        {
          label: 'Zoom',
          role: 'zoom'
        },
        {
          label: 'Enter Full screen',
          role: 'togglefullscreen'
        },
        {
          type: 'separator'
        },
        {
          label: 'Bring All To Front',
          role: 'front'
        }
      ]
    }
  ]
  if (process.platform === 'darwin') {
    appMenu.unshift({
      label: appName,
      submenu: [
        {
          role: 'about'
        },
        {
          type: 'separator'
        },
        {
          role: 'services',
          submenu: []
        },
        {
          type: 'separator'
        },
        {
          role: 'hide'
        },
        {
          role: 'hideothers'
        },
        {
          role: 'unhide'
        },
        {
          type: 'separator'
        },
        {
          role: 'quit'
        }
      ]
    })
  }
  return appMenu
}