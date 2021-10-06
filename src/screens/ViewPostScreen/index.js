
import React from "react";
import { SafeAreaView, ScrollView, RefreshControl, ToastAndroid } from "react-native";
import Post from "../../components/Post";
import { COLORS } from "../../Constants/COLORS";
import styles from "./style";

const ViewPostScreen = (post) => {
  const [refreshing, setRefreshing] = React.useState(false);

      const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        try {

          setRefreshing(false);
          ToastAndroid.show("Updated", ToastAndroid.SHORT);
        } catch (error) {
          ToastAndroid.show(error.message, ToastAndroid.SHORT);
        }
      }, [refreshing]);
  return (
    <SafeAreaView style={styles.container}>
              <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            progressBackgroundColor={COLORS.background_dark}
            colors={[COLORS.primary]}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
      <Post post={post} />
      </ScrollView>
    </SafeAreaView>
  );
};
export default ViewPostScreen;
