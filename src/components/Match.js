import React from 'react';
import { 
	StyleSheet, 
	View, 
	Text,
	SafeAreaView,
	Image, 
	TouchableHighlight,
} from 'react-native';
import { circle } from 'react-native/Libraries/Animated/Easing';

function Match(props) {
	if (props.notifBool) {
		return (
			<SafeAreaView style={styles.match}>
				<TouchableHighlight style={styles.avatarContainer}>
				<Image 
					style={styles.avatarStyle} 
					resizeMode='center'
					source={props.avatarFile}
				/>
				</TouchableHighlight>
				<Text style={styles.name}>{props.matchName}</Text>
				<TouchableHighlight style={styles.circle}><View/></TouchableHighlight>
			</SafeAreaView>
		);
	} else {
		return (
			<SafeAreaView style={styles.match}>
				<TouchableHighlight style={styles.avatarContainer}>
				<Image 
					style={styles.avatarStyle} 
					resizeMode='center'
					source={props.avatarFile}
				/>
				</TouchableHighlight>
				<Text style={[styles.name, {fontWeight: 'normal'}]}>{props.matchName}</Text>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	match: {
		backgroundColor: 'white',
		flex: 0.13,
		justifyContent: 'flex-start',
		flexDirection: 'row',
		width: '100%',
	},
	avatarContainer: {
		flex: 0.15,
		width: 50,
		height: 50,
		borderRadius: 25,
		marginLeft: 15,
		overflow: 'hidden',
		alignSelf: 'center',
	},
	avatarStyle: {
		flex: 1,
		width: 100,
		height: 100,
		borderRadius: 50,
		alignSelf: 'center',
		resizeMode: 'contain',
	},
	name: {
		flex: 0.5,
		marginLeft: 20,
		fontWeight: 'bold',
		fontSize: 15,
		color: 'black',
		alignSelf:'center',
	},
	// message: {
	// 	flex: 0.5,
	// 	marginLeft: 20,
	// 	fontSize: 15,
	// 	color: 'grey',
	// 	alignSelf:'center',
	// },
	circle: {
		height: 10,
		width: 10,
		borderRadius: 5,
		alignSelf: 'center',
		position: 'absolute', 
		right: 20,
		backgroundColor: 'orange',
	},
})

export default Match;