import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import logo from '../assets/ramsc_logo_256.png';
import { Icon, Chip } from 'react-native-elements';
import styles from '../assets/CSS/style';


export default function Menu( {navigation} ){
    const [currentTab, setCurrentTab] = useState("Menu");
    const [showMenu, setShowMenu] = useState(false);
   
    //#region  ANIMAZIONI
    const offsetValue = useRef(new Animated.Value(0)).current;
    //la scala va settata a 1 inizialmente
    const scaleValue = useRef(new Animated.Value(1)).current;
    //#endregion
  
  
    return (
        <SafeAreaView style={styles().container}>
          {/*inizio menu  */}
          <View>
            <TouchableOpacity onPress={()=>{
              setCurrentTab("Menu");
              openCloseMenu(offsetValue, scaleValue, setShowMenu, showMenu);
            }}>
              <Image source={logo} style={styles().logo}/>
              <Text style={styles().hello}>Ciao{"\n"}SIMONE</Text>
            </TouchableOpacity>
            {tabButton(navigation, currentTab, setCurrentTab, "RamBolla", "view-agenda", offsetValue, scaleValue, setShowMenu, showMenu)}
            {tabButton(navigation, currentTab, setCurrentTab, "CartolinaCalendario", "view-agenda", offsetValue, scaleValue, setShowMenu, showMenu)}
            {tabButton(navigation, currentTab, setCurrentTab, "Giustificazioni", "description", offsetValue, scaleValue, setShowMenu, showMenu)}
            {tabButton(navigation, currentTab, setCurrentTab, "Note Spese", "storefront", offsetValue, scaleValue, setShowMenu, showMenu)}
          </View>
          {/*#fine menu nascosto*/}
          
  
  
          {/*inizio icona hamburger e pagina corrente*/}
          <Animated.View style={[styles().animatedView, { transform:[ {scale: scaleValue}, {translateX: offsetValue} ] }]}>
            <TouchableOpacity onPress={()=>{openCloseMenu(offsetValue, scaleValue, setShowMenu, showMenu);}}>
              <Icon style={styles().menuIcon} size={40} name="menu"></Icon>
            </TouchableOpacity>
          <Chip/>   
          </Animated.View>
          {/*fine icona hamburger e pagina corrente*/}
  
          <StatusBar style="auto" />
        </SafeAreaView>
    );
  }
  
  const tabButton = (navigation, currentTab, setCurrentTab, title, icon, offsetValue, scaleValue, setShowMenu, showMenu) =>{
    return(
      <View>
        <TouchableOpacity onPress={()=>{
          setCurrentTab(title);
          openCloseMenu(offsetValue, scaleValue, setShowMenu, showMenu);
          navigation.navigate(title);
        }}>
        <View style={[styles().tabButton, {
          backgroundColor: currentTab == title ? 'white' : 'transparent'
        }]}>
          <Icon name={icon} type='material' color={currentTab == title ? '#0077b6' : 'black'}/>
          <Text style={{fontSize: 20, color:currentTab == title ? '#0077b6' : 'black'}}> {title}</Text>
        </View>
        </TouchableOpacity>
      </View>
    );
  }
  
  const openCloseMenu = (offsetValue, scaleValue, setShowMenu, showMenu) =>{
    Animated.timing(scaleValue, {toValue: showMenu ? 1 : 0.88, duration: 300, useNativeDriver: true}).start();
    Animated.timing(offsetValue, {toValue: showMenu ? 0 : 220, duration: 300, useNativeDriver: true}).start();
    setShowMenu(!showMenu);
  }