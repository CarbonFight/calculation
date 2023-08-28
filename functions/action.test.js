const getAllAction = require("./action");

jest.mock("./utils/dataAcces", () => {
  return jest.fn(() => [
    {
      'category': "transport",
      'action': "kick scooter",
      'option': "Électrique"
    },
    {
      'category': "transport",
      'action': "bike",
      'option': "Vélo électrique"
    },
    {
      'category': "food",
      'action': "main",
      'option': "Poisson"
    }
  ]);
});


describe("getAllAction", () => {
  it("should return an array of actions for a valid category", async () => {
    const category = "transport";
    const expectedActions = ["kick scooter", "bike"];

    const actions = await getAllAction(category);

    expect(actions).toEqual(expectedActions);
  });

  it("should throw an error with status 400 for an invalid category", async () => {
    const category = "invalid_category";

    await expect(getAllAction(category)).rejects.toThrowError('No actions found for category: "invalid_category"');
    await expect(getAllAction(category)).rejects.toHaveProperty('status', 400);
  });
});
