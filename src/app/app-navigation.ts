export const navigation = [
  {
    text: 'Home',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'Core Application',
    icon: 'folder',
    items: [
      {
        text: 'Cadastros',
        icon: 'file',
        items: [
          {
            text: 'Usuários',
            icon: 'user',
            items: [
              {
                text: 'Permissões',
                icon: 'lock',
                items: [
                  {
                    text: 'Cadastrar',
                    icon: 'plus',
                    items: [
                      {
                        text: 'Mais uma permissão',
                        icon: 'minus',
                        path: '/tasks'
                      }
                    ]
                  }
                ]
              },
            ]
          }
        ]
      },
      {
        text: 'Configurações',
        icon: 'preferences',
        items: [
          {
            text: 'Menus',
            icon: 'hierarchy',
          }
        ]
      }
    ]
  },
  {
    text: 'Go Awake',
    icon: 'folder',
    items: [
      {
        text: 'Cadastros',
        icon: 'file',
        items: [
          {
            text: 'Usuários',
            icon: 'user',
            items: [
              {
                text: 'Permissões',
                icon: 'lock',
                items: [
                  {
                    text: 'Cadastrar',
                    icon: 'plus',
                    items: [
                      {
                        text: 'Mais uma permissão',
                        icon: 'minus',
                      }
                    ]
                  }
                ]
              },
            ]
          }
        ]
      }
    ]
  }
];
