import CoursesIcon from './img/courses.svg';
import BooksIcon from './img/books.svg';
import GoodsIcon from './img/goods.svg';
import ServiceIcon from './img/services.svg';
import { FirstLevelMenuItem } from '../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/page.interface';

export const firstLevelMenu: FirstLevelMenuItem[] = [
  {route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses},
  {route: 'services', name: 'Сервисы', icon: <ServiceIcon />, id: TopLevelCategory.Services},
  {route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books},
  {route: 'products', name: 'Продукты', icon: <GoodsIcon />, id: TopLevelCategory.Products}
]

export const priceRu = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽')