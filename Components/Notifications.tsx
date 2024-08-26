import {
    StyleSheet,
    Text,
    View,
    FlatList,
    SafeAreaView,
    Image,
    Modal,
    TouchableOpacity,
  } from 'react-native';
  import React, {useState} from 'react';
  
  type itemData = {
    id: string;
    date: string;
    title: string;
    para: string;
  };
  
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
  
  export default function Notifications() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState<itemData | null>(null);
  
    const renderItem = ({item}: {item: itemData}) => (
      <TouchableOpacity
        onPress={() => {
          setSelectedItem(item);
          setIsModalVisible(true);
        }}>
        <View style={styles.item}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.date}>{item.date}</Text>
            <Image
              style={{width: 20, height: 20}}
              source={require('../assets/Dot.png')}
            />
          </View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.para}>{item.para}</Text>
        </View>
      </TouchableOpacity>
    );
  
    return (
      <SafeAreaView>
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
  
        <Modal
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}
          animationType="slide"
          transparent={true}>
          <View style={styles.modal}>
            <View style={styles.modalContent}>
              {selectedItem && (
                <>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 10, fontWeight: 'bold', color: 'gray', marginTop: 3}}>
                      {selectedItem.date}
                    </Text>
                    <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                      <Image
                        style={{
                          width: 20,
                          height: 20,
                          backgroundColor: 'red',
                          tintColor: '#ffffff',
                          borderRadius: 10,
                        }}
                        source={require('../assets/Close.png')}
                      />
                    </TouchableOpacity>
                  </View>
                  <Text style={{fontWeight: 'bold', color: '#000000', marginTop: 3}}>
                    {selectedItem.title}
                  </Text>
                  <Text style={{color: '#000000', marginVertical: 3}}>
                    {selectedItem.para}
                  </Text>
                </>
              )}
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
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
    date: {
      fontSize: 10,
      fontWeight: 'bold',
      color: '#9494b8',
    },
    title: {
      color: '#000000',
      fontWeight: 'bold',
    },
    para: {
      fontSize: 12,
      color: '#000000',
    },
    modal: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: 300,
      padding: 10,
      backgroundColor: '#ffffff',
      borderRadius: 10,
    },
  });
  