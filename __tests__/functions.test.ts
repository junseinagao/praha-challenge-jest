import { asyncSumOfArray, sumOfArray } from "../functions";

describe("sumOfArray", () => {
  it("配列の要素の合計を正しく返す", () => {
    expect(sumOfArray([1, 2, 3])).toBe(6);
  });
  it("配列の要素が一つのとき合計を正しく返す", () => {
    expect(sumOfArray([1])).toBe(1);
  });
  it("空の配列のときTypeErrorをthrowする", () => {
    expect(() => sumOfArray([])).toThrow(TypeError);
  });
  it("Array<number>以外の配列のとき未定義の動作をする", () => {
    // MEMO: テストを実行するために @ts-ignore を許容している
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(sumOfArray(Array.from("あいうえお"))).toBe("あいうえお");
  });
});

describe("asyncSumOfArray", () => {
  it("配列の要素の合計を正しく返す", async () => {
    await expect(asyncSumOfArray([1, 2, 3])).resolves.toBe(6);
  });
  it("配列の要素の合計を正しく返す(asyncを使わずに書いた場合)", () => {
    return expect(asyncSumOfArray([1, 2, 3])).resolves.toBe(6);
  });
  it("空の配列のときTypeErrorをthrowする", () => {
    return expect(asyncSumOfArray([])).rejects.toThrow(TypeError);
  });
});

describe("asyncSumOfArraySometimesZero", () => {
  //
});

describe("getFirstNameThrowIfLong", () => {
  //
});
