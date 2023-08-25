const fs = require("fs").promises;
const getData = require("./dataAcces");

jest.mock("fs").promises;
fs.readFile = jest.fn();

describe("getData", () => {
  it("should return parsed JSON data for valid file", async () => {
    const mockData = [{ category: "cat1", action: "action1" }];
    const jsonString = JSON.stringify(mockData);

    fs.readFile.mockResolvedValueOnce(jsonString);

    const result = await getData();

    expect(result).toEqual(mockData);
  });
});
