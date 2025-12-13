import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

export default function LoginScreen () {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin () {
    const url: string = 'http://10.0.2.2:3000/api/users/login'
    try {
      const response = await axios.post(url, {
        email,
        password
      })
      const { token, usuario } = response.data.login
      await AsyncStorage.setItem(token, usuario)
      router.replace('/(tabs)')
    } catch (error: any) {
      const msg = error.response?.data?.msg || 'Erro ao entrar na conta.'
      Alert.alert('Atenção', msg)
      return
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar na Conta</Text>

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
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.btn} onPress={handleLogin}>
        <Text style={styles.btnText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/cadastro')}>
        <Text style={styles.link}>Criar uma conta</Text>
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
