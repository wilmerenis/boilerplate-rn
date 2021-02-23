import { lazy, LazyExoticComponent } from 'react'
import { StackNavigationOptions } from '@react-navigation/stack'

/// INTERFACES
interface IRoute {
  name: string;
  options?: StackNavigationOptions;
  component: LazyExoticComponent<any>;
}

interface IRoutes extends Array<IRoute>{}
/// INTERFACES END

const routes:IRoutes = [{
  name: "HoldOn",
  component: lazy(() => import('../screens/Home')),
  options: {
    headerShown: false
  }
}]

export default routes