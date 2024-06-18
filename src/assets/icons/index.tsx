import IconCart from "./cart.svg";
import IconDelete from "./delete.svg";
import AddIcon from "./add.svg";
import RemoveIcon from "./remove.svg";
import IconCheck from "./check.svg";
import TelegramIcon from "./telegram.svg";
import TwitterIcon from "./twitter.svg";
import PlusIcon from "./plus.svg";
import walletIcon from "./wallet.svg";
import ShareIcon from "./share.svg";
import LikeIcon from "./like.svg";
import ProfileIcon from "./profile.svg";
import ArrowIcon from "./arrow.svg";
import CoinIcon from "./coin.svg";
import RightIcon from "./right.svg";
import EditIcon from "./edit.svg";
import MemeIcon from "./meme.svg";
import ReferralIcon from "./referral.svg";
import TextToMeme from "./texttomeme.svg";
import ImageRoMeme from "./imagetomeme.svg";
import UserIcon from "./user.svg";
import DotsIcon from "./dots.svg";
import MedalIcon from "./medal.svg";
import CryptoIcon from "./crypto.svg";
import IndirectIcon from "./indirect.svg";
import FirstIcon from "./first.svg";
import SecondIcon from "./second.svg";
import ThirdIcon from "./third.svg";
import SadIcon from "./sad.svg";
import BitCoin from "./bitcoin.svg";
import GameIcon from "./game.svg";
import TrendingIcon from "./trending.svg";
import CopyIcon from "./copy.svg";
import CloseIcon from "./close.svg";
import SnackbarCheck from "./snackbar_check.svg";
import ImagePlusIcon from "./image-plus.svg";
import BulbIcon from "./bulb.svg";
import CancelIcon from "./cancel.svg";
import PremiumIcon from "./premium.svg";
import InfoIcon from "./info.svg";
import TickIcon from "./tick.svg";
import Language from "./language03.svg";
import Help from "./help4.svg";
import RemoveBin from "./clear.svg";
import Message from "./message2.svg";
import Bulb from "./light-bulb.svg";
import QuestionMark from "./question-mark.svg";

const icons = {
  questionMark: QuestionMark,
  news: Bulb,
  support: Message,
  removeBin: RemoveBin,
  help: Help,
  langauge: Language,
  cart: IconCart,
  delete: IconDelete,
  add: AddIcon,
  remove: RemoveIcon,
  check: IconCheck,
  telegram: TelegramIcon,
  twitter: TwitterIcon,
  plus: PlusIcon,
  wallet: walletIcon,
  share: ShareIcon,
  like: LikeIcon,
  profile: ProfileIcon,
  arrow: ArrowIcon,
  coin: CoinIcon,
  right: RightIcon,
  edit: EditIcon,
  meme: MemeIcon,
  referral: ReferralIcon,
  texttomeme: TextToMeme,
  imagetomeme: ImageRoMeme,
  user: UserIcon,
  dots: DotsIcon,
  medal: MedalIcon,
  crypto: CryptoIcon,
  indirect: IndirectIcon,
  first: FirstIcon,
  second: SecondIcon,
  third: ThirdIcon,
  sad: SadIcon,
  bitcoin: BitCoin,
  game: GameIcon,
  trending: TrendingIcon,
  copy: CopyIcon,
  close: CloseIcon,
  snackbarCheck: SnackbarCheck,
  imagePlus: ImagePlusIcon,
  bulb: BulbIcon,
  cancel: CancelIcon,
  premium: PremiumIcon,
  info: InfoIcon,
  tick: TickIcon,
};

export default icons;

export type IconType = keyof typeof icons;
