import { View, Text, ScrollView, TouchableOpacity, Button, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from '../assets/CSS/style';
import { LinearGradient } from 'expo-linear-gradient';
import Line from '../components/Line';

const Giustificazioni = ({ navigation, route }) => {
    const { dataGiust } = route.params;
    let lista = [
        {
            tipo: 'lunga assenza',
            descrizione:"vacanze",
            periodo: 'dal 27/03/2022 al 30/03/2022',
            errore: 'no'
        },
        {
            tipo: 'omessa bollatura',
            descrizione:"vacanze",
            periodo: '27/03/2022',
            errore: 'no'
        },
        {
            tipo: 'lunga assenza',
            descrizione:"vacanze",
            periodo: '27/03/2022',
            errore: 'si'
        },
        {
            tipo: 'lunga assenza',
            descrizione:"vacanze",
            periodo: '05/01/2022',
            errore: 'si'
        },
        {
            tipo: 'lunga assenza',
            descrizione:"vacanze",
            periodo: '27/03/2022',
            errore: 'si'
        },
        {
            tipo: 'lunga assenza',
            descrizione:"vacanze",
            periodo: '27/03/2022',
            errore: 'si'
        },
        {
            tipo: 'lunga assenza',
            descrizione:"vacanze",
            periodo: '27/03/2022',
            errore: 'si'
        },
    ];
    //se dataGiust ha un valore allora veniamo dalla cartolina
    if(dataGiust){
        //lista.filter serve a prendere solo il giorno selezionato dalla cartolina
        lista = lista.filter((value)=>{
            //value è il valore all'interno dell'array lista, come in un foreach, sarà quindi l'oggetto {tipo:..., periodo:..., errore:...}
            return value.periodo.split('/') //al momento la data l'ho messa come dd/mm/yyyy ma dalla cartola arriva come yyyy-mm-dd, va come prima cosa splittata,
                                            //quindi ora è {dd, mm, yyyy}
            .reverse() //ora giriamo l'array creato dallo split per avere i dati nell'ordine giusto, quindi avremo {yyyy, mm, dd}
            .join('-') //ora creiamo la stringa con la data nel formato giusto, quindi avremo yyyy-mm-dd
            .indexOf(dataGiust) !== -1 //ora cerchiamo se la data è quella selezionata dalla cartolina
        });
    }

    return (
        <View>
            <ScrollView style={{ marginBottom: 45 }}>
                {
                    lista.map((itemList, index) => (
                        <LinearGradient
                            colors={itemList.errore === 'no' ? ['#00ab40', '#00c301', '#4ded30'] : ['#c12127', '#ff4b01', '#fb8817']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={[styles().giornoCartolina]}
                            key={index}>
                            <TouchableOpacity style={{flex:1, flexDirection:'row'}}>
                                <Text style={[styles().WhiteText, {flex:2}]}>{itemList.tipo}{"\n\n"}{itemList.descrizione}</Text>
                                <Text style={[styles().WhiteText]}>{itemList.periodo}</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    ))
                }
            </ScrollView>
        </View>
    );
}



export default Giustificazioni;
