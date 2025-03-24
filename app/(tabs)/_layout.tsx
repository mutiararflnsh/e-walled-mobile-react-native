import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="Home" />
      <Tabs.Screen name="LoginPage" />
      <Tabs.Screen name="RegisterPage" />
      <Tabs.Screen name="Transfer" />
      <Tabs.Screen name="TopUpPage" />
      {/* <Tabs.Screen name="explore" /> */}
    </Tabs>
  );
}
