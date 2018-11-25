import React, { Component } from 'react'
import { View, Text, Button } from 'react-native';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <View>
                <Text>Settings</Text>
                <Button title='到用户详情' 
                    onPress={()=>this.props.navigation.navigate('UserDetail')} />
            </View>
        );
    }
}
 
export default Settings;