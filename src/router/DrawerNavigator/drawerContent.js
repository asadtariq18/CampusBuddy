import React from 'react';
import {View, StyleSheet, useColorScheme} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from '../../Constants/COLORS';
export function DrawerContent (props) {
  const paperTheme = useTheme ();

  return (
    <View style={{flex: 1, backgroundColor: COLORS.background_dark}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>Aleena</Title>
                <Caption style={styles.caption}>SP18-BCS-023</Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  45
                </Paragraph>
                <Caption style={styles.caption}>Friends</Caption>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  {'         '}207
                </Paragraph>
                <Caption style={styles.caption}>Popularity</Caption>
              </View>

            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={COLORS.icon} size={size} />
              )}
              label="Feed"
              inactiveTintColor={COLORS.font}
              onPress={() => {
                props.navigation.navigate ('Home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-outline" color={COLORS.icon} size={size} />
              )}
              label="Profile"
              inactiveTintColor={COLORS.font}
              onPress={() => {
                props.navigation.navigate ('Profile');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="food" color={COLORS.icon} size={size} />
              )}
              label="Food Order"
              inactiveTintColor={COLORS.font}
              onPress={() => {
                props.navigation.navigate ('Food Order');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon5 name="hands-helping" color={COLORS.icon} size={size - 5} />
              )}
              label="Donation"
              inactiveTintColor={COLORS.font}
              onPress={() => {
                props.navigation.navigate ('Donation');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="map" color={COLORS.icon} size={size} />
              )}
              label="Map"
              inactiveTintColor={COLORS.font}
              onPress={() => {
                props.navigation.navigate ('Map');
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple onPress={() => {}}>
              <View style={styles.preference}>
                <Text style={{color: COLORS.font}}>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={COLORS.icon} size={size} />
          )}
          label="Sign Out"
          inactiveTintColor={COLORS.font}
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
    color: COLORS.font,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: COLORS.font,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: COLORS.secondary,
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
