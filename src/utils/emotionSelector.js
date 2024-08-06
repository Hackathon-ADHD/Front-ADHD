import HappyEmotion from "../assets/images/기분 좋아.png";
import ExcitedEmotion from "../assets/images/신나.png";
import AmazedEmotion from "../assets/images/놀라워.png";
import SadEmotion from "../assets/images/슬퍼.png";
import LoveEmotion from "../assets/images/사랑이야.png";
import CuriousEmotion from "../assets/images/궁금해.png";
import DisappointedEmotion from "../assets/images/마음에 안들어.png";
import HurtEmotion from "../assets/images/아파.png";
import ImpressedEmotion from "../assets/images/역시 멋져.png";
import AngryEmotion from "../assets/images/화나.png";
import DizzyEmotion from "../assets/images/어질어질해.png";
import SosoEmotion from "../assets/images/그냥.png";
export const getEmotionByType = (type) => {
    switch (type) {
        case "HAPPY":
            return HappyEmotion;
        case "EXCITED":
            return ExcitedEmotion;
        case "AMAZED":
            return AmazedEmotion;
        case "SAD":
            return SadEmotion;
        case "LOVE":
            return LoveEmotion;
        case "CURIOUS":
            return CuriousEmotion;
        case "DISAPPOINTED":
            return DisappointedEmotion;
        case "HURT":
            return HurtEmotion;
        case "IMPRESSED":
            return ImpressedEmotion;
        case "ANGRY":
            return AngryEmotion;
        case "DIZZY":
            return DizzyEmotion;
        case "SOSO":
            return SosoEmotion;
        default:
            return HappyEmotion;
    }
};
