import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="Home"
        options={{
          title: "My Wallet",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="wallet" color={color} size={size} />
          ),
          headerStyle: {
            backgroundColor: "#0061FF",
          },
          headerTintColor: "white",
        }}
      />
      <Tabs.Screen
        name="LoginPage"
        options={{
          title: "Login",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
          headerStyle: {
            backgroundColor: "#0061FF",
          },
          headerTintColor: "white",
        }}
      />
      <Tabs.Screen
        name="RegisterPage"
        options={{
          title: "Register",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-add" color={color} size={size} />
          ),
          headerStyle: {
            backgroundColor: "#0061FF",
          },
          headerTintColor: "white",
        }}
      />
      <Tabs.Screen
        name="Transfer"
        options={{
          title: "Transfer",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="paper-plane" color={color} size={size} />
          ),
          headerStyle: {
            backgroundColor: "#0061FF",
          },
          headerTintColor: "white",
        }}
      />
      <Tabs.Screen
        name="TopUpPage"
        options={{
          title: "Top Up",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="card" color={color} size={size} />
          ),
          headerStyle: {
            backgroundColor: "#0061FF",
          },
          headerTintColor: "white",
        }}
      />
      {/* <Tabs.Screen name="explore" /> */}
    </Tabs>
  );
}
