import React, { Component } from 'react'
import { View, Text, Button } from 'react-native';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <View>
                <Text>home</Text>
                <Button title='到用户详情' 
                    onPress={()=>this.props.navigation.navigate('UserDetail')} />

                <Button title='到设置页' 
                    onPress={()=>this.props.navigation.navigate('Settings')} />
            </View>
        );
    }
}
 
export default Home;