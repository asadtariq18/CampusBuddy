import { combineReducers } from "redux";
import LoginReducer from "./SignIn/reducers";
import SignUpReducer from "./SignUp/reducers";
import VerifyEmailReducer from "./VerifyEmail/reducers";
import ForgotPasswordReducer from "./ForgotPassword/reducers";
import HomeReducer from "./Home/reducers";
import CreatePostReducer from "./CreatePost/reducers";
import ApplyDonationReducer from "./ApplyDonation/reducers";
import DonateReducer from "./Donate/reducers";
import EditProfileReducer from "./EditProfile/reducers";
import InboxReducer from "./Inbox/reducers";
import SearchReducer from "./Search/reducers";
import ProfileReducer from "./Profile/reducers";
import ThemeReducer from "./Theme/reducers";
import OrderFoodReducer from "./OrderFood/reducers";

export const rootReducer = combineReducers({
  login: LoginReducer,
  signup: SignUpReducer,
  emailVerify: VerifyEmailReducer,
  forgotPassword: ForgotPasswordReducer,
  home: HomeReducer,
  createPost: CreatePostReducer,
  applyDonation: ApplyDonationReducer,
  donate: DonateReducer,
  editProfile: EditProfileReducer,
  inbox: InboxReducer,
  search: SearchReducer,
  profile: ProfileReducer,
  theme: ThemeReducer,
  orderFood: OrderFoodReducer
});
