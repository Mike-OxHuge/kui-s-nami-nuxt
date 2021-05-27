export const state = () => ({
  categories: [
    {
      name: 'Кованые изделия для дома',
      link: '/catalog/indoor',
      img: 'https://picsum.photos/200/300?random=62',
      featured: true,
    },
    {
      name: 'Кованые уличные изделия',
      link: '/catalog/outdoor',
      img: 'https://picsum.photos/200/300?random=63',
      featured: true,
    },
    {
      name: 'Кованые сувениры, подарки',
      link: '/catalog/souvenirs',
      img: 'https://picsum.photos/200/300?random=64',
      featured: true,
    },
    {
      name: 'Оружейка',
      link: '/catalog/weapons',
      img: 'https://picsum.photos/200/300?random=65',
      featured: false,
    },
    {
      name: 'Ритуальные изделия',
      link: '/catalog/ritual',
      img: 'https://picsum.photos/200/300?random=66',
      featured: false,
    },
  ],
})
