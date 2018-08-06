import React from 'react';
import { View, FlatList} from 'react-native';
import MovieComponent from '../components/MovieComponent';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{backgroundColor: 'green'}}>
                <FlatList horizontal
                    data={[
                        {key: '1', title: 'Item 1'},
                        {key: '2', title: 'Item 2'},
                        {key: '3', title: 'Item 3'},
                        {key: '4', title: 'Item 4'},
                        {key: '5', title: 'Item 5'},
                        {key: '6', title: 'Item 6'},
                        {key: '7', title: 'Item 7'},
                        {key: '8', title: 'Item 8'},
                        {key: '9', title: 'Item 9'},
                        {key: '10', title: 'Item 10'},
                        {key: '11', title: 'Item 11'},
                        {key: '12', title: 'Item 12'},
                        {key: '13', title: 'Item 13'},
                        {key: '14', title: 'Item 14'},
                        {key: '15', title: 'Item 15'},
                        {key: '16', title: 'Item 16'},
                        {key: '17', title: 'Item 17'},
                        {key: '18', title: 'Item 18'},
                        {key: '19', title: 'Item 19'},
                        {key: '20', title: 'Item 20'},
                        {key: '21', title: 'Item 21'},
                        {key: '22', title: 'Item 22'},
                        {key: '23', title: 'Item 23'},
                        {key: '24', title: 'Item 24'},
                        {key: '25', title: 'Item 25'},
                        {key: '26', title: 'Item 26'},
                        {key: '27', title: 'Item 27'},
                        {key: '28', title: 'Item 28'},
                        {key: '29', title: 'Item 29'},
                    ]}
                    renderItem={({item}) => <MovieComponent title={item.title} /> }/>
            </View>
        );
    }
}