function contarVocales(s) {
  if (!s || s.length === 0) return 0;
  let c = s[0].toLowerCase();
  let esVocal = (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u');
  return (esVocal ? 1 : 0) + contarVocales(s.slice(1));
}

console.log(contarVocales("Hola Mundo"));