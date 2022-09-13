import { StatusBar } from 'expo-status-bar';
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
	return (<View style={{flex: 1}}>
		<View style={styles.container}>
			<StatusBar />
			<Button title="one" />
			<Button title="two" />
			<Button title="three" />
		</View>
		<View style={styles.subContainer}>
			<StatusBar />
			<Button title="one" />
		</View>
		</View>);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
		backgroundColor: '#f1f1f1'
	},
	subContainer: {
		flex: 1,
		justifyContent:'center'
	}
});