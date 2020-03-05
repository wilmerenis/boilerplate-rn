import styled from 'styled-components'
import { WHITE } from '../../styles/colors'
import { scaleFont } from '../../styles/mixins'

export const Wrapper = styled.View`
  width: 100%;
  padding: 20px;
`

export const Title = styled.Text`
  color: ${WHITE};
  font-size: ${scaleFont(20)}px;
  font-family: 'Oswald';
  font-weight: 600;
`