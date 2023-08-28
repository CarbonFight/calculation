const getAllOption = require("./option");

jest.mock('./utils/dataAcces', () => {
  return jest.fn(() => [
    {
      'category': "transport",
      'action': "train",
      'option': "TGV INOUI"
    },
    {
      'category': "transport",
      'action': "train",
      'option': "TER"
    },
    {
      'category': "transport",
      'action': "train",
      'option': "RER"
    }
  ]);
});

describe("getAllOption", () => {
  it("should return an array of options for a valid category and action", async () => {
    const category = "transport";
    const action = "train";
    const expectedOptions = ["TGV INOUI", "TER", "RER"];

    const options = await getAllOption(category, action);

    expect(options).toEqual(expectedOptions);
  });

  it("should throw an error with status 400 for an invalid category and actions", async () => {
    const category = "invalid_category";
    const action = "invalid_action";

    await expect(getAllOption(category, action)).rejects.toThrowError('No options found for category : "invalid_category" , action : "invalid_action"');
    await expect(getAllOption(category, action)).rejects.toHaveProperty('status', 400);
  });
});
