import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StaffDrawer from "../../../components/StaffDrawer";

const Drawer = createDrawerNavigator();
const StaffTaskcontent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={styles.menuButton}
      >
        <Ionicons name="menu" size={24} color="black" />
      </TouchableOpacity>
      <Text>StaffTasks</Text>
    </View>
  );
};
const StaffTasks = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <StaffDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: "60%",
        },
      }}
    >
      <Drawer.Screen name="StaffTaskcontent" component={StaffTaskcontent} />
    </Drawer.Navigator>
  );
};

export default StaffTasks;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  menuButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
  },
});
