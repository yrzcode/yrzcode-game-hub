import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
	onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
	const ref = useRef<HTMLInputElement>(null);
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				if (ref.current) {
					onSearch(ref.current.value);
				}
			}}
			style={{
				display: "flex",
				justifyContent: "center",
			}}
		>
			<InputGroup maxWidth={500} minWidth={100}>
				<InputLeftElement children={<BsSearch />} />
				<Input
					ref={ref}
					borderRadius={20}
					placeholder="Search games..."
					variant="filled"
				/>
			</InputGroup>
		</form>
	);
};

export default SearchInput;
