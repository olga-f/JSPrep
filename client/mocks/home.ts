import { unitList } from "../lib/graphql/queries/HomePage/__generated__/unitList";
import { unitList as Props } from "../lib/graphql/queries/HomePage/__generated__/unitList";

export const units: unitList = {
  unitList: [
    {
      __typename: "UnitType",
      id: "6061b9b95ffc828e66366664",
      title: "JavaScript basics",
      about: [
        "Variables",
        "Data Types Overview",
        "Strings",
        "Numbers",
        "Booleans",
      ],
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/10/03/12/12/javascript-4523100_960_720.jpg",
      position: 1,
      slug: "javascript-basics",
    },
    {
      __typename: "UnitType",
      id: "6061b9ef5ffc828e66366665",
      title: "JavaScript part 2",
      about: ["Data Types Overview 2"],
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/10/03/12/12/javascript-4523100_960_720.jpg",
      position: 2,
      slug: "javascript-part-2",
    },
  ],
};

export const unitsMock = {
  data: units,
};

const emptyList = {
  unitList: [],
};

export const emptyUnitsMock = {
  data: emptyList,
};
