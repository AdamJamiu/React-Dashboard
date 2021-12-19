// import DummyAvatarImage from "../../images/svg/user-avatar.svg";
export default function UserAvatar({ src = '' }) {
  return (
    <>
      <img src={src} alt="" />
    </>
  );
}
