import LogoImg from "../img/logo.png";
import LogoImgMobile from "../img/logo_m.png";
import s1Img from "../img/s1_img.png";
import s1ImgM from "../img/s1_img_m.png";
import s2Icon from "../img/s2_icon1.png";
import s2Icon2 from "../img/s2_icon2.png";
import mIcon2 from "../img/m_icon2.png";
import s2Icon3 from "../img/s2_icon3.png";
import mIcon3 from "../img/m_icon3.png";
import s2Icon4 from "../img/s2_icon4.png";
import mIcon4 from "../img/m_icon4.png";
import nb from "../img/nb.png";
import nb2 from "../img/nb2.png";
import nb3 from "../img/nb3.png";
import nb4 from "../img/nb4.png";
import nb5 from "../img/nb5.png";
import android_btn from "../img/android_btn.png";
import a_m_b from "../img/a_m_b.png";
import iphone_btn from "../img/iphone_btn.png";
import i_m_b from "../img/i_m_b.png";
import qr from "../img/qr.png";
import qr_m from "../img/qr_m.png";
import phone from "../img/phone.png";
import s5_icon1 from "../img/s5_icon1.png";
import b_24 from "../img/24_b.png";
import s5_icon2 from "../img/s5_icon2.png";
import b2_24 from "../img/24_b2.png";
import b3_24 from "../img/24_b3.png";
import s5_icon3 from "../img/s5_icon3.png";
import question_img from "../img/question_img.png";
import facebook from "../img/facebook.png";
import sm1 from "../img/sm1.png";
import twitter from "../img/twitter.png";
import sm2 from "../img/sm2.png";
import instargram from "../img/instargram.png";
import sm3 from "../img/sm3.png";
import { routeMapper } from "../routes";
import { Link } from "react-router-dom";
import "../css/home.scss";

export default function HomePage() {
  return (
    <div id="wrap">
      {/* <!-- header --> */}
      <header id="header">
        <div className="hamberger">
          <div className="m_logo">
            <img className="mobile" src={LogoImgMobile} alt="logo_img" />
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
            <img src={LogoImg} alt="logo_img" />
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

      {/* <!-- s1 --> */}
      <section className="s1">
        <h2>hiddenTitle</h2>
        <div className="center">
          <div className="s_top">
            <div className="s_left">
              <h2>비트코스트 장외거래 플랫폼이 곧 출시 됩니다.</h2>
              <p>
                <span>사전가입</span>하시고 이벤트 혜택을 누리세요!
              </p>
            </div>
            <div className="s_right">
              <div className="s1_img">
                <img src={s1Img} alt="section_img" />
                <img className="mobile" src={s1ImgM} alt="img" />
              </div>
            </div>
          </div>
          <div className="s_bottom">
            <button type="button" className="button">
              사전가입하기
            </button>
            <div className="bar">
              <div className="bar_fill"></div>
              <div className="bar_number">
                <span>0</span>
                <span>83,490</span>
                <span>100,000</span>
              </div>
            </div>
            <div className="check_customer">
              <p>고객확인 하셨나요? 완료 후 매매/입출금이 가능합니다.</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /s1 --> */}

      {/* <!-- s2 --> */}
      <section className="s2">
        <h2>hiddenTitle</h2>
        <div className="center">
          <div className="s_top">
            <h2>사전가입 이벤트 및 혜택</h2>
            <p>지금 바로 BITCOST에 사전가입 하세요!</p>
          </div>
          <div className="s_bottom">
            <div className="s2_event">
              <div className="event_card">
                <div className="icon_img">
                  <img src={s2Icon} alt="icon_img" />
                  <img className="mobile" src={s1ImgM} alt="img" />
                </div>
                <p>EVENT 1</p>
                <span>오로지 사전가입 고객분들만</span>
                <div className="h_text">
                  <h3>거래수수수료 50% 할인</h3>
                </div>
                <button type="button" className="button">
                  신청하기
                </button>
              </div>
              <div className="event_card">
                <div className="icon_img">
                  <img src={s2Icon2} alt="icon_img" />
                  <img className="mobile" src={mIcon2} alt="img" />
                </div>
                <p>EVENT 2</p>
                <span>최대 추천인 총 2천만원 상당 테더 추첨</span>
                <div className="h_text">
                  <h3>1등 10,000 테더 (1명)</h3>
                  <h4>2등 10,00 테더 (5명)</h4>
                  <h5>3등 50 테더 (100명)</h5>
                </div>
                <button type="button" className="button">
                  신청하기
                </button>
              </div>
              <div className="event_card">
                <div className="icon_img">
                  <img src={s2Icon3} alt="icon_img" />
                  <img className="mobile" src={mIcon3} alt="img" />
                </div>
                <p>EVENT 3</p>
                <span>
                  비트코스트 플랫폼을 유튜브 SNS 블로그 등 온라인에 홍보해주세요
                </span>
                <div className="h_text">
                  <h3>1등 10,000 테더 (1명)</h3>
                  <h4>2등 10,00 테더 (5명)</h4>
                  <h5>3등 50 테더 (100명)</h5>
                </div>
                <button type="button" className="button">
                  신청하기
                </button>
              </div>
              <div className="event_card">
                <div className="icon_img">
                  <img src={s2Icon4} alt="icon_img" />
                  <img className="mobile" src={mIcon4} alt="img" />
                </div>
                <p>EVENT 4</p>
                <span>
                  유튜버,인플루언서,블로거 등 비트코스트와 함께 하실 파트너
                  신청을 받고 있습니다
                </span>
                <div className="h_text">
                  <h3>거래수수료 페이백 등 다양한 혜택을 누려보세요</h3>
                </div>
                <button type="button" className="button">
                  신청하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /s2 --> */}

      {/* <!-- s3 --> */}
      <section className="s3">
        <h2>hiddenTitle</h2>
        <div className="center">
          <div className="s_top">
            <h2>WHAT IS BITCOST?</h2>
          </div>
          <div className="s_bottom">
            <div className="s_left">
              <div className="notebook">
                <img src={nb} alt="notebook" />
                <img src={nb2} alt="notebook" />
                <img src={nb3} alt="notebook" />
                <img src={nb4} alt="notebook" />
                <img src={nb5} alt="notebook" />
              </div>
            </div>
            <div className="s_right">
              <h3>비트코스트에서 다양한 거래를 경험해 보세요!</h3>
              <p>
                Spot Trade, Futures Trade, P2P, Staking, Mining, margin 등
                다양한 형태의 코인 거래를 이용 할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /s3 --> */}

      {/* <!-- s4 --> */}
      <section className="s4">
        <h2>hiddenTitle</h2>
        <div className="center">
          <div className="s_top">
            <h2>빠르고 간편한 모바일 앱</h2>
            <p>
              코인 정보부터 주문까지 모바일에서도 간편하고 빠른 디지털 자산
              거래소를 만나보세요.
            </p>
          </div>
          <div className="s_bottom">
            <div className="s_left">
              <div className="button_img and">
                <img src={android_btn} alt="btn" />
                <img className="mobile" src={a_m_b} alt="btn" />
              </div>
              <div className="button_img ip">
                <img src={iphone_btn} alt="btn" />
                <img className="mobile" src={i_m_b} alt="btn" />
              </div>
              <div className="qr">
                <img src={qr} alt="img" />
                <img className="mobile" src={qr_m} alt="img" />
              </div>
              <p>모바일앱은 곧 출시 예정입니다</p>
            </div>
            <div className="s_middle">
              <img src={phone} alt="img" />
              <img className="mobile" src={phone} alt="img" />
            </div>
            <div className="s_right">
              <div className="text_group">
                <h3>증권사 MTS 수준의 안전한 거래</h3>
                <p>
                  빠르고 간편한 모바일 주문 지원 <br /> 모바일에 최적화된 거래
                </p>
              </div>
              <div className="text_group">
                <h3>24시간 쉽고 빠른 거래 지원</h3>
                <p>
                  비트코스트는 모바일로 언제 어디서나 <br /> 쉽고, 빠르게 거래를
                  지원합니다.
                </p>
              </div>
              <div className="text_group">
                <h3>실시간 코인 동향과 분석</h3>
                <p>
                  다양한 코인을 분석하고 차트를 보며 <br /> 한 눈에 파악이
                  가능합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /s4 --> */}

      {/* <!-- s5 --> */}
      <section className="s5">
        <h2>hiddenTitle</h2>
        <div className="center">
          <div className="s_top">
            <h2>BITCOST에서 24시간 안심거래 하세요!</h2>
            <p>
              글로벌 최고 수준의 파트너들과 함께 가장 안전한 보안체계를
              구축합니다.
            </p>
          </div>
          <div className="s_bottom">
            <div className="b_card">
              <div className="b_card_img">
                <img src={s5_icon1} alt="img" />
                <img className="mobile" src={b_24} alt="img" />
              </div>
              <h3>Wallet security</h3>
              <p>
                콜드월렛에 안전하게 분리 보관 최고 수준의 보안 시스템을 기반으로
                다양한 디지털 자산 지갑을 안전하게 운영합니다.
              </p>
            </div>
            <div className="b_card">
              <div className="b_card_img">
                <img src={s5_icon2} alt="img" />
                <img className="mobile" src={b2_24} alt="img" />
              </div>
              <h3>Security system</h3>
              <p>
                마진거래소에서는 중앙시스템의 분업화로 사용자의 자금을
                보호합니다.
              </p>
            </div>
            <div className="b_card">
              <div className="b_card_img">
                <img src={b3_24} alt="img" />
                <img className="mobile" src={s5_icon3} alt="img" />
              </div>
              <h3>Various Currency</h3>
              <p>
                마진거래소에서는 국가간의 규제없이 자유로운 거래가 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /s5 --> */}

      {/* <!-- s6 --> */}
      <section className="s6">
        <h2>hiddenTitle</h2>
        <div className="center">
          <div className="s_left">
            <div className="blue_bg">
              <div className="s6_img">
                <img src={question_img} alt="img" />
              </div>
              <h3>Question</h3>
              <p>궁금한 점을 알려주세요.</p>
              <div className="sns">
                <div className="icon_img">
                  <img src={facebook} alt="img" />
                  <img className="mobile" src={sm1} alt="img" />
                </div>
                <div className="icon_img">
                  <img src={twitter} alt="img" />
                  <img className="mobile" src={sm2} alt="img" />
                </div>
                <div className="icon_img">
                  <img src={instargram} alt="img" />
                  <img className="mobile" src={sm3} alt="img" />
                </div>
              </div>
            </div>
          </div>
          <div className="s_right">
            <form className="q_form">
              <div className="s_inp">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Phone(optional)" />
              </div>
              <input type="text" placeholder="Email" />
              <input type="text" className="des" placeholder="Description" />
              <button type="button" className="inquire">
                문의하기
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* <!-- /s6 --> */}

      {/* <!-- footer --> */}
      <footer className="footer">
        <div className="center">
          <div className="f_left">
            <div className="f_logo_img">
              <img src={LogoImg} alt="img" />
              <img className="mobile" src={LogoImgMobile} alt="img" />
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
