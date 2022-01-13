import { View, Text, ScrollView, TouchableOpacity, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from '../assets/CSS/style';
import { LinearGradient } from 'expo-linear-gradient';
import Line from '../components/Line';

const Cartolina = ({ navigation }) => {
  const actList = [
    {
      numero: 1,
      giorno: 'Lunedì',
      errore: 'si',
      orari: [{ entrata: '7.24', uscita: '12.09' }, { entrata: '13.45', uscita: '16.34' }],
      descrizione: 'gg ok',
      oreLavorate: '8',
      oreOrdinarie: '8'
    },
    {
      numero: 2,
      giorno: 'Martedì',
      errore: 'si',
      orari: [{ entrata: '7.24' }, { entrata: '13.45', uscita: '16.34' }],
      descrizione: 'gg ok',
      oreLavorate: '8',
      oreOrdinarie: '8'
    },
    {
      numero: 3,
      giorno: 'Martedì',
      errore: 'no',
      orari: [{ entrata: '7.24', uscita: '12.09' }, { entrata: '13.45', uscita: '16.34' }],
      descrizione: 'gg ok',
      oreLavorate: '8',
      oreOrdinarie: '8'
    },
    {
      numero: 4,
      giorno: 'Martedì',
      errore: 'no',
      orari: [{ entrata: '7.24', uscita: '12.09' }, { entrata: '13.45', uscita: '16.34' }],
      descrizione: 'gg ok',
      oreLavorate: '8',
      oreOrdinarie: '8'
    },
    {
      numero: 5,
      giorno: 'Martedì',
      errore: 'no',
      orari: [{ entrata: '7.24', uscita: '12.09' }, { entrata: '13.45', uscita: '16.34' }],
      descrizione: 'gg ok',
      oreLavorate: '8',
      oreOrdinarie: '8'
    },
    {
      numero: 6,
      giorno: 'Martedì',
      errore: 'no',
      orari: [{ entrata: '7.24', uscita: '12.09' }, { entrata: '13.45' }],
      descrizione: 'gg ok',
      oreLavorate: '8',
      oreOrdinarie: '8'
    },
    {
      numero: 7,
      giorno: 'Martedì',
      errore: 'no',
      orari: [{ entrata: '7.24', uscita: '12.09' }, { entrata: '13.45', uscita: '16.34' }, { entrata: '13.54', uscita: '16.34' }],
      descrizione: 'gg ok',
      oreLavorate: '8',
      oreOrdinarie: '8'
    },
    {
      numero: 8,
      giorno: 'Martedì',
      errore: 'no',
      orari: [{ entrata: '7.24', uscita: '12.09' }, { entrata: '13.45', uscita: '16.34' }],
      descrizione: 'gg ok',
      oreLavorate: '8',
      oreOrdinarie: '8'
    },
    {
      numero: 9,
      giorno: 'Martedì',
      errore: 'no',
      orari: [{ entrata: '7.24', uscita: '12.09' }, { entrata: '13.45', uscita: '16.34' }],
      descrizione: 'gg ok',
      oreLavorate: '8',
      oreOrdinarie: '8'
    },
    {
      numero: 10,
      giorno: 'Martedì',
      errore: 'si',
      orari: [{ entrata: '7.24', uscita: '12.09' }, { entrata: '13.45', uscita: '16.34' }],
      descrizione: 'gg ok',
      oreLavorate: '8',
      oreOrdinarie: '8'
    }
  ]

  const precList = [
    {
      numero: 1,
      giorno: 'Lunedì',
      errore: 'no',
      orari: [{ entrata: '7.30', uscita: '12.09' }, { entrata: '13.45', uscita: '16.34' }],
      descrizione: 'gg ok',
      oreLavorate: '8',
      oreOrdinarie: '8'
    },
    {
      numero: 2,
      giorno: 'Martedì',
      errore: 'no',
      orari: [{ entrata: '7.24' }, { entrata: '13.45', uscita: '16.34' }],
      descrizione: 'gg ok',
      oreLavorate: '8',
      oreOrdinarie: '8'
    },
    {
      numero: 3,
      giorno: 'Martedì',
      errore: 'no',
      orari: [{ entrata: '7.24', uscita: '12.09' }, { entrata: '13.45', uscita: '16.34' }],
      descrizione: 'gg ok',
      oreLavorate: '8',
      oreOrdinarie: '8'
    },
    {
      numero: 4,
      giorno: 'Martedì',
      errore: 'no',
      orari: [{ entrata: '7.24', uscita: '12.09' }, { entrata: '13.45', uscita: '16.34' }],
      descrizione: 'gg ok',
      oreLavorate: '8',
      oreOrdinarie: '8'
    },
    {
      numero: 5,
      giorno: 'Martedì',
      errore: 'no',
      orari: [{ entrata: '7.24', uscita: '12.09' }, { entrata: '13.45', uscita: '16.34' }],
      descrizione: 'gg ok',
      oreLavorate: '8',
      oreOrdinarie: '8'
    },
    {
      numero: 6,
      giorno: 'Martedì',
      errore: 'no',
      orari: [{ entrata: '7.24', uscita: '12.09' }, { entrata: '13.45' }],
      descrizione: 'gg ok',
      oreLavorate: '8',
      oreOrdinarie: '8'
    },
    {
      numero: 7,
      giorno: 'Martedì',
      errore: 'no',
      orari: [{ entrata: '7.24', uscita: '12.09' }, { entrata: '13.45', uscita: '16.34' }, { entrata: '13.54', uscita: '16.34' }],
      descrizione: 'gg ok',
      oreLavorate: '8',
      oreOrdinarie: '8'
    },
    {
      numero: 8,
      giorno: 'Martedì',
      errore: 'no',
      orari: [{ entrata: '7.24', uscita: '12.09' }, { entrata: '13.45', uscita: '16.34' }],
      descrizione: 'gg ok',
      oreLavorate: '8',
      oreOrdinarie: '8'
    },
    {
      numero: 9,
      giorno: 'Martedì',
      errore: 'no',
      orari: [{ entrata: '7.24', uscita: '12.09' }, { entrata: '13.45', uscita: '16.34' }],
      descrizione: 'gg ok',
      oreLavorate: '8',
      oreOrdinarie: '8'
    },
    {
      numero: 10,
      giorno: 'Martedì',
      errore: 'si',
      orari: [{ entrata: '7.24', uscita: '12.09' }, { entrata: '13.45', uscita: '16.34' }],
      descrizione: 'gg ok',
      oreLavorate: '8',
      oreOrdinarie: '8'
    }
  ]

  const [list, setList] = useState([...actList]);
  const [mese, setMese] = useState("Novembre");
  const [btnTitle, setBtnTitle] = useState("mese precedente");
  const [act, setAct] = useState(true);

  const changeMonth = () => {
    if (act) {
      setAct(false);
      setMese("Ottobre");
      setBtnTitle("mese attuale");
      setList(precList);
    }
    else {
      setAct(true);
      setMese("Novembre");
      setBtnTitle("mese precedente");
      setList(actList);
    }
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title={btnTitle} onPress={changeMonth} />
      )
    });
  });

  return (
    <View>
      <Text style={styles().meseMostrato}>{mese}</Text>
      <ScrollView style={{ marginBottom: 45 }}>
        {
          list.map((itemList, index) => (
            <LinearGradient
              colors={itemList.errore === 'no' ? ['#00ab40', '#00c301', '#4ded30'] : ['#c12127', '#ff4b01', '#fb8817']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[styles().giornoCartolina]}
              key={index}>
              <TouchableOpacity>
                <Descrizione itemList={itemList} />
                <Line />
                <Conteggi itemList={itemList} />
              </TouchableOpacity>
            </LinearGradient>
          ))
        }
      </ScrollView>
    </View>
  );
}


const Descrizione = (props) => {
  const itemList = props.itemList;
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <Text style={styles().descrizioneCartolina}>{itemList.giorno} {itemList.numero}</Text>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Text style={[styles().WhiteText]}>Entrata</Text>
        <Text style={[styles().WhiteText]}>Uscita</Text>
      </View>
      <EntrateUscite orari={itemList.orari}/>
    </View>
  )
}

const EntrateUscite = (props) => {
  const orari=props.orari;
  return (
    orari.map((itemList, index) => (
      <View style={{ flex: 1, flexDirection: 'row' }} key={index}>
        <Text style={[styles().WhiteText]}>{itemList.entrata}</Text>
        <Text style={[styles().WhiteText]}>{itemList.uscita}</Text>
      </View>
    )));
}

const Conteggi = (props) => {
  const itemList = props.itemList;
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Text style={[styles().WhiteText]}>Ore lavorate</Text>
        <Text style={[styles().WhiteText]}>{itemList.oreLavorate}</Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Text style={[styles().WhiteText]}>Ore ordinarie</Text>
        <Text style={[styles().WhiteText]}>{itemList.oreOrdinarie}</Text>
      </View>
      <Text style={styles().descrizioneCartolina}>{itemList.descrizione}</Text>
    </View>
  )
}

export default Cartolina;