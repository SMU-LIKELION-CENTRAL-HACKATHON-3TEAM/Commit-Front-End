import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Button from '../components/button.tsx';
import TimeTableDiv from '../components/timeTableDiv.tsx';
import '../App.css';

export default function FeedbackPopup({ onClose }) {
    return (
        <div className="popup-background">
            <div style={{ width: '100%', marginLeft: '170px', marginRight: '60px' }}>
                <div className="popup-content">
                    <button className="close-button" onClick={onClose}>
                        &times;
                    </button>

                    <div style={{ paddingTop: '40px', marginBottom: '20px' }}>
                        <div style={{ fontFamily: 'Pretendard-SemiBold', fontSize: '18px' }}>
                            오늘의 기록을 기반으로 한 내일의 일정 추천
                        </div>
                        <div
                            style={{
                                fontFamily: 'Pretendard-ExtraBold',
                                fontSize: '32px',
                                letterSpacing: '10px',
                                color: '#0D2259',
                            }}
                        >
                            OOO님 <span style={{ color: '#4470F3' }}>맞춤 AI 피드백</span>
                        </div>
                    </div>

                    <div
                        style={{
                            width: '1200px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            margin: '0 auto',
                        }}
                    >
                        <div
                            style={{
                                width: '350px',
                                height: '465px',
                                backgroundColor: '#E9EFFD',
                                borderRadius: '20px',
                                border: '1px #ddd solid',
                            }}
                        >
                            <div
                                style={{
                                    fontFamily: 'Pretendard-SemiBold',
                                    fontSize: '20px',
                                    margin: '10px auto',
                                }}
                            >
                                오늘의 타임 테이블
                            </div>
                            <div
                                style={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '465px',
                                    backgroundColor: '#fff',
                                    borderRadius: '20px',
                                    boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
                                }}
                            >
                                <div
                                    style={{
                                        width: '310px',
                                        fontFamily: 'Pretendard-SemiBold',
                                        fontSize: '18px',
                                        color: '#0D2259',
                                        margin: '0 auto',
                                        padding: '25px 0',
                                        textAlign: 'left',
                                    }}
                                >
                                    타임 테이블
                                </div>
                                <div
                                    style={{
                                        width: '350px',
                                        height: '375px',
                                        overflow: 'auto',
                                        margin: '0 auto',
                                    }}
                                >
                                    <TimeTableDiv type="before" date={moment().format('YYYY-MM-DD')} />
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                width: '800px',
                                height: '510px',
                                borderRadius: '20px',
                                position: 'relative',
                                textAlign: 'center',
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <div
                                style={{
                                    width: '350px',
                                    height: '465px',
                                    backgroundColor: '#eee',
                                    borderRadius: '20px',
                                    zIndex: '2',
                                    border: '1px #ddd solid',
                                }}
                            >
                                <div
                                    style={{
                                        fontFamily: 'Pretendard-SemiBold',
                                        fontSize: '20px',
                                        margin: '10px auto',
                                    }}
                                >
                                    사용자의 하루를 분석한 결과
                                </div>
                                <div
                                    style={{
                                        width: '100%',
                                        height: '465px',
                                        backgroundColor: '#fff',
                                        borderRadius: '20px',
                                        boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '310px',
                                            height: '430px',
                                            margin: '0 auto',
                                            textAlign: 'left',
                                            fontFamily: 'Pretendard-Regular',
                                            fontSize: '14px',
                                            overflow: 'auto',
                                        }}
                                    >
                                        <div style={{ padding: '10px 10px 5px' }}>
                                            <span style={{ fontFamily: 'Pretendard-SemiBold' }}>• 워라밸</span>
                                            <br />: 사용자는 주중 일과 생활의 균형을 잘 맞추고 있으며, 평균적인 워라밸
                                            비율이 5.7 : 4.3으로 매우 안정적입니다.
                                        </div>
                                        <div style={{ padding: '10px 10px 5px' }}>
                                            <span style={{ fontFamily: 'Pretendard-SemiBold' }}>• 수면</span>
                                            <br />: 수면 시간은 7시간으로 적절합니다. 더 나은 건강을 위해 8시간으로
                                            늘리는 것을 고려해보세요.
                                        </div>
                                        <div style={{ padding: '10px 10px 5px' }}>
                                            <span style={{ fontFamily: 'Pretendard-SemiBold' }}>• 운동</span>
                                            <br />: 아침에 40분 동안 조깅을 하고 있습니다. 꾸준한 운동 습관을 유지하되,
                                            주 1회 휴식을 추천합니다.
                                        </div>
                                        <div style={{ padding: '10px 10px 5px' }}>
                                            <span style={{ fontFamily: 'Pretendard-SemiBold' }}>• 식사</span>
                                            <br />: 사용자는 주중 일과 생활의 균형을 잘 맞추고 있으며, 평균적인 워라밸
                                            비율이 5.7 : 4.3으로 매우 안정적입니다.
                                        </div>
                                        <div style={{ padding: '10px 10px 5px' }}>
                                            <span style={{ fontFamily: 'Pretendard-SemiBold' }}>• 여가생활</span>
                                            <br />: 사용자는 주중 일과 생활의 균형을 잘 맞추고 있으며, 평균적인 워라밸
                                            비율이 5.7 : 4.3으로 매우 안정적입니다.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img
                                src="../img/feedback_backimg.png"
                                style={{
                                    width: '200px',
                                    marginTop: '70px',
                                    paddingLeft: '300px',
                                    position: 'absolute',
                                }}
                            />
                            <div style={{ width: '350px', zIndex: '2', position: 'relative' }}>
                                <div
                                    style={{
                                        width: '100%',
                                        height: '410px',
                                        backgroundColor: '#4470F3',
                                        borderRadius: '20px',
                                        border: '1px #ddd solid',
                                    }}
                                >
                                    <div
                                        style={{
                                            fontFamily: 'Pretendard-SemiBold',
                                            fontSize: '20px',
                                            color: '#fff',
                                            margin: '0px auto',
                                            padding: '10px 0',
                                        }}
                                    >
                                        AI 추천 내일의 고정테이블
                                    </div>
                                    <div
                                        style={{
                                            position: 'relative',
                                            width: '100%',
                                            height: '410px',
                                            backgroundColor: '#fff',
                                            borderRadius: '20px',
                                            boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: '350px',
                                                height: '370px',
                                                overflow: 'auto',
                                                margin: '0 auto',
                                            }}
                                        >
                                            <TimeTableDiv type="before" />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginTop: '60px', display: 'flex', justifyContent: 'space-between' }}>
                                    <Button type="secondary" size="sub" title="적용 안함" onClick={onClose} />
                                    <Button
                                        type="primary"
                                        size="medium"
                                        title={
                                            <>
                                                추천 일정 적용&nbsp;&nbsp;
                                                <img
                                                    src="../img/btn/check_enabled.png"
                                                    style={{ width: '18px', verticalAlign: 'middle' }}
                                                />
                                            </>
                                        }
                                        onClick={onClose}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
