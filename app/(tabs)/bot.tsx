import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

const API_URL = "https://ycnw6whl562o575dtbsjv6wu4u0cvwmt.lambda-url.us-east-1.on.aws/"; // ← paste your AWS URL here

const suggestions = [
  "How to store wheat safely?",
  "Prevent mold in onions?",
  "Best temperature for potatoes?",
  "Reduce spoilage in tomatoes?",
];

export default function AIChat() {
  
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I am Smart Food AI. Ask me anything about crop storage or reducing waste.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (text?: string) => {
    const message = text || input;
    if (!message.trim() || loading) return;

    const userMsg = { role: "user", content: message };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: message }),
      });

      const data = await res.json();
      console.log("API response:", data);
// Lambda returns body as string → parse it
let aiText = "No response from AI";

// Case 1: Direct response (what your log shows)
if (data.answer) {
  aiText = data.answer;
}

// Case 2: If Lambda sends body as string (backup)
else if (data.body) {
  const parsed = JSON.parse(data.body);
  aiText = parsed.answer || aiText;
}

setMessages((prev) => [
  ...prev,
  {
    role: "assistant",
    content: aiText,
  },
]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Error connecting to AI service.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }: any) => {
    const isUser = item.role === "user";

    return (
      <View
        style={[
          styles.messageContainer,
          isUser ? styles.userContainer : styles.aiContainer,
        ]}
      >
        <Text style={isUser ? styles.userText : styles.aiText}>
          {item.content}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🤖 AI Storage Advisor</Text>

      {/* Chat Messages */}
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ padding: 10 }}
      />

      {loading && (
        <ActivityIndicator size="small" color="#2e7d32" style={{ margin: 5 }} />
      )}

      {/* Suggestions */}
      <View style={styles.suggestionContainer}>
        {suggestions.map((s, i) => (
          <TouchableOpacity
            key={i}
            style={styles.suggestion}
            onPress={() => sendMessage(s)}
            disabled={loading}
          >
            <Text style={styles.suggestionText}>{s}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Input Area */}
      <View style={styles.inputContainer}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Ask storage question..."
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => sendMessage()}
          disabled={loading}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f7f4",
  },

  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1b5e20",
    padding: 15,
  },

  messageContainer: {
    maxWidth: "80%",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },

  userContainer: {
    alignSelf: "flex-end",
    backgroundColor: "#2e7d32",
  },

  aiContainer: {
    alignSelf: "flex-start",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#ddd",
  },

  userText: {
    color: "white",
  },

  aiText: {
    color: "#333",
  },

  suggestionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 10,
  },

  suggestion: {
    backgroundColor: "#e8f5e9",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    margin: 4,
  },

  suggestionText: {
    fontSize: 12,
    color: "#1b5e20",
  },

  inputContainer: {
    flexDirection: "row",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
  },

  sendButton: {
    backgroundColor: "#2e7d32",
    marginLeft: 8,
    paddingHorizontal: 15,
    justifyContent: "center",
    borderRadius: 8,
  },
});