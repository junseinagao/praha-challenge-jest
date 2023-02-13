import * as script from "../src/script";
const command = script.default;

describe("command", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  describe("あたえられたコマンドに応じて、正しいメソッドを呼び出す", () => {
    it("node dist/script.js add 1 2 のとき足し算が行われる", () => {
      const spy = jest.spyOn(script, "add");
      command(["node", "dist/script.js", "add", "1", "2"]);
      expect(spy).toBeCalledWith(["1", "2"]);
    });
    it("node dist/script.js subtract 1 2 のとき引き算が行われる", () => {
      const spy = jest.spyOn(script, "subtract");
      command(["node", "dist/script.js", "subtract", "1", "2"]);
      expect(spy).toBeCalledWith(["1", "2"]);
    });
    it("node dist/script.js multiply 1 2 のときかけ算が行われる", () => {
      const spy = jest.spyOn(script, "multiply");
      command(["node", "dist/script.js", "multiply", "1", "2"]);
      expect(spy).toBeCalledWith(["1", "2"]);
    });
    it("node dist/script.js divide 1 2 のとき割り算が行われる", () => {
      const spy = jest.spyOn(script, "divide");
      command(["node", "dist/script.js", "divide", "1", "2"]);
      expect(spy).toBeCalledWith(["1", "2"]);
    });
  });
});

describe("add", () => {
  it("渡された引数に対して計算を行い、結果を返す", () => {
    // expect(add(3, 10, 3)).toBe(16);
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
    //
  });
  it("引数が数字以外だとエラーが発生する", () => {
    //
  });
  it("引き算の場合、計算結果がマイナスの場合は「negative number」と文字列が返る", () => {});
});
describe("multiply", () => {
  it("渡された引数に対して計算を行い、結果を返す", () => {
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
    //
  });
  it("引数が数字以外だとエラーが発生する", () => {
    //
  });
});
