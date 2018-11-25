import { createBottomTabNavigator, StackNavigator } from 'react-navigation'; 
import Home from '../pages/Home'
import Me from '../pages/Me'
import UserDetail from '../pages/UserDetail'
import Settings from '../pages/Settings'



export const BottomTab = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: '首页',
    }
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: '我的',
    }
  },
  
})


export const Root = StackNavigator({
  BottomTab: { screen: BottomTab, }, // 底部导航
  Settings: { screen: Settings, }, //设置页
  UserDetail: { screen: UserDetail, } // 用户详情
},{
  headerMode: 'none',
})