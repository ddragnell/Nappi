import { Food } from "./app/shared/models/food";
import { Tag } from "./app/shared/models/tag";

export const sample_foods: Food[] = [
  {
    id:'1',
    name:'Hamburguesa',
    price:10000,
    tags: ['Comida-rapida'],

    imageUrl: '/assets/images/imagenes/ñamñam1.jpg'
  },
  {
    id:'2',
    name:'Pizza',
    price:12000,
    tags: ['Comida-rapida'],

    imageUrl: '/assets/images/imagenes/ñamñam2.jpeg'
  },
  {
    id:'3',
    name:'Macarrones',
    price:18000,
    tags: ['Comida-rapida'],

    imageUrl: '/assets/images/imagenes/ñamñam3.jpeg'
  },
  {
    id:'4',
    name:'Picada paisa',
    price:20000,
    tags: ['Comida-rapida'],

    imageUrl: '/assets/images/imagenes/ñamñam4.png'
  },
  {
    id:'5',
    name:'Hamburguesa doble',
    price:8000,
    tags: ['Comida-rapida'],

    imageUrl: '/assets/images/imagenes/ñamñam1.jpg'
  },
]

export const sample_tags:Tag[] = [
{ name: 'Todo', count: 5},
{ name: 'Comida rápida', count: 5},
{ name: 'Medicamentos', count: 0},
{ name: 'Productos de aseo', count: 0},
]
