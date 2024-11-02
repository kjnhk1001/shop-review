import { Image, StyleSheet, Platform, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import db from "@/libs/firebase";

type Shop = {
  name: string;
  place: string;
};
export default function HomeScreen() {
  const [shops, setShops] = useState<Shop[]>([]);
  useEffect(() => {
    getFirebaseItems();
  }, []);

  const getFirebaseItems = async () => {
    await getDocs(collection(db, "shops")).then((snapshot) => {
      const shopsArray = snapshot.docs.map((doc) => doc.data() as Shop); // 配列を作成
      setShops(shopsArray); // 配列としてセット
    });

    // 条件検索
    // const q = query(
    //   collection(db, "shops"),
    //   where("name", "==", "恵比寿コーヒー")
    // );

    // try {
    //   const querySnapshot = await getDocs(q);
    //   querySnapshot.forEach((doc) => {
    //     console.log(" 検索結果 ", doc.data());
    //   });
    // } catch (error) {
    //   console.error("Error getting documents: ", error);
    // }

    // 更新できる
    // await updateDoc(doc(db, "shops", "CAUNobv5zUgMSQrj2RKi"), {
    //   name: "レストラン品川1号店",
    // });

    // 新規作成（ID自動）
    // await addDoc(collection(db, "shops"), {
    //   name: "恵比寿コーヒー",
    //   place: "恵比寿",
    // });
  };

  const shopItems = shops.map((shop, index) => (
    <View>
      <Text>{shop?.name}</Text>
      <Text>{shop?.place}</Text>
    </View>
  ));

  return <SafeAreaView>{shopItems}</SafeAreaView>;
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
