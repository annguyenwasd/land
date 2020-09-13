import { atom } from "recoil";
import Person from "../classes/Person";

export const sideA = atom({
  key: "sideA",
  default: [new Person()],
});

export const sideB = atom({
  key: "sideB",
  default: [new Person()],
});

export const changes = {
  key: "changes",
  default: {
    gcn: {
      number: "",
      publish: "",
      approveDate: "",
      location: "",
    },
    before: {
      square: 0,
      number: "",
      mapNumber: "",
      purpose: "",
    },
    after: {
      square: "",
      number: "",
      mapNumber: "",
      purpose: "",
    },
    reason: "",
  },
};

export const contract = atom({
  key: "contract",
  default: {
    land: {
      squareText: "",
      address: "",
      purposeText: "",
      duration: "",
      source: "",
      limitation: "",
      types: [],
    },
    price: {
      number: "",
      text: "",
    },
    authenticateLocation: "",
  },
});

export const metadata = {
  key: "metadata",
  default: {
    year: new Date().getFullYear(),
  },
};
