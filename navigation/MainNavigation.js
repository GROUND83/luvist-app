import { createStackNavigator, createAppContainer } from "react-navigation";
import TapNavigation from "./TapNavigation";
import PhotoNavigation from "./PhotoNavigation";
import MessageNavigation from "./MessageNavigation";
import { stackStyles } from "./config";

const MainNavigation = createStackNavigator(
  {
    TapNavigation,
    PhotoNavigation,
    MessageNavigation
  },
  {
    defaultNavigationOptions:{
      headerStyle:{...stackStyles}
    },
    headerMode: "none",
    mode: "modal"
  }
);

export default createAppContainer(MainNavigation);