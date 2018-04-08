import {StackNavigator} from "react-navigation";

import MyView from './view/MyView'
import MainView from "./view/MainView";


const routers = StackNavigator({
    Detail: {
        screen: MyView,
    },
    Main:{
        screen:MainView,
    },

});
module.exports = routers;