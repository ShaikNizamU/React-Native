import { StyleSheet, Text, View, FlatList, SafeAreaView, Image} from 'react-native'
import React from 'react'

type itemData={
    id: string,
    date: string,
    title: string,
    para: string,
}

const Data: itemData[] = [
    {
        id: '1',
        date: '12th Aug 2024 04:00 pm',
        title: 'Notification Alert 1',
        para: 'Assalamualikum warahmatullahi Wabarkatuhu Shaik',
    },
    {
        id: '2',
        date: '12th Aug 2024 04:00 pm',
        title: 'Notification Alert 2',
        para: 'Assalamualikum warahmatullahi Wabarkatuhu Shaik'
    },
    {
        id: '3',
        date: '12th Aug 2024 04:00 pm',
        title: 'Notification Alert 3',
        para: 'Assalamualikum warahmatullahi Wabarkatuhu Shaik'
    },
    {
        id: '4',
        date: '12th Aug 2024 04:00 pm',
        title: 'Notification Alert 4',
        para: 'Assalamualikum warahmatullahi Wabarkatuhu Shaik'
    },
    {
        id: '5',
        date: '12th Aug 2024 04:00 pm',
        title: 'Notification Alert 5',
        para: 'Assalamualikum warahmatullahi Wabarkatuhu Shaik'
    },
    {
        id: '6',
        date: '12th Aug 2024 04:00 pm',
        title: 'Notification Alert 6',
        para: 'Assalamualikum warahmatullahi Wabarkatuhu Shaik'
    },
    {
        id: '7',
        date: '12th Aug 2024 04:00 pm',
        title: 'Notification Alert 7',
        para: 'Assalamualikum warahmatullahi Wabarkatuhu Shaik'
    },
    {
        id: '8',
        date: '12th Aug 2024 04:00 pm',
        title: 'Notification Alert 8',
        para: 'Assalamualikum warahmatullahi Wabarkatuhu Shaik'
    },
    {
        id: '9',
        date: '12th Aug 2024 04:00 pm',
        title: 'Notification Alert 9',
        para: 'Assalamualikum warahmatullahi Wabarkatuhu Shaik'
    },
    {
        id: '10',
        date: '12th Aug 2024 04:00 pm',
        title: 'Notification Alert 10',
        para: 'Assalamualikum warahmatullahi Wabarkatuhu Shaik'
    },
    {
        id: '11',
        date: '12th Aug 2024 04:00 pm',
        title: 'Notification Alert 11',
        para: 'Assalamualikum warahmatullahi Wabarkatuhu Shaik'
    },
    {
        id: '12',
        date: '12th Aug 2024 04:00 pm',
        title: 'Notification Alert 12',
        para: 'Assalamualikum warahmatullahi Wabarkatuhu Shaik'
    },
    {
        id: '13',
        date: '12th Aug 2024 04:00 pm',
        title: 'Notification Alert 13',
        para: 'Assalamualikum warahmatullahi Wabarkatuhu Shaik'
    },
    {
        id: '14',
        date: '12th Aug 2024 04:00 pm',
        title: 'Notification Alert 14',
        para: 'Assalamualikum warahmatullahi Wabarkatuhu Shaik'
    },
    {
        id: '15',
        date: '12th Aug 2024 04:00 pm',
        title: 'Notification Alert 15',
        para: 'Assalamualikum warahmatullahi Wabarkatuhu Shaik'
    },
];

const rederItem = ({item}: {item:itemData}) => (
    <View style={styles.item}>
        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={styles.date}>{item.date}</Text>
            <Image style={{width:20, height:20}} source={require('../assets/Dot.png')} />
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.para}>{item.para}</Text>
    </View>
);

export default function Notifications() {
  return (
    <SafeAreaView>
        <FlatList
        data={Data}
        renderItem={rederItem}
        keyExtractor={(item) => item.id}

        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#ffffff',
        padding: 20,
        margin: 8,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      },
    date:{
        fontSize:8,
        fontWeight:'bold',
        color:'#9494b8',
    },
    title:{
        color:'#000000',
        fontWeight:'bold',

    },
    para:{
        fontSize:12, 
        color:'#000000'
    }
})