const getAllCategory = require("./category");

jest.mock('./utils/dataAcces', () => {
  return jest.fn(() => [
    {
      'category': "transport",
      'action': "train",
      'option': "TGV INOUI"
    },
    {
      'category': "food",
      'action': "cheese",
      'option': "emmental"
    },
    {
      'category': "energy",
      'action': "electricity",
      'option': "eolienne"
    }
  ]);
});

describe("getAllCategory", () => {
  it("should return an array of category", async () => {
    const expectedCategory = ["transport", "food", "energy"];

    const category = await getAllCategory();

    expect(category).toEqual(expectedCategory);
  });
});
