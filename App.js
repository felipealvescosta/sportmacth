import React, { useState, useEffect } from 'react'
import {
  Image,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Platform
} from 'react-native'

import ProgressBar from './src/components/ProgressBar'

export default function App () {
  const [data, setData] = useState({})

  const getData = async () => {
    await fetch('https://sportsmatch.com.br/teste/teste.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (myJson) {
        setData(myJson.Object[0].Player)
      })
  }
  useEffect(() => {
    getData()
  }, [])

  return (
      <ScrollView style={styles.container}>
      <StatusBar barStyle='light-content' translucent={true} backgroundColor="transparent"/>
        <View
          style={{
            height: 200,
            width: '100%',
            backgroundColor: 'rgb(252, 98, 3)',
          }}
        />
        <View
          style={{
            marginTop: -100,
            alignItems: 'center'
          }}
        >
          <Image
            style={{
              height: 150,
              width: 150,
              borderRadius: 100,
              borderColor: '#fff',
              borderWidth: 5
            }}
            source={{ uri: data.img }}
          />
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold'
            }}
          >
            {data?.name}
          </Text>
          <Text style={{ fontSize: 20, paddingBottom: 10 }}>
            {data?.country}
          </Text>
          <Text>{data?.pos}</Text>
        </View>
        <View>
          <View style={{ alignItems: 'center', margin: 20 }}>
            <View
              style={{
                height: 150,
                width: 150,
                backgroundColor: 'rgb(252, 98, 3)',
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative'
              }}
            >
              <Text style={{ fontSize: 26, color: 'white' }}>
                {Math.round(data?.percentual)} %
              </Text>
            </View>
          </View>
          <View style={{ padding: 20 }}>
            <View style={{ paddingBottom: 10 }}>
              <Text style={{ fontSize: 18, paddingBottom: 10 }}>
                Copas do Mundo Vencidas
              </Text>
              <ProgressBar
                max={data?.Barras?.Copas_do_Mundo_Vencidas?.max}
                pla={data?.Barras?.Copas_do_Mundo_Vencidas?.pla}
                pos={data?.Barras?.Copas_do_Mundo_Vencidas?.pos}
              />
            </View>
            <View>
              <Text style={{ fontSize: 18, paddingBottom: 10 }}>
                Copas do Mundo Disputadas
              </Text>
              <ProgressBar
                max={data?.Barras?.Copas_do_Mundo_Disputadas?.max}
                pla={data?.Barras?.Copas_do_Mundo_Disputadas?.pla}
                pos={data?.Barras?.Copas_do_Mundo_Disputadas?.pos}
              />
            </View>
          </View>
        </View>
        <View>
          <Text style={{ textAlign: 'center', marginTop: 40, marginBottom: 80 }}>
            Desenvolvido por Felipe Alves
          </Text>
        </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%'
  }
})
