import { Link } from "expo-router";
import React, { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as Font from "expo-font";
import Card from "../../components/card";

const newsFeed = [
  {
    id: 0,
    title: "Story 1",
    author: "Author 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis quibusdam eos adipisci atque tempora ipsa rerum voluptas eligendi inventore, mollitia molestiae molestias praesentium doloribus, laborum natus quidem repellendus harum optio id, cupiditate commodi veritatis voluptates! Reiciendis itaque, laborum quibusdam consectetur ab totam, alias ex delectus quidem, tempore animi? Velit.",
  },
  {
    id: 1,
    title: "Story 2",
    author: "Author 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis quibusdam eos adipisci atque tempora ipsa rerum voluptas eligendi inventore, mollitia molestiae molestias praesentium doloribus, laborum natus quidem repellendus harum optio id, cupiditate commodi veritatis voluptates! Reiciendis itaque, laborum quibusdam consectetur ab totam, alias ex delectus quidem, tempore animi? Velit.",
  },
  {
    id: 2,
    title: "Story 3",
    author: "Author 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis quibusdam eos adipisci atque tempora ipsa rerum voluptas eligendi inventore, mollitia molestiae molestias praesentium doloribus, laborum natus quidem repellendus harum optio id, cupiditate commodi veritatis voluptates! Reiciendis itaque, laborum quibusdam consectetur ab totam, alias ex delectus quidem, tempore animi? Velit.",
  },
  {
    id: 3,
    title: "Story 4",
    author: "Author 4",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis quibusdam eos adipisci atque tempora ipsa rerum voluptas eligendi inventore, mollitia molestiae molestias praesentium doloribus, laborum natus quidem repellendus harum optio id, cupiditate commodi veritatis voluptates! Reiciendis itaque, laborum quibusdam consectetur ab totam, alias ex delectus quidem, tempore animi? Velit.",
  },
  {
    id: 4,
    title: "Story 5",
    author: "Author 5",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis quibusdam eos adipisci atque tempora ipsa rerum voluptas eligendi inventore, mollitia molestiae molestias praesentium doloribus, laborum natus quidem repellendus harum optio id, cupiditate commodi veritatis voluptates! Reiciendis itaque, laborum quibusdam consectetur ab totam, alias ex delectus quidem, tempore animi? Velit.",
  },
];

const Item = ({ author, text, title }) => (
  <View style={styles.newsFeedCard}>
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        marginBottom: 5,
      }}
    >
      <Text style={{ fontSize: 16, fontFamily: "poppins", marginRight: 10 }}>
        {author}
      </Text>
      <Text style={{ fontSize: 16, fontFamily: "poppins", marginRight: 10 }}>
        {title}
      </Text>
    </View>
    <Text style={{ fontSize: 16, fontFamily: "poppinsLight" }}>{text}</Text>
    <Link
      style={{ fontSize: 14, marginTop: 5, fontFamily: "poppinsLight" }}
      href={"/read"}
    >
      Read more
    </Link>
  </View>
);
export default function Home() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        poppins: require("../../../assets/fonts/Poppins-Bold.ttf"),
        poppinsReg: require("../../../assets/fonts/Poppins-Regular.ttf"),
        poppinsLight: require("../../../assets/fonts/Poppins-Light.ttf"),
      });

      setFontLoaded(true);
    }

    loadFont();
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }
  const { fontBold } = styles;
  return (
    <SafeAreaView style={styles.main}>
      <Text style={[styles.welcomeText, fontBold]}>Welcome User,</Text>

      <View style={styles.statsWrap}>
        <Card number={"3"} text={" Pending Request"} />
        <Card number={"2"} text={"Accepted Request"} />
        <Card number={"1"} text={" Cancelled Request"} />
      </View>

      <View style={styles.newsFeed}>
        <Text style={styles.newsFeedTitle}>News Feeds</Text>

        <FlatList
          data={newsFeed}
          renderItem={({ item }) => (
            <Item title={item.title} author={item.author} text={item.text} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  fontBold: {
    fontFamily: "poppins",
  },
  fontRegular: {
    fontFamily: "poppinsReg",
  },
  welcomeText: {
    fontSize: 24,
    padding: 10,
  },
  statsWrap: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 25,
  },
  newsFeed: {
    height: 430,
    padding: 10,
    backgroundColor: "#f1908c1a",
  },
  newsFeedTitle: {
    marginBottom: 10,
    fontSize: 24,
    fontFamily: "poppins",
  },
  newsFeedCard: {
    backgroundColor: "grey",
    borderRadius: 15,
    marginBottom: 10,
    padding: 12,
  },
});
