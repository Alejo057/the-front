import {atom} from "recoil";
import {UserDto} from "../../models/user/User.dto";

const userState = atom({
    key: 'userState',
    default: new UserDto()
})

export default userState;