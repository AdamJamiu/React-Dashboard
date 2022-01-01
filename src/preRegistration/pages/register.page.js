import LogoImg from "../img/logo.png";
import LogoImgMobile from "../img/logo_m.png";
import UserIcon from "../inc/images/nick.png";
import UserIcon2 from "../inc/images/nick6.png";
import WorldIcon from "../inc/images/nick2.png";
import MailIcon from "../inc/images/nick4.png";
import PhoneIcon from "../inc/images/nick3.png";
import { Link } from "react-router-dom";
import { routeMapper } from "../routes";
import "../css/register.scss";
import { useEffect } from "react";

export default function RegistrationPage() {
  useEffect(() => {
    if (window.$)
      window.$(".hamberger").click(function () {
        window.$(".m_a").slideToggle("300s");
      });
  }, []);
  return (
    <div className="bg_image" style={{ backgroundSize: "cover" }}>
      {/* <!-- header --> */}
      <header id="header">
        <div className="hamberger">
          <div className="m_logo">
            <Link to={routeMapper.home}>
              <img className="mobile" src={LogoImgMobile} alt="logo_img" />
            </Link>
          </div>
          <button type="button">
            <Link to={routeMapper.register}>Register</Link>
          </button>
          <div className="m_gnb">
            <div className="m_a">
              <a href="#">Home</a>
              <a href="#">Margin</a>
              <a href="#">P2P</a>
              <a href="#">Staking</a>
              <a href="#">Partner</a>
            </div>
          </div>
        </div>
        <nav className="gnb">
          <h1 className="logo">
            <Link to={routeMapper.home}>
              <img src={LogoImg} alt="logo_img" />
            </Link>
          </h1>
          <ul className="main_menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Margin</a>
            </li>
            <li>
              <a href="#">P2P</a>
            </li>
            <li>
              <a href="#">Staking</a>
            </li>
            <li>
              <a href="#">Partner</a>
            </li>
          </ul>
          <button type="button" className="button">
            <Link to={routeMapper.register}>Register</Link>
          </button>
        </nav>
      </header>

      {/* <!-- /header --> */}

      {/* <!-- /header --> */}

      <form name="joinFrm" method="post">
        <div className="h-100">
          <div className="register_wrap">
            <div className="card-body">
              <div className="lr_icon text-l-ks">Register</div>
              <h5 className="text-ks">
                사전가입을 하시고 이벤트 혜택을 누리세요.
              </h5>
              <div className="form-group">
                <span>
                  <img src={UserIcon} alt="닉네임" />
                </span>
                <label htmlFor="nickName" className="bold label-name">
                  Nick Name
                </label>
                <input
                  className="form-control"
                  id="nickName"
                  name="nickName"
                  type="text"
                  placeholder="Enter NickName"
                />
              </div>

              <div className="form-group">
                <span>
                  <img src={UserIcon2} alt="방문" />
                </span>
                <label htmlFor="inviteCode" className="bold label-name">
                  Invite code
                </label>
                <input
                  className="form-control"
                  id="inviteCode"
                  name="inviteCode"
                  type="text"
                  placeholder="Invite code (option)"
                />
              </div>

              <div className="form-group">
                <span>
                  <img src={WorldIcon} alt="국가" />
                </span>
                <label htmlFor="country" className="bold label-name">
                  Country
                </label>
                <select
                  className="language-select w-100 mt-0"
                  data-width="fit"
                  id="country"
                  name="country"
                >
                  <option value="ko">South Korea (82)</option>
                  <option value="en">England (44)</option>
                  <option value="us">USA (1)</option>
                </select>
              </div>

              <div className="form-group">
                <span>
                  <img src={MailIcon} alt="이메일" />
                </span>
                <label htmlFor="email" className="bold label-name">
                  Email
                </label>
              </div>
              <div className="form-group">
                <div className="append_wrap">
                  <input
                    type="tel"
                    name="email"
                    id="email"
                    className="form-control-yj2"
                    placeholder="Enter email"
                  />
                  <div className="btn-append">
                    <button
                      type="button"
                      id="authEmailSendBtn"
                      className="send-button"
                    >
                      Request
                    </button>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="append_wrap">
                  <input
                    type="text"
                    name="certifyEmailNum"
                    id="certifyEmailNum"
                    className="form-control-yj2"
                    placeholder="Auth Code"
                  />
                  <span className="time-left" id="countdownEmailTimer"></span>
                  <div className="btn-append">
                    <button
                      type="button"
                      id="authConfirmEmailBtn"
                      className="send-button"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
                <div
                  id="countdownEmailText"
                  className="time-over smaller"
                ></div>
              </div>

              {/* <!-- <div className="form-group"> 
                <span><img src="inc/images/nick3.png" alt="폰"/></span>
                <label htmlFor="phone" className="bold label-name">Phone</label>
                <input className="form-control" id="phone" name="phone" type="text" placeholder="Enter phone number"/>
              </div> --> */}

              <div className="form-group">
                <span>
                  <img src={PhoneIcon} alt="폰" />
                </span>
                <label htmlFor="phone" className="bold label-name">
                  Phone
                </label>
              </div>
              <div className="form-group">
                <div className="append_wrap">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="form-control-yj2"
                    placeholder="Enter phone number"
                  />
                  <div className="btn-append">
                    <button
                      type="button"
                      id="authSendBtn"
                      className="send-button"
                    >
                      Request
                    </button>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="append_wrap">
                  <input
                    id="authMobileCheck"
                    type="text"
                    name="certifyNum"
                    className="form-control-yj2"
                    placeholder="Auth Code"
                  />
                  <span className="time-left" id="countdownTimer"></span>
                  <div className="btn-append">
                    <button
                      type="button"
                      id="authConfirmBtn"
                      className="send-button"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
                <div id="countdownText" className="time-over smaller"></div>
              </div>

              <div className="margin_tb_30">
                <button
                  type="button"
                  id="joinBtn"
                  className="btn btn-block btn-login"
                >
                  사전가입
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <footer className="footer">
        <div className="center">
          <div className="f_left">
            <div className="f_logo_img">
              <Link to={routeMapper.home}>
                <img src={LogoImg} alt="img" />
                <img className="mobile" src="img/logo_m.png" alt="img" />
              </Link>
            </div>
          </div>
          <div className="s_right">
            <ul className="f_menu">
              <li className="f_title">
                회사
                <ul>
                  <li>회사소개</li>
                  <li>공지사항</li>
                  <li>이용약관</li>
                  <li>Open API 이용약관</li>
                  <li>
                    <a href="#">개인정보처리방침</a>
                  </li>
                </ul>
              </li>
              <li className="f_title">
                고객지원
                <ul>
                  <li>자주하는질문</li>
                  <li>1:1 문의하기</li>
                  <li>Open API</li>
                  <li>거래 이용 안내</li>
                  <li>입출금 이용 안내</li>
                  <li>상장문의 및 제보</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
