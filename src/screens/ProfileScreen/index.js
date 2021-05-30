import React from 'react';
import {Text, View, SafeAreaView, Image, ScrollView} from 'react-native';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import styles from './style';

const ProfileScreen = () => (
  <SafeAreaView style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>

      <View style={{alignSelf: 'center'}}>
        <View style={styles.profileImage}>
          <Image
            source={{
              uri: 'https://stream.izoomyou.com/stream.php?url=https%3A%2F%2Fscontent-arn2-2.cdninstagram.com%2Fv%2Ft51.2885-19%2Fs320x320%2F185568235_775948276442804_7461091719072612865_n.jpg%3Ftp%3D1%26_nc_ht%3Dscontent-arn2-2.cdninstagram.com%26_nc_ohc%3D8K2jHULpdn4AX_LvWsa%26edm%3DABfd0MgBAAAA%26ccb%3D7-4%26oh%3Dabb49ec8b2dfd0ccb95a2f74a1173355%26oe%3D60B8E1EC%26_nc_sid%3D7bff83&type=image&token=188b56e82603bd42aefb8cbc58927423be6f6d10',
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.add}>
          <Ionicons
            name="ios-add"
            size={48}
            color="#DFD8C8"
            style={{marginTop: 6, marginLeft: 2}}
          />
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={[styles.text, {fontWeight: '200', fontSize: 36}]}>
          Aleena
        </Text>
        <Text style={[styles.text, {color: '#AEB5BC', fontSize: 14}]}>
          SP18-BCS-023
        </Text>
        <Text style={[styles.text, {color: '#AEB5BC', fontSize: 14}]}>
          Student
        </Text>

      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statsBox}>
          <Text style={[styles.text, {fontSize: 24}]}>1</Text>
          <Text style={[styles.text, styles.subText]}>Posts</Text>
        </View>
        <View
          style={[
            styles.statsBox,
            {borderColor: '#DFD8C8', borderLeftWidth: 1, borderRightWidth: 1},
          ]}
        >
          <Text style={[styles.text, {fontSize: 24}]}>45</Text>
          <Text style={[styles.text, styles.subText]}>Friends</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={[styles.text, {fontSize: 24}]}>207</Text>
          <Text style={[styles.text, styles.subText]}>Popularity</Text>
        </View>
      </View>

      <View style={{marginTop: 32}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.mediaImageContainer}>
            <Image
              source={{
                uri: 'https://images.theconversation.com/files/254131/original/file-20190116-163274-1u0u5re.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=600&h=400&fit=crop&dpr=1',
              }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        </ScrollView>
      </View>
      <Text style={[styles.subText, styles.recent]}>Recent Activity</Text>
      <View style={{alignItems: 'center'}}>
        <View style={styles.recentItem}>
          <View style={styles.activityIndicator} />
          <View style={{width: 250}}>
            <Text style={[styles.text, {color: '#41444B', fontWeight: '300'}]}>
              Liked
              {' '}
              <Text style={{fontWeight: '400'}}>Izmah</Text>
              {' '}
              and
              {' '}
              <Text style={{fontWeight: '400'}}>Atizaz</Text>
            </Text>
          </View>
        </View>

        <View style={styles.recentItem}>
          <View style={styles.activityIndicator} />
          <View style={{width: 250}}>
            <Text style={[styles.text, {color: '#41444B', fontWeight: '300'}]}>
              Started Connection
              {' '}
              with
              {' '}
              <Text style={{fontWeight: '400'}}>Asad</Text>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
);

export default ProfileScreen;
