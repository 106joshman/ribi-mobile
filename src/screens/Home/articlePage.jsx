import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Image,
  Text,
} from "react-native";

export default function ArticlePage({ navigation, route }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
        backgroundColor: "white",
      }}
    >
      <ScrollView>
        <View>
          <Image
            style={{ height: 300, width: "100%" }}
            source={route.params?.image}
          />
        </View>
        <View style={{ padding: 10 }}>
          <View
            style={{
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: "poppins",
              }}
            >
              {route.params?.title}
            </Text>
            <Text style={{ fontSize: 18, fontFamily: "poppinsReg" }}>
              Written by: {route.params?.author}
            </Text>
          </View>
          <Text style={{ marginBottom: 10, fontFamily: "poppinsReg" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            sequi dolor minus veniam recusandae voluptas quas magni dolore fugit
            nihil perspiciatis aliquid eum in quaerat unde quod totam, nisi
            dolores quos eaque fugiat rerum! Atque molestias laboriosam, dolore
            consequatur pariatur similique laudantium et voluptatibus ipsa
            ducimus possimus deserunt molestiae quidem, ut unde.
          </Text>

          <Text style={{ marginBottom: 10, fontFamily: "poppinsReg" }}>
            Aperiam sunt nostrum iusto et laboriosam at amet minus eos impedit
            illo debitis aliquam, cum reiciendis doloribus temporibus sint
            consequuntur dignissimos soluta harum praesentium nisi obcaecati!
            Deleniti iure facilis odio quod sit doloribus quos ullam sequi.
            Ullam nam voluptate fuga voluptatem? Soluta, deserunt fugiat impedit
            a culpa, officiis molestiae quam dignissimos necessitatibus incidunt
            corporis reprehenderit fugit, tempore deleniti adipisci et sapiente
            nihil? Atque est tenetur, totam perferendis labore quae impedit
            expedita cumque quibusdam corrupti tempore beatae adipisci.
          </Text>

          <Text style={{ marginBottom: 10, fontFamily: "poppinsReg" }}>
            Cumque, commodi! At vel natus, ipsam nulla facilis facere itaque
            velit, ipsa, ullam voluptatibus accusamus placeat culpa harum dicta
            excepturi cupiditate obcaecati aliquam repellendus assumenda
            laborum. Maxime officiis nisi temporibus dolor sapiente? Nesciunt
            illum dolor quae maiores necessitatibus, aut dicta ullam est vero
            aperiam officiis? Commodi nisi facere laboriosam nemo quod ex
            obcaecati ab vitae labore? Fugiat placeat sit laudantium provident
            accusamus iure iste, veniam in sunt magnam, quisquam nostrum
            repudiandae.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
