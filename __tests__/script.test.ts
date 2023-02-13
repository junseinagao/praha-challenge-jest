import * as script from "../src/script";
const { default: command, add, subtract, multiply, divide } = script;

describe("command", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  describe("あたえられたコマンドに応じて、正しいメソッドを呼び出す", () => {
    it("node dist/script.js add 1 2 のとき足し算が行われる", () => {
      const spy = jest.spyOn(script, "add");
      command(["node", "dist/script.js", "add", "1", "2"]);
      expect(spy).toBeCalledWith("1", "2");
    });
    it("node dist/script.js subtract 1 2 のとき引き算が行われる", () => {
      const spy = jest.spyOn(script, "subtract");
      command(["node", "dist/script.js", "subtract", "1", "2"]);
      expect(spy).toBeCalledWith("1", "2");
    });
    it("node dist/script.js multiply 1 2 のときかけ算が行われる", () => {
      const spy = jest.spyOn(script, "multiply");
      command(["node", "dist/script.js", "multiply", "1", "2"]);
      expect(spy).toBeCalledWith("1", "2");
    });
    it("node dist/script.js divide 1 2 のとき割り算が行われる", () => {
      const spy = jest.spyOn(script, "divide");
      command(["node", "dist/script.js", "divide", "1", "2"]);
      expect(spy).toBeCalledWith("1", "2");
    });
  });
  describe("30個以上の引数を渡すとエラーが発生する", () => {
    it("31個のエラーを渡した時、エラーが発生する", () => {
      expect(() =>
        command([
          "node",
          "dist/script.js",
          "add",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "10",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "28",
          "28",
          "29",
          "30",
          "31",
        ])
      ).toThrowError();
    });
    it("30個のエラーを渡した時、エラーが発生しない", () => {
      expect(() =>
        command([
          "node",
          "dist/script.js",
          "add",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "10",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "28",
          "28",
          "29",
          "30",
        ])
      ).not.toThrowError();
    });
  });
  describe("引数が数字以外だとエラーが発生する", () => {
    it("あいうえおを渡したときエラーが発生する", () => {
      expect(() =>
        command(["node", "dist/script.js", "add", "あ", "い", "う", "え", "お"])
      ).toThrowError();
    });
    it("0%1343を渡したときエラーが発生する", () => {
      expect(() =>
        command(["node", "dist/script.js", "add", "0", "%", "1", "3", "4", "3"])
      ).toThrowError();
    });
  });
});

describe("add", () => {
  it("渡された引数に対して計算を行い、結果を返す", () => {
    expect(add("3", "10", "3")).toBe(16);
  });
  it("引数が数字以外だとエラーが発生する", () => {
    //
  });
  it("計算結果が 1000 を超える場合は合計ではなく「too big」と文字列が返る", () => {
    //
  });
});
describe("subtract", () => {
  it("渡された引数に対して計算を行い、結果を返す", () => {
    expect(subtract("10", "3")).toBe(7);
  });
  it("引数が数字以外だとエラーが発生する", () => {
    //
  });
  it("引き算の場合、計算結果がマイナスの場合は「negative number」と文字列が返る", () => {});
});
describe("multiply", () => {
  it("渡された引数に対して計算を行い、結果を返す", () => {
    expect(multiply("3", "10", "3")).toBe(90);
    //
  });
  it("引数が数字以外だとエラーが発生する", () => {
    //
  });
  it("計算結果が 1000 を越える場合は「big big number」と文字列が返る", () => {
    //
  });
});
describe("divide", () => {
  it("渡された引数に対して計算を行い、結果を返す", () => {
    expect(divide("100", "10")).toBe(10);
  });
  it("引数が数字以外だとエラーが発生する", () => {
    //
  });
});
