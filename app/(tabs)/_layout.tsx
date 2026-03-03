import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      {/* Home */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Explore */}
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" size={size} color={color} />
          ),
        }}
      />

      {/* AI Bot (bot.tsx) */}
      <Tabs.Screen
        name="bot"
        options={{
          title: "Bot",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-ellipses-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Dashboard */}
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}