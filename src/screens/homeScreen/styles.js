import { StyleSheet, Dimensions } from 'react-native'
import { colors, parameters } from '../../global/styles';

const SCREEN_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: colors.white,
    paddingBottom: 30,
    paddingTop: parameters.statusBarHeight
  },
  header:{
    backgroundColor: 'green',
    height: parameters.headerHeight,
    alignItems: 'flex-end',
    marginBottom: 20
  },
  
  home:{
    backgroundColor: colors.white,
    marginTop: 10,
  },

  view1:{
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    paddingTop: 30,
    paddingLeft: 25,
    backgroundColor: '#189A5E',
    height: 130,
    borderRadius: 14
  },

  view2:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
  },

  box1:{
    width: 175,
    height: 90,
    backgroundColor: colors.grey10,
    borderRadius: 14,
    padding: 15
  },

  box2:{
    width: 175,
    height: 90,
    backgroundColor: colors.grey10,
    borderRadius: 14,
    padding: 15
  },

  view3:{
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    height: 55,
    backgroundColor: colors.grey10,
    alignItems: 'center',
    justifyContent:'space-evenly',
    marginHorizontal: 15,
  },

  button_now:{
    width: 100 ,
    height: 30 ,
    padding: 5 ,
    borderRadius: 15 ,
    backgroundColor: '#fdd333'
  },

  image1:{
    height: 100,
    width: 100
  },

  image2:{
    height:60,
    width:60,
    borderRadius: 30
  },


  text1:{
    color: colors.white,
    fontSize:21,
    paddingBottom:20,
    paddingTop:20
  },

  text2: {
    color:colors.white,
    fontSize: 16,
  },


  button1: {
    height: 40,
    width: 150,
    backgroundColor: colors.black,
    borderRadius:20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },

  button1Text:{
    color: colors.white,
    fontSize: 17,
    marginTop: -2,
  },
  card: {
    alignItems: 'center',
    margin: SCREEN_WIDTH/22
  },

  title:{
    color: colors.black,
    fontSize: 16
  },

  text3:{
    marginLeft:15,
    fontSize: 20,
    color: colors.black
  },

  view4: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight:15,
    backgroundColor: 'white',
    paddingHorizontal:10,
    paddingVertical: 2,
    borderRadius:20
  },

  view5:{
    flexDirection:"row",
    alignItems:"center",
    // backgroundColor:"white",
    paddingVertical:25,
    justifyContent:"space-between",
    marginHorizontal:15,
    borderBottomColor:colors.grey4,
    borderBottomWidth:1,
    flex:1
  },
    
  view6:{
    alignItems:"center",
    flex:5,
    flexDirection:"row"
  },

  view7:{
    backgroundColor:colors.grey6,
    height:40,
    width:40,
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center",
    marginRight:20
  },

  map:{
    height:150,
    width: SCREEN_WIDTH*0.92,
    marginVertical: 0,
  },

  text4: {
    fontSize: 20,
    color: colors.black,
    marginLeft: 20,
    marginBottom: 20,
  },
  icon1: {
    marginLeft: 10,
    marginTop: 15,
    marginRight: 15,
  },
  view8: {
    flex: 4,
    marginTop: -25,
  },
  carsAround: {
    width: 28,
    height: 14,
  },

  location: {
    width: 16,
    height: 16,
    borderRadius:8,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center'
  },

  view9:{
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'white'
  }

})