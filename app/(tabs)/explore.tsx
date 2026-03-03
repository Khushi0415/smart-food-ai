import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

const products = [
  {
    name: "Premium Wheat",
    price: "₹2,400/quintal",
    origin: "Punjab",
    category: "Grains",
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b",
  },
  {
    name: "Organic Basmati Rice",
    price: "₹5,200/quintal",
    origin: "Haryana",
    category: "Grains",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c",
  },
  {
    name: "Red Onions",
    price: "₹1,800/quintal",
    origin: "Maharashtra",
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1508747703725-719777637510",
  },
  {
    name: "Russet Potatoes",
    price: "₹1,200/quintal",
    origin: "Uttar Pradesh",
    category: "Tubers",
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f02bad675",
  },
  {
    name: "Desi Tomatoes",
    price: "₹2,000/quintal",
    origin: "Karnataka",
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2",
  },
  {
    name: "Yellow Maize",
    price: "₹2,100/quintal",
    origin: "Madhya Pradesh",
    category: "Grains",
    image:
      "https://images.unsplash.com/photo-1551754655-cd27e38d2076",
  },
];

export default function ExploreScreen() {
  const [search, setSearch] = useState("");

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>🌾 Marketplace</Text>
      <Text style={styles.subtitle}>
        Connect directly with farmers and buyers
      </Text>

      {/* Search */}
      <TextInput
        placeholder="Search crops..."
        value={search}
        onChangeText={setSearch}
        style={styles.search}
      />

      {/* Product Grid */}
      <View style={styles.grid}>
        {products.map((item, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.badge}>{item.category}</Text>
            </View>

            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.origin}>{item.origin}</Text>
            <Text style={styles.price}>{item.price}</Text>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Seller CTA */}
      <View style={styles.cta}>
        <Text style={styles.ctaTitle}>Selling Produce?</Text>
        <Text style={styles.ctaText}>
          List your harvest and reach bulk buyers nearby.
        </Text>

        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>List Your Produce</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f7f5",
    padding: 15,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1b5e20",
  },

  subtitle: {
    color: "#666",
    marginBottom: 10,
  },

  search: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
    elevation: 2,
  },

  imageContainer: {
    position: "relative",
  },

  image: {
    width: "100%",
    height: 100,
    borderRadius: 8,
  },

  badge: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "#2e7d32",
    color: "#fff",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    fontSize: 10,
  },

  productName: {
    fontWeight: "bold",
    marginTop: 6,
    color: "#1b5e20",
  },

  origin: {
    fontSize: 12,
    color: "#777",
  },

  price: {
    fontWeight: "bold",
    color: "#2e7d32",
    marginVertical: 4,
  },

  button: {
    backgroundColor: "#2e7d32",
    padding: 6,
    borderRadius: 6,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 12,
  },

  cta: {
    marginTop: 20,
    backgroundColor: "#e8f5e9",
    padding: 15,
    borderRadius: 10,
  },

  ctaTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#1b5e20",
  },

  ctaText: {
    color: "#555",
    marginVertical: 6,
  },

  ctaButton: {
    backgroundColor: "#2e7d32",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },

  ctaButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});