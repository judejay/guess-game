import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, ImageBackground, SafeAreaView } from 'react-native';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App(): React.ReactNode {
  const [userNumber, setUserNumber] = useState<number>();
  const [guessRounds, setGuessRounds] = useState<number>(0);
  
  const [fontsLoaded] = useFonts({
   'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  
  })
  
if(!fontsLoaded) {
  return <AppLoading />
}

  const configureNewGameHandler = (): void => {
    setGuessRounds(0);
    setUserNumber(undefined);
  };

  const startGameHandler = (selectedNumber: number): void => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = (numOfRounds: number): void => {
    setGuessRounds(numOfRounds);
  };

  let content: React.ReactNode = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={userNumber || 0}
        onRestart={configureNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient
    colors={['#4c669f', '#3b5998', '#192f6a']}
    style={styles.screen}
  >
    <ImageBackground
      source={require('./assets/background.png')}
      resizeMode="cover"
      style={styles.screen}
      imageStyle={styles.backgroundImage}
    >
      <SafeAreaView style={styles.screen}>{content}</SafeAreaView>
    </ImageBackground>
  </LinearGradient>
  );

}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15,
  },
});