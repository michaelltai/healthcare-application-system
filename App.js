import React from "react";
import Welcome from "./component/Welcome";
import UserForm from "./component/GettingStartedComponent/UserForm";
import Home from "./component/Home";
import MedicalReminderList from "./component/MedicalModule/MedicalReminderList";
import MedEdit from "./component/MedicalModule/MedEdit";
import HospitalList from "./component/HospitalModule/HospitalList";
import HospitalInfo from "./component/HospitalModule/HospitalInfo";
import HealthReminderList from "./component/HealthModule/HealthReminderList";
import Profile from "./component/PersonalModule/Profile";
import { Provider } from "react-redux";
import { store } from "./reduxConfig/store";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const App = () => {
  function createHomeStack() {
    return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Hospital List" component={HospitalList} />
        <Stack.Screen name="Hospital Information" component={HospitalInfo} />
        <Stack.Screen
          name="Medical Reminder List"
          component={MedicalReminderList}
        />
        <Stack.Screen name="Medical Reminder" component={MedEdit} />
        <Stack.Screen
          name="Health Reminder List"
          component={HealthReminderList}
        />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={createHomeStack} />
          <Drawer.Screen name="Hospital Locator" component={HospitalList} />
          <Drawer.Screen
            name="Medical Reminder"
            component={MedicalReminderList}
          />
          <Drawer.Screen
            name="Health Reminder"
            component={HealthReminderList}
          />
          <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
