import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

function TodoCreate({onCreate, visible, onClose}) {
	const [text, setText] = useState("");
	const changeHandle = (txt) => {
		setText(txt)
	};
	const pressHandle = () => {
		// 2.pressHandle 이벤트 작동 시,
		const todo = {text, id:Date.now()};
		onCreate(todo); // 3. 상위에서 넘어온 onCreate로 todo를 넘긴다
		setText('');
	}
	return ( <Modal visible={visible} animationType="slide" 
					transparent={true}>
		<View style={styles.inpArea}>
			<View>
				<TextInput placeholder='해야할 일' style={styles.writeInp}
					keyboardType='default' 
					onChangeText={changeHandle}
					value={text}
				/>
			</View>
			<View style={styles.btnWrap}>
				<Button title="취소" onPress={onClose}/>
				<Button title="추가" color="tomato" onPress={pressHandle}/>
			</View>
		</View>
	</Modal> );
}
const styles = StyleSheet.create({
	inpArea: {
		height: '30%',
		borderTopLeftRadius:32,
		borderTopRightRadius:32,
		justifyContent: 'center',
		marginTop: 'auto',
		padding: 12,
		backgroundColor: '#fff',
	},
	writeInp: {
		marginRight: 8,
		borderBottomColor: '#ddd',
		borderBottomWidth: 1,
	},
	btnWrap: {
		flexDirection: 'row',
		justifyContent: "flex-end",
		marginTop: 8,
	}
})
export default TodoCreate;