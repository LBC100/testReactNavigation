import React, { Component } from 'react'
import { View, Text, Button } from 'react-native';

class UserDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <View>
                <Text>UserDetail</Text>
                <Button title='到设置页' 
                    onPress={()=>this.props.navigation.navigate('Settings')} />
            </View>
        );
    }
}
 
export default UserDetail;