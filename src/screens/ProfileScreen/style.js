import { StyleSheet } from 'react-native';
import { COLORS } from '../../Constants/COLORS';

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: COLORS.background_dark,
  },
  text: {
    color: COLORS.font,
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  subText: {
    fontSize: 12,
    color: COLORS.font_secondary,
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  profileImage: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 100,
    overflow: 'hidden',
  },
  add: {
    backgroundColor: COLORS.primary+"99",
    position: 'absolute',
    bottom: 0,
    right: 25,
    width: 30,
    height: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 32,
  },
  statsBox: {
    alignItems: 'center',
    flex: 1,
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10,
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  activityIndicator: {
    backgroundColor: COLORS.primary,
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20,
  },
});
export default styles;
