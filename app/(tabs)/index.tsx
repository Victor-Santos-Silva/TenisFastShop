import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
export default function HomeAfterLogin () {
  const router = useRouter()

  return (
    <ScrollView>
      <View style={styles.header}>
        <View>
          <Text style={styles.boasVindas}>Seja Bem-Vindo!</Text>
          <Text style={styles.nome}>Victor</Text>
        </View>
        <View style={styles.botoesHeader}>
          <Ionicons name='search-outline' style={styles.lupa} />
          <Ionicons name='bag-outline' style={styles.lupa} />
        </View>
      </View>
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 80
  },
  boasVindas: {
    fontSize: 20
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  botoesHeader: {
    flexDirection: 'row',
    gap: 10
  },
  lupa: {
    backgroundColor: '#dadadaff',
    fontSize: 25,
    color: '#000000ff',
    borderRadius: 20,
    padding: 10
  }
})
