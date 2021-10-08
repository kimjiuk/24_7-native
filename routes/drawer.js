import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";


import AboutStack from "./aboutStack";
import HomeStack from "./homeStack";
import PushUpStack from "./PushUpStack";
import SquatStack from "./SquatStack";
import SitUpStack from "./SitUpStack";
import MemoStack from "./MemoStack";
const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    PushUp:{
        screen: PushUpStack,
    },
    Squat:{
        screen: SquatStack,
    },
    SitUp:{
        screen: SitUpStack,
    },
    Memo:{
        screen: MemoStack,
    },
    About:{
        screen: AboutStack,
    },
});

export default createAppContainer(RootDrawerNavigator);