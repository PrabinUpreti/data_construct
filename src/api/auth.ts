import { ICredential } from "@/@types";
import { LOGIN_BASE_URL } from "@/utils/constants";
import axios from "axios";

export default async function useLoginRequest(credential: ICredential) {
  try {
    const res = await axios.post(LOGIN_BASE_URL, credential);
    return res;
  } catch (error) {
    console.log(error);
  }
}
