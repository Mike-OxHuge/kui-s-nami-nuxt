export const state = () => ({
  contacts: [
    {
      title: 'Contact 1',
      icon: 'mdi-account-circle',
      link: 'https://google.com',
      inFooter: false,
    },
    {
      title: 'Contact 2',
      icon: 'mdi-account',
      link: 'https://yandex.ru',
      inFooter: true,
    },
    {
      title: 'Contact 3',
      icon: 'mdi-account-check',
      link: 'https://yahoo.com',
      inFooter: false,
    },
    {
      title: 'Contact 4',
      icon: 'favorite',
      link: 'https://mail.ru',
      inFooter: true,
    },
  ],
})
