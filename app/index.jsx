import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants'
import CustomButton from '../components/CustomButton';
import { useGlobalContext } from '../context/GlobalProvider';
import { Redirect } from 'expo-router';

export default function App() {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/home" />;
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View className="w-full flex justify-center  items-center min-h-[90vh] px-4">
          <Image source={images.logo} className="w-[250px] h-[100px] mb-5" resizeMode='contain' />

          <Image source={images.cards} className="max-w-[380px] w-full h-[298px]" />

          <View className="relative mt-5">
            <Text className="text-2xl text-black font-bold text-center">
              Discover Endless{"\n"}
              Possibilities with{" "}
              <Text className="text-[#BA68C8]">Travel Today</Text>
            </Text>
          </View>
          <Text className="text-sm font-pregular text-primary mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Travel Today
          </Text>

          <CustomButton title="Continue with Email" handlePress={() => router.push('/sign-in')} containerStyles='w-full mt-7'/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
