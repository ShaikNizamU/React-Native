import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import React from 'react';
import {BarChart} from 'react-native-gifted-charts';

const screenWidth = Dimensions.get('window').width;

const dataChart = [
  {
    value: 30,
    label: 'Exam Avarage',
    frontColor: '#a239ed',
  },
  {value: 60, label: 'My Avarage', frontColor: '#eda539'},
  {
    value: 90,
    label: 'Topper Average',
    frontColor: '#07afb8',

   
  },
];

type marksType = {
  id: string;
  image: any;
  subjectName: string;
  date: string;
  marks: number;
  totalMarks: number;
  backgroundColor: string;
};

const Data: marksType[] = [
  {
    id: '1',
    image: require('../assets/Dot.png'),
    subjectName: 'physics',
    date: '04-03-2024',
    marks: 60,
    totalMarks: 200,
    backgroundColor:'#faebf3'
  },
  {
    id: '2',
    image: require('../assets/Dot.png'),
    subjectName: 'Chemistry',
    date: '04-03-2024',
    marks: 60,
    totalMarks: 100,
    backgroundColor: '#addff7',
  },
  {
    id: '3',
    image: require('../assets/Dot.png'),
    subjectName: 'English',
    date: '04-03-2024',
    marks: 70,
    totalMarks: 100,
    backgroundColor: '#d0f5df',
  },
  {
    id: '4',
    image: require('../assets/Dot.png'),
    subjectName: 'Hindi',
    date: '04-03-2024',
    marks: 80,
    totalMarks: 100,
    backgroundColor: '#f5d0e7',
  },
  {
    id: '5',
    image: require('../assets/Dot.png'),
    subjectName: 'Social',
    date: '04-03-2024',
    marks: 100,
    totalMarks: 100,
    backgroundColor: '#f5edd0',
  },
];


const rederItem = ({item}: {item:marksType}) => {

  const percentage = ((item.marks / item.totalMarks) * 100);

  return (
    <View style={[styles.itemContainer, {backgroundColor:item.backgroundColor}]}>
        <Image source={item.image} style={styles.itemImage} />
        <View style={styles.itemTextContainer}>
          <View>
            <Text style={styles.subjectName}>{item.subjectName}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
          <View style={styles.marksContainer}>
            <Text style={styles.percentage}>{percentage} /{item.totalMarks}</Text>
          </View>
        </View>
    </View>
  );
};

export default function Performance() {

   // Calculate total marks
   const totalMarksObtained = Data.reduce((sum, item) => sum + item.marks, 0);

    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.Container}>

              <View style={styles.performanceMain}>
                  <View style={styles.performanceTop}>
                  <Image
                      source={require('../assets/Register.png')}
                      style={{
                      width: 25,
                      height: 25,
                      marginHorizontal: 5,
                      }}
                  />
                  <Text style={styles.performanceTitle}>Average Scores</Text>
                  </View>

                  <View style={styles.performaceChart}>
                  <BarChart
                      data={dataChart}
                      width={screenWidth - 30}
                      height={220}
                      barWidth={50}
                      // color="#990674"
                      barBorderRadius={7}
                      spacing={55}
                  />
                  </View>
              </View>


              <View>
                <View style={styles.performanceTop}>
                  <Image
                      source={require('../assets/Register.png')}
                      style={{
                      width: 25,
                      height: 25,
                      marginHorizontal: 5,
                      }}
                  />
                  <Text style={styles.performanceTitle}>Marks</Text>
                </View>

                <View>
                  <FlatList
                    data={Data}
                    renderItem={rederItem}
                    keyExtractor={item => item.id}
                  />
                </View>
              </View>


              <View>
                <View style={styles.performanceTop}>
                  <Image
                      source={require('../assets/Register.png')}
                      style={{
                      width: 25,
                      height: 25,
                      marginHorizontal: 5,
                      }}
                  />
                  <Text style={styles.performanceTitle}>Annual exam result</Text>
                </View>

                <View style={styles.ExamResult}>
                  <View style={styles.resultItem}>
                    <Text style={styles.ExamResultInteger}>1/<Text style={{fontSize:18}}>4</Text></Text>
                    <Text style={styles.ExamResultStringText}>Rank Secured</Text>
                  </View>
                  <Text style={styles.pipe}>|</Text> 
                  <View style={styles.resultItem}>
                    <Text style={styles.ExamResultInteger}>{totalMarksObtained}/<Text style={{fontSize:18}}>500</Text></Text>
                    <Text style={styles.ExamResultStringText}>Total Score</Text>
                  </View>
                  <Text style={styles.pipe}>|</Text> 
                  <View style={styles.resultItem}>
                    <Text style={styles.ExamResultInteger}>100</Text>
                    <Text style={styles.ExamResultStringText}>Percentile</Text>
                  </View>
                </View>
              </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  Container: {
    overflow: 'hidden',
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    margin:10,
  },
  performanceMain: {
    marginBottom:10,
  },
  performanceTop: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    marginTop: 10,
  },
  performanceTitle: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  performaceChart: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  barStyle: {
    marginHorizontal: 30,
    borderRadius: 50,
  },



 itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 5,
  },
  itemTextContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subjectName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  date: {
    fontSize: 14,
    color: '#777777',
  },
  marksContainer: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    
  },
  marks: {
    fontSize: 16,
    color: '#4caf50',
    fontWeight: 'bold',
  },
  percentage: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },



  ExamResult:{
    marginTop:5,
    flexDirection:'row',
    justifyContent: 'space-evenly',                                          
    alignItems: 'center',
    backgroundColor: '#b4e4fa',
    padding: 25,
    borderRadius: 10,

  },
  resultItem:{
    alignItems:'center',
  },
  ExamResultStringText:{
    color:'#000000',
    fontWeight: 'bold',
    fontSize: 17,
  },
  ExamResultInteger:{
    fontSize:24,
    fontWeight: 'bold',
    color: '#0cadf7',
  },
  pipe: {
    fontSize: 50,
    color: '#0cadf7', 
    marginHorizontal: 10,
    fontWeight:'100',
  },
});
