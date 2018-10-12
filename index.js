import { Navigation } from "react-native-navigation";
import App from './App';

Navigation.registerComponent(`todoapp.LoginScreen`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: "todoapp.LoginScreen"
            }
        }
    });
});