import { createHomeStyles } from "@/assets/images/Styles/home.styles";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

const EmptyState = () => {
  const { colors } = useTheme();

  const homeStyles = createHomeStyles(colors);

  return (
    <View style={homeStyles.emptyContainer}>
      <LinearGradient colors={colors.gradients.surface} style={homeStyles.emptyIconContainer}>
        <Ionicons name="clipboard-outline" size={60} color={colors.textMuted} />
      </LinearGradient>
      <Text style={homeStyles.emptyText}>No ToDo's Yet!</Text>
      <Text style={homeStyles.emptySubtext}>Add Your First Todo Above To Get Started</Text>
    </View>
  );
};
export default EmptyState;