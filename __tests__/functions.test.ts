/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  asyncSumOfArray,
  asyncSumOfArraySometimesZero,
  getFirstNameThrowIfLong,
  sumOfArray,
} from "../functions";
import { NameApiService } from "../nameApiService";
import { DatabaseMock } from "../util";

describe("sumOfArray", () => {
  it("配列の要素の合計を正しく返す", () => {
    expect(sumOfArray([1, 2, 3])).toBe(6);
  });
  it("配列の要素が一つのとき合計を正しく返す", () => {
    expect(sumOfArray([1])).toBe(1);
  });
});

describe("asyncSumOfArray", () => {
  it("配列の要素の合計を正しく返す", async () => {
    await expect(asyncSumOfArray([1, 2, 3])).resolves.toBe(6);
  });
  it("配列の要素の合計を正しく返す(asyncを使わずに書いた場合)", () => {
    return expect(asyncSumOfArray([1, 2, 3])).resolves.toBe(6);
  });
});

jest.mock("../util/index");

describe("asyncSumOfArraySometimesZero", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it("databaseに値を保存できたらsumOfArray(numbers)をresolveする", async () => {
    const mockSave = jest.fn();
    (DatabaseMock as jest.Mock) = jest.fn().mockReturnValue({
      save: mockSave,
    });
    await expect(asyncSumOfArraySometimesZero([1, 2, 3])).resolves.toBe(6);
    expect(mockSave).toHaveBeenCalledWith([1, 2, 3]);
  });
  it('エラーが発生したら"0"をresolveする', async () => {
    const mockSave = jest.fn().mockImplementation(() => {
      throw new Error("mock error");
    });
    (DatabaseMock as jest.Mock) = jest.fn().mockReturnValue({
      save: mockSave,
    });
    await expect(asyncSumOfArraySometimesZero([1, 2, 3])).resolves.toBe(0);
    expect(mockSave).toHaveBeenCalledWith([1, 2, 3]);
  });
});

jest.mock("../nameApiService");

describe("getFirstNameThrowIfLong", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("maxNameLengthが取得したFirstNameより長いとき、firstNameが返される", () => {
    const mockGetFirstName = jest.fn().mockReturnValue("John");
    (NameApiService as jest.Mock) = jest.fn().mockReturnValue({
      getFirstName: mockGetFirstName,
    });
    return expect(getFirstNameThrowIfLong(10)).resolves.toBe("John");
  });
  it("maxNameLengthが取得したFirstNameより短いとき、エラーがthrowされる", () => {
    const mockGetFirstName = jest.fn().mockReturnValue("John");
    (NameApiService as jest.Mock) = jest.fn().mockReturnValue({
      getFirstName: mockGetFirstName,
    });
    return expect(getFirstNameThrowIfLong(2)).rejects.toThrow(
      "first_name too long"
    );
  });
});
