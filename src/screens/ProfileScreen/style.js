import { StyleSheet } from 'react-native';
import { COLORS } from '../../Constants/COLORS';

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: COLORS.background_dark,
  },
  text: {
    color: COLORS.font,
    alignSelf: 'center',
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
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
    borderTopEndRadius: 20,
    borderBottomStartRadius: 20
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
});
export default styles;
