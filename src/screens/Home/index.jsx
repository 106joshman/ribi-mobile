import { Link } from "expo-router";
import React, { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import * as Font from "expo-font";

const newsFeed = [
  {
    id: 0,
    image: require("../../../assets/image/blood-1813410_1280.jpg"),
    title: "Story 1 has a pretty long title",
    author: "Author Name 1",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi dolor minus veniam recusandae voluptas quas magni dolore fugit nihil perspiciatis aliquid eum in quaerat unde quod totam, nisi dolores quos eaque fugiat rerum! Atque molestias laboriosam, dolore consequatur pariatur similique laudantium et voluptatibus ipsa ducimus possimus deserunt molestiae quidem, ut unde. Aperiam sunt nostrum iusto et laboriosam at amet minus eos impedit illo debitis aliquam, cum reiciendis doloribus temporibus sint consequuntur dignissimos soluta harum praesentium nisi obcaecati! Deleniti iure facilis odio quod sit doloribus quos ullam sequi. Ullam nam voluptate fuga voluptatem? Soluta, deserunt fugiat impedit a culpa, officiis molestiae quam dignissimos necessitatibus incidunt corporis reprehenderit fugit, tempore deleniti adipisci et sapiente nihil? Atque est tenetur, totam perferendis labore quae impedit expedita cumque quibusdam corrupti tempore beatae adipisci. Cumque, commodi! At vel natus, ipsam nulla facilis facere itaque velit, ipsa, ullam voluptatibus accusamus placeat culpa harum dicta excepturi cupiditate obcaecati aliquam repellendus assumenda laborum. Maxime officiis nisi temporibus dolor sapiente? Nesciunt illum dolor quae maiores necessitatibus, aut dicta ullam est vero aperiam officiis? Commodi nisi facere laboriosam nemo quod ex obcaecati ab vitae labore? Fugiat placeat sit laudantium provident accusamus iure iste, veniam in sunt magnam, quisquam nostrum repudiandae.",
    articleSummary:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil porro officiis laboriosam rerum dolorum incidunt rem quas debitis. Numquam, atque ad? Illo iure rem ut.",
  },
  {
    id: 1,
    image: require("../../../assets/image/blood-5053760_1280.jpg"),
    title: "Story 2 has a pretty long title",
    author: "Author Name 2",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi dolor minus veniam recusandae voluptas quas magni dolore fugit nihil perspiciatis aliquid eum in quaerat unde quod totam, nisi dolores quos eaque fugiat rerum! Atque molestias laboriosam, dolore consequatur pariatur similique laudantium et voluptatibus ipsa ducimus possimus deserunt molestiae quidem, ut unde. Aperiam sunt nostrum iusto et laboriosam at amet minus eos impedit illo debitis aliquam, cum reiciendis doloribus temporibus sint consequuntur dignissimos soluta harum praesentium nisi obcaecati! Deleniti iure facilis odio quod sit doloribus quos ullam sequi. Ullam nam voluptate fuga voluptatem? Soluta, deserunt fugiat impedit a culpa, officiis molestiae quam dignissimos necessitatibus incidunt corporis reprehenderit fugit, tempore deleniti adipisci et sapiente nihil? Atque est tenetur, totam perferendis labore quae impedit expedita cumque quibusdam corrupti tempore beatae adipisci. Cumque, commodi! At vel natus, ipsam nulla facilis facere itaque velit, ipsa, ullam voluptatibus accusamus placeat culpa harum dicta excepturi cupiditate obcaecati aliquam repellendus assumenda laborum. Maxime officiis nisi temporibus dolor sapiente? Nesciunt illum dolor quae maiores necessitatibus, aut dicta ullam est vero aperiam officiis? Commodi nisi facere laboriosam nemo quod ex obcaecati ab vitae labore? Fugiat placeat sit laudantium provident accusamus iure iste, veniam in sunt magnam, quisquam nostrum repudiandae.",
    articleSummary:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil porro officiis laboriosam rerum dolorum incidunt rem quas debitis. Numquam, atque ad? Illo iure rem ut.",
  },
  {
    id: 2,
    image: require("../../../assets/image/heart-5724137_1280.png"),
    title: "Story 3 has a pretty long title",
    author: "Author Name 3",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi dolor minus veniam recusandae voluptas quas magni dolore fugit nihil perspiciatis aliquid eum in quaerat unde quod totam, nisi dolores quos eaque fugiat rerum! Atque molestias laboriosam, dolore consequatur pariatur similique laudantium et voluptatibus ipsa ducimus possimus deserunt molestiae quidem, ut unde. Aperiam sunt nostrum iusto et laboriosam at amet minus eos impedit illo debitis aliquam, cum reiciendis doloribus temporibus sint consequuntur dignissimos soluta harum praesentium nisi obcaecati! Deleniti iure facilis odio quod sit doloribus quos ullam sequi. Ullam nam voluptate fuga voluptatem? Soluta, deserunt fugiat impedit a culpa, officiis molestiae quam dignissimos necessitatibus incidunt corporis reprehenderit fugit, tempore deleniti adipisci et sapiente nihil? Atque est tenetur, totam perferendis labore quae impedit expedita cumque quibusdam corrupti tempore beatae adipisci. Cumque, commodi! At vel natus, ipsam nulla facilis facere itaque velit, ipsa, ullam voluptatibus accusamus placeat culpa harum dicta excepturi cupiditate obcaecati aliquam repellendus assumenda laborum. Maxime officiis nisi temporibus dolor sapiente? Nesciunt illum dolor quae maiores necessitatibus, aut dicta ullam est vero aperiam officiis? Commodi nisi facere laboriosam nemo quod ex obcaecati ab vitae labore? Fugiat placeat sit laudantium provident accusamus iure iste, veniam in sunt magnam, quisquam nostrum repudiandae.",
    articleSummary:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil porro officiis laboriosam rerum dolorum incidunt rem quas debitis. Numquam, atque ad? Illo iure rem ut.",
  },
  {
    id: 3,
    image: require("../../../assets/image/red-cross-&kid.jpg"),
    title: "Story 4 has a pretty long title",
    author: "Author Name 4",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi dolor minus veniam recusandae voluptas quas magni dolore fugit nihil perspiciatis aliquid eum in quaerat unde quod totam, nisi dolores quos eaque fugiat rerum! Atque molestias laboriosam, dolore consequatur pariatur similique laudantium et voluptatibus ipsa ducimus possimus deserunt molestiae quidem, ut unde. Aperiam sunt nostrum iusto et laboriosam at amet minus eos impedit illo debitis aliquam, cum reiciendis doloribus temporibus sint consequuntur dignissimos soluta harum praesentium nisi obcaecati! Deleniti iure facilis odio quod sit doloribus quos ullam sequi. Ullam nam voluptate fuga voluptatem? Soluta, deserunt fugiat impedit a culpa, officiis molestiae quam dignissimos necessitatibus incidunt corporis reprehenderit fugit, tempore deleniti adipisci et sapiente nihil? Atque est tenetur, totam perferendis labore quae impedit expedita cumque quibusdam corrupti tempore beatae adipisci. Cumque, commodi! At vel natus, ipsam nulla facilis facere itaque velit, ipsa, ullam voluptatibus accusamus placeat culpa harum dicta excepturi cupiditate obcaecati aliquam repellendus assumenda laborum. Maxime officiis nisi temporibus dolor sapiente? Nesciunt illum dolor quae maiores necessitatibus, aut dicta ullam est vero aperiam officiis? Commodi nisi facere laboriosam nemo quod ex obcaecati ab vitae labore? Fugiat placeat sit laudantium provident accusamus iure iste, veniam in sunt magnam, quisquam nostrum repudiandae.",
    articleSummary:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil porro officiis laboriosam rerum dolorum incidunt rem quas debitis. Numquam, atque ad? Illo iure rem ut.",
  },
  {
    id: 4,
    image: require("../../../assets/image/blood-1813410_1280.jpg"),
    title: "Story 5 has a pretty long title",
    author: "Author Name 5",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi dolor minus veniam recusandae voluptas quas magni dolore fugit nihil perspiciatis aliquid eum in quaerat unde quod totam, nisi dolores quos eaque fugiat rerum! Atque molestias laboriosam, dolore consequatur pariatur similique laudantium et voluptatibus ipsa ducimus possimus deserunt molestiae quidem, ut unde. Aperiam sunt nostrum iusto et laboriosam at amet minus eos impedit illo debitis aliquam, cum reiciendis doloribus temporibus sint consequuntur dignissimos soluta harum praesentium nisi obcaecati! Deleniti iure facilis odio quod sit doloribus quos ullam sequi. Ullam nam voluptate fuga voluptatem? Soluta, deserunt fugiat impedit a culpa, officiis molestiae quam dignissimos necessitatibus incidunt corporis reprehenderit fugit, tempore deleniti adipisci et sapiente nihil? Atque est tenetur, totam perferendis labore quae impedit expedita cumque quibusdam corrupti tempore beatae adipisci. Cumque, commodi! At vel natus, ipsam nulla facilis facere itaque velit, ipsa, ullam voluptatibus accusamus placeat culpa harum dicta excepturi cupiditate obcaecati aliquam repellendus assumenda laborum. Maxime officiis nisi temporibus dolor sapiente? Nesciunt illum dolor quae maiores necessitatibus, aut dicta ullam est vero aperiam officiis? Commodi nisi facere laboriosam nemo quod ex obcaecati ab vitae labore? Fugiat placeat sit laudantium provident accusamus iure iste, veniam in sunt magnam, quisquam nostrum repudiandae.",
    articleSummary:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil porro officiis laboriosam rerum dolorum incidunt rem quas debitis. Numquam, atque ad? Illo iure rem ut.",
  },
  {
    id: 5,
    image: require("../../../assets/image/world-blood-donor-day.png"),
    title: "Story 6 has a pretty long title",
    author: "Author Name 6",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi dolor minus veniam recusandae voluptas quas magni dolore fugit nihil perspiciatis aliquid eum in quaerat unde quod totam, nisi dolores quos eaque fugiat rerum! Atque molestias laboriosam, dolore consequatur pariatur similique laudantium et voluptatibus ipsa ducimus possimus deserunt molestiae quidem, ut unde. Aperiam sunt nostrum iusto et laboriosam at amet minus eos impedit illo debitis aliquam, cum reiciendis doloribus temporibus sint consequuntur dignissimos soluta harum praesentium nisi obcaecati! Deleniti iure facilis odio quod sit doloribus quos ullam sequi. Ullam nam voluptate fuga voluptatem? Soluta, deserunt fugiat impedit a culpa, officiis molestiae quam dignissimos necessitatibus incidunt corporis reprehenderit fugit, tempore deleniti adipisci et sapiente nihil? Atque est tenetur, totam perferendis labore quae impedit expedita cumque quibusdam corrupti tempore beatae adipisci. Cumque, commodi! At vel natus, ipsam nulla facilis facere itaque velit, ipsa, ullam voluptatibus accusamus placeat culpa harum dicta excepturi cupiditate obcaecati aliquam repellendus assumenda laborum. Maxime officiis nisi temporibus dolor sapiente? Nesciunt illum dolor quae maiores necessitatibus, aut dicta ullam est vero aperiam officiis? Commodi nisi facere laboriosam nemo quod ex obcaecati ab vitae labore? Fugiat placeat sit laudantium provident accusamus iure iste, veniam in sunt magnam, quisquam nostrum repudiandae.",
    articleSummary:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil porro officiis laboriosam rerum dolorum incidunt rem quas debitis. Numquam, atque ad? Illo iure rem ut.",
  },
  {
    id: 6,
    image: require("../../../assets/image/blood-1813410_1280.jpg"),
    title: "Story 7 has a pretty long title",
    author: "Author Name 7",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi dolor minus veniam recusandae voluptas quas magni dolore fugit nihil perspiciatis aliquid eum in quaerat unde quod totam, nisi dolores quos eaque fugiat rerum! Atque molestias laboriosam, dolore consequatur pariatur similique laudantium et voluptatibus ipsa ducimus possimus deserunt molestiae quidem, ut unde. Aperiam sunt nostrum iusto et laboriosam at amet minus eos impedit illo debitis aliquam, cum reiciendis doloribus temporibus sint consequuntur dignissimos soluta harum praesentium nisi obcaecati! Deleniti iure facilis odio quod sit doloribus quos ullam sequi. Ullam nam voluptate fuga voluptatem? Soluta, deserunt fugiat impedit a culpa, officiis molestiae quam dignissimos necessitatibus incidunt corporis reprehenderit fugit, tempore deleniti adipisci et sapiente nihil? Atque est tenetur, totam perferendis labore quae impedit expedita cumque quibusdam corrupti tempore beatae adipisci. Cumque, commodi! At vel natus, ipsam nulla facilis facere itaque velit, ipsa, ullam voluptatibus accusamus placeat culpa harum dicta excepturi cupiditate obcaecati aliquam repellendus assumenda laborum. Maxime officiis nisi temporibus dolor sapiente? Nesciunt illum dolor quae maiores necessitatibus, aut dicta ullam est vero aperiam officiis? Commodi nisi facere laboriosam nemo quod ex obcaecati ab vitae labore? Fugiat placeat sit laudantium provident accusamus iure iste, veniam in sunt magnam, quisquam nostrum repudiandae.",
    articleSummary:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil porro officiis laboriosam rerum dolorum incidunt rem quas debitis. Numquam, atque ad? Illo iure rem ut.",
  },
  {
    id: 7,
    image: require("../../../assets/image/blood-5053760_1280.jpg"),
    title: "Story 8 has a pretty long title",
    author: "Author Name 8",
    article:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi dolor minus veniam recusandae voluptas quas magni dolore fugit nihil perspiciatis aliquid eum in quaerat unde quod totam, nisi dolores quos eaque fugiat rerum! Atque molestias laboriosam, dolore consequatur pariatur similique laudantium et voluptatibus ipsa ducimus possimus deserunt molestiae quidem, ut unde. Aperiam sunt nostrum iusto et laboriosam at amet minus eos impedit illo debitis aliquam, cum reiciendis doloribus temporibus sint consequuntur dignissimos soluta harum praesentium nisi obcaecati! Deleniti iure facilis odio quod sit doloribus quos ullam sequi. Ullam nam voluptate fuga voluptatem? Soluta, deserunt fugiat impedit a culpa, officiis molestiae quam dignissimos necessitatibus incidunt corporis reprehenderit fugit, tempore deleniti adipisci et sapiente nihil? Atque est tenetur, totam perferendis labore quae impedit expedita cumque quibusdam corrupti tempore beatae adipisci. Cumque, commodi! At vel natus, ipsam nulla facilis facere itaque velit, ipsa, ullam voluptatibus accusamus placeat culpa harum dicta excepturi cupiditate obcaecati aliquam repellendus assumenda laborum. Maxime officiis nisi temporibus dolor sapiente? Nesciunt illum dolor quae maiores necessitatibus, aut dicta ullam est vero aperiam officiis? Commodi nisi facere laboriosam nemo quod ex obcaecati ab vitae labore? Fugiat placeat sit laudantium provident accusamus iure iste, veniam in sunt magnam, quisquam nostrum repudiandae.",
    articleSummary:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil porro officiis laboriosam rerum dolorum incidunt rem quas debitis. Numquam, atque ad? Illo iure rem ut.",
  },
];

const Item = ({ author, articleSummary, title, image, onPress }) => (
  <View style={styles.newsFeedCard}>
    <Image
      style={{
        width: "35%",
        height: "100%",
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
      }}
      source={image}
    />
    <View
      style={{
        padding: 10,
      }}
    >
      <View
        style={{
          flexDirection: "column",
          marginBottom: 5,
        }}
      >
        <Text style={{ fontSize: 20, fontFamily: "poppins" }}>{title}</Text>
        <Text style={{ fontSize: 18, fontFamily: "poppinsReg" }}>{author}</Text>
      </View>
      <Text
        style={{
          fontSize: 16,
          fontFamily: "poppinsLight",
          overflow: "hidden",
        }}
        ellipsizeMode="tail"
        numberOfLines={4}
      >
        {articleSummary}
      </Text>
      <Pressable
        onPress={onPress}
        style={{
          display: "flex",
          marginTop: 5,
          backgroundColor: "black",
          textAlign: "center",
          borderRadius: 10,
          padding: 8,
          alignItems: "center",
          width: 80,
        }}
      >
        <Text
          style={{
            color: "#FFF",
            fontSize: 14,
            fontFamily: "poppinsLight",
          }}
        >
          Read more
        </Text>
      </Pressable>
    </View>
  </View>
);
export default function Home({ navigation }) {
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
      <View style={{ backgroundColor: "#f6655F" }}>
        <Text style={[styles.welcomeText, fontBold]}>Welcome John,</Text>

        <View style={styles.statsWrap}>
          {/* <Card number={"3"} text={"Pending Request"} />
          <Card number={"2"} text={"Accepted Request"} />
          <Card number={"1"} text={"Cancelled Request"} /> */}
          <Text
            style={{
              color: "white",
              fontSize: 28,
              fontFamily: "poppinsReg",
              lineHeight: 42,
            }}
          >
            Donate blood {"\n"}Save life
          </Text>
          <Image
            style={{ height: 150, width: 150 }}
            source={require("../../../assets/image/heart.jpg")}
          />
        </View>
      </View>

      <View style={styles.newsFeed}>
        <Text style={styles.newsFeedTitle}>News Feeds</Text>

        <FlatList
          data={newsFeed}
          renderItem={({ item }) => (
            <Item
              image={item.image}
              title={item.title}
              author={item.author}
              articleSummary={item.articleSummary}
              navigation={item.navigation}
              onPress={() =>
                navigation.navigate("Activities", {
                  title: item.title,
                  id: item.id,
                  author: item.author,
                  image: item.image,
                })
              }
            />
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
    // marginTop: StatusBar.currentHeight || 0,
  },
  fontBold: {
    fontFamily: "poppins",
  },
  fontRegular: {
    fontFamily: "poppinsReg",
  },
  welcomeText: {
    fontSize: 24,
    marginTop: 25,
    color: "white",
    padding: 10,
    paddingTop: 0,
  },
  statsWrap: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 0,
    marginTop: 25,
    marginBottom: 25,
  },
  newsFeed: {
    height: 500,
    padding: 10,
    flex: 1,
    backgroundColor: "#d1d5db",
  },
  newsFeedTitle: {
    marginBottom: 8,
    fontSize: 24,
    fontFamily: "poppins",
  },
  newsFeedCard: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 15,
    marginBottom: 15,
    // borderTopLeftRadius
    // padding: 12,
  },
});
