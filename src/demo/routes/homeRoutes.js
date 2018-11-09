import Home from '../views/home';
import Components from '../views/components';

export default [
  { path : '/', component : Home, exact : true, link : false },
  { path : '/home', component : Home, exact : true, link : true, title : '', title : 'Animato' },
  { path : '/components', component : Components, exact : false, link : true, title : 'Компоненты' }
]