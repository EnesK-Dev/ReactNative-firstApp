import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , FlatList} from 'react-native';

export default function App() {
  const courses = [
    {name:"angular",id:1},
    {name:"React",id:2},
    {name:"C",id:3},
    {name:"Python",id:4},
    {name:"Java",id:5},
  ]
return (
  <FlatList
    data={courses}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
      <Text style={styles.content}>{item.name}</Text>
    )}
  />
);}

const styles = StyleSheet.create({
  content:{
    fontSize:20,
    backgroundColor:"yellow",
    margin:10,
    padding:20,
    marginTop:50
  }
});

