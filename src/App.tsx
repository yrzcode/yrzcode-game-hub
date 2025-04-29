import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import type { Genre } from "./hooks/useGenres";
import type { Platform } from "./hooks/useGames";
import { useState } from "react";
import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	sortOrder: string;
	searchText: string;
}

const App = () => {
	const [gameQuery, setGameQuery] = useState({} as GameQuery);

	return (
		<Grid
			px={{ base: "5px", md: "10px" }}
			py={4}
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`, // 1024px
			}}
			templateColumns={{
				base: "1fr",
				lg: "200px 1fr",
			}}
			gap={2}
		>
			<GridItem area="nav">
				<NavBar
					onSearch={(searchText) => {
						setGameQuery((prev) => {
							return { ...prev, searchText };
						});
					}}
				/>
			</GridItem>
			<Show above="lg">
				<GridItem area="aside" paddingX={5}>
					<GenreList
						selectedGenre={gameQuery.genre}
						onSelectGenre={(genre) =>
							setGameQuery((prev) => ({ ...prev, genre }))
						}
					/>
				</GridItem>
			</Show>
			<GridItem area="main" padding="10px">
				<GameHeading gameQuery={gameQuery} />
				<Flex mb={5}>
					<Box mr={5}>
						<PlatformSelector
							selectedPlatform={gameQuery.platform}
							onSelectPlatform={(platform) =>
								setGameQuery((prev) => ({ ...prev, platform }))
							}
						/>
					</Box>
					<SortSelector
						sortOrder={gameQuery.sortOrder}
						onSelectSortOrder={(sortOrder) => {
							setGameQuery((prev) => {
								return { ...prev, sortOrder };
							});
						}}
					/>
				</Flex>
				<GameGrid gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
};

export default App;
