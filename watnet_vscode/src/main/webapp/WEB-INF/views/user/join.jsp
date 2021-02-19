<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<div class="join-container">
            <div class="id_pw-container">
                <h3 class="join-h3">아이디/비밀번호</h3>
                <div class="id_pw-form">
                    <ul class="id_pw-list">
                        <li>
                            <span>아이디</span>
                            <input id="id" type="text" placeholder="아이디">
                            <button id="idChk" type="button">중복확인</button>
                        </li>
                        <li>
                            <span>비밀번호</span>
                            <input id="pw" type="password" placeholder="비밀번호">
                        </li>
                        <li>
                            <span>비밀번호확인</span>
                            <input id="pwChk" type="password" placeholder="비밀번호 확인">
                        </li>
                    </ul>
                </div>
            </div>
            <div class="join_userinfo-container">
                <h3 class="join-h3">내 정보 입력</h3>
                <div class="join_userinfo-form">
                    <ul class="join_userinfo-list">
                        <li>
                            <span>닉네임</span>
                            <input id="nickname" type="text" placeholder="닉네임">
                            <button id="nicknameChk" type="button">중복확인</button>
                        </li>
                        <li>
                            <span>이메일</span>
                            <input id="email" type="text" placeholder="이메일">
                        </li>
                        <li>
                            <span>휴대폰 번호</span>
                            <input id="phoneNumber" type="text" placeholder="휴대폰 번호">
                            <button id="phoneNumberChk" type="button">휴대폰인증</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="join_etc-container">
                <h3 class="join-h3">아이디/비밀번호</h3>
                <div class="join_etc-form">
                    <ul class="join_etc-list">
                        <li>
                            <div class="profileImg-container">
                                <span>프로필 사진</span>
                                <label id="profileImg-btn" for="profileImg">
                                    파일 업로드
                                </label>
                                <input id="profileImg" type="file" accept="image/*">
                                <span class="explanation">이미지는 60px X 60px 사이즈에 최적화</span>
                            </div>
                        </li>
                        <li>
                            <span>추천인 아이디</span>
                            <input id="recId" type="text" placeholder="추천인 아이디">
                            <span class="explanation">추천인 ID를 적어주시면 500P가 지급되며, 추천 받은사람도 500P가 지급됩니다.</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="join-btn-container">
                <a href="/index">
                    <button id="cancleBtn" type="button">취소</button>
                </a>
                <button id="joinBtn" type="button">회원 가입</button>
            </div>
        </div>