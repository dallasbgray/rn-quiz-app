import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import QuizIndex from './screens/QuizIndex';
import Quiz from './screens/Quiz';
import Results from './screens/Results';

const MainStack = createStackNavigator({
  QuizIndex: {
    screen: QuizIndex,
    navigationOptions: {
      headerTitle: 'Quizzes',
      headerStatusBarHeight: 22,
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#444444',
      },
    },
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam('title'),
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: navigation.getParam('color'),
        borderBottomColor: navigation.getParam('color'),
      },
    }),
  },
  Results: {
    screen: Results,
    navigationOptions: ({ navigation }) => ({
      headerTitle: `${navigation.getParam('title')} Quiz Results`,
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: navigation.getParam('color'),
        borderBottomColor: navigation.getParam('color'),
      }
    }),
  },
});

export default createAppContainer(MainStack);