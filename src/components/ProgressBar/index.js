import React from 'react'
import { View, Text } from 'react-native'

const ProgressBar = ({ max, pla, pos}) => {
  return (
    <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
    }}
    >

      <View
        style={{
          height: 25,
          width: '90%',
          backgroundColor: 'rgba(252, 98, 3,0.9)',
          borderRadius: 8,
          overflow: 'hidden'
        }}
      >
        <View
          style={{
            height: 30,
            width: `${max*10}%`,
            borderRadius: 8,
            backgroundColor: 'rgba(94, 137, 184,0.9)',
            position: 'absolute',
            left: 0,
            top: 0
          }}
        >
          <Text style={{ fontSize: 20, color: '#fff', paddingBottom: 5, marginLeft: `${max*10}%`}}>{max}</Text>
        </View>
      </View>
      <Text style={{fontSize: 20}}>{pos}º</Text>
    </View>
  )
}

export default ProgressBar
