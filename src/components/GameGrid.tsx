import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data: games, error, isLoading } = useGames(selectedGenre);
  const skeletons = Array.from('123456');

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        marginTop="10px"
      >
        {(isLoading && (
          <>
            {skeletons.map((skeleton) => {
              return (
                <GameCardContainer key={skeleton}>
                  <GameCardSkeleton />
                </GameCardContainer>
              );
            })}
          </>
        )) || (
          <>
            {games.map((game) => {
              return (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              );
            })}
          </>
        )}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
