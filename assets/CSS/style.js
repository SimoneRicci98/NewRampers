import { StyleSheet } from "react-native";

const styles = (props) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingLeft: 5
  },
  hello: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 15,
    marginBottom: 20
  },
  logo: {
    width: 108,
    height: 100,
    marginTop: 10
  },
  menuIcon: {
    width: 40,
    height: 40,
    marginTop: 40
  },
  currentTab: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  animatedView: {
    flexGrow: 1,
    backgroundColor: '#0077b6',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    padding: 10
  },
  tabButton: {
    flexDirection: "row",
    alignItems: 'center',
    padding: 10,
    borderRadius: 10
  },
  //#region cartolina
  giornoCartolina: {
    margin: 5,
    borderRadius: 10,
    padding: 10,
    borderColor: 'black',
  },
  WhiteText: {
    justifyContent: 'center',
    flex: 1,
    margin: 5,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },
  meseMostrato: {
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: 5,
    color: 'black',
    fontSize: 25,
    backgroundColor: 'transparent'
  },
  descrizioneCartolina: {
    color: 'white',
    fontWeight: 'bold',
    margin: 5
  }
  //#endregion
});


export default styles;