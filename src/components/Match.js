import React from 'react';
import { 
	StyleSheet, 
	View, 
	Text,
	SafeAreaView,
	Image, 
} from 'react-native';

function Match(matchName, avatarFile) {
	return (
		<SafeAreaView style={styles.match}>
			<Image 
				style={styles.avatarStyle} 
				resizeMode='center'
				source={avatarFile}
			/>
			<Text style={styles.name}>{matchName}</Text>
			<Text></Text>
		</SafeAreaView>
		
	);
}

const styles = StyleSheet.create({
	match: {
		backgroundColor: '#fff',
		flex: 0.2,
		justifyContent: 'flex-start',
	},
	avatarStyle: {
		flex: 0.15,
		height: 50,
		width: 50,
		borderRadius: 25,
		marginLeft: 15,
		justifyContent: 'center',
	},
	name: {
		flex: 0.1,
		marginLeft: 15,
		fontWeight: 'bold',
		fontSize: '10',
		color: 'black',
	},
})



export default Match;