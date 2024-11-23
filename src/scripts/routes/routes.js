import Restaurants from '../views/pages/restaurant';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': Restaurants,
  '/restaurants': Restaurants,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;