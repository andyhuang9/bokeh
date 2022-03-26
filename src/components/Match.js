import React from 'react';
import { 
	StyleSheet, 
	View, 
	Text,
	SafeAreaView,
	Image, 
	TouchableHighlight,
} from 'react-native';

function Match(props) {
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
			<Text></Text>
		</SafeAreaView>
		
	);
}

const styles = StyleSheet.create({
	match: {
		backgroundColor: 'black',
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
		color: 'white',
		alignSelf:'center',
		// textShadowColor: "rgba(0, 0, 0, 0.75)",
    	// textShadowOffset: { width: -1, height: 1 },
    	// textShadowRadius: 15,
	},
})

export default Match;