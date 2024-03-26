import {Text, View} from 'react-native';
import {useMovies} from '../../hooks/useMovies';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HorizontalCarousel, PosterCarousel} from '../../components';
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage} =
    useMovies();
  if (isLoading) {
    return <FullScreenLoader />;
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        {/* principal */}
        <PosterCarousel movies={nowPlaying} />

        {/* populares */}
        <HorizontalCarousel
          movies={popular}
          title="Populares"
          loadNextPage={popularNextPage}
        />

        {/* toprated */}
        <HorizontalCarousel movies={topRated} title="Mejor calificadas" />

        {/* upcoming */}
        <HorizontalCarousel movies={upcoming} title="Proximamente" />
      </View>
    </ScrollView>
  );
};
