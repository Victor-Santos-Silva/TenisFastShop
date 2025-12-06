import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

export default function CadastroScreen () {
  const router = useRouter()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmSenha, setConfirmSenha] = useState('')

  function handleRegister () {
    if (!nome || !email || !senha || !confirmSenha) {
      alert('Preencha todos os campos!')
      return
    }

    if (senha !== confirmSenha) {
      alert('As senhas não coincidem!')
      return
    }

    // Aqui futuramente você vai chamar a API
    alert(`Usuário ${nome} cadastrado com sucesso!`)

    router.replace('/login') // Vai para tela de login após cadastro
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder='Digite seu nome'
        placeholderTextColor='#999'
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder='Digite seu email'
        placeholderTextColor='#999'
        keyboardType='email-address'
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder='Digite sua senha'
        placeholderTextColor='#999'
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <Text style={styles.label}>Confirmar senha</Text>
      <TextInput
        style={styles.input}
        placeholder='Repita sua senha'
        placeholderTextColor='#999'
        secureTextEntry
        value={confirmSenha}
        onChangeText={setConfirmSenha}
      />

      <TouchableOpacity style={styles.btn} onPress={handleRegister}>
        <Text style={styles.btnText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/login')}>
        <Text style={styles.link}>Já tenho conta</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E7D32',
    textAlign: 'center',
    marginBottom: 30
  },
  label: {
    fontSize: 16,
    color: '#444',
    marginBottom: 8
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: '#2E7D32',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    marginBottom: 16
  },
  btn: {
    backgroundColor: '#2E7D32',
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 10
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  link: {
    textAlign: 'center',
    marginTop: 16,
    color: '#2E7D32',
    fontWeight: '600',
    fontSize: 16
  }
})
