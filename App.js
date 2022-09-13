import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { Alert, Button, FlatList, Image, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import TodoCreate from './components/todoCreate';
import TodoItem from './components/todoItem';

export default function App() {
	const [todo, setTodo] = useState("");
	const [todoList, setTodoList] = useState([]);
	const [modal, setModal] = useState(false);
	const createHandle = (todo) => {
		// 4. TodoCreate에게서 넘어온 todo를 받아서
		// 상태 업데이트를 할 때, 기존의 상태를 활용하는 경우 직접 제어를 하게 되는 경우
		// 상태 제어가 비동기적으로 일어나다 보니, 원하는 결과가 나오지 않을 가능성이 존재
		// setTodoList([...todoList, {text: todo, id: Date.now()}]);
		setTodoList((curr) => {
			return [...curr, todo];
			// 5. setTodoList 변경한다
		})
		setTodo("");
		setModal(false);
	}
	const deleteHandle = (todo) => {
		Alert.alert(
			todo.text,
			"삭제하시겠습니까?",
			[
				{
				text: "취소",
				style: "cancel"
				},
				{ text: "삭제", 
					onPress: () => setTodoList(curr => {
						return curr.filter((e) => {return e.id !== todo.id});
					})
				}
			]
			);	
	}
	const modalCloseHandle = () => {
		setModal(false);
	}
	return (
		<View style={styles.root}>
			<Button title="할 일" onPress={()=> setModal(true)} />
			<TodoCreate onCreate={createHandle} visible={modal} onClose={modalCloseHandle} />	
			{/* 1. TodoCreate에게 onCreate로 createHandle을 보내준다 */}
			<FlatList data={todoList} renderItem={(one)=> {
				return (<TodoItem data={one} onDelete={deleteHandle}/>)
			}} />
		</View>);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		paddingHorizontal: 16,
		paddingTop: 48,
		backgroundColor: '#f1f1f1',
	},
});