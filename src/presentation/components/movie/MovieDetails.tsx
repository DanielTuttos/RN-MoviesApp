import {StyleSheet, Text, View} from 'react-native';
import {FullMovie} from '../../../core/entities/movie.entity';
import {Formatter} from '../../../config/helpers/formatter';
import {Cast} from '../../../core/entities/cast.entity';
import {FlatList} from 'react-native-gesture-handler';
import {CastActor} from '../cast/CastActor';

interface Props {
  movie: FullMovie;
  cast: Cast[];
}

export const MovieDetails = ({movie, cast}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text>{movie.rating}</Text>
          <Text style={{marginLeft: 5}}>- {movie.genres.join(', ')}</Text>
        </View>
        <Text style={styles.title}>Historia</Text>
        <Text style={{fontSize: 16}}>{movie.description}</Text>
        <Text style={styles.title}>Presupuesto</Text>
        <Text style={{fontSize: 18}}>{Formatter.currency(movie.budget)}</Text>
      </View>
      {/* casting */}
      <View style={{marginTop: 10, marginBottom: 50}}>
        <Text
          style={{
            ...styles.title,
            marginTop: 0,
            marginHorizontal: 20,
            marginVertical: 10,
          }}>
          Actores
        </Text>
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastActor actor={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
  },
});
