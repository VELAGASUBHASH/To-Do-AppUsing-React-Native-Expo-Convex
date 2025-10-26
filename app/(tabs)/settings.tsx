import { createSettingsStyles } from '@/assets/images/Styles/settings.styles';
import Preference from '@/Components/Preference';
import ProgressState from '@/Components/ProgressState';
import useTheme from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const settings = () => {

  const {colors}=useTheme();
  
  const settingsytle = createSettingsStyles(colors)
  return (
    <LinearGradient colors={colors.gradients.background} style={settingsytle.container}>
      <SafeAreaView style={settingsytle.safeArea}>
        <View style={settingsytle.header}>
          <View style={settingsytle.titleContainer}>
            <LinearGradient colors={colors.gradients.primary} style={settingsytle.iconContainer}>
              <Ionicons name='settings' size={28} color="#ffffff"/>
            </LinearGradient>
            <Text style={settingsytle.title}>Settings</Text>
          </View>
        </View>
        <ScrollView style={settingsytle.scrollView}
      contentContainerStyle={settingsytle.container}
      showsVerticalScrollIndicator={false}
        >
          <ProgressState/>
          
          <Preference/>
        </ScrollView>
      </SafeAreaView>

    </LinearGradient>
  )
}

export default settings