import { sendRequest } from "@/utils/api-send.js";
import userStore from '../store'

export default {
  async login(UserId, UserPassowrd){
    const ResponseData = await sendRequest(
      '/user/dj-rest-auth/login/',
      {
        email: UserId,
        password: UserPassowrd
      },
      'POST'
    )
    return ResponseData;
  },
  async signup(UserId, UserPassowrd){
    const ResponseData = await sendRequest(
      '/user/signup/',
      {
        email: UserId,
        password: UserPassowrd
      },
      'POST'
    )
    return ResponseData;
  },
}