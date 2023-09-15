const getCroppedImageUrl = (url: string) => {
  const target = 'media/';
  const index = url.indexOf(target) + target.length;
  const res = url.slice(0, index) + 'crop/600/400/' + url.slice(index);
  return res;
};
export default getCroppedImageUrl;
