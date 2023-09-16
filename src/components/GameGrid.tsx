import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Platform } from '../hooks/usePlatforms';
import { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data: games, error, isLoading } = useGames(gameQuery);
  const skeletons = Array.from('123456');

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
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
  );
};

export default GameGrid;
