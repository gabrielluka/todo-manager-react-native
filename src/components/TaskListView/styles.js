import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10,
  },
  headerConteiner: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'silver',
    borderRadius: 25,
    marginTop: 10,
  },
  headerTagConteiner: {
    backgroundColor: 'gray',
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  headerTagText: {
    color: '#FFF',
    fontSize: 22,
  },
  headerText: {
    fontSize: 16,
    marginLeft: 10,
  },
  itemConteiner: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F3F2F0',
    marginTop: 5,
    padding: 10,
    height: 75,
  },
  itemTextTitle: {
    fontSize: 22,
  },
});

export default styles;
