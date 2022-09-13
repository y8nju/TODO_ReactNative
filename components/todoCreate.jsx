import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

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
				onRequestClose={() => onClose()}
				transparent={true}>
		<TouchableOpacity onPress={() => onClose()} style={{flex: 1}}>
		</TouchableOpacity>
		<View style={styles.inpArea}>
			<View>
				<TextInput placeholder='해야할 일' style={styles.writeInp}
					keyboardType='default' 
					onChangeText={changeHandle}
					value={text}
				/>
			</View>
			<View style={styles.btnWrap}>
				<View style={{marginRight: 6}}>
					<Button title="취소" color="#dbdbdb" onPress={onClose}/>
				</View>
				<View>
					<Button title="추가" color="#616161" onPress={pressHandle}/>
				</View>
			</View>
		</View>
	</Modal> );
}
const styles = StyleSheet.create({
	inpArea: {
		height: 180,
		borderTopLeftRadius:32,
		borderTopRightRadius:32,
		justifyContent: 'center',
		// marginTop: 'auto',
		padding: 20,
		backgroundColor: '#fff',
	},
	writeInp: {
		fontSize: 16,
		marginRight: 8,
		borderBottomColor: '#dbdbdb',
		borderBottomWidth: 1,
	},
	btnWrap: {
		flexDirection: 'row',
		justifyContent: "flex-end",
		marginTop: 20,
	}
})
export default TodoCreate;