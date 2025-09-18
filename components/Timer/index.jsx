import { StyleSheet, Text } from "react-native";

export default function Timer({totalSeconds}){
    const date = new Date(totalSeconds*1000);

    const options = {
        minute: "2-digit", second: "2-digit"
    };

    const timeFormat = date.toLocaleTimeString("pt-BR", options);
    return <Text style={styles.timer}>{timeFormat}</Text>;
}

const styles = StyleSheet.create({
    timer:{
        fontSize: 54,
        color: "#FFF",
        fontWeight: "bold",
        textAlign: "center",
    },
});











