import React, { useState ,useEffect} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StaffDrawer = (props) => {
  const { navigation, state, descriptors } = props;
  const activeRoute = state.routeNames[state.index];
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  useEffect(() => {
      setProfile();
  }, [setProfile]);
  

  const setProfile= async ()=>{
    setEmail(await AsyncStorage.getItem("email"));
    setName(await AsyncStorage.getItem("name"));
  }
  const handleLogout = async () => {
    try {
      await AsyncStorage.multiRemove([
        "token",
        "expiry",
        "generated",
        "role",
        "email",
        "name",
        "loginId",
        "profile",
        "guestNo",
      ]);
      navigation.navigate("Login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const renderDrawerItem = (label, targetRoute) => {
    const isActive = activeRoute === targetRoute;
    return (
      <TouchableOpacity
        style={[styles.drawerItem, isActive && styles.activeDrawerItem]}
        onPress={() => navigation.navigate(targetRoute)}
      >
        <Text
          style={[
            styles.drawerItemText,
            isActive && styles.activeDrawerItemText,
          ]}
        >
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.userInfoContainer}>
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.userEmail}>{email}</Text>
      </View>
      <View style={styles.menuContainer}>
        {renderDrawerItem("View Activities", "StaffTasks")}
        {renderDrawerItem("Check Ticket", "CheckTicket")}
        {renderDrawerItem("Edit Profile", "EditStaffprofile")}
        {renderDrawerItem("Change Password", "ChangePasswordStaff")}
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  userInfoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#180161",
  },
  userEmail: {
    fontSize: 14,
    color: "#666",
  },
  menuContainer: {
    flex: 1,
  },
  drawerItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  activeDrawerItem: {
    backgroundColor: "#123e66",
  },
  drawerItemText: {
    fontSize: 16,
    color: "#333",
  },
  activeDrawerItemText: {
    color: "#fff",
    fontWeight: "bold",
  },
  logoutButton: {
    padding: 15,
    backgroundColor: "#180161",
    alignItems: "center",
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default StaffDrawer;
