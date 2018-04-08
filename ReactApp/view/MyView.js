import React, {Component} from 'react';
import {
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    View,
    Text,
    TextInput,
    Image,
    AlertIOS,
    ToastAndroid
} from 'react-native';
let {width, height} = Dimensions.get('window');
export default class MyView extends Component{
    render(){
        const { navigate } = this.props.navigation;
        return(
           <View style={styles.container}>
               <Image source={require('../img/wei.jpg')} style={styles.headerStyle}/>
               <View style={styles.inputLayout}>
                   <Text style={styles.userName}>用户名:</Text>
                   <TextInput placeholder='请输入用户名'style={styles.inputStyle} clearButtonMode="always" underlineColorAndroid="transparent"/>
               </View>
               <View style={styles.passwordLayout}>
                   <Text style={styles.userName}>密码:&nbsp;&nbsp;&nbsp;&nbsp;</Text>
                   <TextInput placeholder='请输入密码' clearButtonMode="always" secureTextEntry={true} password={true}
                           underlineColorAndroid="transparent" style={styles.inputStyle}/>
               </View>

               <TouchableOpacity
                    activeOpacity={0.5}
                    // onPress={() => this.renderClick()}
                    onPress={() => navigate('Main', { user: 'Lucy' })} 
                    >
                    <View style={styles.loginBtnStyle}>
                        <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>登录</Text>
                  </View>
              </TouchableOpacity>
               
           </View>
        );
    }
    // renderClick() {
    //     navigate('Main', { user: 'Lucy' });
    //     ToastAndroid.showWithGravity('点我啊', 1000, ToastAndroid.CENTER);
    // }
}
const styles=StyleSheet.create({
    container: {
        width:width,
        height:height,
        flex:1,
        backgroundColor: '#F4F4F4',
        alignItems: 'center',
    },
    inputLayout:{
        width:width*0.7,
        // height:height,
        backgroundColor: 'white',
        borderRadius: 8,
        // backgroundColor: '#ffff00',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop:10
    },
    passwordLayout:{
        width:width*0.7,
        // height:height,
        backgroundColor: 'white',
        borderRadius: 8,
        // backgroundColor: '#ffff00',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop:30,
    },
    userName:{
        marginLeft:20,
        color: 'black',
        fontWeight: '600'
    },
    headerStyle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'white',
        marginTop: height/5,
        marginBottom: 20
    },
    inputStyle: {
        // textAlign: 'center',
        width: width * 0.5,
        height: 40,
        marginTop: 1,
        marginLeft:13,
        backgroundColor: 'white',
        borderRadius: 8,
        alignSelf: 'center',
        color: 'black',
        fontWeight: '600'
    },
    loginBtnStyle: {
        width: width * 0.8,
        height: 40,
        marginTop: 50,
        backgroundColor: '#73B5F9',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
})