    import { createHomeStyles } from '@/assets/images/Styles/home.styles'
import { api } from '@/convex/_generated/api'
import useTheme from '@/hooks/useTheme'
import { Ionicons } from '@expo/vector-icons'
import { useQuery } from 'convex/react'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Text, View } from 'react-native'

    const Header = () => {
        const {colors} = useTheme();
        const todos = useQuery(api.todo.getTodos);
        const homestyles = createHomeStyles(colors);

        const completedtodos = todos ? todos.filter((todo)=> todo.isCompleted).
        length:0;
        const total = todos ? todos.length:0;
        const percentage = total >0?(completedtodos/total)*100:0;
    return (
        <View style={homestyles.header}>
        <View style={homestyles.titleContainer}>
            <LinearGradient colors={colors.gradients.primary} style={homestyles.iconContainer}>
            <Ionicons name='clipboard-outline' size={28} color="#fff" />
            </LinearGradient>

            <View style={homestyles.titleTextContainer}>
                <Text style={homestyles.title}>Today Pending Tasks</Text>
                <Text style={homestyles.subtitle}>
                    {completedtodos} of {total} Completed
                </Text>
            </View>
        </View>
        {true &&(
            <View style={homestyles.progressContainer}>
                <View style={homestyles.progressBarContainer}>
                    <View style={homestyles.progressBar}>
                        <LinearGradient colors={colors.gradients.success} style={[homestyles.progressFill, {width:`${percentage}%`}]}/>
                    </View>
                    <Text style={homestyles.progressFill}>{Math.round(percentage)}%</Text>
                </View>
            </View>
        )}
        </View>
    )
    }

    export default Header