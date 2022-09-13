import { Pressable, StyleSheet, Text, View } from "react-native";

function TodoItem({data, onDelete}) {
    return (<Pressable onPress={() => onDelete(data.item)}>
    {/* View component는 이벤트 처리가 되지 않는다 */}
    <View style={styles.todoItem}>
        <Text style={{fontSize: 16, color: '#999'}}>{data.item.text}</Text>
    </View>
</Pressable> );
}
const styles = StyleSheet.create({
	todoItem: {
		marginTop: 12,
		padding: 8,
		borderRadius: 4,
		backgroundColor: '#fff',
	}
});
export default TodoItem;