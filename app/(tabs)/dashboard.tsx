import React from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import { BarChart, LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

// Data
const wasteData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      data: [120, 150, 210, 180, 240, 300],
    },
  ],
};

const lossData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      data: [45, 40, 35, 38, 30, 25],
    },
  ],
};

export default function Dashboard() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>📊 Impact Dashboard</Text>
      <Text style={styles.subHeader}>
        Waste reduction & farmer impact overview
      </Text>

      {/* Stats Cards */}
      <View style={styles.cardContainer}>
        <View style={styles.primaryCard}>
          <Text style={styles.cardTitle}>Waste Prevented</Text>
          <Text style={styles.cardValue}>1,450 kg</Text>
          <Text style={styles.cardSub}>+12% this month</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitleDark}>Loss Rate</Text>
          <Text style={styles.cardValueDark}>8.5%</Text>
          <Text style={styles.cardSubDark}>Reduced by 2.4%</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitleDark}>Farmers Connected</Text>
          <Text style={styles.cardValueDark}>248</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitleDark}>New Buyers</Text>
          <Text style={styles.cardValueDark}>32</Text>
        </View>
      </View>

      {/* Bar Chart */}
      <Text style={styles.chartTitle}>Waste Prevention (kg)</Text>
      <BarChart
        data={wasteData}
        width={screenWidth - 20}
        height={220}
        yAxisLabel=""
        yAxisSuffix=" kg"
        chartConfig={chartConfig}
        style={styles.chart}
      />

      {/* Line Chart */}
      <Text style={styles.chartTitle}>Post-Harvest Loss</Text>
      <LineChart
        data={lossData}
        width={screenWidth - 20}
        height={220}
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
      />

      {/* Info Section */}
      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>How impact is calculated</Text>
        <Text style={styles.infoText}>
          AI compares storage conditions with historical crop loss data and
          estimates prevented waste based on temperature, moisture, and pest
          risk.
        </Text>

        <View style={styles.tags}>
          <Text style={styles.tag}>Region: North India</Text>
          <Text style={styles.tag}>Crops: Wheat, Rice, Onion</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const chartConfig = {
  backgroundGradientFrom: "#ffffff",
  backgroundGradientTo: "#ffffff",
  color: () => "#2e7d32",
  labelColor: () => "#333",
  strokeWidth: 2,
  barPercentage: 0.6,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f7f4",
    padding: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1b5e20",
  },
  subHeader: {
    color: "#666",
    marginBottom: 15,
  },

  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  primaryCard: {
    backgroundColor: "#2e7d32",
    width: "48%",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  card: {
    backgroundColor: "#ffffff",
    width: "48%",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  cardTitle: {
    color: "#e8f5e9",
    fontSize: 12,
  },

  cardValue: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },

  cardSub: {
    color: "#c8e6c9",
    fontSize: 10,
  },

  cardTitleDark: {
    color: "#555",
    fontSize: 12,
  },

  cardValueDark: {
    color: "#1b5e20",
    fontSize: 22,
    fontWeight: "bold",
  },

  cardSubDark: {
    color: "#888",
    fontSize: 10,
  },

  chartTitle: {
    marginTop: 15,
    marginBottom: 5,
    fontWeight: "bold",
    color: "#1b5e20",
  },

  chart: {
    borderRadius: 10,
    marginBottom: 10,
  },

  infoBox: {
    backgroundColor: "#e8f5e9",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },

  infoTitle: {
    fontWeight: "bold",
    color: "#1b5e20",
    marginBottom: 5,
  },

  infoText: {
    fontSize: 12,
    color: "#333",
    marginBottom: 10,
  },

  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  tag: {
    backgroundColor: "white",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    marginRight: 5,
    marginBottom: 5,
    fontSize: 10,
    color: "#1b5e20",
  },
});