import { useRouter } from 'expo-router'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function HomeScreen () {
  const router = useRouter()

  return (
    /* 
    <View> funciona como uma div no HTML.
    Ele é o container principal da tela.
    O style styles.container define o layout geral (fundo, espaço, alinhamento, etc).
    */
    <View style={styles.container}>
      {/* 
      <Image> exibe uma imagem local do projeto.
      require() carrega o arquivo da pasta assets/images.
      styles.img define tamanho, borda, margem, etc.
      */}
      <Image
        source={require('../assets/images/TenisDeLogin.jpg')}
        style={styles.img}
      />

      {/* 
          <Text> exibe um texto.
          Esse aqui é o título principal, grande e chamativo.
          Estilizado em styles.title.
        */}
      <Text style={styles.title}>Tenis Fast Shop</Text>

      {/* 
      <Text style={styles.text}>
       A sua loja de tenis online. Encontre os melhores modelos e ofertas
       exclusivas aqui!
      </Text>
      */}
      <Text style={styles.text}>
        A sua loja de tenis online. Encontre os melhores modelos e ofertas
        exclusivas aqui!
      </Text>

      {/* 
        É apenas uma <View> que segura os três botões.
        Ele organiza os botões na vertical e define largura.
        */}
      <View style={styles.buttonContainer}>
        <View style={styles.loginsContainer}>
          <TouchableOpacity
            style={styles.btnPrimary}
            onPress={() => router.push('/login')}
          >
            <Text style={styles.btnPrimaryText}>Login</Text>
          </TouchableOpacity>

          {/* 
        TouchableOpacity é um botão personalizável (melhor que o <Button /> nativo).
        style={styles.btnPrimary} → cor verde escuro + bordas arredondadas.
        onPress={() => alert('Login realizado!')} → ação ao clicar.
        Text dentro mostra o texto do botão.
        */}
          <TouchableOpacity
            style={styles.btnSecondary}
            onPress={() => router.push('/cadastro')}
          >
            <Text style={styles.btnSecondaryText}>Cadastro</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.btnOutline}
          onPress={() => router.push('/(tabs)')}
        >
          <Text style={styles.btnOutlineText}>Continuar como convidado</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#E9F7EF', // Verde bem suave
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: '100%',
    height: '50%',
    marginTop: 30,
    borderRadius: 16,
    resizeMode: 'cover',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1B5E20', // Verde escuro
    marginTop: 25,
    textAlign: 'center'
  },
  text: {
    fontSize: 16,
    color: '#2E7D32',
    textAlign: 'center',
    marginVertical: 16,
    paddingHorizontal: 10
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20
  },

  // Botão principal
  btnPrimary: {
    width: '45%',
    backgroundColor: '#2E7D32',
    paddingVertical: 14,
    borderRadius: 25,
    marginBottom: 12
  },
  btnPrimaryText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    fontWeight: '600'
  },

  // Botão secundário
  btnSecondary: {
    width: '45%',
    backgroundColor: '#66BB6A',
    paddingVertical: 14,
    borderRadius: 25,
    marginBottom: 12
  },
  btnSecondaryText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
    fontWeight: '600'
  },

  // Botão outline (borda verde)
  btnOutline: {
    width: '93%',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#2E7D32',
    paddingVertical: 14,
    borderRadius: 12
  },
  btnOutlineText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#2E7D32',
    fontWeight: '600'
  },
  loginsContainer: {
    marginBottom: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
})
