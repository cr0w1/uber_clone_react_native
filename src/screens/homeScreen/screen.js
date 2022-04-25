import React, { useState, useEffect , useRef } from 'react'
import { Text, View , ScrollView, Image} from 'react-native'
import { styles } from './styles';
import { Avatar, BottomSheet, Button, Chip, colors, Divider, Icon } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar';

import MapView , { PROVIDER_GOOGLE } from 'react-native-maps'
import { mapStyle } from '../../global/mapStyle'; 
import { carsAround } from '../../global/data'; 
import * as Location from 'expo-location';
import { FlatList } from 'react-native-web';

const HomeScreen = () => {
  const [ latlng , setLating ] = useState({});

  const checkPermission = async () => {
    const hasPermission = await Location.requestForegroundPermissionsAsync();
    if(hasPermission.status === 'granted') {
      const permission = await askPermission();
      return permission;
    }
    return true;
  }

  const askPermission = async () => {
    const permission = await Location.requestForegroundPermissionsAsync();
    return permission.status === 'granted';
  }

  const getLocation = async () => {
    try{
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if(!granted) return;
      const {
        coords:{ latitude , longitude },
      } = await Location.getCurrentPositionAsync();
      setLating({ latitude : latitude })
    }catch( err ) {

    }
  }

  const _map = useRef(1);

  useEffect(() => {
    checkPermission();
    getLocation();
  },[])

  return (
    <View  style={styles.container}>
      <View style={styles.header}>
        <View style={styles.icon1}>
          <Avatar
            size={35}
            rounded
            title="Rd"
            containerStyle={{ backgroundColor: 'purple' }}
          />
        </View>
      </View>
      <ScrollView bounce={false}>
        <View style={styles.home}>
          <View style={styles.view1}>
            <View style={{width: '100%' , marginTop: 5, marginBottom: 15}}>
              <Text style={{color: 'white' , fontSize: 18}}>Deseja viagens melhor?</Text>
            </View>
            <View style={{ width: '100%' }}>
              <Text style={{color: 'white' }}>
                Enviar localização
                <Icon 
                  type='material-icons'
                  name='east'
                  color={colors.black}
                  size={15}
                />
              </Text>
            </View>
          </View>

          <View style={styles.view2}>
            <View style={styles.box1}>
              <View style={{width: '100%' ,flexDirection: 'row',justifyContent: 'flex-end' }}>
                <Image 
                  source={ require('../../../assets/ride.png') }
                  style={{ width: 90 , height: 50}}
                  resizeMode="cover"
                />
              </View>
              <Text style={{ fontWeight: 'bold' , top: -8}}>Viagem</Text>
            </View>
            <View style={styles.box2}>
              <View style={{  width: '100%' ,flexDirection: 'row',justifyContent: 'flex-end' }}>
                <Image 
                  source={ require('../../../assets/package.png') }
                  style={{ width: 70 , height: 50}}
                />
              </View>
              <Text style={{ fontWeight: 'bold' , top: -8}}>Entrega</Text>
            </View>
          </View>

          <View style={styles.view3}>
            <View style={{ width: 200 , paddingLeft: 15}}>
              <Text style={{ fontWeight: 'bold'}}>Inserir local de partida</Text>
            </View>
            <View>
              <Divider orientation="vertical" width={1} height={'80%'} /> 
            </View>
            <View style={{ padding: 15 }}>
              <Chip
                onclick={()=>{}}
                containerStyle={styles.button_now}
                ViewComponent={()=>{
                  return (
                    <View  style={{ flexDirection: 'row' , alignItems: 'center' , justifyContent: 'center'}}>
                      <Icon 
                        type='material-community'
                        name='clock-time-three'
                        color={colors.black}
                        size={22}
                      />
                      <Text style={{ marginLeft: 5, marginRight: 5 ,fontWeight: 'bold'}}>Agora</Text>
                      <Icon 
                        type='material-icons'
                        name='keyboard-arrow-down'
                        color={colors.black}
                        size={22}
                      />
                    </View>
                  )
                }}
              />
            </View>
          </View>

          <View style={{...styles.view5}}>
            <View style={styles.view6}>
              <View style={styles.view7}>
                <Icon 
                  type='material-community'
                  name='map-marker'
                  color={colors.black}
                  size={22}
                />
              </View>
              <View>
                <Text style={{fontSize:18, color: colors.black}}>32 Olivia Rd</Text>
                <Text style={{color: colors.grey3}}> Klipfontein 83-Ir, Boksburg</Text>
              </View>
            </View>
            <View>
              <Icon 
                type='material-community'
                name='chevron-right'
                color={colors.black}
                size={25}
              />
            </View>
          </View>
          <View style={{...styles.view5}}>
            <View style={styles.view6}>
              <View style={styles.view7}>
                <Icon 
                  type='material-community'
                  name='map-marker'
                  color={colors.black}
                  size={22}
                />
              </View>
              <View>
                <Text style={{fontSize:18, color: colors.black}}>32 Olivia Rd</Text>
                <Text style={{color: colors.grey3}}> Klipfontein 83-Ir, Boksburg</Text>
              </View>
            </View>
            <View>
              <Icon 
                type='material-community'
                name='chevron-right'
                color={colors.black}
                size={25}
              />
            </View>
          </View>
          <View style={{...styles.view5,borderBottomWidth:0}}>
            <View style={styles.view6}>
              <View style={styles.view7}>
                <Icon 
                  type='material-community'
                  name='map-marker'
                  color={colors.black}
                  size={22}
                />
              </View>
              <View>
                <Text style={{fontSize:18, color: colors.black}}>32 Olivia Rd</Text>
                <Text style={{color: colors.grey3}}> Klipfontein 83-Ir, Boksburg</Text>
              </View>
            </View>
            <View>
              <Icon 
                type='material-community'
                name='chevron-right'
                color={colors.black}
                size={25}
              />
            </View>
          </View>
        </View>
        <Text style={styles.text4}> Perto de você</Text>
        <View style={{borderRadius: 40,alignItems: 'center',justifyContent: 'center'}}>
          <MapView
            ref = {_map}
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            customMapStyle={mapStyle}
            zoomEnabled={false}
            scrollEnabled={false}
            showsMyLocationButton={false}
            showsUserLocation = { true }
            followsUserLocation = { true }
            region = {{ ...carsAround[4],latitudeDelta: 0.008, longitudeDelta: 0.008 }}
          >
            { carsAround.map((item , index) => 
              <MapView.Marker coordinate = { item } key = { index.toString() }>
                <Image 
                  source={ require('../../../assets/carMarker.png') }
                  style={ styles.carsAround }
                  resizeMode = "cover"
                />
              </MapView.Marker>
              )
            }
          </MapView>
        </View>
      </ScrollView>
      <StatusBar style='light' backgroundColor='#131313' translucent={true}/>
    </View>
  )
}

export default HomeScreen;
