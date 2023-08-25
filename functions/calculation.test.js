const calculation = require("./calculation");

jest.mock('../utils/dataAcces', () => {
  return jest.fn(() => [
    {
      'category': "energy",
      'action': "electricity",
      'option': "Bioéthanol",
      'default': true,
      'co2e': 144
    },
    {
      'category': "energy",
      'action': "electricity",
      'option': "Gaz naturel",
      'co2e': 98
    },
  ]);
});

describe("calculation", () => {
  it("should calculate CO2e and default option for a valid category, action, and option", async () => {
    const category = "energy";
    const action = "electricity";
    const option = "Gaz naturel";
    const count = 10;

    const expectedResult = [980, "Gaz naturel"];
    const result = await calculation(category, action, option, count);

    expect(result).toEqual(expectedResult);
  });

  it("should calculate CO2e and default option for a valid category and action with no option", async () => {
    const category = "energy";
    const action = "electricity";
    const count = 5;

    const expectedResult = [720, "Bioéthanol"]; // Default option is 'Bioéthanol'
    const result = await calculation(category, action, undefined, count);

    expect(result).toEqual(expectedResult);
  });

  it("should throw an error with status 400 for an invalid category", async () => {
    const category = "invalid_category";
    const action = "electricity";

    await expect(calculation(category, action)).rejects.toThrowError(`No calculation found for category: "${category}", action: "${action}"`);
    await expect(calculation(category, action)).rejects.toHaveProperty('status', 400);
  });

  it("should throw an error with status 400 for an invalid action", async () => {
    const category = "energy";
    const action = "invalid_action";

    await expect(calculation(category, action)).rejects.toThrowError(`No calculation found for category: "${category}", action: "${action}"`);
    await expect(calculation(category, action)).rejects.toHaveProperty('status', 400);
  });
});
