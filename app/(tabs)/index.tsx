import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>

      {/* HERO SECTION */}
      <View style={styles.hero}>
        <Text style={styles.badge}>🌾 Fighting Food Waste in India</Text>

        <Text style={styles.title}>
          Empowering Farmers with{" "}
          <Text style={styles.accent}>AI-Powered</Text> Supply Chains
        </Text>

        <Text style={styles.subtitle}>
          Smart Food AI reduces post-harvest losses by connecting farmers to markets and providing AI storage guidance.
        </Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={() => router.push("/ai")}
          >
            <Text style={styles.btnText}>Get Storage Advice</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryBtn}
            onPress={() => router.push("/explore")}
          >
            <Text style={styles.secondaryText}>Explore Marketplace</Text>
          </TouchableOpacity>
        </View>

        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2"
          }}
          style={styles.heroImage}
        />
      </View>

      {/* PROBLEM SECTION */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>The Challenge We Solve</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Improper Storage</Text>
          <Text style={styles.cardText}>
            Lack of real-time guidance leads to crop spoilage and losses.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Market Access</Text>
          <Text style={styles.cardText}>
            Farmers struggle to find fair prices beyond local middlemen.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Price Volatility</Text>
          <Text style={styles.cardText}>
            No data-driven decision support for selling vs storing.
          </Text>
        </View>
      </View>

      {/* FEATURES */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Smart Food AI Features</Text>

        <View style={styles.feature}>
          <Text style={styles.featureTitle}>AI Storage Advisor</Text>
          <Text style={styles.featureText}>
            Get crop-specific storage advice using Amazon Bedrock AI.
          </Text>
        </View>

        <View style={styles.feature}>
          <Text style={styles.featureTitle}>Hyperlocal Marketplace</Text>
          <Text style={styles.featureText}>
            Connect directly with nearby buyers and get better prices.
          </Text>
        </View>
      </View>

      {/* CTA */}
      <View style={styles.cta}>
        <Text style={styles.ctaTitle}>Ready to Secure Your Harvest?</Text>

        <TouchableOpacity
          style={styles.ctaButton}
          onPress={() => router.push("/ai")}
        >
          <Text style={styles.ctaText}>Get Started</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f7f5"
  },

  hero: {
    padding: 20,
    alignItems: "center"
  },

  badge: {
    backgroundColor: "#e8f5e9",
    padding: 6,
    borderRadius: 10,
    marginBottom: 10,
    color: "#2e7d32",
    fontWeight: "600"
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1b5e20",
    marginBottom: 10
  },

  accent: {
    color: "#43a047"
  },

  subtitle: {
    textAlign: "center",
    color: "#555",
    marginBottom: 15
  },

  buttonRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20
  },

  primaryBtn: {
    backgroundColor: "#2e7d32",
    padding: 10,
    borderRadius: 8
  },

  secondaryBtn: {
    borderWidth: 1,
    borderColor: "#2e7d32",
    padding: 10,
    borderRadius: 8
  },

  btnText: {
    color: "#fff",
    fontWeight: "600"
  },

  secondaryText: {
    color: "#2e7d32",
    fontWeight: "600"
  },

  heroImage: {
    width: "100%",
    height: 220,
    borderRadius: 15
  },

  section: {
    padding: 20
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1b5e20",
    marginBottom: 10
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2
  },

  cardTitle: {
    fontWeight: "bold",
    marginBottom: 4
  },

  cardText: {
    color: "#555"
  },

  feature: {
    backgroundColor: "#e8f5e9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },

  featureTitle: {
    fontWeight: "bold",
    marginBottom: 4
  },

  featureText: {
    color: "#333"
  },

  cta: {
    backgroundColor: "#2e7d32",
    padding: 25,
    alignItems: "center"
  },

  ctaTitle: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center"
  },

  ctaButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8
  },

  ctaText: {
    color: "#2e7d32",
    fontWeight: "bold"
  }
});