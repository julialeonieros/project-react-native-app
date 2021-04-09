import React from 'react'
import styled from 'styled-components/native'

const Eightball = styled.View`
  width: 300px;
  height: 300px;
  background-color: #000;
  border-radius: 300;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`

const EightBackground = styled.View`
  width: 140px;
  height: 140px;
  background-color: #FFF;
  border-radius: 140;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`

const EightText = styled.Text`
  color: #000;
  font-size: 120px;
  font-family: 'CourierNewPS-BoldMT';
  margin-top: 10px;
`

const EightballHidden = () => {

  return (
    <Eightball>
      <EightBackground>
        <EightText>8</EightText>
      </EightBackground>
    </Eightball>
  )
}

export default EightballHidden
