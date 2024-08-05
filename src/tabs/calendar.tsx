import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Button from '../components/button.tsx';
import Date from '../components/date.tsx';
import Nav from '../components/nav.tsx';
import BigCalendar from '../components/bigCalendar.tsx';
import PlanData from '../database/planData.tsx';
import '../App.css';

const events = PlanData();

export default function Calendar() {
    const today = new Date();
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [showAddPopup, setShowAddPopup] = useState(false);

    const handleDateSelect = (selectedDate: Date) => {
        setSelectedDate(selectedDate); // Update the selected date in the state
    };

    const formatDate = (selectedDate: Date) => {
        const year = selectedDate.getFullYear();
        const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
        const day = selectedDate.getDate().toString().padStart(2, '0');
        const yearMonth = `${year}년 ${month}월`;
        const yearMonthDay: Date = `${year}-${month}-${day}`;
        return { yearMonthDay, yearMonth, day };
    };

    const handleCancel = () => {
        if (window.confirm('정말 취소하시겠습니까?')) {
            window.location = '/calendar';
            setShowAddPopup(false);
        }
    };

    return (
        <div>
            <Nav type="calendar" />
            <div className="background">
                <div className="main_contents_div">
                    <Date />
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <div
                            style={{
                                width: '900px',
                                height: '606px',
                                backgroundColor: '#fff',
                                borderRadius: '20px',
                                overflow: 'auto',
                                border: '1px #ddd solid',
                            }}
                        >
                            <BigCalendar onDateSelect={handleDateSelect} />
                        </div>

                        <div
                            style={{
                                width: '320px',
                                height: '606px',
                                backgroundColor: '#fff',
                                borderRadius: '20px',
                                border: '1px #ddd solid',
                            }}
                        >
                            <div
                                style={{
                                    width: '280px',
                                    fontFamily: 'Pretendard-Regular',
                                    fontSize: '13px',
                                    margin: '0 auto',
                                    padding: '15px 0',
                                    textAlign: 'left',
                                    color: '#777',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <div>
                                    <span
                                        style={{
                                            fontFamily: 'Pretendard-ExtraBold',
                                            fontSize: '45px',
                                            color: '#4470F3',
                                        }}
                                    >
                                        {selectedDate ? formatDate(selectedDate).day : moment(today).format('DD')}
                                    </span>
                                    {selectedDate
                                        ? formatDate(selectedDate).yearMonth
                                        : moment(today).format('YYYY년 MM월')}
                                </div>
                                <div>
                                    <img
                                        src="../img/btn/edit_disabled.png"
                                        style={{
                                            width: '30px',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() => {
                                            setShowAddPopup(true);
                                        }}
                                    />
                                </div>
                            </div>
                            <hr
                                style={{
                                    margin: '0 auto',
                                    marginBottom: '15px',
                                    border: 'none',
                                    height: '1px',
                                    backgroundColor: '#C9D9FD',
                                }}
                            />
                            {showAddPopup ? (
                                <div
                                    style={{
                                        width: '320px',
                                        height: '220px',
                                        backgroundColor: '#eee',
                                        position: 'absolute',
                                        top: '133px',
                                        borderBottomRightRadius: '20px',
                                        borderBottomLeftRadius: '20px',
                                        boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '280px',
                                            height: '35px',
                                            margin: '12px auto',
                                            backgroundColor: '#fff',
                                            borderRadius: '10px',
                                        }}
                                    >
                                        <input
                                            type="text"
                                            placeholder="일정 내용을 입력하세요.(최대 12자)"
                                            style={{
                                                width:'200px',
                                                backgroundColor:'#fff',
                                                height: '10px',
                                                borderRadius:'5px',
                                            }}
                                        />
                                    </div>
                                    <div
                                        style={{
                                            width: '280px',
                                            height: '70px',
                                            margin: '12px auto',
                                            backgroundColor: '#fff',
                                            borderRadius: '10px',
                                            position: 'relative',
                                        }}
                                    >
                                        <hr
                                            style={{
                                                position: 'absolute', 
                                                top: '37%',
                                                left: '50%', 
                                                transform: 'translate(-50%, -50%)', 
                                                width: '220px',
                                                height: '0.5px',
                                                backgroundColor: '#CACACA',
                                                border: 'none', 
                                            }}
                                        />
                                        <div
                                            style={{
                                            position: 'absolute',
                                            top: 'calc(40% - 15px)', // hr의 중앙에서 15px 위쪽 위치
                                            left: '40px', // hr 기준으로 왼쪽에서 10px 떨어진 위치
                                            fontFamily: 'Pretendard',
                                            fontSize: '12px',
                                            fontStyle: 'normal',
                                            fontWeight: '500',
                                            lineHeight: 'normal',
                                            }}
                                        >
                                            시작
                                        </div>
                                        <input
                                            placeholder="00 : 00"
                                            type="date"
                                            style={{
                                            position: 'absolute',
                                            top: 'calc(37% - 27px)', // "시작" 텍스트 바로 오른쪽에 위치
                                            left: 'calc(50% - 13px)',
                                            width: '70px',
                                            height: '1px', // 높이를 20px로 조정
                                            borderRadius: '4px',
                                            margin: '5px 0 5px 15px',
                                            border: '1px solid #4470F3',
                                            fontSize: '12px',
                                            }}
                                        ></input>
                                        <div
                                            style={{
                                            position: 'absolute',
                                            top: 'calc(40% + 15px)', // hr의 중앙에서 15px 아래쪽 위치
                                            left: '40px', // hr 기준으로 왼쪽에서 10px 떨어진 위치
                                            fontFamily: 'Pretendard',
                                            fontSize: '12px',
                                            fontStyle: 'normal',
                                            fontWeight: '500',
                                            lineHeight: 'normal',
                                            }}
                                        >
                                            종료
                                        </div>
                                        <input
                                            placeholder="00 : 00"
                                            type="date"
                                            style={{
                                                position: 'absolute',
                                                top: 'calc(37% + 8px)', // "종료" 텍스트 바로 오른쪽에 위치
                                                left: 'calc(50% - 13px)',
                                                width: '70px',
                                                height: '1px',
                                                borderRadius: '4px',
                                                margin: '5px 0 5px 15px',
                                                border: '1px solid #4470F3',
                                                fontSize: '12px',
                                            }}
                                        ></input>
                                    </div>
                                    <div
                                        style={{
                                            width: '280px',
                                            height: '35px',
                                            margin: '12px auto',
                                            backgroundColor: '#fff',
                                            borderRadius: '10px',
                                            position: 'relative',
                                        }}
                                    >
                                        <div
                                            style={{
                                            position: 'absolute',
                                            transform: 'translateY(70%)',
                                            left: '40px', 
                                            fontFamily: 'Pretendard',
                                            fontSize: '12px',
                                            fontStyle: 'normal',
                                            fontWeight: '500',
                                            lineHeight: 'normal',
                                            }}
                                        >
                                            카테고리
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            width: '280px',
                                            margin: '0 auto',
                                            display: 'flex',
                                            justifyContent: 'right',
                                        }}
                                    >
                                        <span>
                                            <Button
                                                type="secondary"
                                                size="small"
                                                title="취소"
                                                onClick={() => {
                                                    handleCancel();
                                                }}
                                            />
                                        </span>
                                        <span style={{ marginLeft: '10px' }}>
                                            <Button
                                                type="primary"
                                                size="small"
                                                title="추가"
                                                onClick={() => {
                                                    window.location = '/calendar';
                                                }}
                                            />
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <></>
                            )}
                            <div style={{ width: '320px', height: '490px', overflow: 'auto' }}>
                                {/*일정이 없을 때*/}
                                {!selectedDate
                                    ? events.filter((event) => event.date === moment(today).format('YYYY-MM-DD'))
                                          .length === 0 && (
                                          <div
                                              style={{
                                                  width: '280px',
                                                  height: '490px',
                                                  margin: '0 auto',
                                                  backgroundColor: '#eee',
                                                  borderRadius: '20px',
                                              }}
                                          >
                                              <div
                                                  style={{
                                                      fontFamily: 'Pretendard-SemiBold',
                                                      fontSize: '18px',
                                                      paddingTop: '200px',
                                                  }}
                                              >
                                                  작성된 일정이 없습니다.
                                              </div>
                                              <div
                                                  style={{
                                                      fontFamily: 'Pretendard-Regular',
                                                      fontSize: '13px',
                                                      color: '#888',
                                                      marginTop: '8px',
                                                  }}
                                              >
                                                  <div>오른쪽 상단의 버튼을 클릭하면</div>
                                                  <div> 일정을 생성할 수 있습니다.</div>
                                              </div>
                                          </div>
                                      )
                                    : formatDate(selectedDate).yearMonthDay >= moment(today).format('YYYY-MM-DD')
                                    ? events.filter((event) => event.date === formatDate(selectedDate).yearMonthDay)
                                          .length === 0 && (
                                          <div
                                              style={{
                                                  width: '280px',
                                                  height: '490px',
                                                  margin: '0 auto',
                                                  backgroundColor: '#eee',
                                                  borderRadius: '20px',
                                              }}
                                          >
                                              <div
                                                  style={{
                                                      fontFamily: 'Pretendard-SemiBold',
                                                      fontSize: '18px',
                                                      paddingTop: '200px',
                                                  }}
                                              >
                                                  작성된 일정이 없습니다.
                                              </div>
                                              <div
                                                  style={{
                                                      fontFamily: 'Pretendard-Regular',
                                                      fontSize: '13px',
                                                      color: '#888',
                                                      marginTop: '5px',
                                                  }}
                                              >
                                                  <div>오른쪽 상단의 버튼을 클릭하면</div>
                                                  <div> 일정을 생성할 수 있습니다.</div>
                                              </div>
                                          </div>
                                      )
                                    : events.filter((event) => event.date === formatDate(selectedDate).yearMonthDay)
                                          .length === 0 && (
                                          <div
                                              style={{
                                                  width: '280px',
                                                  height: '490px',
                                                  margin: '0 auto',
                                                  backgroundColor: '#eee',
                                                  borderRadius: '20px',
                                              }}
                                          >
                                              <div
                                                  style={{
                                                      fontFamily: 'Pretendard-SemiBold',
                                                      fontSize: '18px',
                                                      paddingTop: '200px',
                                                  }}
                                              >
                                                  작성된 일정이 없습니다.
                                              </div>
                                          </div>
                                      )}
                                {/*일정이 있을 때*/}
                                {selectedDate
                                    ? events.map((event) =>
                                          // Use parentheses instead of curly braces for the ternary operator
                                          // Curly braces are used for block statements, which are not returned implicitly
                                          event.date === formatDate(selectedDate).yearMonthDay ? (
                                              <div
                                                  key={event.id}
                                                  style={{
                                                      width: '280px',
                                                      height: '80px',
                                                      border: '1px #ddd solid',
                                                      borderRadius: '20px',
                                                      margin: '0 auto',
                                                      marginBottom: '10px',
                                                      textAlign: 'left',
                                                      display: 'flex',
                                                      alignItems: 'center',
                                                  }}
                                              >
                                                  <div style={{ padding: '18px' }}>
                                                      <div
                                                          style={{
                                                              fontFamily: 'Pretendard-SemiBold',
                                                              fontSize: '18px',
                                                          }}
                                                      >
                                                          {event.title}
                                                      </div>
                                                      <div
                                                          style={{
                                                              fontFamily: 'Pretendard-Regular',
                                                              fontSize: '12px',
                                                              color: '#888',
                                                          }}
                                                      >
                                                          {event.date} ~ {event.end}
                                                      </div>
                                                  </div>
                                              </div>
                                          ) : (
                                              <></>
                                          )
                                      )
                                    : events.map((event) =>
                                          // Use parentheses instead of curly braces for the ternary operator
                                          // Curly braces are used for block statements, which are not returned implicitly
                                          event.date === moment(today).format('YYYY-MM-DD') ? (
                                              <div
                                                  key={event.id}
                                                  style={{
                                                      width: '280px',
                                                      height: '80px',
                                                      border: '1px #ddd solid',
                                                      borderRadius: '20px',
                                                      margin: '0 auto',
                                                      marginBottom: '10px',
                                                      textAlign: 'left',
                                                      display: 'flex',
                                                      alignItems: 'center',
                                                  }}
                                              >
                                                  <div style={{ padding: '18px' }}>
                                                      <div
                                                          style={{
                                                              fontFamily: 'Pretendard-SemiBold',
                                                              fontSize: '18px',
                                                          }}
                                                      >
                                                          {event.title}
                                                      </div>
                                                      <div
                                                          style={{
                                                              fontFamily: 'Pretendard-Regular',
                                                              fontSize: '12px',
                                                              color: '#888',
                                                              marginTop: '5px',
                                                          }}
                                                      >
                                                          {event.date} ~ {event.end}
                                                      </div>
                                                  </div>
                                              </div>
                                          ) : (
                                              <></>
                                          )
                                      )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
