import colors from "@/assets/colors";
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.black900} />
            <Text style={styles.titleText}>
                Organize suas tarefas e atividades diárias.
            </Text>
            <ScrollView style={styles.cards} 
                showsVerticalScrollIndicator={false} 
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.card}>
                    <Text style={styles.titleCard}>
                        Estudar sobre UI / UX
                    </Text>
                    <View style={styles.details}>
                        <MaterialIcons name="query-builder" style={styles.iconDetails} />
                        <Text style={styles.textDetails}>10 Março 2025</Text>
                    </View>
                    <View style={styles.details}>
                        <MaterialIcons name="check-circle-outline" style={styles.iconDetails} />
                        <Text style={styles.textDetails}>5/6 Atividades concluídas</Text>
                    </View>
                    <View style={styles.highStatusTag}>
                        <Text style={styles.textTag}>Alta</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <Text style={styles.titleCard}>
                        Estudar sobre UI / UX
                    </Text>
                    <View style={styles.details}>
                        <MaterialIcons name="query-builder" style={styles.iconDetails} />
                        <Text style={styles.textDetails}>10 Março 2025</Text>
                    </View>
                    <View style={styles.details}>
                        <MaterialIcons name="check-circle-outline" style={styles.iconDetails} />
                        <Text style={styles.textDetails}>5/6 Atividades concluídas</Text>
                    </View>
                    <View style={styles.highStatusTag}>
                        <Text style={styles.textTag}>Alta</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <Text style={styles.titleCard}>
                        Estudar sobre UI / UX
                    </Text>
                    <View style={styles.details}>
                        <MaterialIcons name="query-builder" style={styles.iconDetails} />
                        <Text style={styles.textDetails}>10 Março 2025</Text>
                    </View>
                    <View style={styles.details}>
                        <MaterialIcons name="check-circle-outline" style={styles.iconDetails} />
                        <Text style={styles.textDetails}>5/6 Atividades concluídas</Text>
                    </View>
                    <View style={styles.highStatusTag}>
                        <Text style={styles.textTag}>Alta</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <Text style={styles.titleCard}>
                        Estudar sobre UI / UX
                    </Text>
                    <View style={styles.details}>
                        <MaterialIcons name="query-builder" style={styles.iconDetails} />
                        <Text style={styles.textDetails}>10 Março 2025</Text>
                    </View>
                    <View style={styles.details}>
                        <MaterialIcons name="check-circle-outline" style={styles.iconDetails} />
                        <Text style={styles.textDetails}>5/6 Atividades concluídas</Text>
                    </View>
                    <View style={styles.highStatusTag}>
                        <Text style={styles.textTag}>Alta</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <Text style={styles.titleCard}>
                        Estudar sobre UI / UX
                    </Text>
                    <View style={styles.details}>
                        <MaterialIcons name="query-builder" style={styles.iconDetails} />
                        <Text style={styles.textDetails}>10 Março 2025</Text>
                    </View>
                    <View style={styles.details}>
                        <MaterialIcons name="check-circle-outline" style={styles.iconDetails} />
                        <Text style={styles.textDetails}>5/6 Atividades concluídas</Text>
                    </View>
                    <View style={styles.highStatusTag}>
                        <Text style={styles.textTag}>Alta</Text>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>
                    Criar Tarefa
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: colors.black900,
        padding: 20
    },
    titleText: {
        color: colors.white,
        fontSize: 24,
        fontWeight: "600",
        lineHeight: 32,
        marginTop: 64,
        paddingBottom: 24
    },
    cards: {
        flex: 1,

    },
    card: {
        backgroundColor: colors.black600,
        height: 150,
        marginTop: 32,
        borderRadius: 8,
        padding: 20,
    },
    titleCard: {
        fontSize: 20,
        fontWeight: "600",
        color: colors.white
    },
    details: {
        color: colors.gray,
        marginTop: 8,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    iconDetails: {
        color: colors.gray,
        fontSize: 16
    },
    textDetails: {
        paddingLeft: 4,
        color: colors.gray,
    },
    highStatusTag: {
        marginTop: 12,
        backgroundColor: colors.red,
        width: 60,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    mediumStatusTag: {
        marginTop: 12,
        backgroundColor: colors.yellow600,
        width: 60,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    lowStatusTag: {
        marginTop: 12,
        backgroundColor: colors.green,
        width: 60,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    textTag: {
        color: colors.white,
        fontWeight: "600"
    },
    button: {
        position: "absolute",
        bottom: 40,
        left: 20,
        right: 20,
        height: 50,
        backgroundColor: colors.yellow200,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
        shadowRadius: 3,
        zIndex: 10
    },
    textButton: {
        color: colors.black900,
        fontWeight: "900",
        fontSize: 16
    }
});