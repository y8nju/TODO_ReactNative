import { StatusBar } from 'expo-status-bar';
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Welcome✨</Text>
			<Image source={require('./assets/favicon.png')} />
			<TextInput placeholder='wirte' />
			<Button title="Click me"
				color="tomato"
			/>
			<StatusBar style="auto" />
			<ScrollView>
				<Text style={styles.inform}>
				리액트 네이티브(React Native)는 페이스북이 개발한 오픈 소스 모바일 애플리케이션 프레임워크이다.[2] 안드로이드[3], iOS, 웹[4], UWP[5]용 애플리케이션을 개발하기 위해 사용되며, 개발자들이 네이티브 플랫폼 기능과 더불어 리액트를 사용할 수 있게 한다[6].
				완전하지 않은 Qt 포팅 또한 존재한다.[7]
				리액트 네이티브의 동작 원리는 리액트 네이티브가 가상 DOM을 통해 DOM을 조작하지 않는다는 점을 제외하고는 리액트와 실질적으로 동일하다. 직렬화, 비동기, 일괄 처리 브리지를 통해 네이티브 플랫폼과 통신하며 종단 장치에 직접(개발자가 작성한 자바스크립트를 해석하는) 백그라운드 프로세스로 실행된다.[13][14][15]
				리액트 구성 요소들은 리액트의 선언형 UI 패러다임과 자바스크립트를 통해 기존 네이티브 코드를 감싸고 네이티브 API와 통신한다. 이렇게 함으로써 새 개발자 팀을 위한 네이티브 앱 개발을 가능케 하며 기존 네이티브 팀들이 훨씬 더 빠르게 작업할 수 있게 한다.[16]
				리액트 네이티브는 HTML이나 CSS를 사용하지 않는다. 그 대신 자바스크립트 쓰레드로부터의 메시지를 사용하여 네이티브 뷰를 조작한다. 리액트 네이티브는 개발자들이 안드로이드용 자바/코틀린, iOS용 오브젝티브-C/스위프트와 같은 언어로 작성한 네이티브 코드와 인터페이스가 가능하도록 브릿지(Bridge)를 제공하므로 더 많은 유연성을 제공한다.[17]
				</Text>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'navy',
	},
	inform: {
		fontSize: '10px'
	}
});