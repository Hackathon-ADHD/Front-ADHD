import { atom } from "recoil";

export const isLoggedInState = atom({
  key: "isLoggedInState",
  default: false,
});
export const profileNameState = atom({
  key: "profileNameState",
  default: "",
});
export const loginTokenState = atom({
  key: "loginTokenState",
  default: "",
});
