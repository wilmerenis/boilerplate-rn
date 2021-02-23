import { StyleSheet, ViewStyle } from 'react-native'

interface IStyles {
  container: ViewStyle
}

export const styles:IStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})