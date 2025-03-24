import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

function HomePage() {
  const profileImage =
    "https://static.vecteezy.com/system/resources/previews/053/773/416/non_2x/colorful-british-shorthair-cat-art-illustration-and-graphics-logo-design-vector.jpg"; // Gambar profil random
  const transactions = [
    {
      id: "1",
      name: "Bubu",
      type: "Transfer",
      amount: "- 100.000,00",
      date: "26 Mar 2025",
      color: "red",
    },
    {
      id: "2",
      name: "Moko",
      type: "Topup",
      amount: "+ 750.000,00",
      date: "26 Mar 2025",
      color: "green",
    },
    {
      id: "3",
      name: "bubu",
      type: "Transfer",
      amount: "- 500.000,00",
      date: "26 Mar 2025",
      color: "red",
    },
    {
      id: "4",
      name: "Miow",
      type: "Transfer",
      amount: "- 250.000,00",
      date: "08 December 2024",
      color: "red",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Bubu Moko</Text>
          <Text style={styles.userType}>Personal Account</Text>
        </View>
        <Text style={styles.sunIcon}>☀️</Text>
      </View>

      <Text style={styles.greeting}>Good Morning, Bubu</Text>
      <Text style={styles.subText}>
        Check all your incoming and outgoing transactions here
      </Text>

      <TouchableOpacity style={styles.accountCard}>
        <Text style={styles.accountText}>Account No.</Text>
        <Text style={styles.accountNumber}>100899</Text>
      </TouchableOpacity>

      <View style={styles.balanceContainer}>
        <View>
          <Text style={styles.balanceLabel}>Balance</Text>
          <Text style={styles.balanceAmount}>Rp 10.000.000</Text>
        </View>
        <View style={styles.balanceButtons}>
          <TouchableOpacity style={styles.plusButton}>
            <Text style={styles.plusIcon}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sendButton}>
            <Text style={styles.sendIcon}>✈️</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.transactionTitle}>Transaction History</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <View style={styles.transactionLeft}>
              <View style={styles.circle} />
              <View>
                <Text style={styles.transactionName}>{item.name}</Text>
                <Text style={styles.transactionType}>{item.type}</Text>
                <Text style={styles.transactionDate}>{item.date}</Text>
              </View>
            </View>
            <Text
              style={[
                styles.transactionAmount,
                { color: item.color === "green" ? "green" : "red" },
              ]}
            >
              {item.amount}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  userType: {
    fontSize: 12,
    color: "#777",
  },
  sunIcon: {
    fontSize: 24,
  },
  greeting: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 10,
  },
  subText: {
    fontSize: 14,
    color: "#777",
    marginBottom: 15,
  },
  accountCard: {
    backgroundColor: "#0061FF",
    padding: 15,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  accountText: {
    color: "#fff",
    fontSize: 14,
  },
  accountNumber: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  balanceContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  balanceLabel: {
    fontSize: 14,
    color: "#777",
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: "bold",
  },
  balanceButtons: {
    flexDirection: "row",
  },
  plusButton: {
    backgroundColor: "#0061FF",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  plusIcon: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  sendButton: {
    backgroundColor: "#0061FF",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  sendIcon: {
    color: "#fff",
    fontSize: 16,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  transactionItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  transactionLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ddd",
    marginRight: 10,
  },
  transactionName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  transactionType: {
    fontSize: 12,
    color: "#777",
  },
  transactionDate: {
    fontSize: 12,
    color: "#aaa",
  },
  transactionAmount: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default HomePage;
