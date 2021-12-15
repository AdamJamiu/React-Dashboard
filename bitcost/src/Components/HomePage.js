import React from 'react';
import logo from '../img/logo_m.png';
import s1 from '../img/s1_img.png';
import s2 from '../img/s2_icon1.png';
import icon1 from '../img/m_icon1.png';
import s5 from '../img/s5_icon1.png';
import s24 from '../img/24_b.png';
import ss2 from '../img/s2_icon2.png';
import mIcon2 from '../img/m_icon2.png';
import s2icon3 from '../img/s2_icon3.png';
import mIcon3 from '../img/m_icon3.png';
import s2Icon4 from '../img/s2_icon4.png';
import nb from '../img/nb.png';
import nb2 from '../img/nb2.png';
import nb3 from '../img/nb3.png';
import nb4 from '../img/nb4.png';
import nb5 from '../img/nb5.png';
import androidBtn from '../img/android_btn.png';

// img/nb.png
// img/s2_icon4.png



const HomePage = () => {
    return (
        <>
         <div id="wrap">

{/* header  */}
<header id="header">
    <div class="hamberger">
        <div class="m_logo">
            <img class="mobile" src={logo} alt="logo_img"/>
        </div>
        <button type="button">Login</button>
        <div class="m_gnb">
            <div class="m_a">
                <a href="#wrap">Home</a>
                <a href="#wrap">Margin</a>
                <a href="#wrap">P2P</a>
                <a href="#wrap">Staking</a>
                <a href="#wrap">Partner</a>
            </div>
        </div>
    </div>
    <nav class="gnb">
        <h1 class="logo">
            <img src={logo} alt="logo_img"/>
        </h1>
        <ul class="main_menu">
            <li><a href="#wrap">Home</a></li>
            <li><a href="#wrap">Margin</a></li>
            <li><a href="#wrap">P2P</a></li>
            <li><a href="#wrap">Staking</a></li>
            <li><a href="#wrap">Partner</a></li>
        </ul>
        <button type="button" class="button">Login</button>
    </nav>
</header>

{/* /header  */}


 {/* s1 */}
<section class="s1">
    <h2>hiddenTitle</h2>
    <div class="center">
        <div class="s_top">
            <div class="s_left">
                <h2>비트코스트 장외거래 플랫폼이 곧 출시 됩니다.</h2>
                <p><span>사전가입</span>하시고 이벤트 혜택을 누리세요!</p>
            </div>
            <div class="s_right">
                <div class="s1_img">
                    <img src={s1} alt="section_img" />
                    <img class="mobile" src={s2} alt="img" />
                </div>
            </div>
        </div>
        <div class="s_bottom">
            <button type="button" class="button">사전가입하기</button>
            <div class="bar">
                <div class="bar_fill"></div>
                <div class="bar_number">
                    <span>0</span>
                    <span>83,490</span>
                    <span>100,000</span>
                </div>
            </div>
            <div class="check_customer">
                <p>고객확인 하셨나요? 완료 후 매매/입출금이 가능합니다.</p>
            </div>
        </div>
    </div>
</section>
 {/* /s1 */}


{/*  s2  */}
<section class="s2">
    <h2>hiddenTitle</h2>
    <div class="center">
        <div class="s_top">
            <h2>사전가입 이벤트 및 혜택</h2>
            <p>지금 바로 BITCOST에 사전가입 하세요!</p>
        </div>
        <div class="s_bottom">
            <div class="s2_event">
                <div class="event_card">
                    <div class="icon_img">
                        <img src={s2} alt="icon_img" />
                        <img class="mobile" src={icon1} alt="img" />
                    </div>
                    <p>EVENT 1</p>
                    <span>오로지 사전가입 고객분들만</span>
                    <div class="h_text">
                        <h3>거래수수수료 50% 할인</h3>
                    </div>
                    <button type="button" class="button">신청하기</button>
                </div>
                <div class="event_card">
                    <div class="icon_img">
                        <img src={ss2} alt="icon_img" />
                        <img class="mobile" src={mIcon2} alt="img" />
                    </div>
                    <p>EVENT 2</p>
                    <span>최대 추천인 총 2천만원 상당 테더 추첨</span>
                    <div class="h_text">
                        <h3>1등 10,000 테더 (1명)</h3>
                        <h4>2등 10,00 테더 (5명)</h4>
                        <h5>3등 50 테더 (100명)</h5>
                    </div>
                    <button type="button" class="button">신청하기</button>
                </div>
                <div class="event_card">
                    <div class="icon_img">
                        <img src={s2icon3} alt="icon_img" />
                        <img class="mobile" src={mIcon3} alt="img" />
                    </div>
                    <p>EVENT 3</p>
                    <span>비트코스트 플랫폼을 유튜브 SNS 블로그 등 온라인에 홍보해주세요</span>
                    <div class="h_text">
                        <h3>1등 10,000 테더 (1명)</h3>
                        <h4>2등 10,00 테더 (5명)</h4>
                        <h5>3등 50 테더 (100명)</h5>
                    </div>
                    <button type="button" class="button">신청하기</button>
                </div>
                <div class="event_card">
                    <div class="icon_img">
                        <img src={s2Icon4} alt="icon_img" />
                        <img class="mobile" src={s2Icon4} alt="img" />
                    </div>
                    <p>EVENT 4</p>
                    <span>유튜버,인플루언서,블로거 등 비트코스트와 함께 하실 파트너 신청을 받고 있습니다</span>
                    <div class="h_text">
                        <h3>거래수수료 페이백 등 다양한 혜택을 누려보세요</h3>
                    </div>
                        <button type="button" class="button">신청하기</button>
                </div>
            </div>
        </div>
    </div>
</section>
{/*  /s2  */}


{/* s3  */}
<section class="s3">
    <h2>hiddenTitle</h2>
    <div class="center">
        <div class="s_top">
            <h2>WHAT IS BITCOST?</h2>
        </div>
        <div class="s_bottom">
            <div class="s_left">
                <div class="notebook">
                    <img src={nb} alt="notebook" />
                    <img src={nb2} alt="notebook" />
                    <img src={nb3} alt="notebook" />
                    <img src={nb4} alt="notebook" />
                    <img src={nb5} alt="notebook" />
                </div>
            </div>
            <div class="s_right">
                <h3>비트코스트에서 다양한 거래를 경험해 보세요!</h3>
                <p>Spot Trade, Futures Trade, P2P, Staking, Mining, margin 등 다양한 형태의 코인 거래를 이용 할 수 있습니다.</p>
            </div>
        </div>
    </div>
</section>
{/*  /s3  */}


 {/* s4  */}
<section class="s4">
    <h2>hiddenTitle</h2>
    <div class="center">
        <div class="s_top">
            <h2>빠르고 간편한 모바일 앱</h2>
            <p>코인 정보부터 주문까지 모바일에서도 간편하고 빠른 디지털 자산 거래소를 만나보세요.</p>
        </div>
        <div class="s_bottom">
            <div class="s_left">
                <div class="button_img and">
                    <img src={androidBtn} alt="btn"/>
                    <img class="mobile" src="img/a_m_b.png" alt="btn"/>
                </div>
                <div class="button_img ip">
                    <img src="img/iphone_btn.png" alt="btn"/>
                    <img class="mobile" src="img/i_m_b.png" alt="btn"/>
                </div>
                <div class="qr">
                    <img src="img/qr.png" alt="img"/>
                    <img class="mobile" src="img/qr_m.png" alt="img"/>
                </div>
                <p>모바일앱은 곧 출시 예정입니다</p>
            </div>
            <div class="s_middle">
                <img src="img/phone.png" alt="img" />
                <img class="mobile" src="img/phone.png" alt="img" />
            </div>
            <div class="s_right">
                <div class="text_group">
                    <h3>증권사 MTS 수준의 안전한 거래</h3>
                    <p>빠르고 간편한 모바일 주문 지원 <br/> 모바일에 최적화된 거래</p>
                </div>
                <div class="text_group">
                    <h3>24시간 쉽고 빠른 거래 지원</h3>
                    <p>비트코스트는 모바일로 언제 어디서나 <br/> 쉽고, 빠르게 거래를 지원합니다.</p>
                </div>
                <div class="text_group">
                    <h3>실시간 코인 동향과 분석</h3>
                    <p>다양한 코인을 분석하고 차트를 보며 <br/> 한 눈에 파악이 가능합니다.</p>
                </div>

            </div>
        </div>
    </div>
</section>
{/*  /s4 */}

 {/* s5  */}
<section class="s5">
    <h2>hiddenTitle</h2>
    <div class="center">
        <div class="s_top">
            <h2>BITCOST에서 24시간 안심거래 하세요!</h2>
            <p>글로벌 최고 수준의 파트너들과 함께 가장 안전한 보안체계를 구축합니다.</p>
        </div>
        <div class="s_bottom">
            <div class="b_card">
                <div class="b_card_img">
                    <img src={s5} alt="img" />
                    <img class="mobile" src={s24} alt="img" />
                </div>
                <h3>Wallet security</h3>
                <p>콜드월렛에 안전하게 분리 보관 최고 수준의 보안 시스템을 기반으로 다양한 디지털 자산 지갑을 안전하게 운영합니다.</p>
            </div>
            <div class="b_card">
                <div class="b_card_img">
                    <img src="img/s5_icon2.png" alt="img" />
                    <img class="mobile" src="img/24_b2.png" alt="img" />
                </div>
                <h3>Security system</h3>
                <p>마진거래소에서는 중앙시스템의 분업화로 사용자의 자금을 보호합니다.</p>
            </div>
            <div class="b_card">
                <div class="b_card_img">
                    <img src="img/s5_icon3.png" alt="img" />
                    <img class="mobile" src="img/24_b3.png" alt="img" />
                </div>
                <h3>Various Currency</h3>
                <p>마진거래소에서는 국가간의 규제없이 자유로운 거래가 가능합니다.</p>
            </div>
        </div>
    </div>
</section>
{/* /s5  */}

{/* s6 */}
<section class="s6">
    <h2>hiddenTitle</h2>
    <div class="center">
        <div class="s_left">
            <div class="blue_bg">
                <div class="s6_img">
                    <img src="img/question_img.png" alt="img" />
                </div>
                <h3>Question</h3>
                <p>궁금한 점을 알려주세요.</p>
                <div class="sns">
                    <div class="icon_img">
                        <img src="img/facebook.png" alt="img" />
                        <img class="mobile" src="img/sm1.png" alt="img" />
                    </div>
                    <div class="icon_img">
                        <img src="img/twitter.png" alt="img" />
                        <img class="mobile" src="img/sm2.png" alt="img" />
                    </div>
                    <div class="icon_img">
                        <img src="img/instargram.png" alt="img"/ >
                        <img class="mobile" src="img/sm3.png" alt="img" />
                    </div>
                </div>
            </div>
        </div>
        <div class="s_right">
            <form class="q_form">
                <div class="s_inp">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Phine(optional)" />
                </div>
                <input type="text" placeholder="Email"/>
                <input type="text" class="des" placeholder="Description"/>
                <button type="button" class="inquire">
                    문의하기
                </button>
            </form>
        </div>
    </div>
</section>
{/*  /s6  */}


 {/* footer */}
<footer class="footer">
    <div class="center">
        <div class="f_left">
            <div class="f_logo_img">
                <img src="img/logo.png" alt="img" />
                <img class="mobile" src="img/logo_m.png" alt="img" />
            </div>
        </div>
        <div class="s_right">
            <ul class="f_menu">
                <li class="f_title">
                    회사
                    <ul>
                        <li>회사소개</li>
                        <li>공지사항</li>
                        <li>이용약관</li>
                        <li>Open API 이용약관</li>
                        <li><a href="#wrap">개인정보처리방침</a></li>
                    </ul>
                </li>
                <li class="f_title">
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
{/* footer  */}
</div>
        </>
    )
}


export default HomePage;