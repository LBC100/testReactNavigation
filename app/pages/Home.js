import React, { Component } from 'react'
import { View, Text, Button, ToastAndroid, Image } from 'react-native';
import HandleBack from '../components/HandleBack'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    _onBack = () => {
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            //最近2秒内按过back键，可以退出应用。
            BackHandler.exitApp();
            return false;
        }
        ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
        this.lastBackPressed = Date.now();
        return true
    }
    render() { 
        return (
            <HandleBack _onBack={this._onBack}>
                <View>
                    <Text>home</Text>
                    <Button title='到用户详情1' 
                        onPress={()=>this.props.navigation.navigate('UserDetail')} />
                        
                    <Button title='到设置页' 
                        onPress={()=>this.props.navigation.navigate('Settings')} />
                </View>
            </HandleBack>
        );
    }
}
 
export default Home;