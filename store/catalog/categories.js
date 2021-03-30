export const state = () => ({
  categories: [
    {
      name: 'Кованые изделия для дома',
      link: '/catalog/indoor',
      img:
        'https://cdn.pixabay.com/photo/2016/02/02/14/43/table-1175433_960_720.png',
      featured: true,
    },
    {
      name: 'Кованые уличные изделия',
      link: '/catalog/outdoor',
      img:
        'https://cdn.pixabay.com/photo/2015/06/14/02/15/park-808549_960_720.png',
      featured: true,
    },
    {
      name: 'Кованые сувениры, подарки',
      link: '/catalog/souvenirs',
      img:
        'https://cdn.pixabay.com/photo/2021/03/10/14/57/pope-6084744_960_720.jpg',
      featured: true,
    },
    {
      name: 'Оружейка',
      link: '/catalog/weapons',
      img:
        'https://cdn.pixabay.com/photo/2018/03/04/20/53/weapon-3199193_960_720.png',
      featured: false,
    },
    {
      name: 'Ритуальные изделия',
      link: '/catalog/ritual',
      img: 'https://kovkam.by/wp-content/uploads/2017/05/rityalnie.jpg',
      featured: false,
    },
  ],
})
