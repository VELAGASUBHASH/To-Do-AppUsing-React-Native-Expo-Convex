import { createHomeStyles } from '@/assets/images/Styles/home.styles';
import { api } from '@/convex/_generated/api';
import useTheme from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { useMutation } from 'convex/react';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Alert, TextInput, TouchableOpacity, View } from 'react-native';

const TodoInput = () => {
    const {colors} = useTheme();
    const homestyles = createHomeStyles(colors);
    const [newTodo,setnewTodo] = useState("");
    const addTodo = useMutation(api.todo.addTodo);

    const handleAddTodo = async()=>{
        if(newTodo.trim()){
            try {
                await addTodo({text:newTodo.trim()})
                setnewTodo("")
            } catch (error) {
                console.log("Error While Adding Todos",error);
                Alert.alert("Error","Failed To Add ToDo");
            }
        }
    }

  return (
    <View style={homestyles.inputSection}>
        <View style={homestyles.inputWrapper}>
            <TextInput
                style={homestyles.input}
                placeholder='What Need To Done?'
                value={newTodo}
                onChangeText={setnewTodo}
                onSubmitEditing={handleAddTodo}
                placeholderTextColor={colors.textMuted}
            />
            <TouchableOpacity onPress={handleAddTodo} activeOpacity={0.8} disabled={!newTodo.trim()}>
                <LinearGradient colors={newTodo.trim() ? colors.gradients.primary : colors.gradients.muted}
                style={[homestyles.addButton, !newTodo.trim() && homestyles.addButtonDisabled]}>
                    <Ionicons name='add' size={24} color="#ffffff"/>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default TodoInput