import bullsEye from '../assets/bulls-eyes.png';
import thumbsUp from '../assets/thumb-up.png';
import meh from '../assets/meh.png';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh', boxSize: '25px' },
    4: { src: thumbsUp, alt: 'recommended', boxSize: '25px' },
    5: { src: bullsEye, alt: 'exceptional', boxSize: '35px' },
  };

  return <Image {...emojiMap[rating]} mt={1} />;
};

export default Emoji;
