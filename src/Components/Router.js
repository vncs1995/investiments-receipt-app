import { createStackNavigator, createAppContainer } from 'react-navigation';
import Receipt from './Scenes/Receipts/Receipts';
import ChangeValue from './Scenes/ChangeValue/ChangeValue';

const Router = createStackNavigator({
    Receipt: {
        screen: Receipt
    },
    ChangeValue: {
        screen: ChangeValue
    }
});

export default createAppContainer(Router);