import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function FirstScreen() {
  return (
    <View>
      <View style={styles.back}>
        <Text style={styles.title}>XClarity One</Text>
      </View>

      <TouchableOpacity
        //onPress={onAuthenticate}
        style={styles.btn}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 5,
    marginTop: 80,
    backgroundColor: 'gray',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },
  title: {
    fontSize: 50,
    fontWeight: '400',
    marginVertical: 30,
    textAlign: 'center',
    color: 'red',
  },
  description: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 50,
  },
  back: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 10,
  },
});