import { Image, ScrollView, Text, View, Dimensions } from 'react-native'
import { Link, router } from "expo-router";
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants'
import FormField from '../../components/FormField'
import  CustomButton  from '../../components/CustomButton'
import { signIn } from '../../lib/appwrite';
import { getCurrentUser } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";
import { Alert } from 'react-native';

  

const SignIn = () => {
  const { setUser, setIsLogged } = useGlobalContext();
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setIsSubmitting(true);

    try {
      await signIn(form.email, form.password);
      const result = await getCurrentUser();
      setUser(result);
      setIsLogged(true);

      Alert.alert("Success", "User signed in successfully");
      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image source={images.logo} resizeMode='contain' className='w-[115px] h-[35px]' />

          <Text className='text-2xl text-primary text-semibold font-psemibold mt-10'>Log in Travel Today</Text>

          <FormField title='Email' value={form.email} handleChangeText={(e) => setForm({ ...form, email: e})} otherStyles="mt-7" keyboardType="email-address" />

          <FormField title='Password' value={form.password} handleChangeText={(e) => setForm({ ...form, password: e})} otherStyles="mt-7"  />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
          />
          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-600 font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-indigo-700"
            >
              Signup
            </Link>
          </View>
        </View>
      </ScrollView> 
    </SafeAreaView>
  )
}

export default SignIn
