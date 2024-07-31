import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import Button from "../components/button.tsx";
import Date from "../components/date.tsx";
import Nav from "../components/nav.tsx";
import SmallCalendar from "../components/smallCalendar.tsx";
import TimeTableDiv from "../components/timeTableDiv.tsx";
import PlanData from "../database/planData.tsx";
import "../App.css";

const events = PlanData();

function getClosestEvents(events) {
  const today = moment(); // Get today's date
  const closestEvents = events.filter(
    (event) =>
      moment(event.date) >= today || moment(event.date).isSame(today, "day")
  ); // Filter future events
  closestEvents.sort((a, b) => moment(a.date) - moment(b.date)); // Sort events by date
  return closestEvents.slice(0, 3); // Get the closest 3 events
}

export default function Main() {
  const closestEvents = getClosestEvents(events);

  return (
    <div className="background">
      <Nav type="main" />

      <div className="main_contents_div">
        <Date />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ width: "510px" }}>
            <div
              className="progress_bar"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
                padding: "5px 5px",
                backgroundColor: "#fff",
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                borderRadius: "20px",
              }}
            >
              <div
                style={{
                  width: "88%",
                  height: "25px",
                  backgroundColor: "#eee",
                  borderRadius: "15px",
                }}
              >
                <div
                  style={{
                    width: "40%",
                    height: "25px",
                    background:
                      "linear-gradient(90deg, #4470F3 0%, #02A9A1 100%)",
                    borderRadius: 100,
                    borderRadius: "15px",
                    animation: "huerotator 6s infinite alternate",
                  }}
                ></div>
              </div>
              <div
                style={{
                  fontFamily: "Pretendard-ExtraBold",
                  fontSize: "14px",
                  color: "#0D2259",
                  width: "10%",
                }}
              >
                <span>40</span>%
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "550px",
                backgroundColor: "#fff",
                borderRadius: "20px",
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div
                style={{
                  width: "470px",
                  margin: "0 auto",
                  fontSize: "20px",
                  fontFamily: "Pretendard-SemiBold",
                  color: "#0D2259",
                  padding: "20px 0",
                  textAlign: "left",
                }}
              >
                오늘의 일정
              </div>
              <div
                style={{
                  width: "470px",
                  height: "470px",
                  margin: "0 auto",
                  backgroundColor: "#eee",
                  borderRadius: "20px",
                  overflow: "auto",
                }}
              ></div>
            </div>
          </div>
        {/*세빈수정*/}
          <div >
            <div
              style={{
                width: "191px",
                height: "78px",
                backgroundColor: "#B0B0B0",
                marginLeft: "280px",
                borderBottomRightRadius: "10px",
                borderTopRightRadius: "10px",
                borderTopLeftRadius: "10px",
                marginBottom: "9px",
                position: "absolute",
                left: "780px",
                top:'55px',
                zIndex: "10",
                marginTop:'20px',
                boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
                display:'flex',
                alignItems:'center',
              }}
            >
               

              <div
                style={{
                  width: "160px",
                  height: "78px",
                  backgroundColor: "white",
                  borderTopLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingBottom: "1px",
                    paddingTop: "4px",
                  }}
                >
                  시작
                  <input
                    placeholder="00 : 00"
                    type="datetime"
                    style={{
                      width: "55px",
                      marginTop: "1px",
                      marginBottom: "3px",
                      borderRadius: "4px",
                      marginLeft: "15px",
                      height: "7px",
                      paddingLeft: "11px",
                      paddingTop: "9px",
                      border: "1px solid #4470F3",
                    }}
                  ></input>
                </div>
                <hr style={{ marginBottom: "0px", marginTop: "0px",backgroundColor:'#CACACA',border:'none',height:'0.5px',width:'155px' }}></hr>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingBottom: "1px",
                    paddingTop: "3px",
                  }}
                >
                  종료
                  <input
                    placeholder="00 : 00"
                    type="datetime"
                    style={{
                      width: "55px",
                      marginTop: "1px",
                      marginBottom: "3px",
                      borderRadius: "4px",
                      marginLeft: "15px",
                      height: "7px",
                      paddingLeft: "11px",
                      paddingTop: "9px",
                      border: "1px solid #4470F3",
                    
                    }}
                  ></input>
                </div>
              </div>
              <img src="../img/btn/nextSmall.png" style={{ width: '11px',height:'15px', cursor: 'pointer',paddingTop:'30px',paddingBottom:'30px',paddingLeft:'10px',paddingRight:'10px' }} />
            </div>
          </div>
            {/*세빈수정*/}
          <div style={{ width: "350px" }}>
            <div
              style={{
                width: "100%",
                height: "540px",
                backgroundColor: "#fff",
                borderRadius: "20px",
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div
                style={{
                  width: "310px",
                  fontSize: "20px",
                  fontFamily: "Pretendard-SemiBold",
                  color: "#0D2259",
                  margin: "0 auto",
                  padding: "25px 0",
                  textAlign: "left",
                }}
              >
                타임 테이블
              </div>

              <div
                style={{
                  width: "350px",
                  height: "450px",
                  overflow: "auto",
                  margin: "0 auto",
                }}
              >
                <TimeTableDiv />
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <Button
                type="primary"
                size="large"
                title={
                  <>
                    오늘 하루 마무리하러 가기&emsp;&emsp;
                    <img
                      src="../img/btn/check_enabled.png"
                      style={{ width: "22px", verticalAlign: "middle" }}
                    />
                  </>
                }
                onClick={() => {
                  window.location = "/plan";
                }}
              />
            </div>
          </div>

          <div
            style={{
              width: "320px",
              background: "#fff",
              borderRadius: "20px",
              boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "320px",
                borderRadius: "20px",
                marginBottom: "5px",
                overflow: "auto",
              }}
            >
              <SmallCalendar />
            </div>
            <hr
              style={{
                width: "280px",
                margin: "0 auto",
                border: "none",
                height: "1px",
                backgroundColor: "#eee",
              }}
            />
            <div>
              <div
                style={{
                  width: "280px",
                  fontFamily: "Pretendard-SemiBold",
                  fontSize: "20px",
                  color: "#0D2259",
                  margin: "0 auto",
                  padding: "15px 0",
                  textAlign: "left",
                }}
              >
                앞으로의 주요 일정
              </div>
              <div
                style={{
                  width: "280px",
                  height: "210px",
                  margin: "0 auto",
                }}
              >
                {closestEvents.length > 0 ? (
                  closestEvents.map((event) => (
                    <div
                      key={event.id}
                      style={{
                        width: "260px",
                        height: "40px",
                        fontFamily: "Pretendard-SemiBold",
                        fontSize: "16px",
                        color: "#0D2259",
                        border: "1px #eee solid",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "left",
                        padding: "10px",
                        marginBottom: "10px",
                      }}
                    >
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          fontFamily: "Pretendard-SemiBold",
                          fontSize: "16px",
                          color: "#0D2259",
                          backgroundColor: "#C9D9FD",
                          borderRadius: "10px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginRight: "20px",
                        }}
                      >
                        {moment(event.date).format("D")}
                      </div>
                      {event.title}
                    </div>
                  ))
                ) : (
                  <div
                    style={{
                      width: "260px",
                      height: "40px",
                      fontFamily: "Pretendard-SemiBold",
                      fontSize: "16px",
                      color: "#0D2259",
                      border: "1px #eee solid",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "left",
                      padding: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    예정된 일정이 없습니다.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
