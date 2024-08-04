import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../components/button.tsx";
import Date from "../components/date.tsx";
import Nav from "../components/nav.tsx";
import "../App.css";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

export default function Mypage() {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isRevising, setIsRevising] = useState(false);
  const [isSaveButtonVisible, setIsSaveButtonVisible] = useState(true); // 변경사항 저장 버튼 표시 여부
  const [isLocked, setIsLocked] = useState(true); // 필드 잠금 상태 추가


  const onValid = (e) => {
    console.log(e, "onValid");
    alert("변경이 완료되었습니다.");
    window.location = "/mypage";
  };

  const onInvalid = (e) => {
    console.log(e, "onInvalid");
    alert("입력한 정보를 다시 확인해주세요.");
  };

  return (
    <div className="background">
      <Nav type="mypage" />
      <div className="main_contents_div">
        <Date />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "470px",
              height: "605px",
              backgroundColor: "#fff",
              borderRadius: "20px",
            }}
          >
            <div
              style={{
                width: "420px",
                fontFamily: "Pretendard-ExtraBold",
                fontSize: "22px",
                color: "#4470F3",
                margin: "0 auto",
                padding: "20px 0",
                textAlign: "left",
              }}
            >
              내 계정
            </div>
            <div
              style={{
                width: "420px",
                height: "520px",
                margin: "0 auto",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  fontFamily: "Pretendard-Regular",
                  fontSize: "12px",
                  color: "#555",
                  marginBottom: "15px",
                }}
              >
                사용자 이름
                <br />
                <span
                  style={{
                    fontFamily: "Pretendard-SemiBold",
                    fontSize: "22px",
                  }}
                >
                  맹의현
                </span>
              </div>
              <div
                style={{
                  fontFamily: "Pretendard-Regular",
                  fontSize: "12px",
                  color: "#555",
                  marginBottom: "50px",
                }}
              >
                이메일
                <br />
                <span
                  style={{
                    fontFamily: "Pretendard-SemiBold",
                    fontSize: "22px",
                  }}
                >
                  202011111@sangmyung.kr
                </span>
              </div>

              {isFormVisible ? (
                <form
                  style={{
                    width: "420px",
                    height: "400px",
                    margin: "0 auto",
                    textAlign: "left",
                  }}
                >
                  <div>
                    <input
                      type="password"
                      {...register("ID", {
                        required: "현재 비밀번호를 입력해주세요.",
                      })}
                      placeholder="현재 비밀번호"
                      style={{ width: "340px", height: "20px" }}
                    />
                    {errors.ID && (
                      <span
                        style={{
                          display: "block",
                          color: "red",
                          fontSize: "12px",
                          textAlign: "left",
                        }}
                      >
                        * {errors.ID.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <input
                      type="password"
                      {...register("Password", {
                        required: "새 비밀번호를 입력해주세요.",
                      })}
                      placeholder="새 비밀번호"
                      style={{
                        width: "340px",
                        height: "20px",
                        marginTop: "10px",
                      }}
                    />
                    {errors.Password && (
                      <span
                        style={{
                          display: "block",
                          color: "red",
                          fontSize: "12px",
                          textAlign: "left",
                        }}
                      >
                        * {errors.Password.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <input
                      type="password"
                      {...register("RePassword", {
                        required: "새 비밀번호를 확인해주세요.",
                      })}
                      placeholder="새 비밀번호 확인"
                      style={{
                        width: "340px",
                        height: "20px",
                        marginTop: "10px",
                      }}
                    />
                    {errors.RePassword && (
                      <span
                        style={{
                          display: "block",
                          color: "red",
                          fontSize: "12px",
                          textAlign: "left",
                        }}
                      >
                        * {errors.RePassword.message}
                      </span>
                    )}
                  </div>

                  <div
                    style={{
                      width: "350px",
                      marginTop: "20px",
                      paddingBottom: "20px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button
                      type="secondary"
                      size="medium"
                      title="취소"
                      onClick={() => setIsFormVisible(false)}
                    />
                    <Button
                      type="primary"
                      size="medium"
                      title="변경사항 저장"
                      onClick={handleSubmit(onValid, onInvalid)}
                    />
                  </div>
                </form>
              ) : (
                <Button
                  type="primary"
                  size="medium"
                  title="개인정보 변경"
                  onClick={() => setIsFormVisible(true)}
                />
              )}
            </div>
          </div>

          <div
            style={{
              width: "750px",
              height: "605px",
              backgroundColor: "#fff",
              borderRadius: "20px",
            }}
          >
            <div
              style={{
                width: "700px",
                fontFamily: "Pretendard-ExtraBold",
                fontSize: "22px",
                color: "#4470F3",
                margin: "0 auto",
                padding: "10px 0",
                textAlign: "left",
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center'
            }}
            >
              나만의 일정표 커스텀 규칙
              <div style={{display:'flex',alignItems:'center'}}>
              {isRevising ?(
              <button
                style={{
                  width: "205px",
                  height:"39px",
                  cursor: "pointer",
                  backgroundColor: isLocked ? 'white':'#4470F3',
                  color:'white',
                  border:'none',
                  borderRadius:'28px',
                  fontSize:'18px',

                 
                }}
                onClick={() =>{ setIsLocked(true);setIsRevising(false);}} // 필드 잠금
                >
                    변경사항 저장
                </button>
              ):null}
                <img
                src="../img/btn/edit_enabled.png"
                onClick={() =>{setIsRevising(true);setIsLocked(false);}}
                style={{
                  width: "42px",
                  height: "40px",
                  cursor: "pointer",
                  marginLeft: "15px",
                }}
              />
              </div>
            </div>
            <div
              style={{
                width: "700px",
                height: "520px",
                margin: "0 auto",
                backgroundColor: "white",
                borderRadius: "20px",
                fontFamily: "Pretendard-Regular",
                border: "1px solid #EDEDED",
              }}
            >
              <div style={{ display: "flex", marginLeft: "23px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <p>
                    목표 <b>워라벨</b> :{" "}
                  </p>
                  <p>
                    하루 목표 <b>수면시간</b> :{" "}
                  </p>
                  <p>
                    하루 목표 <b>운동시간</b> :{" "}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    color: "white",
                    justifyContent: "space-between",
                    marginLeft: "20px",
                    marginTop: "4px",
                    paddingTop: "6px",
                    width: "300px",
                    height: "148px",
                  }}
                >
                  {/*#EDEDED*/}

                  <input
                    type="text"
                    placeholder="목표 워라벨 비율을 입력해주세요"
                    style={{ backgroundColor: isRevising ? "#EDEDED": "white" ,fontWeight: "bolder" 
                    }}

                      disabled={isLocked} // 필드 잠금
                  ></input>
                  <input
                    type="text"
                    placeholder="목표 운동시간을 입력해주세요"
                    style={{ backgroundColor: isRevising ? "#EDEDED": "white" , fontWeight: "bolder" }}
                    disabled={isLocked} // 필드 잠금
                  ></input>
                  <input
                    type="text"
                    placeholder="목표 운동시간을 입력해주세요"
                    style={{ backgroundColor: isRevising ? "#EDEDED": "white" , fontWeight: "bolder" }}
                    disabled={isLocked} // 필드 잠금
                  ></input>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  marginLeft: "19px",
                }}
              >
                <p style={{ marginLeft: "3px" }}>그 외 세부 사항</p>
                <textarea
                  placeholder="그 외 세부 사항이 필요하다면 입력해주세요"
                  style={{
                    width: "663px",
                    height: "290px",
                    color: "black",
                    backgroundColor: isRevising ? "#EDEDED": "white",
                    fontSize: "18px",
                    resize: "none",
                    border: "none", // 기본 테두리 제거
                    borderRadius: "10px",
                    padding: "10px", // 여백 추가
                    boxSizing: "border-box", // 패딩을 포함한 전체 크기 설정
                    fontFamily: "Pretendard-Regular",
                  }}
                  disabled={isLocked} // 필드 잠금
                ></textarea>
              </div>
            </div>
        
            {/* <div
            style={{
              display: "flex",  
              flexDirection: "column",
              color: "#EDEDED", 
              justifyContent: "space-between",
              marginLeft: "20px",
              marginTop: "4px",
              paddingTop: "6px",
              width: "300px",
              height: "148px",
            }}
          ></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
