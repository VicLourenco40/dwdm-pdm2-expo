import { View, StyleSheet, Image } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { colors } from "../styles";
import Icon from '../assets/icon.png';

export default function Index(){
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={Icon}
                    style={styles.logo}
                />
                <Feather name="plus" size={24} color="white" />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.gray[950],
        flex:1,
    },
    header: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    logo: {
        width: 64,
        height: 64
    }
});
