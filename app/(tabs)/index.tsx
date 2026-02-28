import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔴 Put your Lambda Function URL here
  const API_URL = "https://ycnw6whl562o575dtbsjv6wu4u0cvwmt.lambda-url.us-east-1.on.aws/";

  const askAI = async () => {
    if (!prompt) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.text();
      setResponse(data);
    } catch (error) {
      setResponse("Error connecting to server");
    }

    setLoading(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🌾 Smart Food AI</Text>

      <TextInput
        style={styles.input}
        placeholder="Ask about crop storage, price, etc..."
        value={prompt}
        onChangeText={setPrompt}
      />

      <TouchableOpacity style={styles.button} onPress={askAI}>
        <Text style={styles.buttonText}>
          {loading ? "Loading..." : "Ask AI"}
        </Text>
      </TouchableOpacity>

      {response ? (
        <View style={styles.resultBox}>
          <Text style={styles.resultText}>{response}</Text>
        </View>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#e8f5e9",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "green",
  },
  input: {
    borderWidth: 1,
    backgroundColor: "white",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  resultBox: {
    marginTop: 20,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
  },
  resultText: {
    fontSize: 16,
  },
});