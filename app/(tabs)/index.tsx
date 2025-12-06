import { useRouter } from 'expo-router'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

export default function HomeAfterLogin () {
  const router = useRouter()

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Bem-vindo de volta! 👋</Text>

      <Text style={styles.subtitle}>Explore os melhores tênis do momento</Text>

      {/* Banner Principal */}
      <Image
        source={require('../../assets/images/TenisDeLogin.jpg')}
        style={styles.banner}
      />

      {/* Botões principais */}
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity
          style={styles.btnPrimary}
          onPress={() => router.push('/produtos')}
        >
          <Text style={styles.btnPrimaryText}>Ver Tênis</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnSecondary}
          onPress={() => router.push('/favoritos')}
        >
          <Text style={styles.btnSecondaryText}>Favoritos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnOutline}
          onPress={() => router.push('/perfil')}
        >
          <Text style={styles.btnOutlineText}>Perfil</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de destaques */}
      <Text style={styles.sectionTitle}>Destaques</Text>

      <View style={styles.highlights}>
        <Image
          source={require('../../assets/images/TenisDeLogin.jpg')}
          style={styles.card}
        />
        <Image
          source={require('../../assets/images/TenisDeLogin.jpg')}
          style={styles.card}
        />
        <Image
          source={require('../../assets/images/TenisDeLogin.jpg')}
          style={styles.card}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E7D32',
    textAlign: 'center',
    marginTop: 20
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20
  },
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
    resizeMode: 'cover'
  },
  buttonsWrapper: {
    width: '100%',
    marginBottom: 20
  },
  btnPrimary: {
    backgroundColor: '#2E7D32',
    padding: 14,
    borderRadius: 10,
    marginBottom: 10
  },
  btnPrimaryText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  btnSecondary: {
    backgroundColor: '#4CAF50',
    padding: 14,
    borderRadius: 10,
    marginBottom: 10
  },
  btnSecondaryText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18
  },
  btnOutline: {
    borderWidth: 2,
    borderColor: '#2E7D32',
    padding: 14,
    borderRadius: 10,
    marginBottom: 20
  },
  btnOutlineText: {
    color: '#2E7D32',
    textAlign: 'center',
    fontSize: 18
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E7D32',
    alignSelf: 'flex-start',
    marginBottom: 10
  },
  highlights: {
    flexDirection: 'row',
    gap: 10
  },
  card: {
    width: 120,
    height: 120,
    borderRadius: 10,
    resizeMode: 'cover'
  }
})
