import { View, Text, ScrollView, TouchableOpacity, Button, Pressable, Alert, InteractionManager } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from '../assets/CSS/style';
import { LocaleConfig, Agenda } from 'react-native-calendars';
import { LinearGradient } from 'expo-linear-gradient';
import Line from '../components/Line';

const CartolinaCalendario = ({ navigation }) => {

  LocaleConfig.locales['it'] = {
    monthNames: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
    monthNamesShort: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Sett', 'Ott', 'Nov', 'Dic'],
    dayNames: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
    dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'],
    today: 'Oggi'
  };
  LocaleConfig.defaultLocale = 'it';

  
  const da_server = 
  [
    {
      data : "2022-01-05",
      numero: 1,
      giorno: 'Lunedì',
      errore: 'si',
      orari: [{ entrata: '7.24', uscita: '12.09' }, { entrata: '13.45', uscita: '16.34' }],
      descrizione: 'gg ok',
      oreLavorate: '8',
      oreOrdinarie: '8'
    },{
      data : "2022-01-06",
      numero: 1,
      giorno: 'Lunedì',
      errore: 'si',
      orari: [{ entrata: '7.24', uscita: '12.09' }, { entrata: '13.45', uscita: '16.34' }],
      descrizione: 'gg ok',
      oreLavorate: '8',
      oreOrdinarie: '8'
    },
    {
      data : "2022-01-07",
      numero: 1,
      giorno: 'Lunedì',
      errore: 'si',
      orari: [{ entrata: '7.24', uscita: '12.09' }, { entrata: '13.45', uscita: '16.34' }],
      descrizione: 'gg ok',
      oreLavorate: '8',
      oreOrdinarie: '8'
    },
    {
      data : "2022-01-08",
      numero: 1,
      giorno: 'Lunedì',
      errore: 'si',
      orari: [{ entrata: '7.24', uscita: '12.09' }, { entrata: '13.45', uscita: '16.34' }],
      descrizione: 'gg ok',
      oreLavorate: '8',
      oreOrdinarie: '8'
    },
    {
      data : "2022-01-13",
      numero: 1,
      giorno: 'Lunedì',
      errore: 'si',
      orari: [{ entrata: '7.24', uscita: '12.09' }, { entrata: '13.45', uscita: '16.34' }],
      descrizione: 'gg ok',
      oreLavorate: '8',
      oreOrdinarie: '8'
    }
  ]

  /*const cartolina = {
    [x]: [{
      data : "2021-11-19",
      numero: 1,
      giorno: 'Lunedì',
      errore: 'si',
      orari: [{ entrata: '7.24', uscita: '12.09' }, { entrata: '13.45', uscita: '16.34' }],
      descrizione: 'gg ok',
      oreLavorate: '8',
      oreOrdinarie: '8'
    }],
    '2021-11-20': [{
      id:1,
      numero: 1,
      giorno: 'Lunedì',
      errore: 'si',
      orari: [{ entrata: '7.24', uscita: '12.09' }, { entrata: '13.45', uscita: '16.34' }],
      descrizione: 'gg ok',
      oreLavorate: '8',
      oreOrdinarie: '8'
    }],
    '2021-11-21': [{
      id:2,
      numero: 1,
      giorno: 'Lunedì',
      errore: 'si',
      orari: [{ entrata: '7.24', uscita: '12.09' }, { entrata: '13.45', uscita: '16.34' }],
      descrizione: 'gg ok',
      oreLavorate: '8',
      oreOrdinarie: '8'
    }],
    '2021-11-22': [{
      id:3,
      numero: 1,
      giorno: 'Lunedì',
      errore: 'no',
      orari: [{ entrata: '7.24', uscita: '12.09' }, { entrata: '13.45', uscita: '16.34' }],
      descrizione: 'gg ok',
      oreLavorate: '8',
      oreOrdinarie: '8'
    }],
    '2021-11-23': [{
      id:4,
      numero: 1,
      giorno: 'Lunedì',
      errore: 'si',
      orari: [{ entrata: '7.24', uscita: '12.09' }, { entrata: '13.45', uscita: '16.34' }],
      descrizione: 'gg ok',
      oreLavorate: '8',
      oreOrdinarie: '8'
    }],
    '2021-11-24': [{
      id:5,
      numero: 1,
      giorno: 'Lunedì',
      errore: 'no',
      orari: [{ entrata: '7.24', uscita: '12.09' }, { entrata: '13.45', uscita: '16.34' }],
      descrizione: 'gg ok',
      oreLavorate: '8',
      oreOrdinarie: '8'
    }],
    '2021-11-25': [],
    '2021-11-26': [{
      id:6,
      numero: 1,
      giorno: 'Lunedì',
      errore: 'no',
      orari: [{ entrata: '7.24', uscita: '12.09' }, { entrata: '13.45', uscita: '16.34' }],
      descrizione: 'gg ok',
      oreLavorate: '8',
      oreOrdinarie: '8'
    }],
    '2021-11-27': [{
      id:6,
      numero: 1,
      giorno: 'Lunedì',
      errore: 'no',
      orari: [{ entrata: '7.24', uscita: '12.09' }, { entrata: '13.45', uscita: '16.34' }],
      descrizione: 'gg ok',
      oreLavorate: '8',
      oreOrdinarie: '8'
    }]
  };*/


  let cartolina = {} ;

  for(i in da_server)
  {
    // cartolina è uguale alla copia di se stessa più l'elemento formato da [da_server[i].data] : [{...da_server[i]}]
    cartolina = {...cartolina, [da_server[i].data] : [{...da_server[i]}]}
  }

  let giorniColorati = {};

  for (const key in cartolina) {
    let dayColor;
    //key sono i giorni -> '2021-11-10', '2021-11-11', ecc
    //i giorni sono reppresentati come vettori, per questo serve [0].errore
    if(cartolina[key][0])
      switch(cartolina[key][0].errore){
        case 'si': //giorno con errore
          dayColor='#dc3545'; 
          break;
        case 'no': //gg ok
          dayColor='#218838';
          break;
        default: //giorno corrente
          dayColor='orange';
          break;
      }
    giorniColorati[key] = { startingDay: true, endingDay: true, color: dayColor, textColor:'white'}
  }



  return (
    <Agenda
      pastScrollRange={2}
      futureScrollRange={0}
      // The list of items that have to be displayed in agenda. If you want to render item as empty date
      // the value of date key has to be an empty array []. If there exists no value for date key it is
      // considered that the date in question is not yet loaded
      items={cartolina}
      // Specify how each item should be rendered in agenda
      renderItem={(item, firstItemInDay) => { return (<Day item={item} navigation={navigation} />); }}
      renderEmptyDate={() => {return (<View />);}}
      markedDates={giorniColorati}
      markingType={'period'}
    />
  );
}

const Day = (props) => {
  let item = props.item;
  let navigation = props.navigation;
  const pressed = () => {
    const dataGiust = item.data;
    navigation.navigate('Giustificazioni', {dataGiust});
  }

  return (
    <LinearGradient
      colors={item.errore === 'no' ? ['#00ab40', '#00c301', '#4ded30'] : ['#c12127', '#ff4b01', '#fb8817']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles().giornoCartolina]}>
      <TouchableOpacity onPress={() => pressed()}>
        <Descrizione currentDay={item} />
        <Line />
        <Conteggi currentDay={item} />
      </TouchableOpacity>
    </LinearGradient>
  );
}

const Descrizione = (props) => {
  const currentDay = props.currentDay;
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <Text style={styles().descrizioneCartolina}>{currentDay.giorno} {currentDay.numero}</Text>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Text style={[styles().WhiteText]}>Entrata</Text>
        <Text style={[styles().WhiteText]}>Uscita</Text>
      </View>
      <EntrateUscite orari={currentDay.orari} />
    </View>
  )
}

const EntrateUscite = (props) => {
  const orari = props.orari;
  return (
    orari.map((currentDay, index) => (
      <View style={{ flex: 1, flexDirection: 'row' }} key={index}>
        <Text style={[styles().WhiteText]}>{currentDay.entrata}</Text>
        <Text style={[styles().WhiteText]}>{currentDay.uscita}</Text>
      </View>
    )));
}

const Conteggi = (props) => {
  const currentDay = props.currentDay;
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Text style={[styles().WhiteText]}>Ore lavorate</Text>
        <Text style={[styles().WhiteText]}>{currentDay.oreLavorate}</Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Text style={[styles().WhiteText]}>Ore ordinarie</Text>
        <Text style={[styles().WhiteText]}>{currentDay.oreOrdinarie}</Text>
      </View>
      <Text style={styles().descrizioneCartolina}>{currentDay.descrizione}</Text>
    </View>
  )
}
export default CartolinaCalendario;