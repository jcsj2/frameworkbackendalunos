const cupons = new Map();
cupons.set("vale10", {
  porcentagem: 10,
});

const SEGUNDA_FEIRA = 1;
const SEXTA_FEIRA = 5;
const CEM_PORCENTO = 100;

const VALOR_PASTEL = 120;

function ehDiaDeSemana(dataReferencia) {
  return (
    dataReferencia.getDay() >= SEGUNDA_FEIRA &&
    dataReferencia.getDay() <= SEXTA_FEIRA
  );
}

function buscarPorcentagem(codigoCupom) {
  const cupom = cupons.get(codigoCupom);
  return cupom ? cupom.porcentagem : 0;
}

function calcularDesconto(codigoCupom, valor, dataReferencia) {
  if (!ehDiaDeSemana(dataReferencia)) return 0;
  const porcentagem = buscarPorcentagem(codigoCupom);
  return (valor / CEM_PORCENTO) * porcentagem;
}

function comprarPastel(valorPastel, codigoCupom, dataReferencia) {
  if (!ehDiaDeSemana(dataReferencia)) return 0;
  const porcentagem = buscarPorcentagem(codigoCupom);
  const calculoReverso = valorPastel - (valorPastel / 100) * porcentagem;
  return calculoReverso < valorPastel;
}

module.exports = {
  calcularDesconto,
  comprarPastel,
};
