const { calcularDesconto, comprarPastel } = require("./calculo");

describe("Calculo do desconto", () => {
  test("deve aplicar cupom de 10%", () => {
    const codigoCupom = "vale10";
    const dataReferencia = new Date("2022-03-10 02:22:22");
    const descontoCalculado = calcularDesconto(codigoCupom, 90, dataReferencia);
    expect(descontoCalculado).toBe(9);
  });

  test("não deve aplicar cupom de 10% no sabado", () => {
    const codigoCupom = "vale10";
    const dataReferencia = new Date("2022-03-12 02:22:22");
    const descontoCalculado = calcularDesconto(codigoCupom, 90, dataReferencia);
    expect(descontoCalculado).toBe(0);
  });

  test("não deve aplicar cupom de 10% no domingo", () => {
    const codigoCupom = "vale10";
    const dataReferencia = new Date("2022-03-13 02:22:22");
    const descontoCalculado = calcularDesconto(codigoCupom, 90, dataReferencia);
    expect(descontoCalculado).toBe(0);
  });

  test("Deve validar se o cupom está sendo aplicado", () => {
    const codigoCupom = "vale10";
    const dataReferencia = new Date("2022-03-11 02:22:22");
    const valorPastel = 120;
    const validaCupom = comprarPastel(valorPastel, codigoCupom, dataReferencia);
    console.log(validaCupom);

    expect(validaCupom).toBeTruthy();
  });

  test("Deve validar se o cupom não está sendo aplicado", () => {
    const codigoCupom = "vale10";
    const dataReferencia = new Date("2022-03-12 02:22:22");
    const valorPastel = 120;
    const validaCupom = comprarPastel(valorPastel, codigoCupom, dataReferencia);
    console.log(validaCupom);

    expect(validaCupom).toBeFalsy();
  });
});
