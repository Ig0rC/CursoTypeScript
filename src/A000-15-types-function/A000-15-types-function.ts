type MapStrignsCallBack = (item: string) => string;

export function mapStrings(
  array: string[],
  callbackfn: MapStrignsCallBack,
): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]));
  }

  return newArray;
}

const abc = ['a', 'b', 'c', 'd', 'e'];

const abcMAP = mapStrings(abc, (item) => {
  return item.toUpperCase();
});

console.log(abcMAP);
