/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Hello from './src/components/demoBuoi1/Hello';
import HelloScreen from './src/components/demoBuoi1/HelloScreen';
import AlertMain from './src/components/demoBuoi2/AlertMain';
import AlertMainStatic from './src/components/demoBuoi2/AlertMainStatic';
import Father from './src/components/demoBuoi3/Father';
import Main from './src/components/demoBuoi3/Main';
import Phuongtrinh from './src/components/ptbacnhat/Phuongtrinh';
import PhuongTrinh from './src/components/ptbacnhat/PhuongTrinh';
import Nhap from './src/components/ptbacnhat/Nhap';
import Calculator from './src/components/BTVN/Calculator';
import BMICalculator from './src/components/BTVN/BMICalculator';
import Layout1 from './src/components/layout/Layout1';
import Layout2 from './src/components/layout/Layout2';
import HomeScreen2 from './src/components/banhang/HomeScreen2';
import HomeScreen1 from './src/components/banhang/HomeScreen1';
import StudentList from './src/components/array/StudentList';
import StudentList23pnv1a from './src/components/array/StudentList23pnv1a';
import Danhba from './src/components/kiemtra/Danhba';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <Hello />
    // <HelloScreen />
    // <AlertMain />
    // <StudentList />
    // <StudentList23pnv1a />
    <Danhba />
    // <AlertMainStatic />
    // <Father />
    // <Main />
    //  <Phuongtrinh />
    //  <PhuongTrinh/>
    // <Calculator />
    // <BMICalculator />
    // <Layout1 />
    // <Layout2 />
    // <HomeScreen2 />
    // <HomeScreen2 />


    // <Nhap />
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
